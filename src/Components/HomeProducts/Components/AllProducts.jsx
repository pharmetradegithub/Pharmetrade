import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import addcart from "../assets/addcart.png";
// import fav from "../assets/fav.png";
// import other from "../assets/other.png";
// import other from "../assets/compare1_Icon.png";
import addcart from "../../../assets/cartw_icon.png";
import fav from "../../../assets/Wishlist1_icon.png";
import nature from "../../../assets/img1.png";
import Items from "../../../Components/Items";
import next from "../../../assets/Next_icon.png";
// import next from "../assets/Icons/Next_icon.png"
// import previous from "../assets/Icons/Previous_icon.png"
import previous from "../../../assets/Previous_icon.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../../../assets/search-icon.png";
import { useNavbarContext } from "./../../NavbarContext";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import other from "../../../assets/CompareNav2.png";
import { useSelector } from "react-redux";
import { addCartApi } from "../../../Api/CartApi";
import Notification from "../../../Components/Notification"; // Import Notification component

import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
import bottontotop from "../../../Components/ScrollToTop";
import Pagination from "../../Pagination";
function AllProducts({ Title, topMargin, addCart, wishList }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchInput = queryParams.get("Search");

  const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.Products);
  const productCriteria = useSelector(
    (state) => state.product.productsByCriteria
  );
  const [ProductList, setProductsList] = useState([]);
  useEffect(() => {
    if (searchInput) {
      setProductsList(productCriteria);
    } else {
      setProductsList(products);
    }
  }, [searchInput, products, productCriteria]);

  const Heading = useSelector((state) => state.product.Heading);
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

  // const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find((item) => item.product.productID === productID);
  //   return wishlistItem ? wishlistItem.wishListId : null;
  // };
  const images = Array(115).fill(nature);

  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState({});
  // const [rating, setRating] = useState(0);
  // const totalStars = 5;
  const [notification, setNotification] = useState({
    show: false,
    message: "one",
  });
  const handleClose = (event) => {
    event.stopPropagation();
    console.log("Clicked to close Items");
    setPop(false);
  };

  const handleCart = async (productID) => {
    if (user == null) {
      console.log("login to add");
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

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  // const totalPages = Math.ceil(images.length / itemsPerPage);

  // const handleNextPage = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  // const handlePreviousPage = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ProductList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((ProductList?.length || 0) / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to page 1 when items per page is changed
  };

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
    color: "white",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: ` calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // const Star = ({ filled, onClick }) => (
  //   <span
  //     onClick={onClick}
  //     style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
  //   >
  //     {filled ? "★" : "☆"}
  //   </span>
  // );

  return (
    <div className="w-full mt-4 h-full overflow-y-scroll">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className=" flex justify-between bg-blue-900 p-1 rounded-lg">
        <div className="text-xl pl-2 flex items-center text-white">
          {searchInput != null ? `Search on ${searchInput}` : "ALL PRODUCTS"}
          {/* {{Heading} ? Heading : "All Products"} */}
        </div>
      </div>

      <div className="w-[95%]">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
          {currentItems.length == 0 && <div>No products are available</div>}
          {currentItems?.map((item, index) => (
            <div
              key={item.productID}
              className="w-full max-w-md border p-2  shadow-md"
            >
              {/* <Link to={`/detailspage/${index + indexOfFirstItem}`}> */}
              <div className="flex justify-center bg-slate-200 relative">
                <img
                  onClick={() => handleClick(item.productID)}
                  src={
                    wishlistProductIDs.includes(item.productID)
                      ? filledHeart
                      : emptyHeart
                  }
                  className="h-8 p-[6px] cursor-pointer absolute right-0 "
                  alt="Favorite Icon"
                />
                <img
                  src={other}
                  className="h-5 w-5 right-1 absolute bottom-1 text-green-700"
                  alt="Other Icon"
                />

                <Link to={`/detailspage/${item.productID}`}>
                  <img
                    src={item.productGallery.imageUrl}
                    alt={`nature-${index + indexOfFirstItem}`}
                    className="h-40 w-28 rounded-lg"
                  />
                </Link>
              </div>
              {/* </Link> */}
              {/* <div className="w-full py-1">
                <h2 className="text-fonts h-12">{item.productName}</h2>
                <h1 className="text-fonts font-semibold">${item.salePrice?.toFixed(2)}</h1>
              </div> */}
              <div className="w-full py-1">
                <h2 className="text-fonts h-12">{item.productName}</h2>
                {/* {item.salePrice > 0 ? (
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
                )} */}
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
              {/* <div>
                {Array.from({ length: totalStars }, (v, i) => (
                  <Star
                    key={i}
                    filled={i < rating}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div> */}
              {/* <div className="flex items-center   ">
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
              </div> */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                </div>
                <div className="text-xs">
                  {item.amountInStock <= 0 ? (
                    <p className="text-red-500 font-semibold">Out Of Stock</p>
                  ) : (
                    <p className="text-green-600 rounded-lg font-semibold ">
                      In Stock - {item.amountInStock}
                    </p>
                  )}
                </div>
              </div>
              {/* <div className="flex flex-row items-center justify-between w-full px-1">
                <div className="text-foot text-xs">UPN Member Price:</div>
                <div className="text-base font-semibold">${item.upnMemberPrice?.toFixed(2)}</div>
              </div> */}

              <div className="text-foot">
                {item.productCategory.categoryName}
              </div>

              {/* <div
                className="flex bg-blue-900 p-1 cursor-pointer rounded-md justify-center"
                onClick={() => handleCart(item.productID)}
              >
                <img src={addcart} alt="Add to cart" className="h-8 p-[6px]" />
                <button className="text-white font-semibold">ADD</button>
              </div> */}
              <div
                className={`flex p-1 rounded-md justify-center ${
                  item.amountInStock === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-900 cursor-pointer"
                }`}
                onClick={() => {
                  if (item.amountInStock > 0) {
                    handleCart(item.productID); // Only call handleCart if item is in stock
                  }
                }}
              >
                <img
                  src={addcart}
                  alt="Add to cart"
                  className={`h-8 p-[6px] ${
                    item.amountInStock === 0 ? "opacity-50" : ""
                  }`}
                />
                <button
                  className={`text-white font-semibold ${
                    item.amountInStock === 0 ? "opacity-50" : ""
                  }`}
                  disabled={item.amountInStock === 0} // Disable the button when out of stock
                >
                  ADD
                </button>
              </div>

              {/*<ul className="flex flex-row justify-around border bg-gray-100 border-gray-300 shadow-md rounded-xl  py-2">
              <li>
                <img
                  src={addcart}
                  alt="Add to cart"
                  className="h-8 p-[6px]"
                  onClick={() => handleCart(index + indexOfFirstItem)}
                />
              </li>

               <li>
                <img
                  src={fav}
                  alt="Favorite"
                  className="h-8 p-[6px]"
                  onClick={() => handleClick(index + indexOfFirstItem)}
                />
              </li>
              <li>
                <img src={other} alt="Other" className="h-8 p-[6px]" />
              </li>
            </ul>*/}
              {pop && <Items topMargin={topMargin} onClose={handleClose} />}
            </div>
          ))}
        </div>
      </div>

      <Pagination
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        productList={ProductList}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default AllProducts;
