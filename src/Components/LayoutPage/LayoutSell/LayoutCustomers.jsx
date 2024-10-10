
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Tooltip } from "@mui/material";
import edit from "../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import wrong from "../../../assets/Icons/wrongred.png";
import Deactivate from "../../../assets/Deactivate.png";
import filter from "../../../assets/Filter_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellCustomer } from "../../../Api/Dashboard";

function LayoutCustomers() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const sellCustomer = useSelector((state) => state.dashboard.sellCustomer);
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(fetchSellCustomer(user?.customerId));
  }, [dispatch]);

  const customers = [
    {
      name: "Rama Manda",
      email: "ram@pharmetrade",
      contact: "7893497040",
      address: "Haardinf Ave iselin, New Jersey",
      total: "$9.65",
    },
    {
      name: "Venkat",
      email: "venkat@pharmetrade",
      contact: "9908389318",
      address: "Haardinf Ave iselin, New Jersey",
      total: "$3.98",
    },
  ];

  const [deletePop, setDeletePop] = useState(false);
  const [openPop, setOpenPop] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [deletedCustomers, setDeletedCustomers] = useState([]); // Track deleted customers
  const [deactivatedCustomers, setDeactivatedCustomers] = useState([]); // Track deactivated customers

  // Open Deactivate Popup
  const deactivatePopUp = (customer) => {
    setSelectedCustomer(customer);
    setOpenPop(true);
  };

  // Open Delete Popup
  const deletePopUp = (customer) => {
    setSelectedCustomer(customer);
    setDeletePop(true);
  };

  // Close Deactivate Popup
  const closeDeactivatePopup = () => {
    setOpenPop(false);
  };

  // Close Delete Popup
  const closeDeletePopup = () => {
    setDeletePop(false);
  };

  // Confirm Deactivation
  const confirmDeactivate = () => {
    if (selectedCustomer) {
      setDeactivatedCustomers([...deactivatedCustomers, selectedCustomer.name]);
    }
    setOpenPop(false);
  };

  // Confirm Delete
  const confirmDelete = () => {
    if (selectedCustomer) {
      setDeletedCustomers([...deletedCustomers, selectedCustomer.name]);
    }
    setDeletePop(false);
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold">Marketplace Customers</h1>
        </div>

        <div className="flex justify-normal flex-wrap gap-2 w-full mt-4 ">
          {/* Add stats and percentages display here */}
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search Customers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-xl h-12 w-64 text-left p-2"
            />
            <CiSearch className="absolute right-0 top-4 text-gray-400 mr-2" />
          </div>
          <div className="flex">
            <div className="flex p-1">
              <button className="bg-green-300 p-2 rounded-md h-7 flex items-center">
                <img src={filter} className="w-6 h-6 " alt="Filter" />
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="border text-[15px] rounded-md bg-white mt-4">
  <table className="w-full">
    <thead className="bg-blue-900 text-white">
      <tr className="border-b-2">
        <th className="px-4 py-2 text-left">Customer Name</th>
        <th className="px-4 py-2 text-left">Email</th>
        <th className="px-4 py-2 text-left">Contact No</th>
        <th className="px-4 py-2 text-left">Address</th>
        <th className="px-4 py-2 text-left">Grand Total</th>
        <th className="px-4 py-2 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      {sellCustomer.length > 0 ? (
        sellCustomer.map((customer, i) => (
          <tr key={i} className="border-b">
            <td className="px-4 py-2">{customer.customerName}</td>
            <td className="px-4 py-2">{customer.email}</td>
            <td className="px-4 py-2">{customer.mobile}</td>
            <td className="px-4 py-2">{customer.address1}</td>
            <td className="px-4 py-2">{customer.totalAmount}</td>
            <td className="px-4 py-2 flex items-center space-x-2 justify-center">
              <Tooltip title="Edit" placement="top">
                <img
                  src={edit}
                  alt="Edit"
                  className={`cursor-pointer w-7 h-7 ${
                    deletedCustomers.includes(customer.name) ||
                    deactivatedCustomers.includes(customer.name)
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                  onClick={() => console.log("Edit clicked")}
                />
              </Tooltip>
              <Tooltip title="Delete" placement="top">
                <img
                  src={Bin}
                  alt="Delete"
                  className={`cursor-pointer w-5 h-5 ${
                    deletedCustomers.includes(customer.name) ||
                    deactivatedCustomers.includes(customer.name)
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                  onClick={() => deletePopUp(customer)}
                />
              </Tooltip>
              <Tooltip title="Deactivate" placement="top">
                <img
                  src={Deactivate}
                  alt="Deactivate"
                  className={`cursor-pointer w-4 h-4 ${
                    deletedCustomers.includes(customer.name) ||
                    deactivatedCustomers.includes(customer.name)
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                  onClick={() => deactivatePopUp(customer)}
                />
              </Tooltip>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6" className="px-4 py-2 text-center">
            No customer details
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

      </div>

      {/* Deactivate Popup */}
      {openPop && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          

<div className="bg-white p-6 rounded-lg shadow-lg">
  <div className="flex justify-end">
    <img 
      src={wrong} 
      alt="Warning" 
      className="w-5 h-5 cursor-pointer" 
      onClick={closeDeactivatePopup} 
    />
  </div>
  
  <p className="mt-2">
    Are you sure you want to deactivate this product?
  </p>

  <div className="mt-4 flex justify-around space-x-4">
    <button
      className="px-4 py-2 text-white bg-red-500 rounded-lg"
      onClick={closeDeactivatePopup}
    >
      No
    </button>
    <button
      className="px-4 py-2 bg-green-500 text-white rounded-lg"
      onClick={confirmDeactivate}
    >
      Yes
    </button>
  </div>
</div>

        </div>
      )}

      {/* Delete Popup */}
      {deletePop && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
<div className="bg-white p-6 rounded-lg shadow-lg">
  <div className="flex justify-end">
    <img 
      src={wrong} 
      alt="Warning" 
      className="w-5 h-5 cursor-pointer" 
      onClick={closeDeletePopup}
    />
  </div>
  
  <p className="mt-2">
    Are you sure you want to delete this product?
  </p>

  <div className="mt-4 flex justify-around space-x-4">
    <button
      className="px-4 py-2 text-white bg-red-500 rounded-lg"
      onClick={closeDeletePopup}
    >
      No
    </button>
    <button
      className="px-4 py-2 bg-green-500 text-white rounded-lg"
      onClick={confirmDelete}
    >
      Yes
    </button>
  </div>
</div>

        </div>
      )}
    </div>
  );
}

export default LayoutCustomers;
