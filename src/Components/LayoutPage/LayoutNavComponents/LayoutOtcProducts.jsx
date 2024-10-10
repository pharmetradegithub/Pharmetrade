// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import { useNavbarContext } from "../../NavbarContext";
// import Notification from "../../../Components/Notification"; // Import Notification component
// import next from "../../../assets/Next_icon.png";
// import previous from "../../../assets/Previous_icon.png";
// import other from "../../../assets/compare1_Icon.png";
// import addcart from "../../../assets/cartw_icon.png";
// import emptyHeart from "../../../assets/Wishlist1_icon.png";
// import filledHeart from "../../../assets/wishlist2_icon.png";
// import Expicon from "../../../assets/Expicon.png";
// import search from "../../../assets/search1.png";
// import nature from "../../../assets/img1.png";
// import { useSelector } from "react-redux";
// import twitter from "../../../assets/twitter_icon.png";
// import Facebook from "../../../assets/facebook1.png";
// import Pintrist from "../../../assets/pinterest.png";
// import email from "../../../assets/envelope.png";
// import wrong from "../../../assets/wrong.png";
// import { addCartApi } from "../../../Api/CartApi";
// import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
// import share from "../../../assets/share.png";
// import { Tooltip } from "@mui/material";
// function LayoutBuy({
//   topMargin,
//   addCart,
//   wishList,
//   quantities,
//   setQuantities,
// }) {
//   const navigate = useNavigate();
//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showMore, setShowMore] = useState({});
//   const [notification, setNotification] = useState({
//     show: false,
//     message: "",
//   });
//   const user = useSelector((state) => state.user.user);
//   const cart = useSelector((state) => state.cart.cart);
//   const wishlist = useSelector((state) => state.wishlist.wishlist);

//   console.log("cart--->", cart);
//   const [wishlistProductIDs, setwishlistProductIDs] = useState([]);
//   //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
//   const getWishlistIdByProductID = (productID) => {
//     const wishlistItem = wishlist.find(
//       (item) => item.product.productID === productID
//     );
//     return wishlistItem ? wishlistItem.wishListId : null;
//   };

//   useEffect(() => {
//     if (Array.isArray(wishlist)) {
//       setwishlistProductIDs(
//         wishlist.map((wishItem) => wishItem.product.productID)
//       );
//     }
//   }, [wishlist]);

//   // const [wishlistProductIDs, setwishlistProductIDs] = useState(
//   //   wishlist.map((wishItem) => wishItem.product.productID)
//   // );
//   // const getWishlistIdByProductID = (productID) => {
//   //   const wishlistItem = wishlist.find(
//   //     (item) => item.product.productID === productID
//   //   );
//   //   return wishlistItem ? wishlistItem.wishListId : null;
//   // };
//   const products = useSelector((state) => state.product.Products);
//   const [productList, setproductList] = useState(products);
//   console.log("layoutproduct-->", productList);
//   useEffect(() => {
//     if (products) {
//       const updatedProducts = products.map((product) => ({
//         ...product,
//         CartQuantity: 1, // Set initial quantity to 1 for all products
//       }));
//       setproductList(updatedProducts);
//     }
//   }, [products]);

//   const handleCart = async (productID, Quantity) => {
//     const cartData = {
//       customerId: user.customerId,
//       productId: productID,
//       quantity: Quantity,
//       isActive: 1,
//     };

//     try {
//       await addCartApi(cartData);
//       setNotification({
//         show: true,
//         message: "Item Added To Cart Successfully!",
//       });
//       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//     }
//   };

//   const handleClick = async (productID) => {
//     if (wishlistProductIDs.includes(productID)) {
//       setwishlistProductIDs(
//         wishlistProductIDs.filter((id) => id !== productID)
//       );
//       await removeFromWishlistApi(getWishlistIdByProductID(productID));
//     } else {
//       setwishlistProductIDs([...wishlistProductIDs, productID]);
//       const wishListData = {
//         wishListId: "0",
//         productId: productID,
//         customerId: user.customerId,
//         isActive: 1,
//       };
//       await addToWishlistApi(wishListData);
//     }
//   };
//   // const handleClick = async (index) => {
//   //   setFavoriteItems(prevState => ({
//   //     ...prevState,
//   //     [index]: !prevState[index],
//   //   }));

//   //   const jsondata = {
//   //     wishListId: "0",
//   //     productID: productList[index].productID,
//   //     customerId: customerId,
//   //     isActive: 1
//   //   };

//   //   try {
//   //     const response = await fetch(
//   //       'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/WishList/Add',
//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify(jsondata),
//   //       }
//   //     );

//   //     if (!response.ok) {
//   //       const errorDetails = await response.json();
//   //       throw new Error(
//   //         `Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorDetails)}`
//   //       );
//   //     }

//   //     const result = await response.json();
//   //     fetchWishListData();
//   //   } catch (error) {
//   //     throw error;
//   //   }
//   // };

//   const handleQuantityChange = (index, newQuantity) => {
//     // if (newQuantity) {
//     const quantity = Math.max(1, newQuantity);
//     setproductList((prev) => {
//       const updatedList = [...prev];
//       updatedList[index] = {
//         ...updatedList[index],
//         CartQuantity: quantity,
//       };
//       return updatedList;
//     });
//     // }
//   };

//   const [isShowPopup, setIsShowPopup] = useState(false);

//   const handleSharePopupToggle = () => setIsShowPopup(!isShowPopup);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil((productList?.length || 0) / itemsPerPage);

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "black",
//     border: "1px solid gray",
//     borderRadius: "5px",
//     width: "100%",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));

//   const toggleShowMore = (index) => {
//     setShowMore((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const handleProductDetails = (productID, product) => {
//     navigate(`/detailspage/${productID}`);
//   };
//   return (
//     <div className="w-[95%] mt-4 ml-4 h-full overflow-y-scroll">
//       {notification.show && (
//         <Notification show={notification.show} message={notification.message} />
//       )}

//       <div className="flex justify-between">
//         <h1 className="text-2xl font-semibold text-blue-900">Buy Products</h1>
//         <div className="flex">
//           <div className="flex gap-1">
//             <select className="bg-white  w-auto h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
//               <option> Filter Products</option>

//               <option>Product Ascending (A-Z)</option>
//               <option>Product Decending (Z-A)</option>
//               <option>Price Low to High</option>
//               <option>Price High to Low</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="w-full mt-5">
//         <div>
//           <div className="flex flex-col">
//             <div className="flex flex-col justify-between">
//               {productList.length > 0 ? (
//                 currentItems.map((product, index) => (
//                   <div
//                     key={index}
//                     className="flex p-4 border w-full justify-around shadow-lg rounded-md mb-4"
//                   >
//                     <div className="flex flex-col mx-2">
//                       <img
//                         src={product.productGallery.imageUrl}
//                         className="w-36 p-2 hover:cursor-pointer rounded-lg h-28 bg-slate-200"
//                         alt="Product"
//                         onClick={() =>
//                           handleProductDetails(product.productID, product)
//                         }
//                       />
//                     </div>

//                     <div className="flex flex-col w-[200px] mx-3">
//                       <p className="font-semibold">Item Details</p>
//                       <div className="mt-2">
//                         <p className="font-semibold">{product.productName}</p>

//                         <p className="text-xs mt-1 w-60">
//                           {showMore[index]
//                             ? product.aboutTheProduct
//                             : `${product.aboutTheProduct.slice(0, 50)}...`}
//                           {product.aboutTheProduct.length > 50 && (
//                             <button
//                               className="text-blue-500 ml-1"
//                               onClick={() => toggleShowMore(index)}
//                             >
//                               {showMore[index] ? "See Less" : " More details"}
//                             </button>
//                           )}
//                         </p>
//                         <div className="flex w-full mt-1 gap-1">
//                           <img src={Expicon} className="w-6 h-6" />
//                           <div className="flex">
//                             <p>Exp.Date :</p>
//                             <p className="font-semibold">
//                               {/* {product.expiryDate} */}
//                               {new Date(product.expiryDate)
//                                 .toLocaleDateString("en-US", {
//                                   year: "numeric",
//                                   month: "2-digit",
//                                   day: "2-digit",
//                                 })
//                                 .replace(/\//g, "-")}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-col mx-3 justify-between">
//                       <div className="">
//                         <h2 className="font-semibold">Package Details</h2>
//                         <p className="text-base mt-1">
//                           {product.packCondition}
//                         </p>
//                       </div>
//                       <div>
//                         {product.amountInStock === 0 ? (
//                           <p className="text-red-500 font-semibold">
//                             Not in Stock
//                           </p>
//                         ) : null}
//                       </div>
//                     </div>

//                     <div className="flex flex-col mx-3">
//                       <p className="font-semibold">Unit Price</p>
//                       <div className="mt-2">
//                         <p className="font-semibold">
//                           ${product.unitPrice?.toFixed(2)}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex flex-col mx-3">
//                       <p className="font-semibold">Quantity</p>

//                       <div className="mt-2 flex items-center">
//                         <button
//                           className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700 font-bold"
//                           onClick={() =>
//                             handleQuantityChange(
//                               index,
//                               product.CartQuantity - 1
//                             )
//                           }
//                           disabled={
//                             product.CartQuantity <= 1 ||
//                             cart.some(
//                               (item) =>
//                                 item.product.productID === product.productID
//                             ) === 1
//                           }
//                         >
//                           -
//                         </button>

//                         <input
//                           type="text"
//                           value={product.CartQuantity}
//                           disabled={true}
//                           className="w-12 mx-2 border font-bold rounded-md text-center bg-white"
//                         />

//                         <button
//                           className="px-2 py-1 border rounded-md  bg-gray-200 text-gray-700 font-bold"
//                           onClick={() =>
//                             handleQuantityChange(
//                               index,
//                               product.CartQuantity + 1
//                             )
//                           }
//                           disabled={
//                             cart.some(
//                               (item) =>
//                                 item.product.productID === product.productID
//                             ) === 1
//                           }
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     {/* Wishlist */}
//                     <div className="flex flex-col items-center justify-between">
//                       <div className="mt-2">
//                         <Tooltip title="Wishlist" placement="top">
//                           <img
//                             src={
//                               wishlistProductIDs.includes(product.productID)
//                                 ? filledHeart
//                                 : emptyHeart
//                             }
//                             className="w-6 h-6 cursor-pointer"
//                             onClick={() => handleClick(product.productID)}
//                             alt="Wishlist Icon"
//                           />
//                         </Tooltip>
//                       </div>
//                       {/* <div className="relative inline-block">
//                         <Tooltip title="Share" placement="top">

//                           <img src={share} className="w-6 mx-3 " onClick={handleSharePopupToggle} />
//                         </Tooltip>
//                       </div>
//                       {isShowPopup && (
//                         <div className="flex  mt-2  flex-col justify-center items-center h-full top-0 left-96 absolute inset-0 bg-transparent z-auto">
//                           <div className="border w-[15%] rounded-lg bg-gray-100 ml-96 ">
//                             <div className="flex border-b justify-between p-2 ml-2">
//                               <div className="flex items-center">
//                                 <a href="mailto:example@example.com" className="flex items-center">
//                                   <img src={email} className="text-blue-400 w-6" />
//                                   <p className="ml-3">Email</p>
//                                 </a>
//                               </div>
//                               <img src={wrong} onClick={handleSharePopupToggle} className="w-3 h-3" />
//                             </div>
//                             <div className="flex border-b p-2 ml-2">
//                               <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
//                                 <img src={Pintrist} className="text-blue-400 w-6" />

//                                 <p className="ml-3">Pinterest</p>
//                               </a>
//                             </div>
//                             <div className="flex border-b p-2 ml-2">
//                               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
//                                 <img src={Facebook} className="text-blue-400 w-6" />
//                                 {/* <FaFacebook  /> 
//                                 <p className="ml-3">Facebook</p>
//                               </a>
//                             </div>
//                             <div className="flex border-b p-2">
//                               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
//                                 <img src={twitter} className="text-blue-400 w-6" />
//                                 <p className="ml-3">Twitter</p>
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       )} */}

//                       <div className="relative inline-block">
//                         <Tooltip title="Share" placement="top">
//                           <img
//                             src={share}
//                             className="w-6 mx-3"
//                             onClick={handleSharePopupToggle}
//                           />
//                         </Tooltip>
//                         {isShowPopup && (
//                           <div className="absolute right-0 bottom-0 flex mt-2 flex-col justify-center items-center z-10">
//                             <div className="border w-48 rounded-lg bg-gray-100">
//                               <div className="flex border-b justify-between p-2">
//                                 <a
//                                   href="mailto:example@example.com"
//                                   className="flex items-center"
//                                 >
//                                   <img
//                                     src={email}
//                                     className="text-blue-400 w-6"
//                                   />
//                                   <p className="ml-3">Email</p>
//                                 </a>
//                                 <img
//                                   src={wrong}
//                                   onClick={handleSharePopupToggle}
//                                   className="w-3 h-3 cursor-pointer"
//                                 />
//                               </div>
//                               <div className="flex border-b p-2">
//                                 <a
//                                   href="https://www.pinterest.com"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="flex items-center"
//                                 >
//                                   <img
//                                     src={Pintrist}
//                                     className="text-blue-400 w-6"
//                                   />
//                                   <p className="ml-3">Pinterest</p>
//                                 </a>
//                               </div>
//                               <div className="flex border-b p-2">
//                                 <a
//                                   href="https://www.facebook.com"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="flex items-center"
//                                 >
//                                   <img
//                                     src={Facebook}
//                                     className="text-blue-400 w-6"
//                                   />
//                                   <p className="ml-3">Facebook</p>
//                                 </a>
//                               </div>
//                               <div className="flex p-2">
//                                 <a
//                                   href="https://www.twitter.com"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="flex items-center"
//                                 >
//                                   <img
//                                     src={twitter}
//                                     className="text-blue-400 w-6"
//                                   />
//                                   <p className="ml-3">Twitter</p>
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       <div
//                         onClick={() => {
//                           if (product.amountInStock !== 0) {
//                             handleCart(product.productID, product.CartQuantity);
//                           }
//                         }}
//                         className={`flex text-white h-[40px] px-2 rounded-lg mx-3 justify-center items-center
//                                   ${
//                                     product.amountInStock === 0
//                                       ? "bg-gray-400 cursor-not-allowed"
//                                       : "bg-blue-900 cursor-pointer"
//                                   }`}
//                       >
//                         <div className="mr-1">
//                           <img
//                             src={addcart}
//                             className={`w-6 h-6 ${
//                               product.amountInStock === 0
//                                 ? "opacity-50"
//                                 : "cursor-pointer"
//                             }`}
//                             alt="Add to Cart Icon"
//                           />
//                         </div>
//                         <p
//                           className={`font-semibold ${
//                             product.amountInStock === 0 ? "opacity-50" : ""
//                           }`}
//                         >
//                           {"Add to Cart"}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p>No products available</p>
//               )}
//             </div>

//             <div className="flex justify-end my-2">
//               <button
//                 onClick={handlePreviousPage}
//                 disabled={currentPage === 1}
//                 className="mx-2 px-4 border p-2 text-white rounded-lg"
//               >
//                 <img src={previous} className="w-2" alt="Previous Page" />
//               </button>
//               <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
//                 {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//                 className="mx-2 px-4 border p-2 text-white rounded-lg"
//               >
//                 <img src={next} className="w-2" alt="Next Page" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LayoutBuy;




import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Pagination from "../../Pagination";
import { useNavbarContext } from "../../NavbarContext";
import Notification from "../../../Components/Notification"; // Import Notification component
import next from "../../../assets/Next_icon.png";
import previous from "../../../assets/Previous_icon.png";
import other from "../../../assets/compare1_Icon.png";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import Expicon from "../../../assets/Expicon.png";
import search from "../../../assets/search1.png";
import nature from "../../../assets/img1.png";
import { useSelector } from "react-redux";
import Whatsapp from '../../../assets/Icons/Whatsapp.png'
import twitter from "../../../assets/twitter_icon.png";
import Facebook from "../../../assets/facebook1.png";
import Pintrist from "../../../assets/pinterest.png";
import email from "../../../assets/envelope.png";
import wrong from "../../../assets/wrong.png";
import { addCartApi } from "../../../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
import share from "../../../assets/share.png";
import { Tooltip } from "@mui/material";
function LayoutOtcProducts({
  topMargin,
  addCart,
  wishList,
  quantities,
  setQuantities,
}) {
  const navigate = useNavigate();
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [showMore, setShowMore] = useState({});
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  console.log("cart--->", cart);
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

  // const [wishlistProductIDs, setwishlistProductIDs] = useState(
  //   wishlist.map((wishItem) => wishItem.product.productID)
  // );
  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find(
  //     (item) => item.product.productID === productID
  //   );
  //   return wishlistItem ? wishlistItem.wishListId : null;
  // };
  const products = useSelector((state) => state.product.otcProducts);
  const [productList, setproductList] = useState(products);
  console.log("layoutproduct-->", productList);
  useEffect(() => {
    if (products) {
      const updatedProducts = products.map((product) => ({
        ...product,
        CartQuantity: 1, // Set initial quantity to 1 for all products
      }));
      setproductList(updatedProducts);
    }
  }, [products]);

  const handleCart = async (productID, Quantity) => {
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: Quantity,
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
  // const handleClick = async (index) => {
  //   setFavoriteItems(prevState => ({
  //     ...prevState,
  //     [index]: !prevState[index],
  //   }));

  //   const jsondata = {
  //     wishListId: "0",
  //     productID: productList[index].productID,
  //     customerId: customerId,
  //     isActive: 1
  //   };

  //   try {
  //     const response = await fetch(
  //       'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/WishList/Add',
  //       {
  //         method: "POST",
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(jsondata),
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorDetails = await response.json();
  //       throw new Error(
  //         `Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorDetails)}`
  //       );
  //     }

  //     const result = await response.json();
  //     fetchWishListData();
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const handleQuantityChange = (index, newQuantity) => {
    // if (newQuantity) {
    const quantity = Math.max(1, newQuantity);
    setcurrentItems((prev) => {
      const updatedList = [...prev];
      updatedList[index] = {
        ...updatedList[index],
        CartQuantity: quantity,
      };
      return updatedList;
    });
    // }
  };


  const [isShowPopup, setIsShowPopup] = useState(false);
  const handleSharePopupToggle = (event) => {
    const { top } = event.currentTarget.getBoundingClientRect();
    setPopupPosition({ top }); // Adjusting the left position to be next to the button
    setIsShowPopup(!isShowPopup);
  };


  // const [isShowPopup, setIsShowPopup] = useState(false);

  // const handleSharePopupToggle = () => setIsShowPopup(!isShowPopup);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  const [currentItems,setcurrentItems] = useState(productList.slice(indexOfFirstItem, indexOfLastItem));
  useEffect(() => {
    if(productList)
    {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setcurrentItems( productList.slice(indexOfFirstItem, indexOfLastItem))

    }
 
  }, [currentPage,products,productList])
  const totalPages = Math.ceil((productList?.length || 0) / itemsPerPage);

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
  return (
    <div className="w-[95%] mt-4 ml-4 h-full overflow-y-scroll">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}

      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-blue-900">OTC PRODUCTS</h1>
        <div className="flex">
          <div className="flex gap-1">
            <select className="bg-white  w-auto h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
              <option> Filter Products</option>

              <option>Product Ascending (A-Z)</option>
              <option>Product Decending (Z-A)</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-between">
              {/* {productList.length} */}
              {productList.length > 0 ? (
                currentItems.map((product, index) => (
                  <div
                    key={index}
                    className="flex p-4 border w-full justify-around shadow-lg rounded-md mb-4"
                  >
                    <div className="flex flex-col mx-2">
                      <img
                        src={product.productGallery.imageUrl}
                        className="w-36 p-2 hover:cursor-pointer rounded-lg h-28 bg-slate-200"
                        alt="Product"
                        onClick={() =>
                          handleProductDetails(product.productID, product)
                        }
                      />
                    </div>

                    <div className="flex flex-col w-[200px] mx-3">
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
                          <div className="flex">
                            <p>Exp.Date : &nbsp;</p>
                            <p className="font-semibold">
                              {/* {product.expiryDate} */}
                              {new Date(product.expiryDate)
                                .toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })
                                .replace(/\//g, "-")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="flex flex-col mx-3">
                      <p className="font-semibold">Package Details</p>
                      <div className="mt-2">
                        <p className="text-red-500 font-semibold">
                          {product.package}
                        </p>
                        <p className="text-base mt-1">
                          {product.packCondition}
                        </p>
                      </div>
                    </div> */}
                    <div className="flex flex-col mx-3 justify-between">
                      <div className="">
                        <h2 className="font-semibold">Package Details</h2>
                        <p className="text-base mt-1">
                          {product.packCondition}
                        </p>
                      </div>
                      <div className="text-sm">
                        {product.amountInStock <= 0 ? (
                          <p className="text-red-500 font-semibold">
                            Out Of Stock
                          </p>
                        ) : (
                          <p className="text-white p-1 bg-green-600 rounded-lg ">
                            Stock Available - <span className="font-semibold">{product.amountInStock}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Unit Price</p>
                      <div className="mt-2">
                        <p className="font-semibold">
                          ${product.unitPrice?.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Quantity</p>

                      <div className="mt-2 flex items-center">
                        <button
                          className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700 font-bold"
                          onClick={() =>
                            handleQuantityChange(
                              index,
                              product.CartQuantity - 1
                            )
                          }
                          disabled={
                            product.CartQuantity <= 1 ||
                            cart.some(
                              (item) =>
                                item.product.productID === product.productID
                            ) === 1
                          }
                        >
                          -
                        </button>

                        <input
                          type="text"
                          value={product.CartQuantity}
                          disabled={true}
                          className="w-12 mx-2 border font-bold rounded-md text-center bg-white"
                        />

                        <button
                          className="px-2 py-1 border rounded-md  bg-gray-200 text-gray-700 font-bold"
                          onClick={() =>
                            handleQuantityChange(
                              index,
                              product.CartQuantity + 1
                            )
                          }
                          disabled={
                            cart.some(
                              (item) =>
                                item.product.productID === product.productID
                            ) === 1
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Wishlist */}
                    <div className="flex flex-col items-center justify-between">
                      <div className="mt-2">
                        <Tooltip title="Wishlist" placement="top">
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
                        </Tooltip>
                      </div>
                      <div className="relative inline-block">
                        <Tooltip title="Share" placement="right">
                          <img
                            src={share}
                            className="w-6 mx-3 "
                            onClick={handleSharePopupToggle}
                          />
                        </Tooltip>
                      </div>
                      {isShowPopup && (
                        <div
                          className="flex flex-column  items-center absolute z-auto"
                          style={{
                            top: `${popupPosition.top}px`,
                            left: `${popupPosition.left}px`,
                            transform: "translate(-130%,-45%)",
                            // transform: "translateX(-500%)",
                            // Optional: to position above the button
                          }}
                        >
                          <div className=" rounded-lg bg-gray-100">
                            <div className="flex border-b justify-between p-2 ml-2">
                              <div className="flex items-center">
                                <a
                                  href="mailto:example@example.com"
                                  className="flex items-center"
                                >
                                  <img
                                    src={email}
                                    className="text-blue-400 w-6"
                                  />
                                  <p className="ml-3">Email</p>
                                </a>
                              </div>
                              <img
                                src={wrong}
                                onClick={handleSharePopupToggle}
                                className="w-3 h-3"
                              />
                            </div>
                            {/* Other links... */}
                            <div className="flex border-b p-2 ml-2">
                              <a
                                href="https://www.pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <img
                                  src={Pintrist}
                                  className="text-blue-400 w-6"
                                />
                                <p className="ml-3">Pinterest</p>
                              </a>
                            </div>{" "}
                            <div className="flex border-b p-2 ml-2">
                              <a
                                href="https://www.pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <img
                                  src={Pintrist}
                                  className="text-blue-400 w-6"
                                />
                                <p className="ml-3">Whatsapp</p>
                              </a>
                            </div>
                            <div className="flex border-b p-2 ml-2">
                              <a
                                href="https://www.pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <img
                                  src={Pintrist}
                                  className="text-blue-400 w-6"
                                />
                                <p className="ml-3">Instagram</p>
                              </a>
                            </div>
                            {/* Additional social links... */}
                          </div>
                        </div>
                      )}

                      {/* Add to Cart */}
                      {/* {cart.some(
                        (item) => item.product.productID == product.productID
                      ) == 0 ? ( */}
                      {/* <div
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
                      </div> */}

<div
                        onClick={() => {
                          if (product.amountInStock !== 0) {
                            handleCart(product.productID, product.CartQuantity);
                          }
                        }}
                        className={`flex text-white h-[40px] px-2 rounded-lg mx-3 justify-center items-center
                                  ${
                                    product.amountInStock === 0
                                      ? "bg-gray-400 cursor-not-allowed"
                                      : "bg-blue-900 cursor-pointer"
                                  }`}
                      >
                        <div className="mr-1">
                          <img
                            src={addcart}
                            className={`w-6 h-6 ${
                              product.amountInStock === 0
                                ? "opacity-50"
                                : "cursor-pointer"
                            }`}
                            alt="Add to Cart Icon"
                          />
                        </div>
                        <p
                          className={`font-semibold ${
                            product.amountInStock === 0 ? "opacity-50" : ""
                          }`}
                        >
                          {"Add to Cart"}
                        </p>
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

            {/* <div className="flex justify-end my-2">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="mx-2 px-4 border p-2 text-white rounded-lg"
              >
                <img src={previous} className="w-2" alt="Previous Page" />
              </button>
              <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="mx-2 px-4 border p-2 text-white rounded-lg"
              >
                <img src={next} className="w-2" alt="Next Page" />
              </button>
            </div> */}
            <Pagination
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              productList={productList}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutOtcProducts;
