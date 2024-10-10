import React, { useState, useEffect } from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import cross from "../../assets/letter-x[1].png";
import plus from "../../assets/Icons/plus[1].png";
import logo from "../../assets/logo2.png";
import payment from "../../assets/Icons/paymenticons.png";
import dropdown from "../../assets/Icons/dropDownb.png";
import { Box, TextField, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdApi } from "../../Api/ProductApi";
import Payment from "./Payment";
import { FaLock } from "react-icons/fa";
import ItemsAndDelivery from "./ItemsAndDelivery";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Notification from "../Notification";
import { useStates } from "react-us-states";
import { fetchGetOrder } from "../../Api/OrderApi";
import Remove from "../../assets/trash.png";
import Bin from "../../assets/Bin.png";
import edit from "../../assets/Edit.png";
import axios from "axios";
import wrong from "../../assets/Icons/wrongred.png";
import { fetchAddAddress, fetchDeleteAddressApi, fetchGetByCustomerId } from "../../Api/AddressApi";
// import { setAddress } from "../../Store/Store";
function Address({ topMargin, totalAmount }) {
  // const fetchData = useSelector((state) => state.product.Products);
  const [searchParams] = useSearchParams();
  const total = searchParams.get("total");

  // console.log("ffffffff--->", totalAmount)
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    townCity: "",
    stateCountry: "",
    postalCode: "",
    email: "",
    phone: "",
    Bussiness_phone: "",
  });

  const [isTotalHidden, setIsTotalHidden] = useState(false);
  const handleOpenAddress = () => {
    // Navigate("/address");
    setIsTotalHidden(false);
  };
  const [showError, setShowError] = useState(false);

  // Function to handle the "Use this address" button click
  const handleUseAddress = () => {
    setIsTotalHidden(true);
    // if (selectedAddressId) {
    //   // Logic to handle using the selected address
    //   console.log(`Using address with ID: ${selectedAddressId}`);
    //   // You can add your navigation logic here
    // } else {
    //   setShowError(true); // Show error if no address is selected
    // }
  };

  // const [formErrors, setFormErrors] = useState({});

  const [showWeekendOptions, setShowWeekendOptions] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const details = [
    {
      name: "Ram",
      // lastname: "Smith",
      Address: "Dollars",
      City: "Dollars",
      States: "Dollars",
      Country: "US",
      Pin: 56789,
      email: "ram@example.com",
      phone: "+1234567890",
    },
  ];
  const [formErrors, setFormErrors] = useState({
    First_Name: "",
    Last_Name: "",
    Address: "",
    Phone_Number: "",
    Town_City: "",
    Pin_Code: "",
    Bussiness_phone: "",
  });

  const formatPhoneNumber = (phoneNumber) => {
    // Remove non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, "");

    // Format as 3-3-4
    let formattedPhoneNumber = "";
    for (let i = 0; i < phoneNumber.length; i++) {
      if (i === 3 || i === 6) {
        formattedPhoneNumber += "-";
      }
      formattedPhoneNumber += phoneNumber[i];
    }
    return formattedPhoneNumber;
  };

  const user = useSelector((state) => state.user.user);
  console.log("user-->address", user);

  useEffect(() => {
    dispatch(fetchGetOrder(user?.customerId));
  }, [user]);

  useEffect(() => {
    if (shortPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  // add new address popup
  const [showPopUp, setShowPopUp] = useState(false);
  // edit address popup
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  const [shortPopup, setShortPopup] = useState(false);
  const [isShortPopup, setIsShortPopup] = useState(false);
  const [selectedAddressType, setSelectedAddressType] = useState("");
  const [iscardEmiopen, SetIsCardEmiOpen] = useState(false);

  const handleRemove = () => setShowPopUp(false);
  const handleshortpopOpen = () => setShortPopup(!shortPopup);

  const handleAddressTypeClick = (type) => {
    setSelectedAddressType(type);
  };

  const handlepopOpen = () => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    setNewAddressForm({
      First_Name: "",
      Last_Name: "",
      Phone_Number: "",
      Pin_Code: "",
      Address: "",
      Town_City: "",
      States: "",
    });
    setShowPopUp(true);
  };

  const handleCardemiOpen = () => {
    SetIsCardEmiOpen(true);
  };

  const handleCardemiremove = () => {
    SetIsCardEmiOpen(false);
  };

  const handleAddaddress = () => {
    setShortPopup(true);
  };
  const handleAddaddressremove = () => {
    setShortPopup(false);
  };

  const handleUseAddressbutton = () => {
    const errors = {};

    // Check for empty required fields and set error messages
    if (!document.getElementById("First_Name").value) {
      errors.First_Name = "First Name is required";
    }
    if (!document.getElementById("Phone_Number").value) {
      errors.Phone_Number = "Phone Number is required";
    }
    if (!document.getElementById("Pin_Code").value) {
      errors.Pin_Code = "Pin Code is required";
    }
    if (!document.getElementById("Address").value) {
      errors.Address = "Address is required";
    }
    if (!document.getElementById("Bussiness_phone").value) {
      errors.Bussiness_phone = "Bussiness_phone is required";
    }
    if (!document.getElementById("States").value) {
      errors.States = "States is required";
    }
    if (!document.getElementById("Town_City").value) {
      errors.Town_City = "Town_City is required";
    }

    setFormErrors(errors);

    // If no errors, proceed with using the address
    if (Object.keys(errors).length === 0) {
      // Handle the logic for using the address
      alert("Address used successfully!");
    }
  };
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const [showpagepopup, setShowpagepopup] = useState(false);

  const handleNavigate = () => {
    setShowpagepopup(true);
  };

  const handleStayInCheckout = () => {
    // Handle action when "Stay in Checkout" is clicked
    setShowpagepopup(false);
    // Add your logic here
  };

  const handleReturnToCart = () => {
    // Handle action when "Return to Cart" is clicked
    // setShowpagepopup(false);
    // Add your logic here
    navigate("/cart");
  };

  const handleDeliveryInstruction = () => {
    setIsShortPopup(true);
  };
  const handledeliveryremove = () => {
    setIsShortPopup(false);
  };

  const [addressForm, setAddressForm] = useState({
    First_Name: "",
    Last_Name: "",
    Phone_Number: "",
    Pin_Code: "",
    Address: "",
    Bussiness_phone: "",
    States: "",
    Town_City: "",
  });

  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [selectedAddressId, setSelectedAddressId] = useState([]);
  const handleEditAddress = async (addressId, item) => {
    // Assuming you want to edit the first address (index 0)

    // Populate the form with the selected address
    setAddressForm({
      First_Name: item.firstName,
      Last_Name: item.lastName,
      Phone_Number: item.phoneNumber,
      Town_City: item.city,
      Pin_Code: item.pincode,
      States: item.state,
      Address: item.address1,
      // Bussiness_phone: selectedAddress.Bussiness_phone,
    });

    setSelectedAddressId(addressId);
    // Show the popup with the pre-filled address
    setIsShowPopUp(true);

    try {
      const response = await fetch(
        `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetById?addressId=${addressId}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
            errorDetails
          )}`
        );
      }

      const result = await response.json();
      // setProductData(result.result[0]);
      console.log("getnewForm-->", result.result);
      // setGetAddress(result.result[0])
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setAddressForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Phone number formatting (777-777-7777)
    if (name === "Phone_Number") {
      const formattedPhone = formatPhoneNumber(value);
      setAddressForm((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));
    } else {
      setAddressForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
 

  const validateForm = () => {
    const errors = {};
    
    if (!addressForm.First_Name.trim()) {
      errors.First_Name = "First name is required";
    }
    if (!addressForm.Last_Name.trim()) {
      errors.Last_Name = "Last name is required";
    }
    if (!addressForm.Address.trim()) {
      errors.Address = "Address is required";
    }
    if (!addressForm.Town_City.trim()) {
      errors.Town_City = "City is required";
    }
    if (!/^\d{5}$/.test(addressForm.Pin_Code)) {
      errors.Pin_Code = "Zip code must be 5 digits";
    }
    // if (!/^\d{3}-\d{3}-\d{4}$/.test(addressForm.Phone_Number)) {
    //   errors.Phone_Number = "Phone number must be in 777-777-7777 format";
    // }
    if (!addressForm.States) {
      errors.States = "State is required";
    }
  
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSaveAddress = async (e) => {
    // Implement save address functionality here
    // e.preventDefault();
  
    if (!validateForm()) {
      return; // Stop if validation fails
    }
    console.log("Address saved:", addressForm);
    e.preventDefault();
    console.log("saveee--->", addressForm);
    const payload = {
      addressId: selectedAddressId, // If `selectedAddressId` is present, it means we're editing
      customerId: userId,
      firstName: addressForm.First_Name,
      middleName: null,
      lastName: addressForm.Last_Name,
      phoneNumber: addressForm.Phone_Number,
      pincode: addressForm.Pin_Code,
      address1: addressForm.Address,
      address2: null,
      landmark: "",
      city: addressForm.Town_City,
      state: addressForm.States,
      country: null,
      isDefault: true,
      addressTypeId: 1,
      deliveryInstructions: null,
    };

    try {
      // If selectedAddressId is present, update the address, otherwise add a new one
      // const apiUrl = selectedAddressId
      //   ? `http://your-api-url.com/api/Customer/Address/Update/${selectedAddressId}`
      //   : 'http://your-api-url.com/api/Customer/Address/Add';

      // const method = selectedAddressId ? 'PUT' : 'POST';

      const response = await fetch(
        "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Edit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to ${selectedAddressId ? "update" : "add"} address`
        );
      }

      const responseData = await response.json();
      if (responseData.result && responseData.result.length > 0) {
        const newAddress = responseData.result[0];
        if (newAddress && newAddress.addressId) {
          setNewAddressData(newAddress); // Save the new address object to state
          fetchCustomerById();
          setIsShowPopUp(false);
          setNotification({
            show: true,
            message: "Edit Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        } else {
          console.warn("Address data is missing addressId:", newAddress);
          setIsShowPopUp(false);
        }
      } else {
        console.warn("No address data found in response");
        setIsShowPopUp(false); // Close the popup after saving
      }
    } catch (error) {
      console.error("Error adding address:", error);
      setIsShowPopUp(false);
    }
  };
  const [newAddressForm, setNewAddressForm] = useState({
    First_Name: "",
    Last_Name: "",
    Phone_Number: "",
    Pin_Code: "",
    Address: "",
    Town_City: "",
    States: "",
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setNewAddressForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const addAddress = useSelector((state) => state.address.address);
  console.log("addd-->", addAddress);
  const [newAddressData, setNewAddressData] = useState([]);
  const getAddress = useSelector((state) => state.address.customerId);
  console.log("addressdata-->", getAddress);
  // const [getAddress, setGetAddress] = useState(getCustomer);

  // useEffect(() => {
  //   if (newAddressData && newAddressData.addressId) {
  //     console.log("Fetching address details for ID:", newAddressData.addressId);
  //     fetchGetFormData(newAddressData.addressId);
  //   } else {
  //     console.warn("newAddressData is missing or addressId is undefined");
  //   }
  // }, [newAddressData]);

  // const fetchGetFormData = async (addressId) => {
  //   // console.log("ressss-->",responseData)
  //   try {
  //     const response = await fetch(
  //       `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetById?addressId=${addressId}`,
  //       {
  //         method: "GET",
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorDetails = await response.json();
  //       throw new Error(
  //         `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
  //           errorDetails
  //         )}`
  //       );
  //     }

  //     const result = await response.json();
  //     // setProductData(result.result[0]);
  //     console.log("getnewForm-->", result.result);
  //     setGetAddress(result.result);
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //     throw error;
  //   }
  // };

  // const handleSubmitForm = async (e) => {
  //   e.preventDefault();

  //   const payLaodNewForm = {
  //     addressId: "0",
  //     customerId: userId,
  //     firstName: newAddressForm.First_Name,
  //     middleName: null,
  //     lastName: null,
  //     phoneNumber: newAddressForm.Phone_Number,
  //     pincode: newAddressForm.Pin_Code,
  //     address1: newAddressForm.Address,
  //     address2: null,
  //     landmark: "",
  //     city: newAddressForm.Town_City,
  //     state: newAddressForm.States,
  //     country: null,
  //     isDefault: true,
  //     addressTypeId: 1,
  //     deliveryInstructions: null,
  //   };

  //   try {
  //     const response = await fetch(
  //       "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  //         },
  //         body: JSON.stringify(payLaodNewForm),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to add address");
  //     }

  //     const responseData = await response.json();
  //     if (responseData.result && responseData.result.length > 0) {
  //       const newAddress = responseData.result[0];
  //       if (newAddress && newAddress.addressId) {
  //         setNewAddressData(newAddress); // Save the new address object to state
  //         fetchCustomerById();
  //         setShowPopUp(false);
  //         setNotification({
  //           show: true,
  //           message: "Add new address Successfully!",
  //         });
  //         setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //       } else {
  //         console.warn("Address data is missing addressId:", newAddress);
  //         setShowPopUp(false);
  //       }
  //     } else {
  //       console.warn("No address data found in response");
  //       setShowPopUp(false);
  //     }
  //   } catch (error) {
  //     console.error("Error adding address:", error);
  //     setShowPopUp(false);
  //   }
  // };

  // useEffect(() => {

  //   const handleSubmitForm = async (e) => {
  //     e.preventDefault();

  //     // Validation logic
  //     const errors = {};

  //     if (!newAddressForm.First_Name) {
  //       errors.First_Name = "First Name is required";
  //     }
  //     if (!newAddressForm.Last_Name) {
  //       errors.Last_Name = "Last Name is required";
  //     }

  //     if (!newAddressForm.Phone_Number) {
  //       errors.Phone_Number = "Phone Number is required";
  //     } else if (newAddressForm.Phone_Number.length !== 10 || isNaN(newAddressForm.Phone_Number)) {
  //       errors.Phone_Number = "Phone Number must be 10 digits";
  //     }
  //     // if (!newAddressForm.Phone_Number || newAddressForm.Phone_Number.length < 10) {
  //     //   errors.Phone_Number = "Phone number is required and must be 10 digits";
  //     // }
  //     if (!newAddressForm.Address) {
  //       errors.Address = "Address is required";
  //     }
  //     if (!newAddressForm.Town_City) {
  //       errors.Town_City = "City is required";
  //     }
  //      // State Validation
  // if (!newAddressForm.States) {
  //   errors.States = "State is required";
  // }
  //     // if (!newAddressForm.States) {
  //     //   errors.States = "State is required";
  //     // }
  //     if (!newAddressForm.Pin_Code) {
  //       errors.Pin_Code = "Zip/Pin Code is required";
  //     } else if (isNaN(newAddressForm.Pin_Code) || newAddressForm.Pin_Code.length !== 6) {
  //       errors.Pin_Code = "Zip/Pin Code must be 6 digits";
  //     }

  //     setFormErrors(errors); // Update the state with validation errors

  //     // If there are errors, stop form submission
  //     if (Object.keys(errors).length > 0) {
  //       return;
  //     }

  //     const payLaodNewForm = {
  //       addressId: "0",
  //       customerId: userId,
  //       firstName: newAddressForm.First_Name,
  //       middleName: null,
  //       lastName: newAddressForm.Last_Name,
  //       phoneNumber: newAddressForm.Phone_Number,
  //       pincode: newAddressForm.Pin_Code,
  //       address1: newAddressForm.Address,
  //       address2: null,
  //       landmark: "",
  //       city: newAddressForm.Town_City,
  //       state: newAddressForm.States,
  //       country: null,
  //       isDefault: true,
  //       addressTypeId: 1,
  //       deliveryInstructions: null,
  //     };

  //     try {
  //       const response = await fetch(
  //         "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(payLaodNewForm),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to add address");
  //       }

  //       const responseData = await response.json();
  //       if (responseData.result && responseData.result.length > 0) {
  //         const newAddress = responseData.result[0];
  //         if (newAddress && newAddress.addressId) {
  //           setNewAddressData(newAddress); // Save the new address object to state
  //           fetchCustomerById();
  //           setShowPopUp(false);
  //           setNotification({
  //             show: true,
  //             message: "Add new address Successfully!",
  //           });
  //           setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //         } else {
  //           console.warn("Address data is missing addressId:", newAddress);
  //           setShowPopUp(false);
  //         }
  //       } else {
  //         console.warn("No address data found in response");
  //         setShowPopUp(false);
  //       }
  //     } catch (error) {
  //       console.error("Error adding address:", error);
  //       setShowPopUp(false);
  //     }
  //   };

  const fetchCustomerById = async () => {
    // console.log("Fetching address details for ID:", addressId);

    // try {
    //   const response = await fetch(
    //     `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetByCustomerId?customerId=${userId}`,
    //     {
    //       method: "GET",
    //     }
    //   );

    //   if (!response.ok) {
    //     const errorDetails = await response.json();
    //     throw new Error(
    //       `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
    //         errorDetails
    //       )}`
    //     );
    //   }

    //   const result = await response.json();
    //   console.log("Fetched address details:", result.result);
    //   // setGetAddress((prevAddresses) => [...prevAddresses, result.result]);
    //   // else if (result.result) {
    //   //   // Append the single address
    //   //   setGetAddress((prevAddresses) => [...prevAddresses, result.result]);
    //   // }
    //   setGetAddress(result.result);
    // } catch (error) {
    //   console.error("Error fetching address details:", error);
    // }
    dispatch(fetchGetByCustomerId(user?.customerId));
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};

    // First Name Validation
    if (!newAddressForm.First_Name.trim()) {
      errors.First_Name = "First Name is required";
    }

    // Last Name Validation
    if (!newAddressForm.Last_Name.trim()) {
      errors.Last_Name = "Last Name is required";
    }

    // Phone Number Validation
    // if (!newAddressForm.Phone_Number) {
    //   errors.Phone_Number = "Phone Number is required";
    // } else if (!/^\d{10}$/.test(newAddressForm.Phone_Number)) {
    //   errors.Phone_Number = "Phone Number must be exactly 10 digits";
    // }

    // Address Validation
    if (!newAddressForm.Address.trim()) {
      errors.Address = "Address is required";
    }

    // City Validation
    if (!newAddressForm.Town_City.trim()) {
      errors.Town_City = "City is required";
    }
    // Check if the "State" field is empty
    if (!newAddressForm.States || newAddressForm.States.trim() === "") {
      errors.States = "State is required";
    }

    // State Validation
    // if (!newAddressForm.States) {
    //   errors.States = "State is required";
    // }

    // Zip Code (Pin Code) Validation
    if (!newAddressForm.Pin_Code) {
      errors.Pin_Code = "Zip/Pin Code is required";
    } else if (!/^\d{5}$/.test(newAddressForm.Pin_Code)) {
      errors.Pin_Code = "Zip/Pin Code must be exactly 5 digits";
    }

    setFormErrors(errors); // Update the state with validation errors

    // If there are errors, stop form submission
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log(newAddressForm, "new address");
    const payLaodNewForm = {
      addressId: "0",
      customerId: userId,
      firstName: newAddressForm.First_Name,
      middleName: null,
      lastName: newAddressForm.Last_Name,
      phoneNumber: newAddressForm.Phone_Number,
      pincode: newAddressForm.Pin_Code,
      address1: newAddressForm.Address,
      address2: null,
      landmark: "",
      city: newAddressForm.Town_City,
      state: newAddressForm.States,
      country: null,
      isDefault: true,
      addressTypeId: 1,
      deliveryInstructions: null,
    };

    // try {
    //   const response = await fetch(
    //     "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payLaodNewForm),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Failed to add address");
    //   }

    //   const responseData = await response.json();
    //   if (responseData.result && responseData.result.length > 0) {
    //     const newAddress = responseData.result[0];
    //     if (newAddress && newAddress.addressId) {
    //       setNewAddressData(newAddress); // Save the new address object to state
    //       fetchCustomerById();
    //       setShowPopUp(false);
    //       setNotification({
    //         show: true,
    //         message: "Address added successfully!",
    //       });
    //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    //     } else {
    //       console.warn("Address data is missing addressId:", newAddress);
    //       setShowPopUp(false);
    //     }
    //   } else {
    //     console.warn("No address data found in response");
    //     setShowPopUp(false);
    //   }
    // } catch (error) {
    //   console.error("Error adding address:", error);
    //   setShowPopUp(false);
    // }
    try {
      await dispatch(fetchAddAddress(payLaodNewForm));
      setShowPopUp(false);
      setNotification({
        show: true,
        message: "Address added successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      await fetchCustomerById();
    } catch (error) {
      console.error("Error adding address:", error);
      setShowPopUp(false);
    }
  };

  useEffect(() => {
    dispatch(fetchGetByCustomerId(user?.customerId));
  }, [dispatch, user?.customerId]);

  // })

  const handleUseAddressButtons = (e) => {
    e.preventDefault();
    setShowPopUp(false);
    setShowPopUp(true);
    handleSubmitForm(e);
  };

  // console.log("add----->", getAddress);

  const [states, setStates] = useState([]);

  useEffect(() => {
    // Set the states data
    setStates(useStates); // Adjust based on actual structure
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStates = states.filter((state) => {
    return state.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // const [selectedaddressId, setSelectedaddressId] = useState(getAddress[0]?.addressId);

  // useEffect(() => {
  //   if (getAddress.length > 0 && !selectedAddressId) {
  //     // Set the first address as the default selected address when data is loaded
  //     setSelectedAddressId(getAddress[0].addressId);
  //   }
  // }, [getAddress]);
  const [isInitialized, setIsInitialized] = useState(false); // Flag to track if default selection is set

  useEffect(() => {
    // Check if getAddress has data and we haven't initialized the selection yet
    if (getAddress.length > 0 && !isInitialized) {
      // Set the first address as the default selected address
      setSelectedAddressId(getAddress[0].addressId);
      setIsInitialized(true); // Mark as initialized
    }
  }, [getAddress, isInitialized]);

  const handleChangeAddress = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const selectedAddress = getAddress.find(
    (item) => item.addressId === selectedAddressId
  );

  const [address, setAddress] = useState(null);
  // const handleRemoveAddress = async (addressId) => {
  //   try {
  //     // Send a POST request to delete the address
  //     const response = await axios.post(
  //       `/api/Customer/Address/Delete?addressId=${addressId}`
  //     );

  //     console.log("Response from delete:", response);

  //     if (response.status === 200) {
  //       // Filter out the deleted address from the address list
  //       const updatedAddresses = getAddress.filter(
  //         (address) => address.addressId !== addressId
  //       );

  //       // Update the state with the new list of addresses
  //       setAddress(updatedAddresses);

  //       // Optionally, show a success message
  //       alert("Address removed successfully!");
  //     } else {
  //       // Handle cases where the deletion was not successful
  //       alert("Failed to remove the address. Please try again.");
  //     }
  //   } catch (error) {
  //     // Catch and handle any errors (network or other)
  //     console.error("Error deleting address:", error);
  //     alert(
  //       "An error occurred while deleting the address. Please try again later."
  //     );
  //   }
  // };

  const [deletePop, setDeletePop] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(null);
  // const [notification, setNotification] = useState({ show: false, message: "" });

  // Delete Address Handler
  const handleDeleteAddress = (addressId) => {
    console.log("Opening delete modal for address ID:", addressId);
    setDeletePop(true); // Set modal to visible
    setDeleteProduct(addressId); // Set the selected product to delete
  };

  // Cancel Delete Button
  const cancelDeleteButton = () => {
    console.log("Canceling delete operation");
    setDeletePop(false); // Close modal without deleting
    // setDeleteProduct(null); // Reset selected product
  };

  // Success Delete Button
  const successDeleteButton = async () => {
    try {
      console.log("Deleting product:", deleteProduct);
      if (deleteProduct) {
        await fetchDeleteAddressApi(deleteProduct); // Call delete API
        setDeletePop(false); // Close modal after deletion
        setDeleteProduct(null); // Reset selected product
        setNotification({ show: true, message: "Address Deleted Successfully!" });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      }
    } catch (error) {
      console.error("Error while deleting product:", error);
      setNotification({ show: true, message: "Error deleting address." });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    }
  };

  // Close Modal Button
  const closeDeleteButton = () => {
    console.log("Closing delete modal");
    setDeletePop(false); // Close modal
    setDeleteProduct(null); // Reset selected product
  };


  return (
    <div className="w-full flex justify-center">
      {deletePop && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900 bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
            <div className="flex justify-end">
              <button className="w-5 p-1 -mt-8 mx-2" onClick={closeDeleteButton}>
                <img src={wrong} className="w-6 h-4" alt="Close" />
              </button>
            </div>
            <h1 className="text-black text-center mt-2">
              Are you sure you want to delete this address?
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
      <div className="bg-white  Largest:w-[1550px]  Laptop:w-full  w-full h-fit text-lg text-black px-12 py-2 relative">
        <div className=" w-[85%] flex   items-center shadow-transparent ">
          <div className="w-[50%]">
            <img
              src={logo}
              className="w-48 h-16 cursor-pointer"
              alt="logo"
              onClick={handleNavigate}
            />
            <Notification
              show={notification.show}
              message={notification.message}
            />
            {/* {showpagepopup && ( */}
            <div className="z-50 -ml-20 flex items-center justify-center bg-opacity-50">
              <div className="bg-gray-100 p-2 rounded-lg shadow-lg">
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded"
                    onClick={handleStayInCheckout}
                  >
                    Stay in Checkout
                  </button>
                  <button
                    className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 rounded"
                    onClick={handleReturnToCart}
                  >
                    Return to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* )} */}
          </div>
          <h1 className="text-3xl flex  text-center text-black ">Checkout</h1>
          {/* <FaLock /> */}
        </div>
        <div className="bg-white p-4 w-full h-full border-t">
          <div className="flex flex-col">
            <div className="">
              {!isTotalHidden && (
                <h1 className="text-orange-700 font-semibold text-lg my-2">
                  1 Select a delivery and service address
                </h1>
              )}
              <div className="flex w-full ">
                {!isTotalHidden && (
                  // {isOpenAddress &&

                  <div className="flex min-w-full">
                    {/* <div className=""> */}


                    <div className="border shadow-md rounded-md h-56 w-full overflow-y-auto">
                      <div className="p-2 mx-5 ">
                        <h1 className="border-b-2 text-base  bg-white mt-3">
                          Your Address
                        </h1>
                        <div className="overflow-y-scroll h-28">
                          {getAddress.length === 0 ? (
                            <div className="w-full">
                              <p className="mt-6 pt-2 flex justify-center text-xl text-blue-900 font-semibold">
                                Please select an address before continuing
                              </p>
                            </div>
                          ) : (
                            getAddress.map((item) => (
                              <div
                                key={item.addressId}
                                className="border flex-col rounded-md flex my-2 p-2 px-6 bg-pink-50 border-orange-200"
                              >
                                <div className="flex flex-col">
                                  <div className="flex text-base w-full">
                                    <div className="flex items-center w-full">
                                      <div className="flex flex-wrap">
                                        <div className="flex">
                                          <input
                                            type="radio"
                                            checked={
                                              selectedAddressId ===
                                              item.addressId
                                            }
                                            onChange={() =>
                                              handleChangeAddress(
                                                item.addressId
                                              )
                                            }
                                            className="mr-3"
                                          />
                                        </div>

                                        <h1 className="font-semibold">
                                          {item.firstName} {item.lastName || ""}
                                          ,
                                        </h1>
                                        {item.address2 && (
                                          <p className="mr-1">
                                            {item.address2},
                                          </p>
                                        )}
                                        <p className="mr-1">{item.address1},</p>
                                        <p className="mr-1">{item.city},</p>
                                        <p className="mr-1">{item.state}</p>
                                        <p className="mr-1">{item.pincode},</p>
                                        <p>{item.phoneNumber}</p>
                                        <p
                                          className="ml-2 items-center flex justify-center text-sm text-cyan-500 hover:underline hover:text-red-500 cursor-pointer"
                                          onClick={() =>
                                            handleEditAddress(
                                              item.addressId,
                                              item
                                            )
                                          }
                                        >
                                          <Tooltip title="Edit" placement="top">
                                            <img
                                              src={edit}
                                              alt="Edit"
                                              className="cursor-pointer w-7 h-7"
                                            // onClick={() => handleEditProduct(product)}
                                            />
                                          </Tooltip>
                                        </p>
                                        <p
                                          className="flex items-center justify-center ml-2 text-sm text-cyan-500 hover:underline hover:text-red-500 cursor-pointer"
                                          onClick={() =>
                                            handleDeleteAddress(item.addressId)
                                          }
                                        >
                                          <Tooltip
                                            placement="top"
                                            title="Delete"
                                          >
                                            <img
                                              src={Bin}
                                              alt="Delete"
                                              className="cursor-pointer w-4 h-4"
                                            // onClick={() => DeleteProduct(product.productID)}
                                            />
                                          </Tooltip>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                        <div className="flex cursor-pointer">
                          <img src={plus} className="w-5 h-5" />
                          <h1
                            className="hover:text-red-400 hover:underline text-cyan-600 "
                            onClick={handlepopOpen}
                          >
                            Add a new address
                          </h1>
                        </div>

                        {/* Conditionally show the "Use this address" button if there are addresses */}
                        {getAddress.length > 0 && (
                          <button
                            className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white "
                            onClick={() => {
                              if (selectedAddressId) {
                                handleUseAddress(); // Proceed with navigation
                              } else {
                                alert(
                                  "Please select an address before continuing."
                                ); // Or display error message
                              }
                            }}
                          >
                            Use this address
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Edit ddress Pop up */}
                    {isShowPopUp && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
                          <div className="flex justify-between border-b pb-4 items-center">
                            <h1>Edit Address</h1>
                            <img
                              src={cross} // Replace with your close icon source
                              className="w-5 h-5 cursor-pointer"
                              onClick={() => setIsShowPopUp(false)}
                              alt="Close Icon"
                            />
                          </div>
                          {/* Address form fields */}

                          <div className="flex my-2 gap-2">
                            <TextField
                              label="First Name"
                              name="First_Name"
                              size="small"
                              className="w-full"
                              value={addressForm.First_Name}
                              onChange={handleInputChange}
                              error={!!formErrors.First_Name}
                              helperText={formErrors.First_Name}
                            />

<TextField
            label="Last Name"
            name="Last_Name"
            size="small"
            className="w-full"
            value={addressForm.Last_Name}
            onChange={handleInputChange}
            error={!!formErrors.Last_Name}
            helperText={formErrors.Last_Name}
          />
                          </div>

                          <div className="my-4 flex gap-2">
                            <TextField
                              label="Address"
                              id="Address"
                              name="Address"
                              size="small"
                              className="w-full"
                              value={addressForm.Address}
                              onChange={handleInputChange}
                              error={!!formErrors.Address}
                              helperText={formErrors.Address}
                            />
                            <TextField
                              label="City"
                              name="Town_City"
                              size="small"
                              className="w-full"
                              value={addressForm.Town_City}
                              onChange={handleInputChange}
                              error={!!formErrors.Town_City}
                              helperText={formErrors.Town_City}
                            />
                          </div>

                          <div className="flex my-2 gap-2">
                            <FormControl
                              className="w-[50%]"
                              size="small"
                              error={!!formErrors.States}
                            >
                              <InputLabel id="state-select-label">
                                State
                              </InputLabel>
                              <Select
                                id="state-select"
                                label="State"
                                value={addressForm.States} // Correctly bind the form value
                                name="States" // Ensure name matches the key in addressForm
                                onChange={handleInputChange}
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
                                  <MenuItem
                                    key={state.abbreviation}
                                    value={state.abbreviation}
                                  >
                                    {state.name}
                                  </MenuItem>
                                ))}
                              </Select>
                              {/* {error.State && <span className="text-red-500">{error.State}</span>} */}
                            </FormControl>

                            <TextField
                              label="Zip "
                              name="Pin_Code"
                              size="small"
                              className="w-[50%]"
                              value={addressForm.Pin_Code}
                              // onChange={handleInputChange}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                handleInputChange({
                                  target: { name: "Pin_Code", value },
                                }); // Update the state with only numbers
                              }}
                              error={!!formErrors.Pin_Code}
                              helperText={formErrors.Pin_Code}
                              inputProps={{ maxLength: 5 }}
                            />
                          </div>
                          <div className="flex my-2 gap-2">
                            <TextField
                              label="Phone Number"
                              name="Phone_Number"
                              size="small"
                              className="w-full"
                              value={formatPhoneNumber(
                                addressForm.Phone_Number
                              )}
                              onChange={handleInputChange}
                              error={!!formErrors.Phone_Number}
                              helperText={formErrors.Phone_Number}
                              inputProps={{ maxLength: 12 }}
                            />

                            <TextField
                              label="Email ID"
                              name="Email ID"
                              size="small"
                              className="w-full"
                            // value={formatPhoneNumber(addressForm.Phone_Number)}
                            // onChange={handleInputChange}
                            // error={!!formErrors.Phone_Number}
                            // helperText={formErrors.Phone_Number}
                            // inputProps={{ maxLength: 12 }}
                            />
                          </div>

                          <div className="my-4">
                            <input type="checkbox" id="default-address" />
                            <label htmlFor="default-address" className="ml-2">
                              Make this my default address
                            </label>
                          </div>

                          <div className="flex justify-between mt-6">
                            <button
                              className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
                              onClick={handleSaveAddress}
                            >
                              Save Address
                            </button>
                            <button
                              className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
                              onClick={() => setIsShowPopUp(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Add new Address popup */}
                    {showPopUp && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
                          <form onSubmit={handleSubmitForm}>
                            <div className="flex justify-between border-b pb-4 items-center">
                              <h1 className="text-blue-900 font-semibold">
                                Add a new address
                              </h1>
                              <img
                                src={cross}
                                className="w-5 h-5 cursor-pointer"
                                onClick={handleRemove}
                                alt="Close Icon"
                              />
                            </div>

                            <div className="flex my-2 gap-2">
                              <TextField
                                label="First Name"
                                id="First_Name"
                                name="First_Name" // Matches state key
                                value={newAddressForm.First_Name} // Controlled input
                                onChange={handleChangeForm} // Call the change handler
                                size="small"
                                className="w-full"
                                error={!!formErrors.First_Name}
                                helperText={formErrors.First_Name}
                              />

                              <TextField
                                label="Last Name"
                                id="Last_Name"
                                name="Last_Name" // Matches state key
                                value={newAddressForm.Last_Name} // Controlled input
                                onChange={handleChangeForm} // Call the change handler
                                size="small"
                                className="w-full"
                                error={!!formErrors.Last_Name}
                                helperText={formErrors.Last_Name}
                              />
                            </div>

                            <div className="my-4 flex gap-2">
                              <TextField
                                label="Address"
                                id="Address"
                                name="Address" // Matches state key
                                value={newAddressForm.Address}
                                onChange={handleChangeForm}
                                size="small"
                                className="w-full"
                                error={!!formErrors.Address}
                                helperText={formErrors.Address}
                              />

                              <TextField
                                label="City"
                                id="Town_City"
                                name="Town_City" // Matches state key
                                value={newAddressForm.Town_City}
                                onChange={handleChangeForm}
                                size="small"
                                className="w-full"
                                error={!!formErrors.Town_City}
                                helperText={formErrors.Town_City}
                              />
                            </div>

                            <div className="flex my-2 gap-2">
                              {/* <FormControl
                                className="w-[50%]"
                                size="small"
                                error={!!formErrors.States}
                              >
                                <InputLabel id="state-select-label">State</InputLabel>
                                <Select
                                  id="state-select"
                                  label="State"
                                  value={newAddressForm.States}
                                  name="State"
                                  onChange={handleInputChange}
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
                                    <MenuItem
                                      key={state.abbreviation}
                                      value={state.abbreviation}
                                    >
                                      {state.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                {/* {error.State && <span className="text-red-500">{error.State}</span>} 
                              </FormControl> */}
                              <FormControl
                                className="w-[50%]"
                                size="small"
                                error={!!formErrors.States}
                              >
                                <InputLabel id="state-select-label">
                                  State
                                </InputLabel>
                                <Select
                                  id="state-select"
                                  label="State"
                                  value={newAddressForm.States} // Bind value to addressForm.States
                                  name="States" // Ensure name matches the state key in addressForm
                                  onChange={handleChangeForm} // Call handleInputChange on selection
                                  MenuProps={{
                                    PaperProps: {
                                      style: {
                                        maxHeight: 200, // Set the max height of the dropdown
                                      },
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  {states.map((state) => (
                                    <MenuItem
                                      key={state.abbreviation}
                                      value={state.abbreviation}
                                    >
                                      {state.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                {formErrors.States && (
                                  <span className="text-red-700 text-sm">
                                    {formErrors.States}
                                  </span>
                                )}
                              </FormControl>

                              <TextField
                                label="zip"
                                id="Pin_Code"
                                name="Pin_Code" // Matches state key
                                value={newAddressForm.Pin_Code}
                                // onChange={handleChangeForm}
                                onChange={(e) => {
                                  const value = e.target.value.replace(
                                    /\D/g,
                                    ""
                                  ); // Remove non-numeric characters
                                  handleChangeForm({
                                    target: { name: "Pin_Code", value },
                                  }); // Update the state with only numbers
                                }}
                                size="small"
                                className="w-[50%]"
                                error={!!formErrors.Pin_Code}
                                helperText={formErrors.Pin_Code}
                                inputProps={{ maxLength: 5 }}
                              />
                            </div>
                            <div className="flex my-2 gap-2">
                              <TextField
                                label="Phone Number"
                                name="Phone_Number"
                                size="small"
                                className="w-full"
                                value={formatPhoneNumber(
                                  newAddressForm.Phone_Number
                                )}
                                onChange={handleChangeForm}
                                error={!!formErrors.Phone_Number}
                                helperText={formErrors.Phone_Number}
                                inputProps={{ maxLength: 12 }}
                              />

                              <TextField
                                label="Email ID"
                                name="Email ID"
                                size="small"
                                className="w-full"
                              // value={formatPhoneNumber(addressForm.Phone_Number)}
                              // onChange={handleInputChange}
                              // error={!!formErrors.Phone_Number}
                              // helperText={formErrors.Phone_Number}
                              // inputProps={{ maxLength: 12 }}
                              />
                            </div>

                            <div className="my-4">
                              <input type="checkbox" id="default-address" />
                              <label htmlFor="default-address" className="ml-2">
                                Make this my default address
                              </label>
                            </div>

                            <div className="flex justify-between mt-6">
                              <button
                                className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
                                type="submit"
                                onClick={handleUseAddressButtons}
                              >
                                Use this address
                              </button>
                              <button
                                className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
                                onClick={handleRemove}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    {/* </div> */}
                    <div className=" w-[30%]  mx-16  flex flex-col pt-2 items-center relative">
                      <div className="border fixed shadow-md rounded-md p-7 py-5">
                        <div className="flex items-center justify-center">
                          {/* <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white"  onClick={() => {
          if (selectedAddressId) {
            handleUseAddress(); // Proceed with navigation
          } else {
            alert('Please select an address before continuing.'); // Or display error message
          }
        }}>
                            Use this address
                          </button> */}
                        </div>
                        <div className="text-base flex items-center justify-center flex-col my-1 border-b">
                          <p>Choose a shipping address and payment</p>
                          <p>method to calculate shipping, handling and</p>
                          <p>tax.</p>
                        </div>
                        <div>
                          <h1 className="font-semibold text-xl my-2">
                            Order Summary
                          </h1>
                        </div>
                        <div className="flex justify-between text-sm mt-3">
                          <p>Items :</p>
                          <p>${total}</p>
                        </div>
                        <div className="flex justify-between text-sm border-b my-2">
                          <p>Delivery :</p>
                          <p>$0.00</p>
                        </div>
                        <div className="flex justify-between text-red-500 font-semibold">
                          <p>Order Total:</p>
                          <p>${total}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* other components start */}
            {!isTotalHidden && (
              <div className="w-[60%]">
                <div className="border-b my-3">
                  <h1>2 Payment method</h1>
                </div>
                <div className="border-b my-3">
                  <h1>3 Offers</h1>
                </div>
                <div className="border-b my-3">
                  <h1>4 Items and delivery</h1>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full">
              {isTotalHidden && (
                <div className="flex border-b w-full ">
                  <div className="w-[60%]">
                    {/* <div className=" ">  */}
                    <div className="flex justify-between">
                      <h1>1 Delivery address</h1>
                      <div>
                        {selectedAddress && (
                          <div className="mt-4">
                            <h2 className="font-bold">Selected Address:</h2>
                            <p>{selectedAddress.firstName}</p>
                            <p>{selectedAddress.address1}</p>
                            <p>{selectedAddress.city}</p>
                            <div className="flex">
                              <p>{selectedAddress.state},</p>
                              <p className="ml-2">{selectedAddress.pincode}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        <button
                          onClick={handleOpenAddress}
                          className="text-cyan-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                    {/* </div>
                  </div> */}
                    <Payment />

                    {/* <div>
                      <div className="my-2 border-b">
                        <h1> 3 Offers</h1>
                      </div>

                      <ItemsAndDelivery />
                    </div> */}
                  </div>
                  <div className=" w-[30%] mx-16 flex flex-col pt-2 items-center">
                    <div className="border fixed shadow-md rounded-md p-7 py-5">
                      {/* <div className="flex items-center justify-center">
                        <button className="border rounded-full text-sm flex justify-center items-center px-4 py-2 bg-blue-900 text-white">
                          Use this payment method
                        </button>
                      </div> */}
                      <div className="text-base flex items-center justify-center flex-col my-1 border-b">
                        <p>Choose a payment method to continue</p>
                        <p>checking out. You will still have a chance to</p>
                        <p>review and edit your order before it is final.</p>
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl my-2">
                          Order Summary
                        </h1>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <p>Items :</p>
                        <p>${total}</p>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <p>Delivery:</p>
                        <p>$0.00</p>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <p>Total:</p>
                        <p>${total}</p>
                      </div>
                      <div className="flex justify-between text-sm border-b my-2">
                        <p>Promotion Applied :</p>
                        <p>$0.00</p>
                      </div>
                      <div className="flex justify-between text-red-500 font-semibold">
                        <p>Order Total:</p>
                        <p>${total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
