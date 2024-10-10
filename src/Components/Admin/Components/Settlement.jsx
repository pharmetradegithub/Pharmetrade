import React from 'react'
import { TextField } from '@mui/material'

import { useState } from "react";


function Settlement() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [amountPaying, setAmountPaying] = useState('');
  const [error1, setError1] = useState('');
  const [error, setError] = useState({ dateFrom: '', dateTo: '' });

  const handleShowBalance = () => {
    let isValid = true;
    let errorMessages = { dateFrom: '', dateTo: '' };

    if (!dateFrom) {
      errorMessages.dateFrom = 'Invoice Date From is required';
      isValid = false;
    }

    if (!dateTo) {
      errorMessages.dateTo = 'Invoice Date To is required';
      isValid = false;
    }

    if (dateFrom && dateTo && new Date(dateFrom) > new Date(dateTo)) {
      errorMessages.dateTo = 'Invoice Date To cannot be earlier than Invoice Date From';
      isValid = false;
    }
   

    setError(errorMessages);

    if (isValid) {
      // Proceed with balance display logic
      console.log('Show balance');
    }
  };

  const usersData = {
    1: {
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      phoneNumber: "777-777-7777",
      email: "john@example.com",
    },
    2: {
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      phoneNumber: "888-888-8888",
      email: "jane@example.com",
    },
    3: {
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      phoneNumber: "888-888-8888",
      email: "jane@example.com",
    },
    4: {
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      phoneNumber: "888-888-8888",
      email: "jane@example.com",
    },
    // Add more user details as needed
  };

  // State to store the selected user ID (default is 1 for the first user)
  const [selectedUserId, setSelectedUserId] = useState("1");
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  // Handle dropdown selection change
  const handleUserChange = (e) => {
    setSelectedUserId(e.target.value); // Update selected user ID
  };

  // Toggle the visibility of address details
  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  // Get the selected user's details based on the selectedUserId
  const formData = usersData[selectedUserId];
  // const [amountPaying, setAmountPaying] = useState('');
  // const [error, setError] = useState('');

  const handleAmountChange = (e) => {
    const value = e.target.value;

    // Allow only numeric values and decimal points
    if (/^\d*\.?\d*$/.test(value)) {
      setAmountPaying(value);
      setError1('');
    }
  };

  const handleBlur = () => {
    if (!amountPaying) {
      setError1('Amount Paying Now is required');
    } else if (parseFloat(amountPaying) <= 0) {
      setError1('Amount must be greater than zero');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log('Form is valid, submit data.');
    } else {
      console.log('Form is invalid, show errors.');
    }


  };
  return (
    <div className='w-[95%]  p-4 h-full overflow-y-scroll'>

      <div>
        <h1 className='text-blue-900 text-2xl font-semibold ml-5'>Payment Settlements</h1>
      </div>

      <div className=' mt-4 '>



        <div className=' bg-white rounded-md p-2  mb-2 w-[50%]  ml-5  h-full '>
         

         
          <div className='flex flex-col'>

          <div>
            <div className='flex '>
              <label className="font-semibold flex items-center ml-4 mt-5">Member Name / DBA: </label>
              <select
                className=" rounded-md ml-4 border mt-5 text-sm"
                value={selectedUserId}
                onChange={handleUserChange} // Update on selection change
              >
                <option  className='border border-black '>Select  Seller</option>

                <option value="1">Seller Name 1</option>
                <option value="2">Seller Name 2</option>
                <option value="3">Seller Name 3</option>

                <option value="4">Seller Name 4</option>

                {/* Add more options as needed */}
              </select>

              <button
                onClick={toggleDetails}
                className="bg-blue-900 rounded-md   w-28  ml-5 mt-5 text-white font-semibold text-base items-center flex  justify-center"
              >
                {isDetailsVisible ? "Hide Address Details" : "Show Details"}
              </button>
            </div>

            {/* Show address details only if isDetailsVisible is true */}
            {isDetailsVisible && (
              <div className="mt-4 border-4 p-1">
                <div className="flex my-1 gap-1">
                  <div className="w-full flex gap-2">
                    <label className="font-semibold">First Name:</label>
                    <p>{formData.firstName}</p>
                  </div>

                  <div className="w-full flex gap-2">
                    <label className="font-semibold">Last Name:</label>
                    <p>{formData.lastName}</p>
                  </div>
                </div>

                <div className="my-4 flex gap-2">
                  <div className=" w-full flex gap-2">
                    <label className="font-semibold">Address:</label>
                    <p>{formData.address}</p>
                  </div>

                  <div className="w-full flex gap-2">
                    <label className="font-semibold">City:</label>
                    <p>{formData.city}</p>
                  </div>
                </div>

                <div className="flex my-2 gap-2">
                  <div className="w-full flex gap-2">
                    <label className="font-semibold">State:</label>
                    <p>{formData.state}</p>
                  </div>

                  <div className="w-full flex gap-2">
                    <label className="font-semibold">Zip:</label>
                    <p>{formData.zip}</p>
                  </div>
                </div>

                <div className="flex my-2 gap-2">
                  <div className="w-full flex gap-2">
                    <label className="font-semibold">Phone Number:</label>
                    <p>{formData.phoneNumber}</p>
                  </div>

                  <div className="w-full flex gap-2">
                    <label className="font-semibold">Email:</label>
                    <p>{formData.email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className='flex my-2 '>
              <label className='font-semibold text-left ml-4'>Total Amount Due : </label>
              <span className='ml-7'>$ 11,444.00</span>
            </div>

            <div className='flex gap-4 my-2 '>
              <label className='font-semibold ml-4'>Total Amount Paid Till date : </label>
              <span className='ml-1'>$ 6,444.00</span>
            </div>

            {/* <div className='flex justify-start gap-4 my-2'>
              <label className='font-semibold flex items-center'>Invoice Date From :</label>
              <TextField type='date'
                className='border rounded-md'
                size='small'
              />


              <label className='ml-2 font-semibold flex items-center '>Invoice Date To :</label>
              <TextField type='date'
                className='border rounded-md'
                size='small'
              />
              <div className='flex justify-center'>

                <button className='rounded-md bg-blue-900 text-white w-28 p-2 font-semibold flex justify-center items-center'>Show Balance</button>
              </div>
            </div> */}<div className='flex justify-start gap-4 '>
              <label className='font-semibold flex items-center ml-4'>Invoice Date From:</label>
              <TextField
                type='date'
                className='border rounded-md'
                size='small'
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                error={!!error.dateFrom}
                helperText={error.dateFrom}
              />
        </div>
        <div className='flex my-2'>
              <label className=' font-semibold flex items-center mr-9 ml-4'>Invoice Date To:</label>
              <TextField
                type='date'
                className='border rounded-md ml-5'
                size='small'
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                error={!!error.dateTo}
                helperText={error.dateTo}
              />

<div className='flex justify-center ml-4 '>
                <button
                  className='rounded-md bg-blue-900 text-white w-28 p-2 font-semibold flex justify-center items-center'

                >
                  Show Balance
                </button>
              </div>
              
            </div>
           

            <div>
              <label className='font-semibold gap-2 my-2  items-center ml-4' >Amount Due :</label>
              <span className=' ml-1'> $ 11,656.00</span>
            </div>

            <div className='flex gap-2 my-2'>
              <label className='font-semibold flex items-center ml-4'>Amount Paying Now:</label>
              <TextField
                type='text'
                size='small'
                label="Amount Paying Now"
                className='border rounded-md'
                value={amountPaying}
                onChange={handleAmountChange}
                onBlur={handleBlur}
                error1={!!error1}
                helperText={error1}
              />
              </div>
              <div className='flex'>
              <label className='font-semibold flex items-center mr-16 ml-4'>Payable To :</label>
              <TextField type='text'
                label="Payable To"
                size='small'
                className='border rounded-md ml-4 '
               />
            </div>

            <div className='flex gap-2 my-2'>
              <label className='font-semibold  flex items-center ml-4'>Save Cheque Image :</label>
              <TextField type='file'
                size='small'
                className='w-52  ' />
                </div><div className='flex'>

              <label className='font-semibold flex items-center mr-12 ml-4'>Payment Date:</label>
              <TextField type='date'
                className='border rounded-md w-52'
                size='small'
                
              />
            </div>

            <div className='my-3'>
              <label className='font-semibold  gap-2 ml-4 '>Mode of  payment :</label>
              <input
                type='radio'
                className='mr-2 ml-2' />
              <label className='mr-2'>Wire</label>

              <input
                type='radio' />
              <label className='ml-2'>Cheque</label>
            </div>

            <div className='flex my-2 gap-2'>
              <label className='font-semibold flex items-center mr-12 ml-4'>Bank Name   : </label>
              <TextField
                type='text'
                label="Bank Name"
                size='small' 
                className=''/>
                </div>
              <div className='flex'>
              <label className='font-semibold flex items-center mr-5 ml-4'>Check Mailed On  :</label>
              <TextField type='date'
                className='border rounded-md w-52 h-5'
                size='small'
              />
            </div>

            <div className='gap-2 flex justify-center my-4'>
              <button className="bg-blue-900 text-white w-14 p-1 my-4 rounded-md font-semibold" onClick={handleShowBalance} >

                Save
              </button >
              <button className="bg-blue-900 text-white ml-3  my-4 w-14 p-1 rounded-md font-semibold">
                Cancel
              </button>
            </div>

          </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Settlement