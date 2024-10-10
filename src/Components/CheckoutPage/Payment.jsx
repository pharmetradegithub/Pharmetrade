import React, { useState } from "react";
import plus from '../../assets/Icons/plus[1].png';
import AmericanExpress from "../../assets/AmericanExpress.png";
import visa from "../../assets/visa.png";
import Discover from "../../assets/Discover.png";
import dotspaymenticon from "../../assets/dotpaymenticon.png";
import net from "../../assets/net.png";
import cross from "../../assets/letter-x[1].png";
import ItemsAndDelivery from "./ItemsAndDelivery";

import {
  Box,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderPayment } from "../../Api/OrderApi";
import Notification from "../Notification";


const Payment = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [showItemsAndDelivery, setShowItemsAndDelivery] = useState(false); // State to control visibility

  const [selectedPayment, setSelectedPayment] = useState(false);
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [isCardPopup, setIsCardPopup] = useState(false);
  const [isEmiPopup, SetIsEmiPopup] = useState(false)
  const [cardNumber, setCardNumber] = useState("");
  const [nickName, setNickName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const generateMonths = () => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return months;
  };

  const currentYear = new Date().getFullYear();
  const futureYears = generateYears(2024, currentYear + 40); // Including future years (e.g., 10 years ahead)
  const months = generateMonths();
  const getOrder = useSelector((state) => state.order.getOrder)
  console.log("getorderPayment-->", getOrder)
  const [orderGet, setorderGet] = useState(getOrder)
  const ordered = useSelector((state) => state.order.orderPlace)
  console.log("ordered-->", ordered)

  const handleemiopen = () => {
    SetIsEmiPopup(true)
  }


  const handleCardOpen = () => {
    setIsCardPopup(true);
  };

  const handleCardRemove = () => {
    setIsCardPopup(false);
  };

  // proceed payment
  const [cvv, setCvv] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const dispatch = useDispatch()


  //   const [cardNumber, setCardNumber] = useState('');
  // const [nickName, setNickName] = useState('');
  // const [expiryMonth, setExpiryMonth] = useState('');
  // const [expiryYear, setExpiryYear] = useState('');
  // const [cvv, setCvv] = useState('');

  const [errors, setErrors] = useState({
    cardNumber: false,
    nickName: false,
    expiryMonth: false,
    expiryYear: false,
    cvv: false,
  });

  const validateFields = () => {
    const newErrors = {
      cardNumber: cardNumber.length !== 16,
      nickName: nickName.trim() === "",
      expiryMonth: expiryMonth === "",
      expiryYear: expiryYear === "",
      cvv: cvv.length !== 3 && cvv.length !== 4,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error); // Return true if no errors
  };

  const handleProceedPayment = async () => {
    if (!validateFields()) {
      setSuccessMessage("Please fill all the fields correctly.");
      return;
    }

    setCardNumber('')
    setNickName('')
    setExpiryMonth("")
    setExpiryYear("")
    setCvv('')
    if (!cardNumber || !nickName || !expiryMonth || !expiryYear || !cvv) {
      setSuccessMessage("Please fill all the fields.");
      return; // Exit the function if validation fails
    }
    const currentDate = new Date();
    const payload = {
      paymentInfoId: "",
      orderId: ordered?.orderId,
      paymentMethodId: 1,
      cardNumber: cardNumber,
      cardType: "",
      cvv: cvv,
      validThrough: `${expiryMonth}/${expiryYear}`,
      nameOnCard: nickName,
      bank: "",
      paymentAmount: 0,
      isCreditCard: true,
      statusId: 3,
      paymentDate: currentDate.toISOString()
    };

    try {
      await dispatch(fetchOrderPayment(payload));
      setIsCardPopup(false);
      setNotification({ show: true, message: "Payment processed successfully!" });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.log("error", error);
    }
  };



  const handleProceedCodPayment = () => {
    // / Set notification
    setNotification({ show: true, message: "Proceeding to payment..." });

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: "" });
    }, 3000); // 3000 milliseconds = 3 seconds

    // Show the ItemsAndDelivery component
    setShowItemsAndDelivery(true);
  };

  const handlePaymentcodSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setIsButtonVisible(paymentMethod === "cod");
    setIsPopupShow(false)
    // Show button only if "Cash on Delivery" is selected
  };
  // const handleProceedPayment = async () => {
  //   // if (cardNumber && nickName && expiryMonth && expiryYear && cvv) {
  //   //   setSuccessMessage("Payment processed successfully!");
  //   // } else {
  //   //   setSuccessMessage("Please fill all the fields.");

  //   // }

  //     // Clear success message initially
  // setSuccessMessage("");

  // // Validation checks
  // const cardNumberPattern = /^\d{16}$/; // 16 digits only
  // const namePattern = /^[A-Za-z\s]+$/; // Only alphabets and spaces
  // const cvvPattern = /^\d{3,4}$/; // 3 or 4 digits

  // // Validate card number
  // if (!cardNumberPattern.test(cardNumber)) {
  //   setSuccessMessage("Please enter a valid 16-digit card number.");
  //   return;
  // }

  // // Validate name
  // if (!namePattern.test(nickName)) {
  //   setSuccessMessage("Please enter a valid name (alphabets only).");
  //   return;
  // }

  // // Validate expiry date
  // if (!expiryMonth || !expiryYear) {
  //   setSuccessMessage("Please select the card's expiry date.");
  //   return;
  // }

  // // Validate CVV
  // if (!cvvPattern.test(cvv)) {
  //   setSuccessMessage("Please enter a valid CVV (3 or 4 digits).");
  //   return;
  // }

  //   setCardNumber('')
  //   setNickName('')
  //   setExpiryMonth("")
  //   setExpiryYear("")
  //   setCvv('')
  //   if (!cardNumber || !nickName || !expiryMonth || !expiryYear || !cvv) {
  //     setSuccessMessage("Please fill all the fields.");
  //     return; // Exit the function if validation fails
  //   }
  //   const currentDate = new Date();
  //   console.log("payload-->", orderGet)
  //   const payload = {
  //     paymentInfoId: "",
  //     orderId: ordered?.orderId,
  //     paymentMethodId: 1,
  //     cardNumber: cardNumber,
  //     cardType: "",
  //     cvv: cvv,
  //     validThrough: `${expiryMonth}/${expiryYear}`,
  //     nameOnCard: nickName,
  //     bank: "",
  //     paymentAmount: 0,
  //     isCreditCard: true,
  //     statusId: 3,
  //     paymentDate: currentDate.toISOString()
  //   }
  //   try {
  //     await dispatch(fetchOrderPayment(payload));
  //     setIsCardPopup(false);
  //     setNotification({ show: true, message: "Payment processed successfully!" });
  //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  //   // try {

  //   //   await dispatch(fetchOrderPayment(payload));
  //   //   setIsCardPopup(false);
  //   //   setNotification({ show: true, message: "Payment processed successfully!" });
  //   //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   // } catch (error) {
  //   //   console.log("error", error)
  //   // }
  // };
  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    if (paymentMethod === 'card') {
      setIsPopupShow(true);
    } else {
      setIsPopupShow(false);
      setIsCardPopup(false);
    }
    setShowItemsAndDelivery(false);

  };
  // const handleCardOpen = () => {
  //   setIsCardPopup(true);
  // };

  // const handleCardRemove = () => {
  //   setIsCardPopup(false);
  // };
  return (
    <div>
      {notification.show && <Notification show={notification.show} message={notification.message} />}
      <h2 className="text-orange-500">2 Select a payment method</h2>

      <div className="border rounded-md p-4">


        <div>
          <div className="flex flex-col">
            <div
              className={`flex w-[95%] cursor-pointer items-center p-2 ${selectedPayment === "card"
                ? "bg-pink-50 border border-black rounded-md"
                : ""
                }`}
              onClick={() => handlePaymentSelection("card")}
            >
              <input
                type="radio"
                checked={selectedPayment === "card"}
                readOnly
                className="cursor-pointer"
              />
              <span className="ml-2">Credit or debit card</span>
            </div>
            {selectedPayment === "card" && (
              <div className="flex mt-2">
                <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                <img src={visa} className="w-12 h-9 mr-2" />
                <img src={Discover} className="w-12 h-9 mr-2" />
                <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                <img src={net} className="w-12 h-9" />
              </div>
            )}




            {isPopupShow && (



              <div className="p-8 bg-gray-100 rounded-lg m-8 -ml-0 mt-2">
                <h1 className="text-xl font-bold mb-4">Enter Card Details</h1>

                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-6">
                    {/* Card Number */}
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm mb-2">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            setCardNumber(value);
                          }
                        }}
                        className={`h-10 border px-3 rounded-md ${errors.cardNumber ? "border-red-500" : "border-black"}`}
                        maxLength="16"
                        placeholder="Enter card number"
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm">Card number must be 16 digits.</p>}
                    </div>

                    {/* Name */}
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm mb-2">Name</label>
                      <input
                        type="text"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                        className={`h-10 border px-3 rounded-md ${errors.nickName ? "border-red-500" : "border-black"}`}
                        placeholder="Enter name"
                      />
                      {errors.nickName && <p className="text-red-500 text-sm">Name is required.</p>}
                    </div>
                  </div>

                  {/* Expiry Date and CVV */}
                  <div>
                    <label className="text-sm">Expiry Date</label>
                    <div className="flex items-center mt-1">
                      <select
                        className={`border rounded-md shadow-md bg-slate-200 px-2 py-1 mr-2 ${errors.expiryMonth ? "border-red-500" : "border-black"}`}
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                      >
                        <option value="">Month</option>
                        {months.map((month, index) => (
                          <option key={index} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <select
                        className={`border rounded-md shadow-md bg-slate-200 px-2 py-1 mr-4 ${errors.expiryYear ? "border-red-500" : "border-black"}`}
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                      >
                        <option value="">Year</option>
                        {futureYears.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>

                      {/* CVV */}
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,4}$/.test(value)) {
                              setCvv(value);
                            }
                          }}
                          className={`w-20 h-10 border px-2 rounded-md ${errors.cvv ? "border-red-500" : "border-black"}`}
                          placeholder="CVV"
                          maxLength="4"
                        />
                        <label className="ml-2 text-sm">CVV</label>
                      </div>
                    </div>
                    {errors.cvv && <p className="text-red-500 text-sm">CVV must be 3 or 4 digits.</p>}
                  </div>

                  {/* Info Text */}
                  <div className="text-sm text-gray-600 mt-4">
                    <p>
                      Please ensure that you enable your card for online payments from your bank’s app.
                    </p>
                  </div>

                  {/* Proceed Payment Button */}
                  <div className="flex justify-end mt-4">
                    <button
                      className="w-40 h-10 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-800 transition-colors"
                      onClick={handleProceedPayment}
                    >
                      Proceed Payment
                    </button>
                  </div>
                </div>
              </div>
            )}





          </div>




          {/* <div
            className={`flex w-[95%] items-center p-2 cursor-pointer mt-2 border-b ${selectedPayment === "cod"
              ? "bg-pink-50 border border-black rounded-md"
              : ""
              }`}
            onClick={() => handlePaymentSelection("cod")}
          >
            <input type="radio" className="cursor-pointer" checked={selectedPayment === "cod"} readOnly />
            <span className="ml-2">Cash on Delivery</span>
          </div> */}



          <div>
            {/* Display notification if show is true */}
            {notification.show && <div>{notification.message}</div>}

            <div className="flex flex-col">
              {/* Cash on Delivery Option */}
              <div
                className={`flex w-[95%] items-center p-2 cursor-pointer mt-2 border-b ${selectedPayment === "cod"
                  ? "bg-pink-50 border border-black rounded-md"
                  : ""
                  }`}
                onClick={() => handlePaymentcodSelection("cod")}
              >
                <input
                  type="radio"
                  className="cursor-pointer"
                  checked={selectedPayment === "cod"}
                  readOnly
                />
                <span className="ml-2">Cash on Delivery</span>
              </div>

              {/* Proceed Payment Button */}
              {isButtonVisible && (
                <button
                  onClick={handleProceedCodPayment}
                  className="mt-4 bg-blue-900 text-white w-40 p-1 rounded-full"
                >
                  Proceed Payment
                </button>
              )}
            </div>

            {/* Show ItemsAndDelivery component when the button is clicked */}
          </div>
        </div>



      </div>

      <div className="my-2 border-b">
        <h1> 3 Offers</h1>
      </div>
      {showItemsAndDelivery && <ItemsAndDelivery />}

    </div>
  );
};

export default Payment;

