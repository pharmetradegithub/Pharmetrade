import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import other from "../../../assets/CompareNav2.png";
import { addCartApi } from "../../../Api/CartApi";
import { useSelector } from "react-redux";
import Notification from "../../../Components/Notification"; // Import Notification component

import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";

const ProductSection = ({ products, heading, path, addCart, wishList }) => {
  const [rating, setRating] = useState(0);
  const [notification, setNotification] = useState({
    show: false,
    message: "one",
  });
  const user = useSelector((state) => state.user.user);
  // const wishlist = useSelector((state)=>state.wishlist.wishlist);
  // const [wishlistProductIDs, setWishlistProductIDs] = useState([]);
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find((item) => item.product.productID === productID);
  //   return wishlistItem ? wishlistItem.wishListId : null;
  // };
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [wishlistProductIDs, setwishlistProductIDs] = useState([]);
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find(
      (item) => item.product.productID === productID
    );
    return wishlistItem ? wishlistItem.wishListId : null;
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setwishlistProductIDs(
        wishlist.map((wishItem) => wishItem.product.productID)
      );
    }
  }, [wishlist]);

  const totalStars = 5;
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (Array.isArray(wishlist)) {
  //     setWishlistProductIDs(wishlist.map((wishItem) => wishItem.product.productID));
  //   }
  // }, [wishlist]);
  const handleCart = async (productID) => {
    if (user == null) {
      navigate("/login");
      return;
    }
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: 1,
      isActive: 1,
    };
    // try {
    //   await addCartApi(cartData);

    // } catch (error) {
    //   console.error("Error adding product to cart:", error);
    // }
    try {
      await addCartApi(cartData);
      setNotification({
        show: true,
        message: "Item Added To Cart Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  const handleClick = async (productID) => {
    if (user == null) {
      navigate("/login");
      return;
    }
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

  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
    >
      {filled ? "★" : "☆"}
    </span>
  );
  const handleProductCategory = async () => {
    let Criteria = {
      deals: null,
      brands: null,
      generics: null,
      discount: 0,
      expiring: 0,
      wholeSeller: null,
      pharmacyItems: null,
      prescriptionDrugs: null,
      otcProducts: null,
      vawdSeller: null,
      topSellingProducts: null,
      buyAgain: null,
    };
    if (heading === "Rx Items") {
      await fetchCriteriaProductsApi(Criteria, "Prescription Drugs");
      navigate(`/allProducts/RxProducts`);
    } else {
      await fetchCriteriaProductsApi(Criteria, "OTC Products");
      navigate(`/allProducts/OtcProducts`);
    }
  };
  return (
    <div className="bg-white w-full p-4">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <h1 className="text-2xl font-bold text-text-blue">{heading}</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-3 grid-rows-1 gap-0  p-2">
          {products.map((item, index) => (
            <div
              key={item.id}
              className="snap-center border rounded-sm bg-white shrink-0 m-3"
            >
              <div className="relative rounded-t-sm bg-slate-100 m-2">
                <img
                  onClick={(e) => {
                    // e.stopPropagation(); // Prevent event from bubbling to parent
                    handleClick(item.productID);
                  }}
                  src={
                    wishlistProductIDs.includes(item.productID)
                      ? filledHeart
                      : emptyHeart
                  }
                  className="absolute h-6 w-6  right-1 p-1 cursor-pointer"
                  alt="Favorite Icon"
                />
                <img
                  src={item.productGallery.imageUrl} // Assuming item.img contains image URL
                  className="h-40 cursor-pointer w-40 object-contain rounded-lg"
                  onClick={() => navigate(`/detailspage/${item.productID}`)}
                  alt={item.productName}
                />
                <img
                  src={other}
                  className="h-5 w-5 right-1 absolute bottom-1 text-green-700"
                  alt="Other Icon"
                />
              </div>
              <div className="p-2 rounded-b-lg w-40">
                <div className="flex justify-between flex-col font-medium">
                  <h2 className="text-black font-bold h-16 w-36 overflow-scroll">
                    {item.productName}
                  </h2>
                  <div className="flex justify-between items-center">
                    {/* <div className="flex gap-1 items-center">
                    <h3 className="text-black font-semibold">${item.salePrice?.toFixed(2)}</h3>
                    <span className="text-[10px] line-through">(${item.unitPrice?.toFixed(2)})</span>
                  </div> */}
                    <div className="flex gap-1 items-center">
                      {new Date() >= new Date(item?.salePriceValidFrom) &&
                      new Date() <= new Date(item?.salePriceValidTo) ? (
                        <>
                          <h3 className="text-black font-semibold">
                            ${item.salePrice?.toFixed(2)}
                          </h3>
                          <span className="text-[10px] line-through">
                            (${item.unitPrice?.toFixed(2)})
                          </span>
                        </>
                      ) : (
                        <h3 className="text-black font-semibold">
                          ${item.unitPrice?.toFixed(2)}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center   ">
                  <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                </div>
                {/* <div>
                {Array.from({ length: totalStars }, (v, i) => (
                  <Star
                    key={i}
                    filled={i < rating}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div> */}
                {/* <div onClick={() => handleCart(index)}>
                <img src={addcart} className="h-7 p-1" alt="Add to Cart Icon" />
              </div> */}
                <div
                  onClick={() => handleCart(item.productID)}
                  className="bg-blue-900 flex gap-1 p-1 rounded-lg justify-center items-center  cursor-pointer"
                >
                  <img src={addcart} className="h-7 p-1" />
                  <p className="text-white font-semibold">ADD</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}

      <Link
        onClick={() => handleProductCategory()}
        className="font-semibold hover:text-red-500 flex justify-end underline"
      >
        See all products
      </Link>
    </div>
  );
};

export default ProductSection;
