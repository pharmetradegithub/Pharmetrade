// import React, { useEffect, useState } from 'react';
// import plus from '../../../assets/Icons/plus[1].png';
// import { TextField, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogTitle, Button, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, Select, MenuItem } from '@mui/material'; // Import additional Material-UI components
// import edit from '../../../assets/Edit.png';
// import { useStates } from 'react-us-states';

// const LayoutProfileAddress = () => {
//   const [isTabEdit, setIsTabEdit] = useState(false);
//   const [usePresentForPermanent, setUsePresentForPermanent] = useState(false);
//   const [addresses, setAddresses] = useState([]); // Store additional addresses
//   const [selectedAddress, setSelectedAddress] = useState(null); // Store selected address for permanent

//   // State for dialog
//   const [dialogOpen, setDialogOpen] = useState(false);

//   // State to store Present Address values
//   const [presentAddress, setPresentAddress] = useState({
//     buildingName: '',
//     zip: '',
//     city: '',
//     state: '',
//     location: '',
//   });

//   // State to store Permanent Address values
//   const [permanentAddress, setPermanentAddress] = useState({
//     buildingName: '',
//     zip: '',
//     city: '',
//     state: '',
//     location: '',
//   });

//   // New Address Fields
//   const [newAddress, setNewAddress] = useState({
//     buildingName: '',
//     zip: '',
//     city: '',
//     state: '',
//     location: '',
//   });

//   // Notification state
//   const [notificationOpen, setNotificationOpen] = useState(false);

//   // Handle Present Address changes
//   // const handlePresentAddressChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setPresentAddress((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //   }));
//   // };

//   // Handle Permanent Address when radio button is selected
//   const handleRadioSelect = (address) => {
//     setPermanentAddress(address);
//     setSelectedAddress(address);
//   };

//   // Handle New Address changes

//   const handleNewAddressChange = (e) => {
//     const { name, value } = e.target;
//     setNewAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value, // Update the specific field in newAddress
//     }));
//   };
//   // const handleNewAddressChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setNewAddress((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //   }));
//   // };

//   // Open the dialog for adding new address
//   const handleAddNewAddressClick = () => {
//     setDialogOpen(true);
//   };

//   // Close dialog
//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   // Add new address logic
//   const handleAddNewAddressSave = () => {
//     // Add new address to the list and set it as the Present Address as well
//     setAddresses([...addresses, newAddress]);
//     setPresentAddress(newAddress); // Auto-fill Present Address fields
//     setNewAddress({
//       buildingName: '',
//       zip: '',
//       city: '',
//       state: '',
//       location: '',
//     });
//     setDialogOpen(false);
//     setNotificationOpen(true); // Show success notification
//   };

//   // Close notification
//   const handleNotificationClose = () => {
//     setNotificationOpen(false);
//   };
//   const accountTypes = ['Savings', 'Checking', 'Current']; // Example account types

//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     // Set the states data
//     setStates(useStates); // Adjust based on actual structure
//   }, []);

//   const handlePresentAddressChange = (event) => {
//     setFormData({
//       ...formData,
//       state: event.target.value, // Update the selected state
//     });
//   };
//   return (
//     <div className='w-full h-full'>
//       {/* Present Address Section */}
//       <div className='flex justify-end ml-6 mt-8'>
//         <button className='bg-blue-900 text-white p-2 flex rounded-md' onClick={handleAddNewAddressClick}>
//           <img src={plus} className='w-6 h-6' alt="Add New" /> Add New Address
//         </button>
//       </div>

//       <div className={`bg-white border  ${isTabEdit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[90%] mt-8 relative`}>
//   {/* Conditionally display heading on the border */}
//   {isTabEdit && (
//     <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
//       Address 
//     </h1>
//   )}            {/* <h1 className="text-xl font-semibold text-blue-900 my-2">Address Information</h1> */}

//             <h1 className={`text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue-900'}`}>Address </h1>
 

//         <div className='flex justify-between'>
//           <div className='flex flex-col py-4'>
//             <label>Building Name</label>
//             <TextField
//               name="buildingName"
//               value={presentAddress.buildingName}
//               onChange={handlePresentAddressChange}
//               label="Building Name"
//               className='w-full'
//               size='small'
//               disabled={!isTabEdit}
//             />
//             <label>Zip</label>
//             <TextField
//               name="zip"
//               value={presentAddress.zip}
//               onChange={handlePresentAddressChange}
//               label="Zip"
//               className='w-full'
//               size='small'
//               disabled={!isTabEdit}
//             />
//           </div>

//           <div className='flex flex-col py-4'>
//             <label>City</label>
//             <TextField
//               name="city"
//               value={presentAddress.city}
//               onChange={handlePresentAddressChange}
//               label="City"
//               className='w-full'
//               size='small'
//               disabled={!isTabEdit}
//             />
//             {/*  */}
//              <label>Location</label>
//             <TextField
//               name="location"
//               value={presentAddress.location}
//               onChange={handlePresentAddressChange}
//               label="Location"
//               className='w-full'
//               size='small'
//               disabled={!isTabEdit}
//             />
//           </div>

//           <div className='flex flex-col py-4'>
//            <label>State</label>
//             {/* <TextField
//               name="state"
//               value={presentAddress.state}
//               onChange={handlePresentAddressChange}
//               label="State"
//               className='w-full'
//               size='small'
//               disabled={!isTabEdit}
//             /> */}

// <FormControl
//                 size="small"
//                 // error={!!errors.States}
//                 sx={{ minWidth: 210, whiteSpace: 'initial' }}
//               >
//                 <InputLabel id="state-select-label">State</InputLabel>
//                 <Select
//                   id="state-select"
//                   label="State"
//                   value={presentAddress.state} // Correctly bind the form value
//                   name="States" // Ensure name matches the key in addressForm
//                   onChange={(e) => handlePresentAddressChange(e)} // Handle state change
//                   MenuProps={{
//                     PaperProps: {
//                       style: {
//                         maxHeight: 200, // Set the maximum height of the dropdown
//                       },
//                     },
//                   }}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   {states.map((state) => (
//                     <MenuItem key={state.abbreviation} value={state.abbreviation}>
//                       {state.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//           </div>

//           <div className='flex flex-col justify-between py-4'>
//             <img src={edit} className='w-6 h-6' alt="Edit" onClick={() => setIsTabEdit(true)} />
//             <button
//               className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""}`}
//               onClick={() => setIsTabEdit(false)}
//               disabled={!isTabEdit}
//             >
//               Save
//             </button>
//           </div>
//         </div>

//         {/* Radio Button for Present Address */}
//         <FormControlLabel
//           control={<Radio checked={selectedAddress === presentAddress} onChange={() => handleRadioSelect(presentAddress)} />}
//           label="Use as Shipping Address"
//         />
//       </div>

//       {/* Render Additional Addresses with Radio Buttons */}
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-6 mt-6">
      
//         {addresses.map((address, index) => (
//           <div key={index} className="bg-white border border-gray-400 rounded-lg p-6">
//            <h1 className='text-blue-900 text-xl font-semibold'>Add New Address</h1>
//             <div className="flex flex-col space-y-4">
//               <TextField
//                 label="Building"
//                 value={address.buildingName}
//                 size="small"
//                 margin="dense"
//                 fullWidth
//               />
//               <TextField
//                 label="City"
//                 value={address.city}
//                 size="small"
//                 margin="dense"
//                 fullWidth
//               />
//               {/* <TextField
//                 label="State"
//                 value={address.state}
//                 size="small"
//                 margin="dense"
//                 fullWidth
//               /> */}

// <FormControl
//                 size="small"
//                 // error={!!errors.States}
//                 sx={{ minWidth: 210, whiteSpace: 'initial' }}
//               >
//                 <InputLabel id="state-select-label">State</InputLabel>
//                 <Select
//                   id="state-select"
//                   label="State"
//                   value={address.state}
//                   name="States" // Ensure name matches the key in addressForm
//                   // onChange={(e) => handlePresentAddressChange(e)} // Handle state change
//                   MenuProps={{
//                     PaperProps: {
//                       style: {
//                         maxHeight: 200, // Set the maximum height of the dropdown
//                       },
//                     },
//                   }}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   {states.map((state) => (
//                     <MenuItem key={state.abbreviation} value={state.abbreviation}>
//                       {state.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//               <TextField
//                 label="Zip"
//                 value={address.zip}
//                 size="small"
//                 margin="dense"
//                 fullWidth
//               />
//               <TextField
//                 label="Location"
//                 value={address.location}
//                 size="small"
//                 margin="dense"
//                 fullWidth
//               />
//               <FormControlLabel
//                 control={
//                   <Radio
//                     checked={selectedAddress === address}
//                     onChange={() => handleRadioSelect(address)}
//                   />
//                 }
//                 label="Use as Shipping Address"
//               />
//             </div>
//           </div>
//         ))}
//       </div>


//       {/* Permanent Address Section */}
//       <h1 className='text-xl text-blue-900 font-semibold ml-6 mt-6'>Shipping Address</h1>
//       <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//         <div className='flex justify-between'>
//           <div className='flex flex-col py-4'>
//             <label>Building Name</label>
//             <TextField
//               name="buildingName"
//               value={permanentAddress.buildingName}
//               label="Building Name"
//               className='w-full'
//               size='small'
//               disabled
//             />
//             <label>Zip</label>
//             <TextField
//               name="zip"
//               value={permanentAddress.zip}
//               label="Zip"
//               className='w-full'
//               size='small'
//               disabled
//             />
//           </div>

//           <div className='flex flex-col py-4'>
//             <label>City</label>
//             <TextField
//               name="city"
//               value={permanentAddress.city}
//               label="City"
//               className='w-full'
//               size='small'
//               disabled
//             />
//              <label>Location</label>
//             <TextField
//               name="location"
//               value={permanentAddress.location}
//               label="Location"
//               className='w-full'
//               size='small'
//               disabled
//             /> 
//           </div>

//           <div className='flex flex-col py-4'>
           
//              <label>State</label>
//             {/* <TextField
//               name="state"
//               value={permanentAddress.state}
//               label="State"
//               className='w-full'
//               size='small'
//               disabled
//             /> */}
//             <FormControl
//                 size="small"
//                 // error={!!errors.States}
//                 sx={{ minWidth: 210, whiteSpace: 'initial' }}
//               >
//                 <InputLabel id="state-select-label">State</InputLabel>
//                 <Select
//                   id="state-select"
//                   label="State"
//                   value={permanentAddress.state}
//                   name="States" // Ensure name matches the key in addressForm
//                   // onChange={(e) => handlePresentAddressChange(e)} // Handle state change
//                   MenuProps={{
//                     PaperProps: {
//                       style: {
//                         maxHeight: 200, // Set the maximum height of the dropdown
//                       },
//                     },
//                   }}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   {states.map((state) => (
//                     <MenuItem key={state.abbreviation} value={state.abbreviation}>
//                       {state.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//           </div>
//         </div>
//       </div>

//       {/* Add New Address Dialog */}
//       <Dialog open={dialogOpen} onClose={handleDialogClose}>
//         <DialogTitle>Add New Address</DialogTitle>
//         <DialogContent>
//           <TextField
//             name="buildingName"
//             label="Building Name"
//             value={newAddress.buildingName}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//              size="small"
//           />
          
//           <TextField
//             name="city"
//             label="City"
//             value={newAddress.city}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//              size="small"
//           />
//           {/* <TextField
//             name="state"
//             label="State"
//             value={newAddress.state}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//           /> */}
//            <FormControl
//                 size="small"
//                 // error={!!errors.States}
//                 sx={{ minWidth: 550, whiteSpace: 'initial' }}
//               >
//                 <InputLabel id="state-select-label">State</InputLabel>
//                 <Select
//                   id="state-select"
//                   label="State"
//                   value={newAddress.state}
//                   name="States" // Ensure name matches the key in addressForm
//                    onChange={(e) => handleNewAddressChange(e)} // Handle state change
//                   MenuProps={{
//                     PaperProps: {
//                       style: {
//                         maxHeight: 200, // Set the maximum height of the dropdown
//                       },
//                     },
//                   }}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   {states.map((state) => (
//                     <MenuItem key={state.abbreviation} value={state.abbreviation}>
//                       {state.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//           <TextField
//             name="zip"
//             label="Zip"
//             value={newAddress.zip}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//              size="small"
//           />
//           <TextField
//             name="location"
//             label="Location"
//             value={newAddress.location}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//              size="small"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose}>Cancel</Button>
//           <Button onClick={handleAddNewAddressSave} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Notification for saved changes */}
//       <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={handleNotificationClose}>
//         <Alert onClose={handleNotificationClose} severity="success">
//           Address saved successfully!
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default LayoutProfileAddress;






















// // import React, { useState } from 'react';
// // import plus from '../../../assets/Icons/plus[1].png';
// // import { TextField, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogTitle, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material'; 
// // import edit from '../../../assets/Edit.png';

// // const LayoutProfileAddress = () => {
// //   const [isTabEdit, setIsTabEdit] = useState(false);
// //   const [addresses, setAddresses] = useState([]); // Store additional addresses
// //   const [selectedAddress, setSelectedAddress] = useState(null); // Store selected address for permanent
// //   const [dialogOpen, setDialogOpen] = useState(false);
// //   const [notificationOpen, setNotificationOpen] = useState(false);

// //   // State for Present Address
// //   const [presentAddress, setPresentAddress] = useState({
// //     buildingName: '',
// //     zip: '',
// //     city: '',
// //     state: '',
// //     location: '',
// //   });

// //   // State for New Address
// //   const [newAddress, setNewAddress] = useState({
// //     buildingName: '',
// //     zip: '',
// //     city: '',
// //     state: '',
// //     location: '',
// //   });

// //   // Handle Present Address changes
// //   const handlePresentAddressChange = (e) => {
// //     const { name, value } = e.target;
// //     setPresentAddress((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   // Handle New Address changes
// //   const handleNewAddressChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewAddress((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   // Open the dialog for adding new address
// //   const handleAddNewAddressClick = () => {
// //     setDialogOpen(true);
// //   };

// //   // Close dialog
// //   const handleDialogClose = () => {
// //     setDialogOpen(false);
// //   };

// //   // Add new address logic
// //   const handleAddNewAddressSave = () => {
// //     setAddresses([...addresses, newAddress]); // Add new address to the list
// //     setNewAddress({
// //       buildingName: '',
// //       zip: '',
// //       city: '',
// //       state: '',
// //       location: '',
// //     });
// //     setDialogOpen(false);
// //     setNotificationOpen(true); // Show success notification
// //   };

// //   // Close notification
// //   const handleNotificationClose = () => {
// //     setNotificationOpen(false);
// //   };

// //   return (
// //     <div className='w-full h-full'>
// //       {/* Present Address Section */}
// //       <div className='flex justify-between ml-6 mt-8'>
// //         <h1 className='text-xl text-blue-900 font-semibold'>Present Address</h1>
// //         <button className='bg-blue-900 text-white p-2 flex rounded-md' onClick={handleAddNewAddressClick}>
// //           <img src={plus} className='w-6 h-6' alt="Add New" /> Add New Address
// //         </button>
// //       </div>
// // <div className='flex '>
// //       <div className="flex bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[50%] mt-4 space-x-4">
// //         {/* Present Address Form */}
// //         <div className='flex flex-col py-4'>
// //           <label>Building Name</label>
// //           <TextField
// //             name="buildingName"
// //             value={presentAddress.buildingName}
// //             onChange={handlePresentAddressChange}
// //             label="Building Name"
// //             className='w-full'
// //             size='small'
// //             disabled={!isTabEdit}
// //           />
// //           <label>Zip</label>
// //           <TextField
// //             name="zip"
// //             value={presentAddress.zip}
// //             onChange={handlePresentAddressChange}
// //             label="Zip"
// //             className='w-full'
// //             size='small'
// //             disabled={!isTabEdit}
// //           />

// // {/* <div className='flex flex-col py-4'> */}
// //           <label>Location</label>
// //           <TextField
// //             name="location"
// //             value={presentAddress.location}
// //             onChange={handlePresentAddressChange}
// //             label="Location"
// //             className='w-full'
// //             size='small'
// //             disabled={!isTabEdit}
// //           />
       
// //         </div>

// //         <div className='flex flex-col py-4'>
// //           <label>City</label>
// //           <TextField
// //             name="city"
// //             value={presentAddress.city}
// //             onChange={handlePresentAddressChange}
// //             label="City"
// //             className='w-full'
// //             size='small'
// //             disabled={!isTabEdit}
// //           />
// //           <label>State</label>
// //           <TextField
// //             name="state"
// //             value={presentAddress.state}
// //             onChange={handlePresentAddressChange}
// //             label="State"
// //             className='w-full'
// //             size='small'
// //             disabled={!isTabEdit}
// //           />
// //         </div>

      

// //         <div className='flex flex-col justify-between py-4'>
// //           <img src={edit} className='w-6 h-6' alt="Edit" onClick={() => setIsTabEdit(true)} />
// //           <button
// //             className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""}`}
// //             onClick={() => setIsTabEdit(false)}
// //             disabled={!isTabEdit}
// //           >
// //             Save
// //           </button>
// //         </div>

// //         {/* Render Additional Addresses beside Present Address */}
        
// //       </div>

// //       {addresses.length > 0 && (
// //           <div className="flex flex-col p-4 w-[50%] space-x-4">
// //             {addresses.map((address, index) => (
// //               <div className='flex'>
// //                 <p className='m-2'>
// //                   {/* <strong>Building Name: </strong> */}
// //                   <TextField 
// //                   value={address.buildingName}
// //                   size='small'/>
// //                   </p>
// //                 <p  className='m-2'><TextField 
// //                   value={address.city}
// //                   size='small'/></p>
// //                 <p  className='m-2'><TextField 
// //                   value={address.state}
// //                   size='small'/></p>
// //                 <p ><TextField 
// //                   value={address.zip}
// //                   size='small'/></p>
// //                 <p><TextField 
// //                   value={address.location}
// //                   size='small'/></p>
// //               </div>
// //             )
// //             )}
// //           </div>
// //         )}

// //         </div>

// //       {/* Add New Address Dialog */}
// //       <Dialog open={dialogOpen} onClose={handleDialogClose}>
// //         <DialogTitle>Add New Address</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             name="buildingName"
// //             label="Building Name"
// //             value={newAddress.buildingName}
// //             onChange={handleNewAddressChange}
// //             fullWidth
// //             margin="dense"
// //           />
// //           <TextField
// //             name="zip"
// //             label="Zip"
// //             value={newAddress.zip}
// //             onChange={handleNewAddressChange}
// //             fullWidth
// //             margin="dense"
// //           />
// //           <TextField
// //             name="city"
// //             label="City"
// //             value={newAddress.city}
// //             onChange={handleNewAddressChange}
// //             fullWidth
// //             margin="dense"
// //           />
// //           <TextField
// //             name="state"
// //             label="State"
// //             value={newAddress.state}
// //             onChange={handleNewAddressChange}
// //             fullWidth
// //             margin="dense"
// //           />
// //           <TextField
// //             name="location"
// //             label="Location"
// //             value={newAddress.location}
// //             onChange={handleNewAddressChange}
// //             fullWidth
// //             margin="dense"
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleDialogClose}>Cancel</Button>
// //           <Button onClick={handleAddNewAddressSave} color="primary">
// //             Save
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Notification for saved changes */}
// //       <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={handleNotificationClose}>
// //         <Alert onClose={handleNotificationClose} severity="success">
// //           Address saved successfully!
// //         </Alert>
// //       </Snackbar>
// //     </div>
// //   );
// // };

// // export default LayoutProfileAddress;
