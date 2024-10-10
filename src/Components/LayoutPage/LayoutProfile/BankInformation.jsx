import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import edit from '../../../assets/Edit.png';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { useStates } from 'react-us-states';

const BankInformation = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    BankAddress: '',
    RoutingNumber: '',
    AccountNumber: '',
    AccountType :"",
    CheckPayableTo:"",
    firstname:"",
    lastname:"",
    Address1: '',
    Address2: '',
    city: '',
    state: '',
    zip: '',
    bankAccountDollars: '',
  });

  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const validate = () => {
    const newErrors = {};
    const regex = /^[0-9]*$/; // For numeric validation

    if (!formData.bankName) newErrors.bankName = 'Bank Name is required';
    if (!formData.BankAddress) newErrors.BankAddress = 'Bank Address is required';
    if (!formData.RoutingNumber) newErrors.RoutingNumber = 'Routing Number is required';
    if (!formData.AccountNumber) newErrors.AccountNumber = 'Account Number is required';
    if(!formData.AccountType) newErrors.AccountType = "Account Type is required";
   if(!formData.CheckPayableTo) newErrors.CheckPayableTo ="Check Payable To is required"
   if(!formData.firstname) newErrors.firstname ="First Name is required"; 
   if(!formData.lastname) newErrors.lastname ="Last Name is required";
   if (!formData.Address1) newErrors.Address1 = 'Address Line 1 is required';
    if (!formData.Address2) newErrors.Address2 = 'Address Line 2 is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip || !regex.test(formData.zip)) newErrors.zip = 'Valid Zip is required';
    if (!formData.bankAccountDollars || !regex.test(formData.bankAccountDollars)) {
      newErrors.bankAccountDollars = 'Valid Bank Account Dollars is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      setFormData({
        bankName: '',
        BankAddress: '',
        RoutingNumber: '',
        AccountNumber: '',
        AccountType :"",
        CheckPayableTo:"",
        firstname :"",
        lastname:"",
        Address1: '',
        Address2: '',
        city: '',
        state: '',
        zip: '',
        bankAccountDollars: '',
      });
      setErrors({});
    }
  };

  const [isTabEdit, setIsTabEdit] = useState(false);

  const handleTabClick = () => {
    setIsTabEdit(true);
  };

  const handletabesave = () => {
        setIsTabEdit(false)
       }

       const accountTypes = ['Savings', 'Checking', 'Current']; // Example account types

       const [states, setStates] = useState([]);

       useEffect(() => {
         // Set the states data
         setStates(useStates); // Adjust based on actual structure
       }, []);

       const handleChange = (event) => {
        setFormData({
          ...formData,
          state: event.target.value, // Update the selected state
        });
      };

  return (
    <div >
     <h1 className='text-xl text-blue-900 font-semibold mx-6 py-4'>Bank Information</h1>
     {/* <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] "> */}
     <div className={`bg-white border  ${isTabEdit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[80%] mt-8 relative`}>
  {/* Conditionally display heading on the border */}
  {isTabEdit && (
    <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
      Beneficiary Bank Details
    </h1>
  )}            {/* <h1 className="text-xl font-semibold text-blue-900 my-2">Address Information</h1> */}


      <div className="flex justify-between my-2">
            <h1 className={`text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue-900'}`}>Beneficiary Bank Details</h1>
        {/* <h1 className="text-xl font-bold mb-4 text-blue-900 "> Beneficiary Bank Details </h1> */}
        <img src={edit} className="w-6 h-6 ml-4" onClick={handleTabClick} />
      </div>
      <form onSubmit={handleSubmit}>
        {/* Bank Name and Payee */}
        <div className="flex mb-4">
          <div className="mr-2 ml-2">
            <label className="block mb-1">Bank Name</label>
            <TextField
              label="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.bankName} // Shows red border if error exists
              helperText={errors.bankName} // Displays error message
              fullWidth
            />
          </div>
          <div className="ml-6 mr-2">
            <label className="block mb-1">Bank Address</label>
            <TextField
              label="Bank Address"
              name="Bank Address"
              value={formData.BankAddress}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.BankAddress}
              helperText={errors.BankAddress}
              fullWidth
            />
          </div>
          <div className="mr-2  ml-6">
            <label className="block mb-1">Routing Number</label>
            <TextField
              label="Routing Number"
              name="Routing Number"
              value={formData.RoutingNumber}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.RoutingNumber}
              helperText={errors.RoutingNumber}
              fullWidth
            />
          </div>
        </div>

        {/* IBAN and SWIFT BIC */}
        <div className="flex mb-4">
          
          <div className="ml-2 mr-2">
            <label className="block mb-1">Account Number</label>
            <TextField
              label="Account Number"
              name="Account Number"
              value={formData.AccountNumber}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.AccountNumber}
              helperText={errors.AccountNumber}
              fullWidth
            />
          </div>
          <div className="ml-6 mr-2 w-[27%]">
            <label className="block mb-1">Account Type</label>
            {/* <TextField
              label="Account Type"
              name="Account Type"
              value={formData.AccountType}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.AccountType}
              helperText={errors.AccountType}
              fullWidth
            /> */}

<FormControl fullWidth error={!!errors.AccountType} size="small" disabled={!isTabEdit}>
      <InputLabel id="account-type-label">Account Type</InputLabel>
      <Select
        labelId="account-type-label"
        name="AccountType"
        value={formData.AccountType}
        onChange={handleChange}
        label="Account Type"
        // className='w-[135%]'
      >
        {accountTypes.map((type, index) => (
          <MenuItem key={index} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      {errors.AccountType && <FormHelperText>{errors.AccountType}</FormHelperText>}
    </FormControl>
          </div>
          <div className="ml-6 mr-2 ">
            <label className="block mb-1">Check Payable To</label>
            <TextField
              label="Check Payable To"
              name="Check Payable To"
              value={formData.CheckPayableTo}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.CheckPayableTo}
              helperText={errors.CheckPayableTo}
              fullWidth
            />
          </div>
        </div>

        <h1 className="text-xl font-bold mb-4 text-blue-900"> Beneficiary  Details </h1>

        {/* Address 1, Address 2 */}
        <div className="flex mb-4">
        <div className="mr-2 ml-2">
            <label className="block mb-1">First Name</label>
            <TextField
              label="First Name"
              name="First Name"
              value={formData.firstname}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.firstname}
              helperText={errors.firstname}
              fullWidth
            />
          </div>
          <div className="mr-4 ml-4">
            <label className="block mb-1">Last Name</label>
            <TextField
              label="Last Name"
              name="state"
              value={formData.lastname}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.lastname}
              helperText={errors.lastname}
              fullWidth
            />
          </div>

          <div className="mr-2 ml-4">
            <label className="block mb-1">Address Line 1</label>
            <TextField
              label="Address Line 1"
              name="Address1"
              value={formData.Address1}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.Address1}
              helperText={errors.Address1}
              fullWidth
            />
          </div>
        
        </div>

        {/* City and Zip */}
        <div className="flex mb-4">

            <div className="ml-2 mr-2 ">
            <label className="block mb-1">Address Line 2</label>
            <TextField
              label="Address Line 2"
              name="Address2"
              value={formData.Address2}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.Address2}
              helperText={errors.Address2}
              fullWidth
            />
          </div>
          <div className="mr-4 ml-4 ">
            <label className="block mb-1">City</label>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.city}
              helperText={errors.city}
              fullWidth
            />
          </div>
          <div className="mr-2 ml-4">
            <label className="block mb-1">State</label>
            {/* <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              error={!!errors.state}
              helperText={errors.state}
              fullWidth
            /> */}

<FormControl
                size="small"
                error={!!errors.States}
                sx={{ minWidth: 210, whiteSpace: 'initial' }}
              >
                <InputLabel id="state-select-label">State</InputLabel>
                <Select
                  id="state-select"
                  label="State"
                  value={formData.state} // Correctly bind the form value
                  name="States" // Ensure name matches the key in addressForm
                  onChange={(e) => handleChange(e)} // Handle state change
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200, // Set the maximum height of the dropdown
                      },
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {states.map((state) => (
                    <MenuItem key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
          </div>
          
        </div>

        {/* State and Bank Account Dollars */}
        <div className="flex mb-4">
         
        <div className="ml-2 w-1/3">
            <label className="block mb-1">Zip</label>
            <TextField
              label="Zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              size="small"
              disabled={!isTabEdit}
              // error={!!errors.zip}
              error={!!errors.zip} 
              helperText={errors.zip}
              className= "w-[83%]"
              // ${!!errors.zip ? 'border-red-500' : ''}`}
            />
          </div>
        </div>

        <div className='flex justify-end my-4'>
        <button
                    // className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold"
                     className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""}`}
                     // Disable button when not editable
                     onClick={handletabesave} >Save</button>        </div>
      </form>
      </div>

    

     
    </div>
  );
};

export default BankInformation;
