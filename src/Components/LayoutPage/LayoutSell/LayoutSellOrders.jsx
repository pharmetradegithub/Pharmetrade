import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import filter from "../../../assets/Filter_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetOrderBySellerId, fetchOrderDownloadInvoice, fetchOrderInvoice, fetchOrderView } from "../../../Api/OrderApi";
import { FaFileInvoice } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import eye from '../../../assets/eye.png'
import Invoice from '../../../assets/Icons/Invoice.png'
import download from '../../../assets/Icons/download.png'
import wrong from "../../../assets/Icons/wrongred.png";
import Pagination from "../../Pagination";

function LayoutSellOrders() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user);
  const [searchQuery, setSearchQuery] = useState("");
  const SellerOrder = useSelector((state) => state.order.OrderBySellerId)
  console.log("sellerOrder---->", SellerOrder)
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const ordered = useSelector((state) => state.order.orderView)
  console.log("orderedview-->", ordered) 
  const localData = localStorage.getItem("userId")
  const products = [
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "001",
      thumbnail: "D061D23",
      name: "Another Medicine",
      attributeSet: "250",
      productStatus: "",
      status: "",
      type: "View Order",
    },
  ];

  const stats = [
    { label: "Total Orders", value: SellerOrder ? SellerOrder.length : 0, percentage: SellerOrder ? ((SellerOrder.length - 100) / 100 * 100).toFixed(2) : 0, },
    { label: "Total Products", value: SellerOrder ? SellerOrder.length : 0, percentage: SellerOrder ? ((SellerOrder.length - 100) / 100 * 100).toFixed(2) : 0, },
    {
      label: "Base Amount",
      value: SellerOrder
        ? Math.floor(SellerOrder.reduce((total, order) => total + (order.baseAmount || 0), 0))
        : 0,
      percentage: SellerOrder
        ? Math.floor(((Math.floor(SellerOrder.reduce((total, order) => total + (order.baseAmount || 0), 0)) - 1500) / 1500) * 100)
        : 0,
    },
    {
      label: "Purchase Amount",
      value: SellerOrder
        ? Math.floor(SellerOrder.reduce((total, order) => total + (order.totalAmount || 0), 0))
        : 0,
      percentage: SellerOrder
        ? Math.floor(((Math.floor(SellerOrder.reduce((total, order) => total + (order.totalAmount || 0), 0)) - 2000) / 2000) * 100)
        : 0,
    },
  ];

  // const filteredProducts = products.filter(
  //   (product) =>
  //     product?.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     product?.productId.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const pathname = location.pathname; // e.g., /layout/sellorders/123
  console.log("pathname-->", pathname)
  const parts = pathname.split('/'); // ['layout', 'sellorders', '123']
  console.log("parts--->", parts)
  const orderSellerId = parts[2]; // Assuming '123' is the seller ID
  console.log("orderSeller-->", orderSellerId)

  const [modal, setModal] = useState(false) 
  const [orderID,setOrderID] = useState(null)

  useEffect(() => {
    const fetchGetOrder = async () => {
      if (user?.customerId) {
        await dispatch(fetchGetOrderBySellerId(user.customerId));
      }
    };

    if (orderSellerId) {
      fetchGetOrder();
    }
  }, [user, orderSellerId, dispatch]);

  const handleClickView = async (orderId) => {
     
     setModal(true)
    await dispatch(fetchOrderView(orderId))
    setOrderID(orderId)
  }

  const handleClickInvoice = async () => {
    // console.log("ordersdf", ordered?.orderId)
    await dispatch(fetchOrderInvoice(orderID))
  }

  // const handleDownload = (orderId) => {
  //   dispatch(fetchOrderDownloadInvoice(orderId))
  // }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = SellerOrder.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((SellerOrder?.length || 0) / itemsPerPage);
  return (
    
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-[85%] flex flex-col"
            onClick={(e) => e.stopPropagation()} /* Stop click from closing modal */
          >
            {/* Close button */}
            <button
              className="self-end text-red-500 font-bold py-1 px-2 rounded hover:bg-red-100"
              onClick={() => setModal(false)}
            >
              <img src={wrong} className="w-6 h-4"/>
            </button>

            {/* Content section */}
            <div
              dangerouslySetInnerHTML={{ __html: ordered }}
              className="mt-4 overflow-y-scroll flex-grow"
            />

            {/* Buttons at the bottom */}
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
              <button className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 cursor-pointer" onClick={() => setModal(false)}>
                Cancel
              </button>
              <button className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 cursor-pointer" onClick={handleClickInvoice}>
                <img src={Invoice} alt="Invoice" className="inline w-6 h-6 mr-2" />
                Send Invoice
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold">List of Orders</h1>
          {/* <button className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md">
            <FaPlus /> Add New Product
          </button> */}
        </div>

        <div className="flex flex-wrap my-4 gap-2 -ml-8 justify-normal items-center p-4">
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
                    className={`text-sm ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    } p-1 rounded-lg`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          {/* search start */}
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search Product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-xl h-12 w-64 text-left px-2"
            />
            <CiSearch className="absolute right-0 top-4 text-gray-400 mr-2" />
          </div>
          {/* search end */}
          <div className="flex gap-2">
            <div className="flex  ">
            <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button>
              {/* <FaFilter className="m-2" /> */}
              {/* <button className='text-2xl'>Filter</button> */}
            </div>
            <div className="flex bg-white h-9 p-2 items-center w-48 justify-evenly border rounded-md">
     
              <select className="">
                <option>-Select Group-</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border rounded-md text-[15px] bg-white mt-4">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b-2">
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Thumbnail</th>
                <th className="px-4 py-2 text-left">Product Name</th>
                <th className="px-4 py-2 text-left">Purchased On</th>
                <th className="px-4 py-2 text-center">Amount</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {(() => {
                const rows = [];
                for (let i = 0; i < filteredProducts.length; i++) {
                  rows.push(
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2">{[i + 1]}</td>
                      <td className="px-4 py-2">{filteredProducts?.orderDate}</td>
                      <td className="px-4 py-2">{filteredProducts?.productName}</td>
                      <td className="px-4 py-2">{filteredProducts?.totalAmount}</td>
                      <td className="px-4 py-2">{filteredProducts?.customerName}</td>
                      <td className="px-4 py-2">{filteredProducts?.status}</td>
                      <td className="px-4 py-2">view order</td>
                    </tr>
                  );
                }
                return rows;
              })()}
            </tbody> */}
              
              {Array.isArray(currentItems) && currentItems.length > 0 ?(
                currentItems.map((product, index) => (
                  <tr key={product.productId} className="border-b">
                    <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                    <td className="px-4 py-2"><img className="w-10 h-10" src={product.imageUrl} /></td>
                    <td className="px-4 py-2">{product?.productName}</td>
                    <td className="px-4 py-2">{new Date(product.orderDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                              }).replace(/\//g, '-')}</td>
                    <td className="text-right px-4 py-2">${product?.totalAmount.toFixed(2)}</td>
                    <td className="px-4 py-2">{product?.customerName}</td>
                    <td className="px-4 py-2">{product?.status}</td>
                    <td className="px-4 py-2 cursor-pointer flex gap-1">
                      <Tooltip title="ViewInvoice" placement="top">
                        <img src={eye} className="w-5 h-5" onClick={() => handleClickView(product?.orderId)} />
                        {/* <FaFileInvoice className="w-5 h-5"/> */}
                      </Tooltip>
                    {/* <Tooltip title="Invoice" placement="top">
                      <img src={Invoice} className="w-5 h-5" onClick={() => handleClickInvoice(product?.orderId)}/>
                      {/* <FaFileInvoice className="w-5 h-5"/> 
                      </Tooltip> */}
                      <Tooltip title="Download" placement="top">
                        <img src={download} className="w-5 h-5"/>
                      </Tooltip>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No Product available
                  </td>
                </tr>
              )}
              </tbody>
          </table>
        </div>
          <Pagination
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}
            productList={SellerOrder}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
      </div>
    </div>
  );
}

export default LayoutSellOrders;



