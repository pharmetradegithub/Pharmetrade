import React from "react";

import Logo from "../../../assets/logo2.png";
import Search from "../../../assets/search.png";
import cartNav from "../../../assets/cartNav2.png";
import like from "../../../assets/wishlistnav_icon.png";
// import compare from "../../../assets/CompareNav2.png";

import note from "../../../assets/Icons/Compare.png";

import join from "../../../assets/Join3d.png";
import Buy from "../../../assets/buy3d.png";
import sell from "../../../assets/sell3d.png";
import bid from "../../../assets/Bid3d.png";
import BackgroundImage from "../../../assets/BackgroundImage.png";

import menu from "../../../assets/menu.png";
import { useState, useEffect, useRef } from "react";
import add from "../../../assets/add.png";
import warning from "../../../assets/Icons/warning2.png";
import linkedin from "../../../assets/linkedin_icon.png";
import facebook from "../../../assets/facebook_icon.png";
import insta from "../../../assets/instagram_icon.png";
// import twitter from "../../../assets/twitter_icon.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import myaccount from "../../../assets/My Account.png";
import { TbTruckReturn } from "react-icons/tb";
import WhyPharma from "../NavLinks/WhyPharma";
import search from "../../../assets/search-icon.png";
import dropdown from "../../../assets/Down-arrow .png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";
import { Tooltip } from "@mui/material";
import { fetchProductCategoriesGetAll } from "../../../Api/MasterDataApi";
import { Link, useLocation, useNavigate } from "react-router-dom";

let text =[];

function Nav({ topDivRef, Form_Data, TriggerAPI }) {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const components = useSelector((state) => state.master.productCategoryGetAll);
  console.log("categoeryyy-->", components);
  const modifiedComponents = [
    { productCategoryId: -1, categoryName: 'All' },
    ...components
  ];

  const [selectedIndex, setSelectedIndex] = useState();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [activePopUp, setActivePopUp] = useState(null);
  const [selectedItem, setSelectedItem] = useState("All");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("CategoryName");
    if(category===null)
    {
      setSelectedItem("Äll")

    }
    else if (category && components.length > 0) {
      const component = modifiedComponents.find(
        (comp) => comp.productCategoryId == category
      );
      console.log("heyeheyehhoanceu",component,category)
      if (component) {
        setSelectedItem(component.categoryName); // Set the name if found
      }
      else
      {
        setSelectedItem("Äll")
      }
    }
  }, [location.search]);

  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    dispatch(fetchProductCategoriesGetAll());
  }, []);
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
  };
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("CategoryName");

  // const handleItemClick = (name) => {
  //   if (activePopUp === name) {
  //     setActivePopUp(null); // Close the popup if it's already open
  //     setSelectedItem("All"); // Reset to "All" when closed
  //   } else {
  //     setActivePopUp(name); // Set the active popup
  //     setSelectedItem(name); // Update the button label with the selected item
  //   }
  //   setDropdownOpen(false); // Close the dropdown after selection
  // };

  const handleItemClick = (name) => {
    if (activePopUp === name) {
      setActivePopUp(null); // Close the popup if it's already open
    } else {
      setActivePopUp(name); // Set the active popup
      if (name === "All") {
        navigate('/allProducts'); // Navigate to '/allProducts' if "All" is clicked
      }
    }
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const handleCatMouseLeave = () => {
    setPopUps(null);
  };

  const handleRedirect = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const MenuItems = [
    "Home",
    "Products",
    "Why PharmEtrade",
    "About Us",
    // "Contact Us",
    "Request Demo",
  ];

  const [errorMessage, setErrorMessage] = useState("");

  // const handleItemclick = (item) => {
  //   if (user?.accountTypeId == 1 && item.label === "SELL") {
  //     setErrorMessage(
  //       // "You have login as buyer contact us help@pharmetrade.com"
  //       <>
  //       You have login as buyer contact us {" "}

  //       <a href="  " className="text-blue-900 underline ">help@pharmetrade.com</a></>
  //     );
  //   } else {
  //     navigate(item.path);
  //   }
  // };

  const handleItemclick = (item) => {
    navigate(item.path);
  };

  // Clear error message after 3 seconds
  // if (errorMessage) {
  //   setTimeout(() => setErrorMessage(""), 10000);
  // }

  const downDivItems = [
    // { label: "BUY", icon: Buy, path: "/layout" },
    // { label: "JOIN", icon: join, path: "/login" },
    // { label: "SELL", icon: sell, path:"/layout/addproduct" },
    // { label: "BID", icon: bid, path: "/bid" },
    { label: "BUY", icon: Buy, path: user ? "/layout/layoutbuy" : "login" },
    {
      label: "SELL",
      icon: sell,
      path: user ? "/layout/addproduct" : "/login",
    },
    { label: "BID", icon: bid, path: user ? "/bid" : "login" },
    { label: "JOIN", icon: join, path: "/signup" },
  ];

  const downSocialItems = [
    { icon: linkedin, path: "#" },
    { icon: facebook, path: "#" },
    { icon: insta, path: "#" },
    // { icon: twitter, path: "#" },
  ];

  // const components = [
  //   { id: 1, name: "Prescription Medications" },
  //   { id: 2, name: "Baby & Child Care Products" },
  //   { id: 4, name: "Health care products" },
  //   { id: 5, name: "Household Suppliers" },
  //   { id: 6, name: "Oral Care Products" },
  //   { id: 7, name: "Stationery & Gift Wrapping Supplies" },
  //   { id: 8, name: "Vision Products" },
  //   { id: 9, name: "Diet & Sports Nutrition" },
  //   { id: 10, name: "Vitamins, Minerals & Supplements" },
  //   { id: 11, name: "Personal Care Products" },
  // ];

  const handleCriteria = async (obj) => {
    let Criteria = {
      productCategoryId: obj.productCategoryId,
    };

    console.log("cr--->", obj);
    if(obj.productCategoryId===-1)
    {
      navigate('/allProducts')
      return;
    }
    await fetchCriteriaProductsApi(Criteria);
    navigate(
      `/allProducts/CategoryProducts?CategoryName=${obj.productCategoryId}`
    );
  };
  useEffect(() => {
    if (location.pathname.includes("allProducts")) {
      const searchParams = new URLSearchParams(location.search);
      const category = searchParams.get("CategoryName");
      if (category && components.length > 0) {
        const component = components.find(
          (comp) => comp.productCategoryId === category
        );

        if (component) {
          setSelectedItem(component.categoryName);
        }
      }
    } else {
      setSearchInput("");
      setSelectedItem("All");
    }
  }, [location]);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    if (MenuItems[index] === "Home") navigate("/app");
    else if (MenuItems[index] === "Products") navigate("/allProducts");
    else if (MenuItems[index] === "Why PharmEtrade")
      navigate("/whypharmetrade");
    else if (MenuItems[index] === "About Us") navigate("/aboutus");
    // else if (MenuItems[index] === "Contact Us") navigate("/contactus");
    else if (MenuItems[index] === "Request Demo") navigate("/requestdemo");
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  // const [popUps, setPopUps] = useState(<Baby />);
  const FormData = JSON.parse(localStorage.getItem("formData"));

  const handleMouseEnter = () => {
    setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };
  const mouseUp = () => {
    setIsCategory(true);
  };
  const mouseDown = () => {
    setIsCategory(false);
  };
  function handleredirect() {
    navigate("/login");
  }

  function handleCart() {
    navigate("/cart");
  }

  function handleclick() {
    navigate("/wishlist");
  }

  function handleuser() {
    navigate("/layout/layoutbuy");
  }
  function handleorder() {
    navigate("/orderhistory");
  }
  function handlesignup() {
    navigate("/signup");
  }
  function hanldeUp(items) {
    setPopUps(items);
  }

  const [isContainerFocused, setIsContainerFocused] = useState(false);
  const [isButtonFocused, setIsButtonFocused] = useState(false);
  const handleFocusIn = (e) => {
    if (e.target.className.includes("container-focus")) {
      setIsContainerFocused(true);
    } else if (e.target.className.includes("button-focus")) {
      setIsButtonFocused(true);
    }
  };

  const handleFocusOut = (e) => {
    if (e.target.className.includes("container-focus")) {
      setIsContainerFocused(false);
    } else if (e.target.className.includes("button-focus")) {
      setIsButtonFocused(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior
      handleSearchAPI(); // Call submit function when Enter is pressed
    }
  };

  const [SearchInput, setSearchInput] = useState("");
  console.log(SearchInput, "search");
  const handleSearch = async (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearchAPI = async () => {
    let Criteria = {
      productName: SearchInput,
    };
    await fetchCriteriaProductsApi(Criteria);
    navigate(`/allProducts?Search=${SearchInput}`);
    setSearchInput("")
  };

  return (
    <div
      ref={topDivRef}
      className=" fixed w-screen pt-1   z-10 bg-white text-grey-500"
    >
      <div className=" flex flex-col w-full justify-between ">
        <ul className="text-3xl w-full">
          <div className="flex flex-row h-[60px] justify-between gap-4 md:gap-12 lg:gap-10 items-center text-xl bg-white text-gray-500">
            <div>
              <img
                src={Logo}
                onClick={() => navigate("/")}
                className="w-12 md:w-16 lg:w-32 xl:w-60 h-12 ml-2 md:ml-2 lg:ml-12 hover:cursor-pointer lg:overflow-x-hidden xl-0"
                alt="Logo"
              />
            </div>
            <div className="h-full md:flex md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6 px-4 items-center">
              <div className="flex gap-3 justify-around h-full items-center">
                {MenuItems.map((item, index) => (
                  <li
                    className={`text-blue-900 hover:bg-slate-200 rounded-md flex justify-center p-1 px-1 items-center w-fit cursor-pointer font-medium text-[17px] ${
                      selectedIndex === index
                        ? "bg-slate-200 hover:text-blue-900 text-blue-900 border-0 font-semibold"
                        : "border-transparent border-2"
                    }`}
                    key={index} // Use index as the key if item doesn't have a unique id
                    onClick={() => handleSelect(index)}
                  >
                    {item}
                  </li>
                ))}
              </div>

              <div className="flex flex-row gap-4 text-md items-center font-thin">
                <div
                  className="relative"
                  onMouseEnter={() => setIsPopupVisible(true)}
                  onMouseLeave={() => setIsPopupVisible(false)}
                >
                  <div
                    className="flex  items-center cursor-pointer"
                    onClick={handleredirect}
                  >
                    <img
                      src={add}
                      className="w-4 md:w-6 lg:w-8 h-8"
                      alt="clickable"
                      onClick={handleredirect}
                    />
                    <div className="text-blue-900 hover:cursor-pointer ">
                      {user ? (
                        <>
                          <div className="text-base font-medium ">
                            {user.firstName} {user.lastName}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-base font-medium ">Sign in</div>
                        </>
                      )}
                    </div>
                  </div>
                  {isPopupVisible && (
                    <div
                      className="fixed flex z-10 -ml-5"
                      // "absolute top-full  right-0 mt-2 w-64 bg-white p-2 rounded shadow-lg z-10"
                    >
                      <div
                        className="bg-white p-4 rounded shadow-lg w-60"
                        // "w-full flex flex-col"
                      >
                        <div className="w-full flex ">
                          {user ? (
                            <li
                              className="cursor-pointer "
                              onClick={handleLogout}
                            >
                              <Link
                                to="/login"
                                className="bg-blue-900 text-white rounded  w-32 py-1 block text-center"
                              >
                                Logout
                              </Link>
                            </li>
                          ) : (
                            <a
                              className="bg-blue-900 text-white py-1 hover:cursor-pointer px-2 rounded block text-center "
                              onClick={handleRedirect}
                            >
                              Sign In
                            </a>
                          )}
                        </div>
                        <p
                          className="text-base hover:cursor-pointer mb-2  text-left"
                          onClick={handlesignup}
                        >
                          New User?{" "}
                          <span className="text-blue-900 hover:text-red-500 hover:underline">
                            Sign Up
                          </span>
                        </p>
                        {user && (
                          <>
                            <h2
                              className="text-lg font-semibold cursor-pointer"
                              onClick={handleuser}
                            >
                              Your Account
                            </h2>
                            <ul className="text-left">
                              <li className="mb-1">
                                <a
                                  href="#"
                                  className="text-lg text-blue-900"
                                  onClick={handleorder}
                                >
                                  Order List
                                </a>
                              </li>
                              <li className="">
                                <a
                                  href="#"
                                  className="text-blue-900"
                                  onClick={handleclick}
                                >
                                  Wishlist
                                </a>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <li className=" cursor-pointer" onClick={handleCart}>
                  <a>
                    <Tooltip title="Cart" placement="top">
                      <img
                        src={cartNav}
                        className="w-1 md:w-3 lg:w-5 xl:w-7 pt-2 h-3 md:h-5 lg:h-7 xl:h-9 text-blue-900 hover:text-gray-400 hover:scale-110 duration-500"
                        alt="Cart"
                      />
                    </Tooltip>
                  </a>
                  <div className="absolute text-white rounded-full px-1 text-xs border bg-blue-900 top-5 right-16 font-medium">
                    {cart.length}
                  </div>
                </li>
                <li>
                  <a>
                    <Tooltip title="Wishlist" placement="top">
                      <img
                        src={like}
                        onClick={handleclick}
                        className="w-1 md:w-3 lg:w-5 xl:w-7 pt-2 h-2 md:h-4 lg:h-6 xl:h-8 cursor-pointer hover:scale-110 transition duration-300"
                        alt="Like"
                      />
                    </Tooltip>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </ul>
        {/* down div elemenet  */}
        <div
          className="flex justify-evenly bg-gray-200 w-full h-fit flex-row  md:w-screen  
           items-center text-black  border-grey-500 shadow-lg "
        >
          <div className="flex gap-5 items-center justify-around text-blue-900 text-xs p-4 w-full md:w-fit">
            {downDivItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemclick(item)}
                className={`flex gap-1 items-center justify-center cursor-pointer font-semibold hover:text-black
                   ${
                     //  item.label === "SELL" &&
                     Form_Data?.userType === "Retail Customer" ? "hidden" : ""
                   }`}
              >
                <img
                  src={item.icon}
                  className="max-w-8 max-h-8"
                  alt={item.label}
                />
                <div className="text-[15px] ml-1 ">{item.label}</div>
              </li>
            ))}
          </div>

          {errorMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
                <div className="flex justify-start items-center border-b border-black">
                  <img src={warning} className=" w-12 h-12" />
                  <p className="text-red-600 text-xl font-semibold mt-2">
                    Warning !
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-black mb-4">{errorMessage}</p>
                  <button
                    onClick={() => setErrorMessage("")}
                    className="bg-red-500 text-white px-4 py-2 rounded mb-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex bg-whit rounded-md items-center w-[50%] lg:gap-10">
            <div
              ref={dropdownRef}
              className={`w-full relative flex items-center ${
                isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
              }`}
              onFocus={handleFocusIn}
              onBlur={handleFocusOut}
            >
              {/* <Link to="/allProducts/CategoryProducts"> */}
              <button
                className={`h-12 pl-2 mr-[1px] w-auto font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
                  isButtonFocused ? "ring-2 ring-blue-500" : ""
                } button-focus`}
                onClick={handleDropdownToggle}
                onFocus={handleFocusIn}
                onBlur={handleFocusOut}
              >
                {selectedItem}
                <span>
                  <img src={dropdown} className="h-4 w-4" />
                </span>
              </button>
              {/* </Link> */}

              {isDropdownOpen && (
                <div
                  className="absolute z-10"
                  style={{ top: "30px", left: "0px" }}
                >
                  {/* <div className="bg-white  w-64">
                    {components.map((items, index) => (
                      <ul onClick={() => handleCriteria(items)} key={index}>
                        <li className="">
                          <a
                            className="hover:text-black cursor-pointer text-sm font-medium text-blue-900"
                            onClick={() => handleItemClick(items.categoryName)}
                            onMouseLeave={handleCatMouseLeave}
                          >
                            {items.categoryName}
                          </a>
                        </li>
                      </ul>
                    ))}
                  </div> */}
                  <div className="bg-white w-64">
    {modifiedComponents.map((items, index) => (
      <ul onClick={() => handleCriteria(items)} key={index}>
        <li>
          <a
            className="hover:text-black cursor-pointer text-sm font-medium text-blue-900"
            onClick={() => handleItemClick(items.categoryName)}
            onMouseLeave={handleCatMouseLeave}
          >
            {items.categoryName}
          </a>
        </li>
      </ul>
    ))}
  </div>
                </div>
              )}

              {/* {isDropdownOpen && (
                <div
                  className="absolute z-10"
                  style={{ top: "30px", left: "0px" }}
                >
                  <div className="bg-white w-64">
                    <ul onClick={() => handleCriteria({ categoryName: "All" })}>
                      <li className="">
                        <a
                          className="hover:text-black cursor-pointer text-sm font-medium text-blue-900"
                          onClick={() => handleItemClick("All")}
                          onMouseLeave={handleCatMouseLeave}
                        >
                          All
                        </a>
                      </li>
                    </ul>
                    {components.map((items, index) => (
                      <ul onClick={() => handleCriteria(items)} key={index}>
                        <li className="">
                          <a
                            className="hover:text-black cursor-pointer text-sm font-medium text-blue-900"
                            onClick={() => handleItemClick(items.categoryName)}
                            onMouseLeave={handleCatMouseLeave}
                          >
                            {items.categoryName}
                          </a>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )} */}

              <div className="flex w-full h-12 border container-focus">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={SearchInput}
                  className="flex-grow p-4 border-none focus:outline-none container-focus"
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={() => handleSearchAPI()}
                  className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus"
                >
                  <img src={search} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-5  items-center justify-around text-blue-900 text-xs p-4 w-full md:w-fit">
            {downSocialItems.map((item, index) => (
              <li
                key={index}
                onClick={() => navigate(item.path)}
                className="flex gap-1 items-center justify-center cursor-pointer hover:text-green-400 "
              >
                <img
                  src={item.icon}
                  className="max-w-8 max-h-8"
                  alt={item.label}
                />
                {/* <div className="text-[15px] ml-1 ">{item.label}</div> */}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
