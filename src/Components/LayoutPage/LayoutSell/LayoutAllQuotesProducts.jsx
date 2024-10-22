import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
// import QuoteDetail from "../Components/QuoteDetail";
import filter from "../../../assets/Filter_icon.png";
import { useSelector } from "react-redux";
import { fetchQuotedProduct } from "../../../Api/BidApi";
import Bin from "../../../assets/Bin.png";
import { Tooltip } from "@mui/material";

import Pagination from "../../Pagination";

const LayoutAllQuotesProducts = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const bidQuotedProduct = useSelector((state) => state.bid.bidQuotedProduct)
  console.log("bidquotedProduct", bidQuotedProduct)
  const stats = [
    { label: "Return Requested", value: 150, percentage: 75 },
    { label: "Return Approved", value: 120, percentage: 60 },
    { label: "Return PickedUp", value: 90, percentage: -11 },
    { label: "Refund Processed", value: 20, percentage: 50 },
  ];

  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEditProduct = () => {
    setShowEditPopup(true);
  };

  const quotes = [
    {
      id: 234,
      thumbnail: "Metrogyl",
      price: "67",
      status: "Sent to Seller",
      quantity: "4",
      created: "22-08-12",
      updated: "22-08-12",
    },
    {
      id: 430,
      thumbnail: "Metrogyl",
      price: "89",
      status: "Sent to Seller",
      quantity: "6",
      created: "22-08-12",
      updated: "22-08-12",
    },
  ];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  const [currentItems, setcurrentItems] = useState(
    bidQuotedProduct.slice(indexOfFirstItem, indexOfLastItem)
  );
  useEffect(() => {
    if (bidQuotedProduct) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setcurrentItems(bidQuotedProduct.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage,bidQuotedProduct]);
  const user = useSelector((state) => state.user.user)
  useEffect(() => {
    console.log("useEffect called")
    const product = async() => {
      await fetchQuotedProduct(user.customerId)
    }
    product()
  }, [])

  return (
    <div className="relative bg-gray-100 w-full h-full flex justify-center items-center overflow-y-auto">
      <div className=" w-[95%] h-full mt-8">
        <div className=" flex justify-between">
          <p className="text-[22px] text-blue-900 font-semibold">
            {" "}
            All Quoted Products{" "}
          </p>
        </div>

        <div className="flex my-4 gap-2 flex-wrap justify-normal items-center p-4">
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
                  {/* <div className="menu-icon">
                    <CiMenuKebab />
                  </div> */}
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
          {/* <div className="flex justify-end">
            <button className="bg-green-300 p-2 h-7 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button>{" "}
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div> */}

          <div className=" text-[15px] w-[95%] mt-4 font-sans">
            <table className="rounded-lg bg-white w-[95%]">
              <thead className="bg-blue-900 text-white">
                <tr>
                  {/* <th className="border-b-2 py-4 min-w-36 pl-4 text-left">
                    Product Id
                  </th> */}
                  {/* <th className="border-b-2 min-w-36 text-left">Thumbnail</th> */}
                  <th className="border-b-2 py-2  pl-4 text-left">S.NO</th>
                  <th className="border-b-2 py-2  pl-4 text-left">Product Name</th>
                  <th className="border-b-2  text-left">Price</th>
                  <th className="border-b-2  text-left">Quantity</th>
                  <th className="border-b-2  text-left">Created Date</th>
                  <th className="border-b-2  text-left">Customer Name</th>
                  <th className="border-b-2 text-left">Status</th>
                  <th className="border-b-2  text-left">Action</th>

                  {/* <th className="border-b-2 min-w-36 text-left">
                    Bulk Order Quantity
                  </th> */}
                  {/* <th className="border-b-2 min-w-36 text-left">Updated On</th> */}
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-gray-600 text-lg py-2 px-2">
                      We couldn't find any records
                    </td>
                  </tr>
                ) : (
                    currentItems.map((quoted, index) => (
                    <tr key={index}>
                      {/* <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
                        {quoted.id}
                      </td> */}
                      <td className="border-b-2 text-center cursor-pointer">
                        {indexOfFirstItem+index + 1}
                      </td>
                      {/* <td className="border-b-2 py-2  px-2 pl-4 text-left">
                          {quoted.productName}
                      </td> */}
                      <td className="border-b-2 py-2  px-2 pl-4 text-left">
                      <Tooltip title={quoted.productName} placement="right">
                          <span className="truncate block w-24 cursor-pointer"> {/* Truncate and make clickable */}
                          {quoted.productName}
                          </span>
                        </Tooltip>
                        </td>
                      <td className="border-b-2 px-2 text-left">
                      $ {quoted.price ? Number(quoted.price).toFixed(2) : "0.00"}
                      </td>
                      <td className="border-b-2 px-2 text-left cursor-pointer">
                        {quoted.quantity}
                      </td>
                      <td className="border-b-2 px-2  text-left cursor-pointer">
                          
                          {new Date(quoted.createdOn)
                            .toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, "-")}
                      </td>
                      <td className="border-b-2 px-2 text-left cursor-pointer">
                          {quoted.customerName}
                      </td>
                      <td className="border-b-2 px-2  text-left">
                          {quoted.isActive ? "Active" : "Inactive"}
                      </td>
                        <td className="border-b-2 px-2 text-left">
                        <Tooltip placement="top" title="Delete">
                          <img
                            src={Bin}
                            alt="Delete"
                            className="cursor-pointer w-4 h-4 ml-4"
                          // onClick={() => DeleteProduct(product.productID)}
                          />
                        </Tooltip>
</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={bidQuotedProduct}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default LayoutAllQuotesProducts;
