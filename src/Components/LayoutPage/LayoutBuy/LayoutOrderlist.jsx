
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/img1.png";
import { styled, alpha } from "@mui/material/styles";
import searchimg from "../../../assets/search1.png";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetOrder } from "../../../Api/OrderApi";
import next from '../../../assets/Next_icon.png'
import previous from '../../../assets/Previous_icon.png'
import Pagination from "../../Pagination";

function LayoutOrderList() {
  // const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  // const localData = localStorage.getItem("userId")
  const user = useSelector((state) => state.user.user)
  // const customerId = localData?.userId;
  // const orderList = useSelector((state) => state.order.orders)
  const getOrder = useSelector((state) => state.order.getOrder)
  console.log("getOrder--->", getOrder)
  const dispatch = useDispatch()
  
  const pathname = location.pathname
  const part = pathname.split('/')
  const orderId = part[2]



  useEffect(() => {
    const data = async () => {
     await dispatch(fetchGetOrder(user?.customerId))
    }
    if (orderId && user?.customerId) {
      data();
    }
  }, [orderId, user?.customerId])

  // useEffect(() => {
  //   if (orderList.length > 0) {
  //     setOrders(orderList);
  //     }
  // }, [])
  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const YearDropdown = () => {
    const currentYear = new Date().getFullYear();
    const years = generateYears(2000, currentYear);
    
    return (
      <select className="border  rounded-md mx-2 shadow-md bg-slate-200">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
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
    // backgroundColor:'red',
    color: "black",
    zIndex: "1",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // backgroundColor:'beige',
    border: "1px solid gray",
    // boxShadow:'1px 1px',
    borderRadius: "5px",
    color: "black",
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

  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getOrder.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((getOrder?.length || 0) / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };


  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);


  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., send review, rating, image, and video to the backend)
    console.log({ rating, reviewText, image, video });
    setIsOpen(false); // Close the popup after submission
  };


  const navigate = useNavigate()
  const handleNav = (productId) => {
    navigate(`/detailspage/${productId}`)
  }


  return (
    <div
      className="w-full h-full overflow-y-scroll "
    // style={{marginTop: `${topMargin}px`,}}
    >

      <div className="mx-10">
        <div className="flex justify-between items-center ">
          <h2 className="text-3xl font-semibold"> Your Orders</h2>

          <div className="flex   text-end justify-end items-center">
            {/* <div className="flex  m-5 ">
            <input
              type="text"
              placeholder="search product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-left relative h-12 w-64 bg-white border rounded-xl    p-2 "
            />
          </div> */}
            <div className="flex m-5">
              <Search className="">
                <SearchIconWrapper>
                  <img src={searchimg} className="w-6 absolute " />
                  {/* <SearchIcon /> */}
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
            <button className="border rounded-full w-52 text-xl p-2 bg-blue-900 text-white">
              Search order
            </button>
          </div>
        </div>
        {/* links start */}
        <div className="flex   ">
          <button className=" border-b border-red-500  hover:text-blue-900 text-black w-60   h-9  text-xl">
            Orders
          </button>

          <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
            {" "}
            {""}
            <Link to="/layout/layoutbuyerreceivedgrid"> Received Orders</Link>
          </button>
          <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
            {" "}
            {""}
            <Link to="/layout/layoutbuyerupcominggrid"> Upcoming Orders</Link>
          </button>

          <button className="  border-b hover:border-red-500 hover:text-red-500 text-black w-60 h-9 text-xl">
            {" "}
            {""}
            <Link to="/layout/layoutbuyercancelledgrid"> Cancelled Orders</Link>
          </button>
        </div>
        {/* limks end */}
        <div className="flex my-4">
          <h1>Orders Placed In</h1>
          <YearDropdown className="border rounded-lg" />
        </div>
        {/* section start */}

        {Array.isArray(currentItems) && currentItems.length > 0 ? (   
          currentItems.map((order) => (
            <div key={order.orderId} className="border my-6 rounded-lg shadow-md">
              <div className="flex justify-between border-b pb-2 pt-2 pr-3 pl-3 bg-slate-200">
                <div>
                  <h1>Order Placed</h1>
                  <p>{new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <h1>Total</h1>
                  <p>${order.totalAmount.toFixed(2)}</p>
                </div>
                <div>
                  <h1>Ship To</h1>
                  <p className="text-blue-900">{order.customerName}</p>
                </div>
                <div>
                  <h1>Order ID</h1>
                  <p className="text-blue-900">
                    <Link to="/"> View Order Details | Invoice</Link>
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between pt-3 pr-3 pl-3">
                  <div className="">
                    <h1 className="text-xl font-semibold">Delivery Date</h1>
                    <p>Package was handed to resident</p>
                  </div>
                  <div className="flex flex-col">
                    <button className="border rounded-lg p-2 w-60 shadow-md">
                      Leave Seller Feedback
                    </button>
                    <button
        className="border rounded-lg p-2 my-2 shadow-md"
        onClick={() => setIsOpen(true)}
      >
        Write a product review
      </button>
                  </div>

                {/* review popup */}
                {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Write a Review</h2>

            {/* Text Area */}
            <textarea
              className="border rounded-lg w-full p-2 mb-4"
              rows="4"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>

            {/* Rating Stars */}
            <div className="mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => setRating(star)}
                    className={`h-6 w-6 cursor-pointer ${
                      rating >= star ? "text-yellow-500" : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 20.021 4.665 24l1.335-8.73L0 9.423l8.332-1.268L12 .587z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-1">Rate this product</p>
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Upload Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50"
              />
            </div>

            {/* Video Upload */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Upload Video:</label>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                className="border rounded-lg px-4 py-2 bg-red-600 text-white"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-900 text-white rounded-lg px-4 py-2"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}


                </div>

                <div className="flex border-b">
                  <div className="flex m-0">
                    <img
                      src={order.imageUrl}
                      className="w-28 h-40 m-0 p-2"
                      alt="product"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                      <p className="max-w-2xl text-sky-900 flex flex-wrap">
                        {order.productDescription}
                      </p>
                      <p className="my-2 text-sm">
                        Return Window closed on{" "}
                        {/* {new Date(order.orderDate).toLocaleDateString()} */}
                        {new Date(order.orderDate).toLocaleDateString('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric'
                        }).replace(/\//g, '-')}
                      </p>
                      </div>
                      <div className="flex my-2 cursor-pointer"  onClick={() => handleNav(order.productId)}>
                        <button className="border rounded-lg p-2 bg-blue-900 text-white w-48 shadow-md">
                           Buy it again
                        </button>
                        {/* <button className="border rounded-lg p-2 mx-3 shadow-md w-48">
                        <Link to={`/detailspage/${order.productId}`}>
                          View your item
                        </Link>
                      </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button className="text-blue-900">Archive order</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center my-4">
            <p>No orders available</p>
          </div>
        )}

        
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={getOrder}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {/* section end */}
      </div>
    </div>

  );
}

export default LayoutOrderList;