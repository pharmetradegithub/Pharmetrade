// import React, { useEffect, useState } from 'react';
// import { GetCustomers } from '../../../Api/AdminApi';
// import edit from "../../../assets/Edit.png";
// import Bin from "../../../assets/Bin.png";
// import Deactivate from "../../../assets/Deactivate.png";
// import { Tooltip } from "@mui/material";




// const SellerList = () => {
//   const [customers,setcustomers]=useState([]);
//   useEffect(() => {
//     const fetchcustomers =async ()=>{
//       const res  = await GetCustomers();
//       const filteredCustomers = res.filter(customer => 
//         [1, 2, 3].includes(customer.customerTypeId)
//       );
//       setcustomers(filteredCustomers);    
//     }
//       fetchcustomers();
//   }, [])
  
//   return (
//     <div className="bg-gray-100 w-full h-full flex items-center justify-center">
//       <div className="w-[95%] h-full mt-8">
//         <h1 className="text-xl text-blue-900 font-semibold mb-4">Seller List</h1>
//         <div className="overflow-y-auto h-full">
//           <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//             <thead className=" text-white text-lg bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th className="px-6 py-3 text-center">ID</th>
//                 <th className="px-6 py-3">User Profile</th>
//                 <th className="px-6 py-3 text-center">Status</th>
//                 <th className="px-6 py-3 text-center">Phone</th>
//                 <th className="px-6 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {customers?.map((customer, index) => (
//                 <tr
//                   key={index}
//                   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                 >
//                   <td className="px-6  text-center">{index+1}</td>
//                   <th
//                     scope="row"
//                     className="flex items-center px-6  text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {/* <img
//                       className="w-10 h-10 rounded-full"
//                       src={customer.profileImage}
//                       alt={`${customer.name} profile`}
//                     /> */}
//                     <div className="">
//                       <div className="text-base items-center font-semibold">{customer.firstName}{""}{customer.lastName}</div>
//                       <div className="font-normal text-gray-500">{customer.email}</div>
//                     </div>
//                   </th>
//                   {/* <td className="px-6 py-4 text-center">{customer.country}</td> */}
//                   <td className="px-6  text-center">
//                     <div className="flex justify-center items-center">
//                       <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
//                       {customer.status} Active
//                     </div>
//                   </td>
//                   <td className="px-6  text-center">{customer.mobile}</td>
                 
//                       <td className="px-4  cursor-pointer text-center justify-center  flex items-center space-x-2">
//                           <Tooltip title="Edit" placement="top">
//                             <img
//                               src={edit}
//                               alt="Edit"
//                               className="cursor-pointer w-7 h-7 -mb-5"
//                               onClick={() => handleEditProduct(product)}
//                             />
//                           </Tooltip>
//                           <Tooltip placement="top" title="Delete">
//                             <img
//                               src={Bin}
//                               alt="Delete"
//                               className="cursor-pointer w-4 h-4 -mb-5"
//                               onClick={() => DeleteProduct(product.productID)}
//                             />
//                           </Tooltip>
//                           <Tooltip title="Deactivate" placement="top">
//                             <img
//                               src={Deactivate}
//                               alt="Deactivate" 
//                               className="cursor-pointer w-4 h-4 -mb-5"
//                               onClick={() => deactivatePopUp(product.productID)}
//                             />
//                           </Tooltip>
//                         </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerList;
import React, { useEffect, useState } from "react";
import { GetByAdminCriteriaAPI, GetCustomers } from "../../../Api/AdminApi";
import edit from "../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Deactivate from "../../../assets/Deactivate.png";
import { Tooltip } from "@mui/material";
import Pagination from "../../Pagination";
import { useNavigate } from "react-router-dom";
import { getUserByCustomerIdApi } from "../../../Api/UserApi";
import { useSelector } from "react-redux";
const SellerList = () => {
  const [customers, setcustomers] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((customers?.length || 0) / itemsPerPage);
  const navigate = useNavigate();
  const businessInfo = useSelector((state)=>state.user.businessInfo);
  console.log("bbbbbb", businessInfo)

  useEffect(() => {
    const fetchcustomers = async () => {
      const res = await GetCustomers();
      const filteredCustomers = res.filter((customer) =>
        [1].includes(customer.customerTypeId)
      );
      setcustomers(filteredCustomers);
    };
    fetchcustomers();
  }, []);

  const [SearchInput, setSearchInput] = useState({
    customerName: null,
    customerTypeId: 0,
  });
  const handleInputChange = (e) => {
    console.log(e.target.name);
    setSearchInput({
      ...SearchInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior
      handleSearchClick(); // Call submit function when Enter is pressed
    }
  };
  const handleSearchClick = async () => {
    try {
      const response = await GetByAdminCriteriaAPI(SearchInput);
      setcustomers(response);
    } catch (error) {
      console.log("no fields");
    }
  };
  // const handleEditProduct = (customer) => {
  //   navigate(
  //     `/pharmEtradeadmin/EditSellerListproductId=${customer.customerId}`
  //   );
  // };
  const handleEditProduct = async (customerId) => {
    try {
      await getUserByCustomerIdApi(customerId);
      navigate(`/pharmEtradeadmin/EditSellerList`);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(`sellers data`, currentItems);
  return (
    <>
      <div className="bg-gray-100 w-full h-full flex overflow-y-scroll items-center justify-center">
        <div className="w-[95%] h-full mt-8">
          <div className="flex justify-between">
            <h1 className="text-xl text-blue-900 font-semibold mb-4">
              Retail Pharmacy List
            </h1>
            <div className="flex  mb-4">
              <input
                className="rounded-lg p-1"
                placeholder="Search..."
                name="customerName"
                onChange={(e) => handleInputChange(e)}
                onKeyDown={handleKeyDown}
                value={SearchInput.customerName}
              />
            </div>
          </div>
          <div className="overflow-y-auto h-full clearfix">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-lg text-white  bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3 text-center">S.NO</th>
                  <th className="px-6 py-3">User Name</th>
                  <th className="px-6 py-3">Registration Date</th>
                  <th className="px-6 py-3">Activation Date</th>
                  <th className="px-6 py-3 text-center">Status</th>
                  <th className="px-6 py-3 text-center">Phone</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((customer, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6  text-center">
                      {indexOfFirstItem + index + 1}
                    </td>
                    {/* <th
                      scope="row"
                      className="flex items-center px-6  text-gray-900 whitespace-nowrap dark:text-white"
                    > */}
                    <th
                      scope="row"
                      className="flex items-center px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {/* <img
                      className="w-10 h-10 rounded-full"
                      src={customer.profileImage}
                      alt={`${customer.name} profile`}
                    /> */}
                      <div className="w-40">
                        {" "}
                        {/* Set the width as needed */}
                        <div className="text-base font-semibold truncate">
                          
                          {customer.firstName} {customer.lastName}
                        </div>
                        <div className="font-normal text-gray-500 truncate">
                          {" "}
                          {/* Add truncate for email too */}
                          <p>
                          {customer.email}</p>

                        </div>
                      </div>
                    </th>
                    <td className="px-6  text-center">{""}</td>
                    <td className="px-6  text-center">{""}</td>
                    {/* <td className="px-6 py-4 text-center">{customer.country}</td> */}
                    <td className="px-6  text-center">
                      <div className="flex justify-center items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                        {customer.status} Active
                      </div>
                    </td>
                    <td className="px-6  text-center">{customer.mobile}</td>

                    <td className="px-4  cursor-pointer text-center justify-center  flex items-center space-x-2">
                      <Tooltip title="Edit" placement="top">
                        <img
                          src={edit}
                          alt="Edit"
                          className="cursor-pointer w-7 h-7 -mb-5"
                          onClick={() => handleEditProduct(customer.customerId)}
                        />
                      </Tooltip>
                      <Tooltip placement="top" title="Delete">
                        <img
                          src={Bin}
                          alt="Delete"
                          className="cursor-pointer w-4 h-4 -mb-5"
                          onClick={() => DeleteProduct(product.productID)}
                        />
                      </Tooltip>
                      <Tooltip title="Deactivate" placement="top">
                        <img
                          src={Deactivate}
                          alt="Deactivate"
                          className="cursor-pointer w-4 h-4 -mb-5"
                          onClick={() => deactivatePopUp(product.productID)}
                        />
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex items-center justify-center">
        {" "}
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={customers}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default SellerList;
