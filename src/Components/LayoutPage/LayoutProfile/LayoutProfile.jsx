
// // import React, { useState } from "react";
// // // import myaccount from 'Pharmetrade-Dev-Pharma-Etrade\src\assets\My Account.png';
// // import { FaEnvelope, FaPhone } from "react-icons/fa";
// // import MyOrders from "../../LayoutPage/LayoutProfile/MyOrders"
// // // import cell from '../../../assets/telephone-call.png'
// // import email from '../../../assets/useremail.png'
// // import edit from '../../../assets/Edit.png'
// // import { TextField } from "@mui/material";
// // import LayoutProfileAddress from "./LayoutProfileAddress";
// // import BankInformation from "./BankInformation";


// // const LayoutProfile = () => {

// //   const  profiles =[
// //     {
// //       label:"Primary",
// //       grid:"primary"
// //     },
// //     {
// //       label:"Bank Information",
// //       grid:'bank'
// //     },
// //     {
// //       label:"Address",
// //       grid:'address'
// //     }
// //   ]

// //   const [visibleGrid, setVisibleGrid] = useState("primary"); // To track which grid is visible
// //   const toggleGrid = (grid) => {
// //     setVisibleGrid((prev) => (prev === grid ? null : grid)); // Toggle the grid visibility
// //   };
// //   return (

// //     <div className=" w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
// //       <div className="w-[95%] mt-8 h-full flex flex-col justify-normal  ">
// // {/* {profiles.map((profile)=>(
// //   <div className=" flex  ml-6">
// //     <div className="w-44  bg-white rounded-lg flex items-center justify-center">
// //             <h1 className="text-lg text-blue-900  font-semibold cursor-pointer">{profile.label}</h1>

// //           </div>
// //     </div>

// // ))} */}
// // <div className="flex">
// // {profiles.map((profile) => (
// //   <div key={profile.grid} className="flex ml-6">
// //     <div 
// //       className="w-44 bg-white rounded-lg flex items-center justify-center cursor-pointer"
// //       onClick={() => toggleGrid(profile.grid)}
// //     >
// //       <h1 className="text-lg text-blue-900 font-semibold">{profile.label}</h1>
// //     </div>
// //   </div>
// // ))}
// // </div>


// //         <div>
// //           <h1 className="text-xl text-blue-900 font-semibold mt-4 ml-6 ">Primary</h1>
// //           <div className="bg-white border  border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4 ">

// //             <div className="flex justify-between">
// //               <div className="py-4 flex flex-col  gap-4">
// //                 <TextField
// //                   label="First Name"
// //                   id="outlined-size-small"
// //                   name="First Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                   className="w-full"
// //                 />
// //                 <TextField
// //                   label="Email ID"
// //                   id="outlined-size-small"
// //                   name="Email ID"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                   className="w-full"
// //                 />

// //               </div>
// //               <div className="py-4 gap-4 flex-col flex">
// //                 <TextField
// //                   label="Last Name"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                   className="w-full"
// //                 />
// //                 <TextField
// //                   label="Phone Number"
// //                   id="outlined-size-small"
// //                   name="Phone Number"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                   className="w-full"
// //                 />
// //               </div>


// //               <div className="flex flex-col justify-between py-2">
// //                 <img src={edit} className="w-6 h-6 ml-4" />
// //                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="bg-white border  flex justify-between flex-col border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
// //             <div className="flex justify-between">
// //               <div className="flex-col flex py-4">
// //                 <div className="flex gap-5">
// //                   <p>User Type :</p>
// //                   <p className="text-lg">Retail Pharmacy</p>
// //                 </div>
// //                 <div className="flex gap-7">

// //                   <p> UPN member</p>
// //                   <p className="text-lg">(Yes)</p>
// //                 </div>
// //               </div>
// //               <div className="flex flex-col justify-between py-2">
// //                 <img src={edit} className="w-6 h-6 ml-4" />
// //                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="bg-white border border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
// //             <div className="flex justify-between py-4">

// //               <div className="flex flex-col gap-3">
// //                 <TextField
// //                   label="Shop Name"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="DBA Name"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="City"
// //                   id="outlined-size-small"
// //                   name="City"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="Zip"
// //                   id="outlined-size-small"
// //                   name="Zip"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="Business Fax"
// //                   id="outlined-size-small"
// //                   name="Business Fax"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="Company Website"
// //                   id="outlined-size-small"
// //                   name="Compant Website"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //               </div>
// //               <div className="flex flex-col gap-3">
// //                 <TextField
// //                   label="Legal Business Name"
// //                   id="outlined-size-small"
// //                   name="Legal Business Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="Address"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="State"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="Business Phone "
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //                 <TextField
// //                   label="Business Email"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 // className="w-full"
// //                 />
// //               </div>

// //               <div className="flex flex-col justify-between py-2">
// //                 <img src={edit} className="w-6 h-6 ml-4" />
// //                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="bg-white border border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
// //             <div className="flex justify-between py-4">

// //               <div className="flex flex-col gap-3">
// //                 <TextField
// //                   label="DEA"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                className="w-[60%]"
// //                 />
// //                 <TextField
// //                   label=""
// //                    type="date"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                className="w-[60%]"
// //                 />
// //                 <TextField
// //                   label=""
// //                    type="file"
// //                   id="outlined-size-small"
// //                   name="City"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 className="w-[60%]"
// //                 />
// //                 <TextField
// //                   label="NPI"
// //                   id="outlined-size-small"
// //                   name="Zip"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                className="w-[60%]"
// //                 />
// //                 <TextField
// //                   label="Federal Tax"
// //                   id="outlined-size-small"
// //                   name="Business Fax"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                className="w-[60%]"
// //                 />

// //               </div>
// //               <div className="flex flex-col gap-3">
// //                 <TextField
// //                   label="Pharmacy License"
// //                   id="outlined-size-small"
// //                   name="Legal Business Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //               className="w-[60%]"
// //                 />
// //                 <TextField
// //                   label=""
// //                    type="date"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //               className="w-[60%]"
// //                 />
// //                 <TextField
// //                   label=""
// //                   type="file"
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 className="w-[60%]"
// //                 />
// //                 <TextField
// //                   label="NCPDP "
// //                   id="outlined-size-small"
// //                   name="Last Name"
// //                   // value={formData.First_Name}
// //                   // onChange={handleInputChange}
// //                   // error={!!errors.First_Name}
// //                   // helperText={errors.First_Name}

// //                   size="small"
// //                 className="w-[60%]"
// //                 />

// //               </div>

// //               <div className="flex flex-col justify-between py-2">
// //                 <img src={edit} className="w-6 h-6 ml-4" />
// //                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //       </div>

// //       <div>
// //       {visibleGrid === "bank" && (
// //   <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
// //    <BankInformation/>
// //   </div>
// // )}
// //         </div>
// //         <div>
// //         {visibleGrid === "address" && (
// //   <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
// //    <LayoutProfileAddress/>
// //   </div>
// // )}        </div>



// //     </div>


// //   );
// // };

// // export default LayoutProfile;














// import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import edit from '../../../assets/Edit.png';
// import { useSelector } from "react-redux";
// import { Box, Radio, }
//   from "@mui/material";
// const LayoutProfile = () => {
//   const userdata = useSelector((state) => state.user.user)
//   console.log("profile", userdata)

//   const businessInfo = useSelector((state) => state.user.businessInfo)
//   console.log("business", businessInfo)

//   const profiles = [
//     {
//       label: "Primary",
//       grid: "primary"
//     },
//     {
//       label: "Bank Information",
//       grid: "bank"
//     },
//     {
//       label: "Address",
//       grid: "address"
//     }
//   ];


//   const userTypes = ["Retail Pharmacy", "Wholesale Pharmacy", "Hospital", "Other"];

//   const [userType, setUserType] = useState("");
//   const [selectedValue, setSelectedValue] = React.useState("");

//   const handleUserTypeChange = (e) => {
//     setUserType(e.target.value);
//     setSelectedValue(""); // Reset UPN Member selection on User Type change
//   };

//   const handleChange = (e) => {
//     setSelectedValue(e.target.value);
//   };
//   const [visibleGrid, setVisibleGrid] = useState("primary"); // Default to Primary

//   const toggleGrid = (grid) => {
//     setVisibleGrid(grid); // Set the visible grid to the selected one
//   };

//   // bussiness phone
//   const [businessPhone, setBusinessPhone] = useState("");

//   const handleBusinessPhoneChange = (e) => {
//     const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
//     let formattedBusinessPhone = input;

//     if (input.length > 3 && input.length <= 6) {
//       formattedBusinessPhone = `${input.slice(0, 3)}-${input.slice(3)}`;
//     } else if (input.length > 6) {
//       formattedBusinessPhone = `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6, 10)}`;
//     }

//     setBusinessPhone(formattedBusinessPhone);
//   };
//   // federal tax

//   const [federalTax, setFederalTax] = useState("");

//   const handleFederalTaxChange = (e) => {
//     const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
//     let formattedFederalTax = input;

//     // Format the input to 77-7777777
//     if (input.length > 2) {
//       formattedFederalTax = `${input.slice(0, 2)}-${input.slice(2)}`;
//     }

//     setFederalTax(formattedFederalTax);
//   };
//   // phone number
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handlePhoneNumberChange = (e) => {
//     const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
//     let formattedPhoneNumber = input;

//     if (input.length > 3 && input.length <= 6) {
//       formattedPhoneNumber = `${input.slice(0, 3)}-${input.slice(3)}`;
//     } else if (input.length > 6) {
//       formattedPhoneNumber = `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6, 10)}`;
//     }

//     setPhoneNumber(formattedPhoneNumber);
//   };

//   // tab1
//   const [isEditable, setIsEditable] = useState(false);

//   // Function to handle the edit button click
//   // const handleEditClick = () => {
//   //   setIsEditable(true); // Enable editing when edit icon is clicked
//   // };
//   const handleEditClick = () => {
//     setIsEditable((prev) => !prev); // Toggle edit mode
//   };
//   // Handle save button click
//   const handleSaveClick = () => {
//     setIsEditable(false);
//     alert("Data saved successfully!"); // Show notification (can replace with your own notification system)
//   };

//   // tab2
//   const [isselectable, setIsselectable] = useState(false);
//   const handleselectClick = () => {
//     setIsselectable((prev) => !prev); // Toggle edit mode
//   };
//   // Handle save button click
//   const handleSelectClick = () => {
//     setIsselectable(false);
//     alert("Data saved successfully!"); // Show notification (can replace with your own notification system)
//   };

//   // tab3

//   const [istabable, setIstabable] = useState(false);

//   // Function to handle the edit button click
//   const handleEdittabClick = () => {
//     setIstabable(true); // Enable editing when edit icon is clicked
//   };
//   // Handle save button click
//   const handletabSaveClick = () => {
//     setIstabable(false);
//     alert("Data saved successfully!"); // Show notification (can replace with your own notification system)
//   };

//   // tab4 
//   const [istabedit, setIstabedit] = useState(false);

//   const handletabclick = () => {
//     setIstabedit(true)
//   }
//   const handletabesave = () => {
//     setIstabedit(false)
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Dispatch an action to update the Redux state here if necessary
//     // dispatch(updateUserData({ ...userdata, [name]: value }));

//     // For example:
//     // dispatch(updateUser({ ...userdata, [name]: value }));
//   };


//   return (
//     <div className="w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
//       <div className="w-[95%] mt-8 h-full flex flex-col justify-normal">
//         {/* Render Profile Buttons */}
//         <div className="flex">
//           {profiles.map((profile) => (
//             <div key={profile.grid} className="flex ml-6">
//               <div
//                 className={`w-44 bg-white rounded-lg flex items-center justify-center cursor-pointer ${visibleGrid === profile.grid ? 'border-b-4 border-blue-500' : ''}`}
//                 onClick={() => toggleGrid(profile.grid)}
//               >
//                 <h1 className="text-lg text-blue-900 font-semibold">{profile.label}</h1>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Primary Grid */}
//         {visibleGrid === "primary" && (
//           // <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//           //   <div className="flex justify-between">
//           //     <div className="py-4 flex flex-col gap-4">
//           //       <TextField label="First Name" size="small" className="w-full" />
//           //       <TextField label="Email ID" size="small" className="w-full" />
//           //     </div>
//           //     <div className="py-4 flex flex-col gap-4">
//           //       <TextField label="Last Name" size="small" className="w-full" />
//           //       <TextField label="Phone Number" size="small" className="w-full" />
//           //     </div>
//           //     <div className="flex flex-col justify-between py-2">
//           //       <img src={edit} className="w-6 h-6 ml-4" alt="edit" />
//           //       <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold">Save</button>
//           //     </div>
//           //   </div>
//           // </div>

//           <div>
//             <h1 className="text-xl text-blue-900 font-semibold mt-4 ml-6 ">Primary</h1>
//             {/* <div className="bg-white border  border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4 ">

//             <div className="flex justify-between">
//               <div className="py-4 flex flex-col  gap-4">
//                 <TextField
//                   label="First Name"
//                   id="outlined-size-small"
//                   name="First Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                   className="w-full"
//                 />
//                 <TextField
//                   label="Email ID"
//                   id="outlined-size-small"
//                   name="Email ID"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                   className="w-full"
//                 />

//               </div>
//               <div className="py-4 gap-4 flex-col flex">
//                 <TextField
//                   label="Last Name"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                   className="w-full"
//                 />
//                 <TextField
//                   label="Phone Number"
//                   id="outlined-size-small"
//                   name="Phone Number"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                   className="w-full"
//                 />
//               </div>


//               <div className="flex flex-col justify-between py-2">
//                 <img src={edit} className="w-6 h-6 ml-4" />
//                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
//               </div>
//             </div>
//           </div> */}

//             <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//               <div className="flex justify-between">
//                 <div className="py-4 flex flex-col gap-4">
//                   {/* <TextField
//                     label="First Name"
//                     id="outlined-size-small"
//                     value={userdata?.firstName}
//                     name="First Name"
//                     disabled={!isEditable} // Disable field unless in edit mode
//                     size="small"
//                     className="w-full"
//                   /> */}
//                   <TextField
//                     label="First Name"
//                     id="outlined-size-small"
//                     value={userdata?.firstName || ""} // Ensure it handles null or undefined
//                     name="firstName" // Use camelCase for the name
//                     onChange={handleInputChange} // Handle input change
//                     disabled={!isEditable} // Disable field unless in edit mode
//                     size="small"
//                     className="w-full"
//                   />
//                   <TextField
//                     label="Email ID"
//                     id="outlined-size-small"
//                     value={userdata?.
//                       email
//                       || ""} // Ensure it handles null or undefined
//                     name="email" // Use camelCase for the name
//                     onChange={handleInputChange} // Handle input change
//                     disabled={!isEditable} // Disable field unless in edit mode
//                     size="small"
//                     className="w-full"
//                   />
//                   <TextField
//                     label="Password"
//                     id="outlined-size-small"
//                     value={userdata?.
//                       password
//                       || ""} // Ensure it handles null or undefined
//                     name="password" // Use camelCase for the name
//                     onChange={handleInputChange} // Handle input change
//                     disabled={!isEditable} // Disable field unless in edit mode
//                     size="small"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="py-4 gap-4 flex-col flex">
//                   <TextField
//                     label="Last Name"
//                     id="outlined-size-small"
//                     value={userdata?.lastName || ""} // Ensure it handles null or undefined
//                     name="Last Name" // Use camelCase for the name
//                     onChange={handleInputChange} // Handle input change
//                     disabled={!isEditable} // Disable field unless in edit mode
//                     size="small"
//                     className="w-full"
//                   />
//                   <TextField
//                     label="Phone Number"
//                     name="phoneNumber"
//                     value={phoneNumber}
//                     onChange={handlePhoneNumberChange}
//                     size="small"
//                     className="w-full"
//                     disabled={!isEditable} // Disable unless in edit mode
//                     inputProps={{ maxLength: 12 }} // Limit the max length to 12 (including dashes)
//                   />
//                   <TextField
//                     label="Confirm Password"
//                     id="outlined-size-small"
//                     name="Confirm password"
//                     disabled={!isEditable} // Disable field unless in edit mode
//                     size="small"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between py-2">
//                   <img
//                     src={edit}
//                     className="w-6 h-6 ml-4 cursor-pointer"
//                     onClick={handleEditClick} // Handle edit icon click
//                     alt="Edit" // Add alt text for accessibility
//                   />
//                   <button
//                     className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isEditable ? "opacity-50 cursor-not-allowed" : ""}`}
//                     onClick={handleSaveClick}
//                     disabled={!isEditable} // Disable button when not editable/ Save button is disabled if not editable
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white border  flex justify-between flex-col border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
//               <div className="flex justify-between">
//                 <div className="flex-col flex py-4">

//                   <div className="mb-4">
//                     <label className="flex gap-2 text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
//                       User Type
//                       {/* <div className="text-red-400">
//               {errors.userType && <div>{errors.userType}</div>}
//             </div> */}
//                     </label>
//                     <select
//                       id="userType"
//                       value={userType}
//                       disabled={!isselectable}
//                       onChange={handleUserTypeChange}
//                       className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     >
//                       <option value="">Select User Type</option>
//                       {userTypes.map((type) => (
//                         <option key={type} value={type}>
//                           {type}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {userType === "Retail Pharmacy" && (
//                     <div className="flex items-center">
//                       <label className="text-gray-700">
//                         <span className="text-red-500">*</span>Are you a UPN Member
//                       </label>
//                       <Box sx={{ display: "flex", gap: 2 }}>
//                         <div>
//                           <Radio
//                             checked={selectedValue === "a"}
//                             onChange={handleChange}
//                             value="a"
//                             name="radio-buttons"
//                             size="small"
//                             inputProps={{ "aria-label": "A" }}
//                           />
//                           <span>YES</span>
//                         </div>
//                         <div>
//                           <Radio
//                             checked={selectedValue === "b"}
//                             onChange={handleChange}
//                             value="b"
//                             name="radio-buttons"
//                             size="small"
//                             inputProps={{ "aria-label": "B" }}
//                           />
//                           <span>NO</span>
//                         </div>
//                       </Box>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex flex-col justify-between py-2">
//                   <img src={edit} className="w-6 h-6 ml-4"
//                     onClick={handleselectClick} />
//                   <button
//                     // className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold"
//                     className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isselectable ? "opacity-50 cursor-not-allowed" : ""}`}

//                     onClick={handleSelectClick} >Save</button>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white border border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
//               <div className="flex justify-between py-4">

//                 <div className="flex flex-col gap-3">
//                   {/* <TextField
//                     label="Shop Name"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     disabled={!istabable}
//                     value={businessInfo.shopName || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   /> */}
//                   <TextField
//                     label="Shop Name"
//                     id="outlined-size-small"
//                     name="Shop Name"  // Make sure the name is correct if it's used elsewhere
//                     disabled={!istabable}
//                     value={businessInfo?.shopName || ""} // Use optional chaining to avoid errors
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}
//                     size="small"
//                     className="w-full" // Uncomment or modify this line as needed
//                   />
//                   <TextField
//                     label="DBA Name"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     disabled={!istabable}
//                     value={businessInfo?.dba || ""
//                     }
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                   <TextField
//                     label="City"
//                     id="outlined-size-small"
//                     name="City"
//                     disabled={!istabable}

//                     value={businessInfo?.city || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                   <TextField
//                     label="Zip"
//                     id="outlined-size-small"
//                     name="Zip"
//                     disabled={!istabable}
//                     value={businessInfo?.
//                       zip || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                   <TextField
//                     label="Business Fax"
//                     id="outlined-size-small"
//                     name="Business Fax"
//                     disabled={!istabable}
//                     value={businessInfo?.businessFax || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                   <TextField
//                     label="Company Website"
//                     id="outlined-size-small"
//                     name="Compant Website"
//                     disabled={!istabable}
//                     value={businessInfo?.companyWebsite || ""
//                     }
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <TextField
//                     label="Legal Business Name"
//                     id="outlined-size-small"
//                     name="Legal Business Name"
//                     disabled={!istabable}
//                     value={businessInfo?.
//                       legalBusinessName || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                   <TextField
//                     label="Address"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     disabled={!istabable}
//                     value={businessInfo?.address || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                   <TextField
//                     label="State"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     disabled={!istabable}
//                     value={businessInfo?.state || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                   <TextField
//                     label="Business Phone"
//                     id="outlined-size-small"
//                     name="businessPhone"
//                     value={businessPhone}
//                     onChange={handleBusinessPhoneChange}
//                     size="small"
//                     className="w-full"
//                     disabled={!istabable} // Disable unless in edit mode
//                     inputProps={{ maxLength: 12 }} // Limit max length to 12 (including dashes)
//                   />
//                   <TextField
//                     label="Business Email"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     disabled={!istabable}
//                     value={businessInfo?.businessEmail || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                   // className="w-full"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between py-2">
//                   <img
//                     src={edit}
//                     className="w-6 h-6 ml-4 cursor-pointer"
//                     onClick={handleEdittabClick} // Handle edit icon click
//                   />
//                   <button
//                     className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!istabable ? "opacity-50 cursor-not-allowed" : ""}`}
//                     onClick={handletabSaveClick}
//                     disabled={!istabable} // Disable button when not editable// Save button is disabled if not editable
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white border border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
//               <div className="flex justify-between py-4">

//                 <div className="flex flex-col gap-3">
//                   <TextField
//                     label="DEA"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     value={businessInfo?.
//                       dea
//                       || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}
//                     disabled={!istabedit}
//                     size="small"
//                     className="w-[60%]"
//                   />
//                   <TextField
//                     label=""
//                     type="date"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     value={businessInfo?.
//                       deaExpirationDate || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}
//                     disabled={!istabedit}
//                     size="small"
//                     className="w-[60%]"
//                   />
//                   <TextField
//                     label=""
//                     type="file"
//                     id="outlined-size-small"
//                     name="City"
//                     disabled={!istabedit}
//                     value={businessInfo?.
//                       deaLicenseCopy || ""
//                     }
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                     className="w-[60%]"
//                   />
//                   <TextField
//                     label="NPI"
//                     id="outlined-size-small"
//                     name="Zip"
//                     disabled={!istabedit}
//                     value={businessInfo?.
//                       npi
//                       || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                     className="w-[60%]"
//                   />
//                   <TextField
//                     label="Federal Tax"
//                     id="outlined-size-small"
//                     name="federalTax"
//                     value={federalTax}
//                     onChange={handleFederalTaxChange}
//                     size="small"
//                     className="w-[60%]"
//                     disabled={!istabedit} // Disable unless in edit mode
//                     inputProps={{ maxLength: 10 }} // Limit max length to 10 (including the dash)
//                   />

//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <TextField
//                     label="Pharmacy License"
//                     id="outlined-size-small"
//                     name="Legal Business Name"
//                     disabled={!istabedit}
//                     value={businessInfo?.
//                       pharmacyLicence || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                     className="w-[60%]"
//                   />
//                   <TextField
//                     label=""
//                     type="date"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     disabled={!istabedit}
//                     value={businessInfo?.
//                       pharmacyLicenseExpirationDate || ""
//                     }
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                     className="w-[60%]"
//                   />
//                   <TextField
//                     label=""
//                     type="file"
//                     id="outlined-size-small"
//                     name="Last Name"
//                     disabled={!istabedit}
//                     value={businessInfo?.
//                       pharmacyLicenseCopy
//                       || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                     className="w-[60%]"
//                   />
//                   <TextField
//                     label="NCPDP "
//                     id="outlined-size-small"
//                     name="Last Name"
//                     disabled={!istabedit}
//                     value={businessInfo?.ncpdp || ""}
//                     // onChange={handleInputChange}
//                     // error={!!errors.First_Name}
//                     // helperText={errors.First_Name}

//                     size="small"
//                     className="w-[60%]"
//                   />

//                 </div>

//                 <div className="flex flex-col justify-between py-2">
//                   <img src={edit} className="w-6 h-6 ml-4"
//                     onClick={handletabclick} />
//                   <button
//                     // className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold"
//                     className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!istabedit ? "opacity-50 cursor-not-allowed" : ""}`}
//                     // Disable button when not editable
//                     onClick={handletabesave} >Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Bank Information Grid */}
//         {visibleGrid === "bank" && (
//           <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//             {/* Your bank information grid details here */}
//             <p>Bank Information content goes here...</p>
//           </div>
//         )}

//         {/* Address Grid */}
//         {visibleGrid === "address" && (
//           <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//             {/* Your address details grid here */}
//             <p>Address content goes here...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LayoutProfile;





// import React, { useState } from "react";
// // import myaccount from 'Pharmetrade-Dev-Pharma-Etrade\src\assets\My Account.png';
// import { FaEnvelope, FaPhone } from "react-icons/fa";
// import MyOrders from "../../LayoutPage/LayoutProfile/MyOrders"
// // import cell from '../../../assets/telephone-call.png'
// import email from '../../../assets/useremail.png'
// import edit from '../../../assets/Edit.png'
// import { TextField } from "@mui/material";
// import LayoutProfileAddress from "./LayoutProfileAddress";
// import BankInformation from "./BankInformation";


// const LayoutProfile = () => {

//   const  profiles =[
//     {
//       label:"Primary",
//       grid:"primary"
//     },
//     {
//       label:"Bank Information",
//       grid:'bank'
//     },
//     {
//       label:"Address",
//       grid:'address'
//     }
//   ]

//   const [visibleGrid, setVisibleGrid] = useState("primary"); // To track which grid is visible
//   const toggleGrid = (grid) => {
//     setVisibleGrid((prev) => (prev === grid ? null : grid)); // Toggle the grid visibility
//   };
//   return (

//     <div className=" w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
//       <div className="w-[95%] mt-8 h-full flex flex-col justify-normal  ">
// {/* {profiles.map((profile)=>(
//   <div className=" flex  ml-6">
//     <div className="w-44  bg-white rounded-lg flex items-center justify-center">
//             <h1 className="text-lg text-blue-900  font-semibold cursor-pointer">{profile.label}</h1>

//           </div>
//     </div>

// ))} */}
// <div className="flex">
// {profiles.map((profile) => (
//   <div key={profile.grid} className="flex ml-6">
//     <div 
//       className="w-44 bg-white rounded-lg flex items-center justify-center cursor-pointer"
//       onClick={() => toggleGrid(profile.grid)}
//     >
//       <h1 className="text-lg text-blue-900 font-semibold">{profile.label}</h1>
//     </div>
//   </div>
// ))}
// </div>


//         <div>
//           <h1 className="text-xl text-blue-900 font-semibold mt-4 ml-6 ">Primary</h1>
//           <div className="bg-white border  border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4 ">

//             <div className="flex justify-between">
//               <div className="py-4 flex flex-col  gap-4">
//                 <TextField
//                   label="First Name"
//                   id="outlined-size-small"
//                   name="First Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                   className="w-full"
//                 />
//                 <TextField
//                   label="Email ID"
//                   id="outlined-size-small"
//                   name="Email ID"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                   className="w-full"
//                 />

//               </div>
//               <div className="py-4 gap-4 flex-col flex">
//                 <TextField
//                   label="Last Name"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                   className="w-full"
//                 />
//                 <TextField
//                   label="Phone Number"
//                   id="outlined-size-small"
//                   name="Phone Number"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                   className="w-full"
//                 />
//               </div>


//               <div className="flex flex-col justify-between py-2">
//                 <img src={edit} className="w-6 h-6 ml-4" />
//                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white border  flex justify-between flex-col border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
//             <div className="flex justify-between">
//               <div className="flex-col flex py-4">
//                 <div className="flex gap-5">
//                   <p>User Type :</p>
//                   <p className="text-lg">Retail Pharmacy</p>
//                 </div>
//                 <div className="flex gap-7">

//                   <p> UPN member</p>
//                   <p className="text-lg">(Yes)</p>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-between py-2">
//                 <img src={edit} className="w-6 h-6 ml-4" />
//                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white border border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
//             <div className="flex justify-between py-4">

//               <div className="flex flex-col gap-3">
//                 <TextField
//                   label="Shop Name"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="DBA Name"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="City"
//                   id="outlined-size-small"
//                   name="City"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="Zip"
//                   id="outlined-size-small"
//                   name="Zip"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="Business Fax"
//                   id="outlined-size-small"
//                   name="Business Fax"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="Company Website"
//                   id="outlined-size-small"
//                   name="Compant Website"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-3">
//                 <TextField
//                   label="Legal Business Name"
//                   id="outlined-size-small"
//                   name="Legal Business Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="Address"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="State"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="Business Phone "
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//                 <TextField
//                   label="Business Email"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 // className="w-full"
//                 />
//               </div>

//               <div className="flex flex-col justify-between py-2">
//                 <img src={edit} className="w-6 h-6 ml-4" />
//                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white border border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
//             <div className="flex justify-between py-4">

//               <div className="flex flex-col gap-3">
//                 <TextField
//                   label="DEA"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                className="w-[60%]"
//                 />
//                 <TextField
//                   label=""
//                    type="date"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                className="w-[60%]"
//                 />
//                 <TextField
//                   label=""
//                    type="file"
//                   id="outlined-size-small"
//                   name="City"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 className="w-[60%]"
//                 />
//                 <TextField
//                   label="NPI"
//                   id="outlined-size-small"
//                   name="Zip"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                className="w-[60%]"
//                 />
//                 <TextField
//                   label="Federal Tax"
//                   id="outlined-size-small"
//                   name="Business Fax"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                className="w-[60%]"
//                 />

//               </div>
//               <div className="flex flex-col gap-3">
//                 <TextField
//                   label="Pharmacy License"
//                   id="outlined-size-small"
//                   name="Legal Business Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//               className="w-[60%]"
//                 />
//                 <TextField
//                   label=""
//                    type="date"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//               className="w-[60%]"
//                 />
//                 <TextField
//                   label=""
//                   type="file"
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 className="w-[60%]"
//                 />
//                 <TextField
//                   label="NCPDP "
//                   id="outlined-size-small"
//                   name="Last Name"
//                   // value={formData.First_Name}
//                   // onChange={handleInputChange}
//                   // error={!!errors.First_Name}
//                   // helperText={errors.First_Name}

//                   size="small"
//                 className="w-[60%]"
//                 />

//               </div>

//               <div className="flex flex-col justify-between py-2">
//                 <img src={edit} className="w-6 h-6 ml-4" />
//                 <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       <div>
//       {visibleGrid === "bank" && (
//   <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//    <BankInformation/>
//   </div>
// )}
//         </div>
//         <div>
//         {visibleGrid === "address" && (
//   <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//    <LayoutProfileAddress/>
//   </div>
// )}        </div>



//     </div>


//   );
// };

// export default LayoutProfile;














import React, { useState } from "react";
import { TextField } from "@mui/material";
import edit from '../../../assets/Edit.png';
import { useSelector } from "react-redux";
import { Box, Radio, }
  from "@mui/material";
import BankInformation from "./BankInformation";
const LayoutProfile = () => {
  const userdata = useSelector((state) => state.user.user)
  console.log("profile", userdata)

  const businessInfo = useSelector((state) => state.user.businessInfo)
  console.log("business", businessInfo)

  const profiles = [
    {
      label: "Primary",
      grid: "primary"
    },
    {
      label: "Bank Information",
      grid: "bank"
    },
   
  ];


  const userTypes = ["Retail Pharmacy", "Wholesale Pharmacy", "Hospital", "Other"];

  const [userType, setUserType] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setSelectedValue(""); // Reset UPN Member selection on User Type change
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const [visibleGrid, setVisibleGrid] = useState("primary"); // Default to Primary

  const toggleGrid = (grid) => {
    setVisibleGrid(grid); // Set the visible grid to the selected one
  };

  // bussiness phone
  const [businessPhone, setBusinessPhone] = useState("");

  const handleBusinessPhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedBusinessPhone = input;

    if (input.length > 3 && input.length <= 6) {
      formattedBusinessPhone = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length > 6) {
      formattedBusinessPhone = `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6, 10)}`;
    }

    setBusinessPhone(formattedBusinessPhone);
  };
  // federal tax

  const [federalTax, setFederalTax] = useState("");

  const handleFederalTaxChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedFederalTax = input;

    // Format the input to 77-7777777
    if (input.length > 2) {
      formattedFederalTax = `${input.slice(0, 2)}-${input.slice(2)}`;
    }

    setFederalTax(formattedFederalTax);
  };
  // phone number
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedPhoneNumber = input;

    if (input.length > 3 && input.length <= 6) {
      formattedPhoneNumber = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length > 6) {
      formattedPhoneNumber = `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6, 10)}`;
    }

    setPhoneNumber(formattedPhoneNumber);
  };

  // tab1
  const [isEditable, setIsEditable] = useState(false);

  // Function to handle the edit button click
  // const handleEditClick = () => {
  //   setIsEditable(true); // Enable editing when edit icon is clicked
  // };
  const handleEditClick = () => {
    setIsEditable((prev) => !prev); // Toggle edit mode
  };
  // Handle save button click
  const handleSaveClick = () => {
    setIsEditable(false);
    alert("Data saved successfully!"); // Show notification (can replace with your own notification system)
  };

  // tab2
  const [isselectable, setIsselectable] = useState(false);
  const handleselectClick = () => {
    setIsselectable((prev) => !prev); // Toggle edit mode
  };
  // Handle save button click
  const handleSelectClick = () => {
    setIsselectable(false);
    alert("Data saved successfully!"); // Show notification (can replace with your own notification system)
  };

  // tab3

  const [istabable, setIstabable] = useState(false);

  // Function to handle the edit button click
  const handleEdittabClick = () => {
    setIstabable(true); // Enable editing when edit icon is clicked
  };
  // Handle save button click
  const handletabSaveClick = () => {
    setIstabable(false);
    alert("Data saved successfully!"); // Show notification (can replace with your own notification system)
  };

  // tab4 
  const [istabedit, setIstabedit] = useState(false);

  const handletabclick = () => {
    setIstabedit(true)
  }
  const handletabesave = () => {
    setIstabedit(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Dispatch an action to update the Redux state here if necessary
    // dispatch(updateUserData({ ...userdata, [name]: value }));

    // For example:
    // dispatch(updateUser({ ...userdata, [name]: value }));
  };


  return (
    <div className="w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
      <div className="w-[95%] mt-8 h-full flex flex-col justify-normal">
        {/* Render Profile Buttons */}
        <div className="flex">
          {profiles.map((profile) => (
            <div key={profile.grid} className="flex ml-6">
              <div
                className={`w-44 bg-white rounded-lg flex items-center justify-center cursor-pointer ${visibleGrid === profile.grid ? 'border-b-4 border-blue-900' : ''}`}
                onClick={() => toggleGrid(profile.grid)}
              >
                <h1 className="text-lg text-blue-900 font-semibold">{profile.label}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* Primary Grid */}
        {visibleGrid === "primary" && (
          // <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
          //   <div className="flex justify-between">
          //     <div className="py-4 flex flex-col gap-4">
          //       <TextField label="First Name" size="small" className="w-full" />
          //       <TextField label="Email ID" size="small" className="w-full" />
          //     </div>
          //     <div className="py-4 flex flex-col gap-4">
          //       <TextField label="Last Name" size="small" className="w-full" />
          //       <TextField label="Phone Number" size="small" className="w-full" />
          //     </div>
          //     <div className="flex flex-col justify-between py-2">
          //       <img src={edit} className="w-6 h-6 ml-4" alt="edit" />
          //       <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold">Save</button>
          //     </div>
          //   </div>
          // </div>

          <div>
            <h1 className="text-xl text-blue-900 font-semibold mt-4 ml-6 ">Primary</h1>
            {/* <div className="bg-white border  border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4 ">

            <div className="flex justify-between">
              <div className="py-4 flex flex-col  gap-4">
                <TextField
                  label="First Name"
                  id="outlined-size-small"
                  name="First Name"
                  // value={formData.First_Name}
                  // onChange={handleInputChange}
                  // error={!!errors.First_Name}
                  // helperText={errors.First_Name}

                  size="small"
                  className="w-full"
                />
                <TextField
                  label="Email ID"
                  id="outlined-size-small"
                  name="Email ID"
                  // value={formData.First_Name}
                  // onChange={handleInputChange}
                  // error={!!errors.First_Name}
                  // helperText={errors.First_Name}

                  size="small"
                  className="w-full"
                />

              </div>
              <div className="py-4 gap-4 flex-col flex">
                <TextField
                  label="Last Name"
                  id="outlined-size-small"
                  name="Last Name"
                  // value={formData.First_Name}
                  // onChange={handleInputChange}
                  // error={!!errors.First_Name}
                  // helperText={errors.First_Name}

                  size="small"
                  className="w-full"
                />
                <TextField
                  label="Phone Number"
                  id="outlined-size-small"
                  name="Phone Number"
                  // value={formData.First_Name}
                  // onChange={handleInputChange}
                  // error={!!errors.First_Name}
                  // helperText={errors.First_Name}

                  size="small"
                  className="w-full"
                />
              </div>


              <div className="flex flex-col justify-between py-2">
                <img src={edit} className="w-6 h-6 ml-4" />
                <button className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold" >Save</button>
              </div>
            </div>
          </div> */}

            {/* <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
             <h1 className="text-xl font-semibold text-blue-900 my-2">User Information</h1> */}
             <div className={`bg-white border  ${isEditable ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[90%] mt-8 relative`}>
  {/* Conditionally display heading on the border */}
  {isEditable && (
    <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
      User Information
    </h1>
  )}            {/* <h1 className="text-xl font-semibold text-blue-900 my-2">Address Information</h1> */}

            <h1 className={`text-xl font-semibold my-2 ${isEditable ? 'invisible' : 'text-blue-900'}`}>User Information</h1>

              <div className="flex justify-between">
                <div className="py-4 flex flex-col gap-4">
                  {/* <TextField
                    label="First Name"
                    id="outlined-size-small"
                    value={userdata?.firstName}
                    name="First Name"
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  /> */}
                  <TextField
                    label="First Name"
                    id="outlined-size-small"
                    value={userdata?.firstName || ""} // Ensure it handles null or undefined
                    name="firstName" // Use camelCase for the name
                    onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                  <TextField
                    label="Email ID"
                    id="outlined-size-small"
                    value={userdata?.
                      email
                      || ""} // Ensure it handles null or undefined
                    name="email" // Use camelCase for the name
                    onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                  <TextField
                    label="Password"
                    id="outlined-size-small"
                    value={userdata?.
                      password
                      || ""} // Ensure it handles null or undefined
                    name="password" // Use camelCase for the name
                    onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="py-4 gap-4 flex-col flex">
                  <TextField
                    label="Last Name"
                    id="outlined-size-small"
                    value={userdata?.lastName || ""} // Ensure it handles null or undefined
                    name="Last Name" // Use camelCase for the name
                    onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                  <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    size="small"
                    className="w-full"
                    disabled={!isEditable} // Disable unless in edit mode
                    inputProps={{ maxLength: 12 }} // Limit the max length to 12 (including dashes)
                  />
                  <TextField
                    label="Confirm Password"
                    id="outlined-size-small"
                    name="Confirm password"
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <img
                    src={edit}
                    className="w-6 h-6 ml-4 cursor-pointer"
                    onClick={handleEditClick} // Handle edit icon click
                    alt="Edit" // Add alt text for accessibility
                  />
                  <button
                    className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isEditable ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={handleSaveClick}
                    disabled={!isEditable} // Disable button when not editable/ Save button is disabled if not editable
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="bg-white border  flex justify-between flex-col border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
            <h1 className="text-xl font-semibold text-blue-900 my-2">Account Type</h1> */}


            <div className={`bg-white border  ${istabable ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[90%] mt-8 relative`}>
  {/* Conditionally display heading on the border */}
  {istabable && (
    <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
      Address Information
    </h1>
  )}            {/* <h1 className="text-xl font-semibold text-blue-900 my-2">Address Information</h1> */}

            <h1 className={`text-xl font-semibold my-2 ${istabable ? 'invisible' : 'text-blue-900'}`}>Address Information</h1>

              <div className="flex justify-between py-4">

                <div className="flex flex-col gap-3">
                  {/* <TextField
                    label="Shop Name"
                    id="outlined-size-small"
                    name="Last Name"
                    disabled={!istabable}
                    value={businessInfo.shopName || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  /> */}
                  <TextField
                    label="Shop Name"
                    id="outlined-size-small"
                    name="Shop Name"  // Make sure the name is correct if it's used elsewhere
                    disabled={!istabable}
                    value={businessInfo?.shopName || ""} // Use optional chaining to avoid errors
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}
                    size="small"
                    className="w-full" // Uncomment or modify this line as needed
                  />
                  <TextField
                    label="DBA Name"
                    id="outlined-size-small"
                    name="Last Name"
                    disabled={!istabable}
                    value={businessInfo?.dba || ""
                    }
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                  <TextField
                    label="City"
                    id="outlined-size-small"
                    name="City"
                    disabled={!istabable}

                    value={businessInfo?.city || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                  <TextField
                    label="Zip"
                    id="outlined-size-small"
                    name="Zip"
                    disabled={!istabable}
                    value={businessInfo?.
                      zip || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                  <TextField
                    label="Business Fax"
                    id="outlined-size-small"
                    name="Business Fax"
                    disabled={!istabable}
                    value={businessInfo?.businessFax || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                  <TextField
                    label="Company Website"
                    id="outlined-size-small"
                    name="Compant Website"
                    disabled={!istabable}
                    value={businessInfo?.companyWebsite || ""
                    }
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <TextField
                    label="Legal Business Name"
                    id="outlined-size-small"
                    name="Legal Business Name"
                    disabled={!istabable}
                    value={businessInfo?.
                      legalBusinessName || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                  <TextField
                    label="Address"
                    id="outlined-size-small"
                    name="Last Name"
                    disabled={!istabable}
                    value={businessInfo?.address || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                  <TextField
                    label="State"
                    id="outlined-size-small"
                    name="Last Name"
                    disabled={!istabable}
                    value={businessInfo?.state || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                  <TextField
                    label="Business Phone"
                    id="outlined-size-small"
                    name="businessPhone"
                    value={businessPhone}
                    onChange={handleBusinessPhoneChange}
                    size="small"
                    className="w-full"
                    disabled={!istabable} // Disable unless in edit mode
                    inputProps={{ maxLength: 12 }} // Limit max length to 12 (including dashes)
                  />
                  <TextField
                    label="Business Email"
                    id="outlined-size-small"
                    name="Last Name"
                    disabled={!istabable}
                    value={businessInfo?.businessEmail || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                  // className="w-full"
                  />
                </div>

                <div className="flex flex-col justify-between py-2">
                  <img
                    src={edit}
                    className="w-6 h-6 ml-4 cursor-pointer"
                    onClick={handleEdittabClick} // Handle edit icon click
                  />
                  <button
                    className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!istabable ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={handletabSaveClick}
                    disabled={!istabable} // Disable button when not editable// Save button is disabled if not editable
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="bg-white border border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4">
            <h1 className="text-xl font-semibold text-blue-900 my-2">Account Information</h1>

              <div className="flex justify-between py-4">

                <div className="flex flex-col gap-3">
                  <TextField
                    label="DEA"
                    id="outlined-size-small"
                    name="Last Name"
                    value={businessInfo?.
                      dea
                      || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}
                    disabled={!istabedit}
                    size="small"
                    className="w-[60%]"
                  />
                  <TextField
                    label=""
                    type="date"
                    id="outlined-size-small"
                    name="Last Name"
                    value={businessInfo?.
                      deaExpirationDate || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}
                    disabled={!istabedit}
                    size="small"
                    className="w-[60%]"
                  />
                  <TextField
                    label=""
                    type="file"
                    id="outlined-size-small"
                    name="City"
                    disabled={!istabedit}
                    value={businessInfo?.
                      deaLicenseCopy || ""
                    }
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    className="w-[60%]"
                  />
                  <TextField
                    label="NPI"
                    id="outlined-size-small"
                    name="Zip"
                    disabled={!istabedit}
                    value={businessInfo?.
                      npi
                      || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    className="w-[60%]"
                  />
                  <TextField
                    label="Federal Tax"
                    id="outlined-size-small"
                    name="federalTax"
                    value={federalTax}
                    onChange={handleFederalTaxChange}
                    size="small"
                    className="w-[60%]"
                    disabled={!istabedit} // Disable unless in edit mode
                    inputProps={{ maxLength: 10 }} // Limit max length to 10 (including the dash)
                  />

                </div>
                <div className="flex flex-col gap-3">
                  <TextField
                    label="Pharmacy License"
                    id="outlined-size-small"
                    name="Legal Business Name"
                    disabled={!istabedit}
                    value={businessInfo?.
                      pharmacyLicence || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    className="w-[60%]"
                  />
                  <TextField
                    label=""
                    type="date"
                    id="outlined-size-small"
                    name="Last Name"
                    disabled={!istabedit}
                    value={businessInfo?.
                      pharmacyLicenseExpirationDate || ""
                    }
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    className="w-[60%]"
                  />
                  <TextField
                    label=""
                    type="file"
                    id="outlined-size-small"
                    name="Last Name"
                    disabled={!istabedit}
                    value={businessInfo?.
                      pharmacyLicenseCopy
                      || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    className="w-[60%]"
                  />
                  <TextField
                    label="NCPDP "
                    id="outlined-size-small"
                    name="Last Name"
                    disabled={!istabedit}
                    value={businessInfo?.ncpdp || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    className="w-[60%]"
                  />

                </div>

                <div className="flex flex-col justify-between py-2">
                  <img src={edit} className="w-6 h-6 ml-4"
                    onClick={handletabclick} />
                  <button
                    // className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold"
                    className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!istabedit ? "opacity-50 cursor-not-allowed" : ""}`}
                    // Disable button when not editable
                    onClick={handletabesave} >Save</button>
                </div>
              </div>
            </div> */}


<div className={`bg-white border  ${istabedit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[90%] mt-8 relative`}>
  {/* Conditionally display heading on the border */}
  {istabedit && (
    <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
      Account Information
    </h1>
  )}
  
  <h1 className={`text-xl font-semibold my-2 ${istabedit ? 'invisible' : 'text-blue-900'}`}>Account Information</h1>

  <div className="flex justify-between py-4">
    <div className="flex flex-col gap-3">
      <TextField
        label="DEA"
        id="outlined-size-small"
        name="dea"
        value={businessInfo?.dea || ""}
        disabled={!istabedit}
        size="small"
        className="w-[60%]"
      />
      <TextField
        label=""
        type="date"
        id="outlined-size-small"
        name="deaExpirationDate"
        value={businessInfo?.deaExpirationDate || ""}
        disabled={!istabedit}
        size="small"
        className="w-[60%]"
      />
      <TextField
        label=""
        type="file"
        id="outlined-size-small"
        name="deaLicenseCopy"
        disabled={!istabedit}
        value={businessInfo?.deaLicenseCopy || ""}
        size="small"
        className="w-[60%]"
      />
      <TextField
        label="NPI"
        id="outlined-size-small"
        name="npi"
        disabled={!istabedit}
        value={businessInfo?.npi || ""}
        size="small"
        className="w-[60%]"
      />
      <TextField
        label="Federal Tax"
        id="outlined-size-small"
        name="federalTax"
        value={federalTax}
        onChange={handleFederalTaxChange}
        size="small"
        className="w-[60%]"
        disabled={!istabedit}
        inputProps={{ maxLength: 10 }}
      />
    </div>
    <div className="flex flex-col gap-3">
      <TextField
        label="Pharmacy License"
        id="outlined-size-small"
        name="pharmacyLicence"
        disabled={!istabedit}
        value={businessInfo?.pharmacyLicence || ""}
        size="small"
        className="w-[60%]"
      />
      <TextField
        label=""
        type="date"
        id="outlined-size-small"
        name="pharmacyLicenseExpirationDate"
        disabled={!istabedit}
        value={businessInfo?.pharmacyLicenseExpirationDate || ""}
        size="small"
        className="w-[60%]"
      />
      <TextField
        label=""
        type="file"
        id="outlined-size-small"
        name="pharmacyLicenseCopy"
        disabled={!istabedit}
        value={businessInfo?.pharmacyLicenseCopy || ""}
        size="small"
        className="w-[60%]"
      />
      <TextField
        label="NCPDP"
        id="outlined-size-small"
        name="ncpdp"
        disabled={!istabedit}
        value={businessInfo?.ncpdp || ""}
        size="small"
        className="w-[60%]"
      />
    </div>

    <div className="flex flex-col justify-between py-2">
      <img
        src={edit}
        className="w-6 h-6 ml-4 cursor-pointer"
        onClick={handletabclick}
      />
      <button
        className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!istabedit ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={handletabesave}
      >
        Save
      </button>
    </div>
  </div>
</div>

          </div>
        )}

        {/* Bank Information Grid */}
        {visibleGrid === "bank" && (
          <div
          //  className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4"
           >
            {/* Your bank information grid details here */}
           <BankInformation/>
          </div>
        )}

        {/* Address Grid */}
       
      </div>
    </div>
  );
};

export default LayoutProfile;
