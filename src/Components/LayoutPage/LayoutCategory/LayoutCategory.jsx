// import React from 'react'
// import CategoryProducts from "../../HomeProducts/Components/CategoryProducts"

// const LayoutCategory = () => {
//   return (
//     <div>
//       <CategoryProducts/>
//     </div>
//   )
// }

// export default LayoutCategory


import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useNavbarContext } from "../../NavbarContext";
import Notification from "../../../Components/Notification"; // Import Notification component

import other from "../../../assets/compare1_Icon.png";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import Expicon from "../../../assets/Expicon.png";
import search from "../../../assets/search1.png";
import nature from "../../../assets/img1.png";
import { useSelector } from "react-redux";
import { addCartApi } from "../../../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";

function LayoutCategory({
  topMargin,
  addCart,
  wishList,
  quantities,
  setQuantities,
}) {
  const navigate = useNavigate();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [showMore, setShowMore] = useState({});
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const productCriteria = useSelector((state) => state.product.productsByCriteria)

  console.log("cart--->", cart)
  const [wishlistProductIDs, setwishlistProductIDs] = useState([]);
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null;
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setwishlistProductIDs(wishlist.map((wishItem) => wishItem.product.productID));
    }
  }, [wishlist]);



  const products = useSelector((state) => state.product.Products);
    const [productList, setproductList] = useState(products);
  //   console.log("layoutproduct-->",productList)
  useEffect(() => {
    if (products) {
      
      const updatedProducts = products.map((product) => ({
        ...product,
        CartQuantity: 1, // Set initial quantity to 1 for all products
      }));
      setproductList(updatedProducts);
    }
  }, [products]);


  const handleQuantityChange = (index, newQuantity) => {
    // if (newQuantity) {
    const quantity = Math.max(1, newQuantity);
    setproductList((prev) => {
      const updatedList = [...prev];
    
        updatedList[index] = {
          ...updatedList[index],
          CartQuantity: quantity,
        };
      return updatedList;
    });
    // }
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
      setNotification({ show: true, message: "Item Added To Cart Successfully!" });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.error("Error adding product to cart:", error);

    }
  };
  const handleClick = async (productID) => {
    if (wishlistProductIDs.includes(productID)) {
      setwishlistProductIDs(
        wishlistProductIDs.filter((id) => id !== productID)
      );
      await removeFromWishlistApi(getWishlistIdByProductID(productID));
    } else {
      setwishlistProductIDs([...wishlistProductIDs, productID]);
      const wishListData = {
        wishListId: "0",
        productId: productID,
        customerId: user.customerId,
        isActive: 1,
      };
      await addToWishlistApi(wishListData);
    }
  };




  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  //   const totalPages = Math.ceil(productList.length / itemsPerPage);

  //   const handleNextPage = () => {
  //     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  //   };

  //   const handlePreviousPage = () => {
  //     setCurrentPage((prev) => Math.max(prev - 1, 1));
  //   };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    border: "1px solid gray",
    borderRadius: "5px",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const toggleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleProductDetails = (productID, product) => {
    navigate(`/detailspage/${productID}`);
  };



  //   const [filteredProducts, setFilteredProducts] = useState(productCriteria); // Products filtered by API
  // const [loading, setLoading] = useState(false); // Loader during API call
  // const [term, setTerm] = useState(""); // Search term

  // // Ensure productCriteria updates filteredProducts when it changes
  // useEffect(() => {
  //   console.log("productCriteria updated:", productCriteria); // Check if productCriteria changes
  //   setFilteredProducts(productCriteria); // Reset to initial products
  // }, [productCriteria]);


  // useEffect(() => {
  //   console.log("useEffect: term changed to", term); // Check if term is updated correctly

  //   // if (term) {
  //   console.log("Searching for products with term:", term);
  //   searchProducts(term, productCriteria);

  // }, [term]);

  // const searchProducts = async (searchTerm, productCriteria) => {
  //   setLoading(true); // Start loading

  //   try {
  //     const productCategoryId = productCriteria[0]?.productCategory?.productCategoryId;

  //     let productName
  //     if (term) {
  //       productName = {
  //         productCategoryId: productCategoryId,
  //         productName: searchTerm,
  //       };
  //     }
  //     else {
  //       productName = {
  //         productCategoryId: productCategoryId,
  //       }
  //     }
  //     console.log("Calling API with searchTerm:", searchTerm); // Debugging
  //     const response = await fetchCriteriaProductsApi(productName);
  //     console.log("API response:", response); // Check response

  //     setFilteredProducts(response.result); // Update products
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };




  return (
    <div className="w-[95%] mt-4 ml-4 h-full overflow-y-scroll">
      {notification.show && <Notification show={notification.show} message={notification.message} />}

      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-blue-900">{productCriteria[0]?.productCategory?.categoryName}</h1>
     
        <div className="flex gap-1">
            <select className="bg-white h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
              <option>Filter Products</option>
             
              <option>Product  Ascending (A-Z)</option>
              <option>Product  Decending (Z-A)</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>
      </div>



      <div className="w-full mt-5">
        <div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-between">
              {productList.length > 0 ? (
                productCriteria.map((product, index) => (
                  <div
                    key={index}
                    className="flex p-4 border w-full justify-around shadow-lg rounded-md mb-4"
                  >
                    <div className="flex flex-col mx-2">
                      <img
                        src={product.mainImageUrl}
                        className="w-36 p-2 hover:cursor-pointer rounded-lg h-28 bg-slate-200"
                        alt="Product"
                        onClick={() =>
                          handleProductDetails(product.productID, product)
                        }
                      />
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Item Details</p>
                      <div className="mt-2">
                        <p className="font-semibold">{product.productName}</p>

                        <p className="text-xs mt-1 w-60">
                          {showMore[index]
                            ? product.aboutTheProduct
                            : `${product.aboutTheProduct.slice(0, 50)}...`}
                          {product.aboutTheProduct.length > 50 && (
                            <button
                              className="text-blue-500 ml-1"
                              onClick={() => toggleShowMore(index)}
                            >
                              {showMore[index] ? "See Less" : " More details"}
                            </button>
                          )}
                        </p>
                        <div className="flex w-full mt-1 gap-1">
                          <img src={Expicon} className="w-6 h-6" />
                          <div className="flex flex-col">
                            <p>Exp.Date :</p>
                            <p className="font-semibold">
                              {/* {product.expiryDate} */}
                              {new Date(product.expiryDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                              }).replace(/\//g, '-')} 
                              
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Package Details</p>
                      <div className="mt-2">
                        <p className="text-red-500 font-semibold">
                          {product.package}
                        </p>
                        <p className="text-base mt-1">
                          {product.packCondition}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Unit Price</p>
                      <div className="mt-2">
                        <p className="font-semibold">${product.unitPrice?.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Quantity</p>
                      {/* <div className="mt-2 flex">
                        <input
                          type="number"
                          disabled={
                            cart.some(
                              (item) =>
                                item.product.productID == product.productID
                            ) === 1
                          }
                          value={product.CartQuantity
                            // cart.some(
                            //     (item) =>
                            //         item.product.productID === product.productID
                            //   )
                            //     ? cart.find(
                            //         (item) =>
                            //             item.product.productID === product.productID
                            //       ).quantity
                            //       : product.CartQuantity
                              }
                          onChange={(e) =>
                            handleQuantityChange(
                              index,
                              parseInt(e.target.value)
                            )
                          }
                          className="w-16 border rounded-md text-center"
                          min="1"
                        />
                      </div> */}

                      <div className="mt-2 flex">
                        <input
                          type="number"
                          disabled={
                            cart.some(
                              (item) =>
                                item.product.productID == product.productID
                            ) === 1
                          }
                          value={product.CartQuantity
                            // cart.some(
                            //     (item) =>
                            //         item.product.productID === product.productID
                            //   )
                            //     ? cart.find(
                            //         (item) =>
                            //             item.product.productID === product.productID
                            //       ).quantity
                            //       : product.CartQuantity
                          }
                          onChange={(e) =>
                            handleQuantityChange(
                              index,
                              parseInt(e.target.value)
                            )
                          }
                          className="w-16 border rounded-md text-center"
                          min="1"
                        />
                      </div>
                    </div>


                    {/* Wishlist */}
                    <div className="flex flex-col items-center justify-between">
                      <div className="mt-2">
                        <img
                          src={
                            wishlistProductIDs.includes(product.productID)
                              ? filledHeart
                              : emptyHeart
                          }
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => handleClick(product.productID)}
                          alt="Wishlist Icon"
                        />
                      </div>

                      {/* Add to Cart */}
                      {/* {cart.some(
                        (item) => item.product.productID == product.productID
                      ) == 0 ? ( */}
                      <div
                        onClick={() =>
                          handleCart(product.productID, product.CartQuantity)
                        }
                        className="flex text-white h-[40px] cursor-pointer px-2 rounded-lg bg-blue-900 mx-3 justify-center items-center"
                      >
                        <div className="mr-1">
                          <img
                            src={addcart}
                            className="w-6 h-6 cursor-pointer"
                            alt="Add to Cart Icon"
                          />
                        </div>
                        <p className="font-semibold">{"Add to Cart"}</p>
                      </div>
                      {/* ) : ( */}
                      {/* <div className="flex text-white cursor-pointer h-[40px] px-2 rounded-lg bg-sky-600 mx-3 justify-center items-center">
                          <div className="mr-1">
                            <img
                              src={addcart}
                              className="w-6 h-6 "
                              alt="Add to Cart Icon"
                            />
                          </div>
                          <p className="font-semibold">{"Added Cart"}</p>
                        </div> */}
                      {/* )} */}
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>

            {/* <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutCategory;
