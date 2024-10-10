import React, { useRef, useState, useEffect, useContext } from "react";
import left from "../../../assets/arrowleft.png";
import right from "../../../assets/arrowright.png";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import Notification from "../../../Components/Notification"; // Import Notification component

import comp from "../../../assets/CompareNav2.png";
import nature from "../../../assets/img1.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addCartApi } from "../../../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";

const ProductSlider = ({ data, Title, addCart, wishList, productList }) => {
  const user = useSelector((state) => state.user.user);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [wishlistProductIDs, setWishlistProductIDs] = useState([]);
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find(
      (item) => item.product.productID === productID
    );
    return wishlistItem ? wishlistItem.wishListId : null;
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setWishlistProductIDs(
        wishlist.map((wishItem) => wishItem.product.productID)
      );
    }
  }, [wishlist]);

  const [rating, setRating] = useState(0);
  const [cartQuantities, setCartQuantities] = useState({});
  const totalStars = 5;

  const carouselContainer = useRef(null);
  const naviagte = useNavigate();
  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const [notification, setNotification] = useState({
    show: false,
    message: "one",
  });
  const handleCart = async (index) => {
    if (user == null) {
      console.log("login to add");
      return;
    }
    const cartData = {
      customerId: user.customerId,
      productId: data[index].productID,
      quantity: 1,
      isActive: 1,
    };
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

  const handleQuantityChange = (index, delta) => {
    setCartQuantities((prev) => {
      const newQuantity = (prev[index] || 0) + delta;
      if (newQuantity <= 0) {
        const updatedQuantities = { ...prev };
        delete updatedQuantities[index];
        return updatedQuantities;
      }
      return { ...prev, [index]: newQuantity };
    });
  };

  const handleClick = async (productID) => {
    if (wishlistProductIDs.includes(productID)) {
      setWishlistProductIDs(
        wishlistProductIDs.filter((id) => id !== productID)
      );
      await removeFromWishlistApi(getWishlistIdByProductID(productID));
    } else {
      setWishlistProductIDs([...wishlistProductIDs, productID]);
      const wishListData = {
        wishListId: "0",
        productId: productID,
        customerId: user.customerId,
        isActive: 1,
      };
      await addToWishlistApi(wishListData);
    }
  };

  // const handleproductdetiails = () => {
  //   naviagte(`/detailspage/${productID}`);
  // };
  const handleProductDetails = (productID) => {
    naviagte(`/detailspage/${productID}`);
  };

  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
    >
      {filled ? "★" : "☆"}
    </span>
  );
  return (
    <div className="flex mt-6 flex-col justify-center pb-4 gap-2">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="flex justify-between ml-4 font-semibold text-[22px]">
        <p>{Title}</p>

        <div className="flex justify-end mr-14 gap-2">
          <button
            className="bg-white rounded-sm p-2"
            onClick={() => navigation("left")}
          >
            <img src={left} className="w-4 h-4" />
          </button>
          <button
            className="bg-white rounded-sm p-2"
            onClick={() => navigation("right")}
          >
            <img src={right} className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="w-full p-4 flex justify-center bg-white">
        <div
          ref={carouselContainer}
          className="flex w-full gap-6 overflow-x-scroll snap-x snap-mandatory"
        >
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="snap-center border rounded-sm bg-white shrink-0"
              >
                <div className="relative bg-slate-100 m-2">
                  <img
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event from bubbling to parent
                      handleClick(item.productID);
                    }}
                    src={
                      wishlistProductIDs.includes(item.productID)
                        ? filledHeart
                        : emptyHeart
                    }
                    className="absolute h-7 w-7 right-1 p-1 cursor-pointer"
                    alt="Favorite Icon"
                  />
                  <img
                    src={comp}
                    className="absolute h-7 w-7 bottom-0 right-1 p-1"
                  />

                  <img
                    src={item.productGallery.imageUrl}
                    onClick={() => handleProductDetails(item.productID)}
                    // onClick={() => navigate(`/detailspage/${item.productID}`)}
                    alt={item.name}
                    className="h-48 w-48 object-contain rounded-lg hover:cursor-pointer"
                  />
                </div>
                <div className="p-2 w-48">
                  <div className="flex justify-between flex-col font-medium">
                    <h2 className="text-black font-bold h-12">
                      {item.productName}
                    </h2>
                    <div className="flex gap-1 items-center">
                      {new Date() >= new Date(item?.salePriceValidFrom) &&
                      new Date() <= new Date(item?.salePriceValidTo) ? (
                        <div className="flex items-center gap-1">
                          <h1 className="text-fonts font-semibold">
                            ${item.salePrice?.toFixed(2)}
                          </h1>
                          <span className="text-[10px] line-through">
                            (${item.unitPrice?.toFixed(2)})
                          </span>
                        </div>
                      ) : (
                        <h1 className="text-fonts font-semibold">
                          ${item.unitPrice?.toFixed(2)}
                        </h1>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                    <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                    <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                    <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                    <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  </div>
                  <div
                    onClick={() => handleCart(index)}
                    className="bg-blue-900 flex gap-1 p-1 rounded-lg justify-center items-center cursor-pointer"
                  >
                    <img src={addcart} className="h-7 p-1" />
                    <p className="text-white font-semibold">ADD</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
