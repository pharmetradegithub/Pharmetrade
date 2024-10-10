import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import wrong from "../../../../assets/Icons/wrongred.png";
import { FaPlus } from "react-icons/fa6";
// import ProductFields from "../Components/ProductFields";
// import EditFields from "../Components/EditFields";
import filter from "../../../../assets/Filter_icon.png";
import edit from "../../../../assets/Edit.png";
import Bin from "../../../../assets/Bin.png";
import Deactivate from "../../../../assets/Deactivate.png";
import Loading from "../../../Loading";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
import next from "../../../../assets/Next_icon.png";
import previous from "../../../../assets/Previous_icon.png";
import {
  DeleteProductAPI,
  fetchDeactiveProduct,
} from "../../../../Api/ProductApi";
import Notification from "../../../Notification";
import Pagination from "../../../Pagination";

const LayoutPostingProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const deactives = useSelector((state) => state.product.deactiveProduct);
  console.log("listing-->", deactives);
  const deletes = useSelector((state) => state.product.deleteProduct);
  console.log("delete-->", deletes);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [deactive, setdeactive] = useState(null);
  const sellerDashboard = useSelector((state) => state.dashboard.getSellerId);
  console.log("sellerdash-->", sellerDashboard);

  const [deleteProduct, setDeleteProduct] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [showPopup, setShowPopup] = useState({
    editProduct: false,
  });
  const user = useSelector((state) => state.user.user);
  console.log("userId-->", user);
  const [editProduct, seteditProduct] = useState(null);
  // const stats = [
  //   { label: "Total Product", value: sellerDashboard?.totalProducts, percentage: 75 },
  //   {
  //     label: "Total Approved Product", value: sellerDashboard?.activeProducts, percentage: 60 },
  //   // { label: "Total Enabled Product", value: 90, percentage: -11 },
  //   { label: "Price", value: sellerDashboard?.totalSaleValue, percentage: 50 },
  // ];
  const calculatePercentage = (part, total) => {
    if (!part || !total || total === 0 || isNaN(part) || isNaN(total)) {
      return 0; // Return 0 if values are invalid or total is 0
    }
    return (part / total) * 100;
  };

  const stats = [
    {
      label: "Total Product",
      value: sellerDashboard?.totalProducts || 0, // Fallback to 0 if undefined or null
      percentage: 100, // Since it's the total, it represents 100%
    },
    {
      label: "Total Approved Product",
      value: sellerDashboard?.activeProducts || 0,
      percentage: calculatePercentage(
        sellerDashboard?.activeProducts,
        sellerDashboard?.totalProducts
      ), // Calculating the percentage
    },
    {
      label: "Price",
      value: sellerDashboard?.totalSaleValue || 0,
      percentage: calculatePercentage(
        sellerDashboard?.totalSaleValue,
        sellerDashboard?.totalProducts
      ), // Assuming you're calculating the price per product
    },
  ];

  const queryParam = location.pathname;
  const parts = queryParam.split("/");
  const listed = parts[2];
  const [trigger, settrigger] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading state before the request

      try {
        const response = await fetch(
          `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/GetBySeller?sellerId=${user?.customerId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data.result);
      } catch (error) {
        setError(error); // Handle and store error
      } finally {
        setLoading(false); // Ensure loading is stopped
      }
    };

    if (listed && user?.customerId) {
      fetchProducts();
    }
  }, [listed, user?.customerId, trigger]);

  const handleAddNewProductClick = () => {
    navigate("layout/addproduct");
  };

  const handleEditProduct = (product) => {
    navigate(`/layout/addproduct?productId=${product.productID}`);
  };

  const handleClosePopup = () => {
    setShowPopup({ addProduct: false, editProduct: false });
  };
  console.log("ghjkghfgvbg", products);

  // const itemsPerPage = 10;
  // const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);

  const [openPop, setOpenPop] = useState(false);
  const [deletePop, setDeletePop] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((products?.length || 0) / itemsPerPage);

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

  // const handleNextPage = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  // const handlePreviousPage = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  const deactivatePopUp = (productID) => {
    setOpenPop(true);
    setdeactive(productID);
  };
  const cancelButton = () => {
    setOpenPop(false);
  };

  const successButton = () => {
    try {
      dispatch(fetchDeactiveProduct(deactive));
      setOpenPop(false);
      setNotification({
        show: true,
        message: "Product Deactivate Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const closeButton = () => {
    setOpenPop(false);
  };
  const DeleteProduct = (productID) => {
    setDeletePop(true);
    setDeleteProduct(productID);
  };
  const cancelDeleteButton = () => {
    setDeletePop(false);
  };
  const successDeleteButton = async () => {
    try {
      await DeleteProductAPI(deleteProduct);
      settrigger((prev) => prev + 1);
      setDeletePop(false);
      setNotification({ show: true, message: "Product Delete Successfully!" });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const closeDeleteButton = () => {
    setDeletePop(false);
  };

  

  return (
    <div className="relative  bg-gray-100 w-full h-full flex justify-center overflow-scroll items-center">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      {openPop && (
        <div
          className="fixed top-0 left-25 w-4/5 h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
            <div className="flex justify-end  ">
              <button className="w-5 p-1 -mt-8 mx-2" onClick={closeButton}>
                <img src={wrong} className="w-6 h-4" />
              </button>
            </div>
            <h1 className="text-black text-center mt-2">
              Are you sure you want to deactivate this product ?
            </h1>
            <div className="flex justify-around mt-6">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={cancelButton}
              >
                No
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={successButton}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      {deletePop && (
        <div
          className="fixed top-0 left-25 w-4/5 h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
            <div className="flex justify-end  ">
              <button
                className="w-5 p-1 -mt-8 mx-2"
                onClick={closeDeleteButton}
              >
                <img src={wrong} className="w-6 h-4" />
              </button>
            </div>
            <h1 className="text-black text-center mt-2">
              Are you sure you want to delete this product ?
            </h1>
            <div className="flex justify-around mt-6">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={cancelDeleteButton}
              >
                No
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={successDeleteButton}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between">
          <h2 className="text-[22px] text-blue-900 font-semibold">
            Marketplace Product List
          </h2>
          <Link to="/layout/addproduct">
            <button
              className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md"
              onClick={handleAddNewProductClick}
            >
              <FaPlus /> Add New Product
            </button>
          </Link>

          {/* {showPopup.addProduct && (
            <div className="absolute bg-black inset-0 flex items-center justify-center overflow-scroll bg-gray-">
              <ProductFields />
              <button onClick={handleClosePopup}>Close</button>
            </div>
          )} */}
        </div>

        <div className="flex flex-wrap gap-2 w-full justify-normal items-center  p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[15px] text-gray-700 font-normal">
                    {stat.label}
                  </div>
                  <div className="menu-icon">
                    <CiMenuKebab />
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  {/* <div
                    className={`text-sm p-1 rounded-lg ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"}{" "}
                    {Math.abs(stat.percentage)}%
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex justify-end">
            <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button>
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div>

          <div className="text-[15px] mt-4">
            {loading && (
              <div>
                <Loading />
              </div>
            )}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && (
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr className="border-b-2">
                    <th className="px-4 py-2 text-left">S.No</th>
                    <th className="px-4 py-2 text-left">Thumbnail</th>
                    <th className=" px-4 py-2 text-left">Product Name</th>
                    <th className="px-4 py-2 text-left">Created Date</th>
                    <th className="px-4 py-2 text-left">Unit Price</th>
                    <th className="px-4 py-2 text-left">Saleprice Start</th>
                    <th className="px-4 py-2 text-left">Saleprice End</th>
                    <th className="px-4 py-2 ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No products available
                      </td>
                    </tr>
                  ) : (
                    currentItems.map((product, index) => (
                      <tr key={product.id} className="border-b">
                        <td className="px-4 py-2">
                          {indexOfFirstItem + index + 1}
                        </td>
                        <td className="px-4 py-2">
                          <img
                            src={product?.productGallery?.imageUrl}
                            className="w-14 object-cover"
                          />
                        </td>
                        <td className="px-4 py-2">{product.productName}</td>
                        <td className="px-4 py-2">{}</td>
                        <td className="px-4 py-2">{product.unitPrice.toFixed(2)}</td>
                        <td className="px-4 py-2">{new Date(product.salePriceValidFrom).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                          .replace(/\//g, "-")}</td>
                        <td className="px-4 py-2">{new Date(product.salePriceValidTo).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                          .replace(/\//g, "-")}</td>


                        <td className="px-4 py-2 cursor-pointer flex items-center space-x-2">
                          <Tooltip title="Edit" placement="top">
                            <img
                              src={edit}
                              alt="Edit"
                              className="cursor-pointer w-7 h-7"
                              onClick={() => handleEditProduct(product)}
                            />
                          </Tooltip>
                          <Tooltip placement="top" title="Delete">
                            <img
                              src={Bin}
                              alt="Delete"
                              className="cursor-pointer w-4 h-4"
                              onClick={() => DeleteProduct(product.productID)}
                            />
                          </Tooltip>
                          <Tooltip title="Deactivate" placement="top">
                            <img
                              src={Deactivate}
                              alt="Deactivate"
                              className="cursor-pointer w-4 h-4"
                              onClick={() => deactivatePopUp(product.productID)}
                            />
                          </Tooltip>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
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
          productList={products}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {/* {showPopup.editProduct && (
        <div className="absolute inset-0 flex  flex-col bg-gray-100">
          <button onClick={handleClosePopup} className=" flex justify-end mr-4">
            Close
          </button>

          <EditFields product={editProduct} />
        </div>
      )} */}
    </div>
  );
};

export default LayoutPostingProducts;
