import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
// import ProductFields from "../Components/ProductFields";
// import EditFields from "../Components/EditFields";
// import QuoteDetail from "../Components/QuoteDetail";
import filter from "../../../assets/Filter_icon.png";
import edit from "../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Deactivate from "../../../assets/Deactivate.png";
import { Tooltip } from "@mui/material";
const LayoutAllrequestedQuote = () => {
  const stats = [
    { label: "Return Requested", value: 150, percentage: 75 },
    { label: "Return Approved", value: 120, percentage: 60 },
    { label: "Return PickedUp", value: 90, percentage: -11 },
    { label: "Refund Processed", value: 20, percentage: 50 },
  ];

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleEditProduct = (request) => {
    setSelectedRequest(request);
    setShowEditPopup(true);
  };

  const requests = [
    {
      customer: "Ram",
      quote: "Metrogyl",
      status: "Pending",
      created: "22-08-12",
      // action: "View",
      bulkQuantity: 1000
    },
    {
      customer: "Shyam",
      quote: "HYDROCORT 60ML7",
      status: "Answered",
      created: "22-08-14",
      // action: "View",
      bulkQuantity: 500
    },
  ];

  return (
    <div className="relative bg-gray-100  w-full h-full flex justify-center items-center ">
      <div className=" w-[95%] h-full mt-8">
        <div className=" flex justify-between">
          <p className="text-[22px] text-blue-900 font-semibold">
            {" "}
            All Requested Quote{" "}
          </p>
        </div>

        <div className="flex my-4 gap-2 justify-normal flex-wrap items-center p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56  border rounded-lg shadow-lg flex justify-between items-center bg-white"
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
                  <div
                    className={`text-sm p-1 rounded-lg ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex justify-end">
          <button className="bg-green-300 p-2 h-7 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button>
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div>

          <div className="overflow-x-scroll text-[15px] w-full mt-4 font-sans">
            <table className="rounded-lg bg-white w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="border-b-2 py-4 min-w-36 pl-4 text-left">
                    Customer Name
                  </th>
                  <th className="border-b-2 min-w-36 text-left">
                    Requested Quote For Product
                  </th>
                  <th className="border-b-2 min-w-36 text-left">Status</th>
                  <th className="border-b-2 min-w-36 text-left">Created At</th>
                  <th className="border-b-2 min-w-36 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-gray-600 text-lg py-4 px-2">
                      We couldn't find any records
                    </td>
                  </tr>
                ) : (
                  requests.map((request, index) => (
                    <tr key={index}>
                      <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
                        {request.customer}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {request.quote}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {request.status}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {request.created}
                      </td>
                      <td
                        className="border-b-2 min-w-36 text-left cursor-pointer"
                        onClick={() => handleEditProduct(request)}
                      >
                        {/* {request.action} */}
                        <td className="-ml-2 py-2 cursor-pointer flex items-center space-x-2">
                          <Tooltip title="Edit" placement="top">
                            <img
                              src={edit}
                              alt="Edit"
                              className="cursor-pointer w-7 h-7"
                              // onClick={() => handleEditProduct(product)}
                            />
                          </Tooltip>
                          <Tooltip placement="top" title="Delete">
                            <img
                              src={Bin}
                              alt="Delete"
                              className="cursor-pointer w-4 h-4"
                              // onClick={() => DeleteProduct(product.productID)}
                            />
                          </Tooltip>
                          <Tooltip title="Deactivate" placement="top">
                            <img
                              src={Deactivate}
                              alt="Deactivate"
                              className="cursor-pointer w-4 h-4"
                              // onClick={() => deactivatePopUp(product.productID)}
                            />
                          </Tooltip>
                        </td>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* {showEditPopup && selectedRequest && (
        <div className="w-full absolute h-full  inset-0 flex overflow-scroll bg-gray-100 ">
          <QuoteDetail request={selectedRequest} />
        </div>
      )} */}
    </div>
  );
};

export default LayoutAllrequestedQuote;
