import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
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
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
import bottontotop from '../../../Components/ScrollToTop'
import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";
function CategoryProducts({ Title, topMargin, addCart, wishList }) {
  const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.Products);
  const Heading = useSelector((state)=>state.product.Heading);
  const user = useSelector((state)=>state.user.user);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const productCriteria = useSelector((state) => state.product.productsByCriteria)
  console.log("procri-->", productCriteria)

  const [wishlistProductIDs, setWishlistProductIDs] = useState([]);
  const [filterSearch, setFilterSearch] = useState()
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null; 
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setWishlistProductIDs(wishlist.map((wishItem) => wishItem.product.productID));
    }
  }, [wishlist]);




  // const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find((item) => item.product.productID === productID);
  //   return wishlistItem ? wishlistItem.wishListId : null; 
  // };
  const images = Array(115).fill(nature);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState({});
  // const [rating, setRating] = useState(0);
  // const totalStars = 5;

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
    try {
      await addCartApi(cartData);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleClick = async (productID) => {
    if(wishlistProductIDs.includes(productID))
    {
      setWishlistProductIDs(wishlistProductIDs.filter(id => id !== productID));
      await removeFromWishlistApi(getWishlistIdByProductID(productID))
    }
    else{
      setWishlistProductIDs([...wishlistProductIDs, productID]);
      const wishListData = {
        wishListId: "0",
        productId: productID,
        customerId: user.customerId,
        isActive: 1
      }
      await addToWishlistApi(wishListData);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
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


  const [term, setTerm] = useState(""); // Search term
  const [filteredProducts, setFilteredProducts] = useState(productCriteria); // Products filtered by API
  const [loading, setLoading] = useState(false); // Loader during API call

  // Ensure productCriteria updates filteredProducts when it changes
  useEffect(() => {
    console.log("productCriteria updated:", productCriteria); // Check if productCriteria changes
    setFilteredProducts(productCriteria); // Reset to initial products
  }, [productCriteria]);

  // Handle search term and reset products if the search term is cleared
  useEffect(() => {
    console.log("useEffect: term changed to", term); // Check if term is updated correctly

    if (term) {
      console.log("Searching for products with term:", term);
      searchProducts(term, productCriteria);
    } else {
      console.log("Search term cleared, resetting to initial products");
      setFilteredProducts(productCriteria);
    }
  }, [term]); // Rerun when either term or productCriteria changes

  // Search API call function
  const searchProducts = async (searchTerm, productCriteria) => {
    setLoading(true); // Start loading

    try {
      const productCategoryId = productCriteria[0]?.productCategory?.productCategoryId;
      if (!productCategoryId) {
        console.warn("No productCategoryId available");
        setLoading(false);
        return;
      }

      const productName = {
        productCategoryId: productCategoryId,
        productName: searchTerm,
      };

      console.log("Calling API with searchTerm:", searchTerm); // Debugging
      const response = await fetchCriteriaProductsApi(productName);
      console.log("API response:", response); // Check response

      setFilteredProducts(response.data); // Update products
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input changes
  const searchFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setTerm(searchTerm);
    // if (searchTerm === "") {
    //   productName.productName = ""; // Clear productName in payload
    // } else {
    //   productName.productName = input; // Update productName with search term
    // }
     // Clear the search term
    // setFilteredProducts(productCriteria); 
    // setTerm(e.target.value.toLowerCase()); // Update term
    // console.log("searchFilter: Search term is", searchTerm); // Debugging
  };



  return (
    <div className="w-full mt-4 h-full overflow-y-scroll">
      <div className=" flex justify-between bg-blue-900 p-1 rounded-lg">
        <div className="text-xl flex items-center pl-2 text-white">
          {/* {{Heading} ? Heading : "All Products"} */}
          <div>{productCriteria[0]?.productCategory?.categoryName}</div>
        </div>
{/* 
        <Search>
          <SearchIconWrapper>
            <img src={search} className="w-4" />
            {/* <SearchIcon /> 
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}

<div className="relative flex">
          <input
            type="text"
            placeholder="Search Product"
            value={term}
            onChange={searchFilter}
            className="rounded-xl h-8 w-64 text-left px-2  bg-transparent gap-2 border-transparent my-1 text-white border-blue-900"
          />
          {/* <CiSearch className="absolute left-0 top-2 text-gray-400 mr-5" /> */}
        </div>
      </div>

      {/* <div className="w-[95%]">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
          { productCriteria.map((item, index) => (
            <div
              key={item.productID}
              className="w-full max-w-md border p-2  shadow-md"
            >
              {/* <Link to={`/detailspage/${index + indexOfFirstItem}`}> */}
              {/* <div className="flex justify-center bg-slate-200 relative">
                <img
                  onClick={() => handleClick(item.productID)}
                  src={wishlistProductIDs.includes(item.productID)? filledHeart : emptyHeart}
                  className="h-8 p-[6px]  absolute right-0 "
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
              </div> */}
              {/* </Link> */}
              {/* <div className="w-full py-1">
                <h2 className="text-fonts h-12">{item.productName}</h2>
                <h1 className="text-fonts font-semibold">${item.salePrice}</h1>
              </div> */}
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
              </div>
              <div className="flex flex-row items-center justify-between w-full px-1">
                <div className="text-foot text-xs">UPN Member Price:</div>
                <div className="text-base font-semibold">${item.upnMemberPrice
}</div>
              </div>
              <div
                className="flex bg-blue-900 p-1 rounded-md justify-center"
                onClick={() => handleCart(item.productID)}
              >
                <img src={addcart} alt="Add to cart" className="h-8 p-[6px]" />
                <button className="text-white font-semibold">ADD</button>
              </div> */}
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
              {/* {pop && <Items topMargin={topMargin} onClose={handleClose} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end my-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" />
        </button>
        <span className="mx-2 px-4 flex items-center  bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" />
        </button>
      </div> */}
       {loading ? (
        <div>Loading...</div> // Display loading indicator while fetching data
      ) : (
        <div className="w-[95%]">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
            {filteredProducts.map((item, index) => (
              <div
                key={item.productID}
                className="w-full max-w-md border p-2 shadow-md"
              >
                <div className="flex justify-center bg-slate-200 relative">
                  <img
                    onClick={() => handleClick(item.productID)}
                    src={wishlistProductIDs.includes(item.productID) ? filledHeart : emptyHeart}
                    className="h-8 p-[6px] cursor-pointer absolute right-0"
                    alt="Favorite Icon"
                  />
                  <img
                  src={other}
                  className="h-5 w-5 right-1 cursor-pointer absolute bottom-1 text-green-700"
                  alt="Other Icon"
                />
                  <Link to={`/detailspage/${item.productID}`}>
                    <img
                      src={item.productGallery.imageUrl}
                      alt={`nature-${index}`}
                      className="h-40 w-28 rounded-lg"
                    />
                  </Link>
                </div>

                <div className="w-full py-1">
                  <h2 className="text-fonts h-12">{item.productName}</h2>
                  <h1 className="text-fonts font-semibold">${item.salePrice?.toFixed(2)}</h1>
                </div>

                <div className="flex items-center">
                  <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                </div>

                <div className="flex flex-row items-center justify-between w-full px-1">
                  <div className="text-foot text-xs">UPN Member Price:</div>
                  <div className="text-base font-semibold">${item.upnMemberPrice?.toFixed(2)}</div>
                </div>

                <div
                  className="flex bg-blue-900 p-1 cursor-pointer rounded-md justify-center"
                  onClick={() => handleCart(item.productID)}
                >
                  <img src={addcart} alt="Add to cart" className="h-8 p-[6px]" />
                  <button className="text-white font-semibold">ADD</button>
                </div>

                {pop && <Items topMargin={topMargin} onClose={handleClose} />}
              </div>
            ))}
          </div>
        </div>
      )}
       <div className="flex justify-end my-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" />
        </button>
        <span className="mx-2 px-4 flex items-center  bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" />
        </button>
      </div> 
    </div>
  );
}

export default CategoryProducts;