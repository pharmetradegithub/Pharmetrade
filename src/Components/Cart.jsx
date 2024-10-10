import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import searchimg from "../assets/search1.png";
import deleteicon from "../assets/trash.png";
import { useDispatch, useSelector } from "react-redux";
import { addCartApi, removeItemFromCartApi } from "../Api/CartApi";
import { fetchOrderPlace } from "../Api/OrderApi";

import {
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import wrong from "../assets/Icons/wrongred.png";

function Cart() {
  const user = useSelector((state) => state.user.user);
  const cartList = useSelector((state) => state.cart.cart);
  const [cartItems, setcartItems] = useState(cartList);
  // const { cartItems, setCartItems } = useContext(AppContext);
  const [quantities, setQuantities] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartList) setcartItems(cartList);
  }, [cartList]);

  const handleDeleteClick = (index) => {
    setSelectedItemIndex(index);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedItemIndex(null);
  };

  const handleremove = async () => {
    try {
      const cartId = cartItems[selectedItemIndex].cartId;
      await removeItemFromCartApi(cartId);
      handleDialogClose(); // Close dialog after deleting
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const handleCart = async (productID, Quantity) => {
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: Quantity,
      isActive: 1,
    };

    try {
      await addCartApi(cartData);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity) {
      setcartItems((prev) => {
        const updatedList = [...prev];
        updatedList[index] = {
          ...updatedList[index],
          updateQuantity: newQuantity,
        };
        return updatedList;
      });
      handleCart(
        cartItems[index].product.productID,
        newQuantity - cartItems[index].quantity
      );
    }
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  const total = cartItems.reduce((acc, item) => {
    const price =
      item.product?.salePrice > 0
        ? item.product.salePrice.toFixed(2)
        : item.product.unitPrice?.toFixed(2);

    return acc + calculateSubtotal(price, item.quantity);
  }, 0);

  const dispatch = useDispatch();
  const handleProceed = () => {
    const currentDate = new Date();
    const payload = {
      orderId: "",
      customerId: user.customerId,
      totalAmount: total?.toFixed(2),
      orderDate: currentDate.toISOString(),
      shippingMethodId: 1,
      orderStatusId: 1,
      trackingNumber: "",
      products: cartItems.map((items) => {
        return {
          productId: items.product.productID,
          quantity: items.quantity,
          pricePerProduct: items.product.salePrice,
          sellerId: user.customerId,
          imageUrl: items.product.imageUrl,
        };
      }),
    };
    dispatch(fetchOrderPlace(payload));
    navigate(`/checkout?total=${total?.toFixed(2)}`);
  };

  const handlemove = () => {
    navigate("/detailspage/0");
  };

  return (
    <div className="flex flex-col justify-center font-sans bg-gray-200 p-8">
      <p className="text-lg md:text-2xl mb-2 text-blue-900 flex font-semibold">
        PharmEtrade {`>`} Cart
      </p>
      <div className="w-full bg-white rounded-lg shadow-lg p-5">
        <div className="flex justify-between">
          <h2 className="text-xl md:text-2xl m-5 text-blue-900 font-semibold">
            Cart
          </h2>
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full lg:w-2/3">
              <table className="min-w-full border shadow-lg rounded-lg">
                <thead>
                  <tr className="border-b">
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Image
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Product Name
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Price
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Quantity
                    </th>
                    <th className="px-2 md:px-5 -mr-2 py-2 md:py-3 text-right font-semibold text-blue-950 tracking-wider">
                      Subtotal
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="px-2 md:px-3 py-2 ">
                        <Link to={`/detailspage/${item.product.productID}`}>
                          <img
                            className="h-16 w-16 rounded-lg"
                            src={item.product.imageUrl}
                            alt={item.product.id}
                          />
                        </Link>
                      </td>
                      <td className="px-2 md:px-4 py-3 p-2 flex flex-wrap">
                        {item.product.productName}
                      </td>
                      <td className=" md:px-4 py-3 text-center ">
                        {/* ${item.product.unitPrice?.toFixed(2)} */}$
                        {item.product?.salePrice > 0
                          ? item.product.salePrice.toFixed(2)
                          : item.product.unitPrice?.toFixed(2)}
                      </td>
                      {/* <td className="px-2 flex gap-2 md:px-4 py-3 ">
                        <input
                          type="number"
                          value={item.updateQuantity}
                          onChange={(e) =>
                            handleQuantityChange(index, Number(e.target.value))
                          }
                          className="text-xl border rounded-lg p-1 w-16"
                          min="1"
                        />
                      </td> */}
                      <td>
                        <div className="flex flex-col mx-3">
                          {/* <p className="font-semibold">Quantity</p> */}

                          <div className="mt-2 flex items-center">
                            <button
                              className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700 font-bold"
                              onClick={() =>
                                handleQuantityChange(index, item.updateQuantity-1)

                               
                              }
                             
                            >
                              -
                            </button>

                            <input
                              type="text"
                              value={item.updateQuantity}
                              disabled={true}
                              className="w-12 mx-2 border font-bold rounded-md text-center bg-white"
                            />

                            <button
                              className="px-2 py-1 border rounded-md  bg-gray-200 text-gray-700 font-bold"
                              onClick={() =>
                                handleQuantityChange(index, item.updateQuantity+1)

                              }
                              
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>

                      <td className="px-2 md:px-4 text-right py-3 ">
                        <strong>
                          $
                          {calculateSubtotal(
                            item.product?.salePrice > 0
                              ? item.product.salePrice.toFixed(2)
                              : item.product.unitPrice?.toFixed(2),
                            item.quantity
                          )?.toFixed(2)}
                        </strong>
                      </td>
                      <td className="px-2 md:px-4 py-8 whitespace-nowrap flex items-center justify-center">
                        <button
                          className="text-red-600 w-4 h-3"
                          // onClick={() => handleremove(index)}
                          onClick={() => handleDeleteClick(index)}
                        >
                          <Tooltip placement="top" title="Delete">
                            <img
                              src={deleteicon}
                              className="w-6"
                              alt="delete-icon"
                            />
                          </Tooltip>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex gap-4">
                <input
                  placeholder="Coupon Code"
                  className="px-4 py-2 w-36 bg-gray-100 text-lg border rounded-full"
                />
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
                    Apply Coupon
                  </button>
                  {/* <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
                    Update Cart
                  </button> */}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <div className="bg-white border rounded-lg shadow-lg p-5">
                <h2 className="text-xl md:text-2xl mb-4  text-blue-900 text-center font-semibold">
                  Cart Totals
                </h2>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Subtotal</td>
                      <td className="px-4 py-2 text-right">
                        ${total?.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Total</td>
                      <td className="px-4 py-2 text-right">
                        ${total?.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="w-full mt-4 px-4 py-2 font-bold text-white text-lg bg-blue-900 rounded-full"
                  onClick={handleProceed}
                >
                  Proceed to checkout
                </button>
                <button className="w-full mt-2 px-4 py-2 font-bold text-black text-lg bg-slate-300 rounded-full">
                  <Link to="/allProducts">Continue Shopping</Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center m-8">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is currently empty.
            </h2>

            <img src={searchimg} className="w-24 h-24 mt-4" alt="empty-cart" />
            <button className="bg-blue-900 text-white px-4 py-2 mt-6 rounded-lg">
              <Link to="/allProducts">Continue Shopping</Link>
            </button>
          </div>
        )}
      </div>
      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <div className="flex  justify-end p-2">
          <img onClick={handleDialogClose} src={wrong} className="w-5 h-5 cursor-pointer flex justify-end" />
        </div>
        <DialogContent>
          Are you sure you want to delete this item from your cart?
        </DialogContent>
        <div>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={handleDialogClose}
              sx={{
                color: "white",
                backgroundColor: "red",
                "&:hover": { backgroundColor: "#cc0000" },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleremove}
              sx={{
                color: "white",
                backgroundColor: "green",
                "&:hover": { backgroundColor: "#006400" },
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default Cart;
