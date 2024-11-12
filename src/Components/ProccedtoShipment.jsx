// import React, { useEffect, useState } from "react";
// import deleteicon from "../assets/trash.png";
// import { TextField, InputAdornment } from "@mui/material";
// import { Link, useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FedExRatesApi, serviceTypeApi } from "../Api/TrackApi";

// const ProccedtoShipment = ({
//   selectedOptions,
//   setSelectedOptions,
//   totalNetCharges,
//   setTotalNetCharges,
// }) => {
//   const fedexRate = useSelector((state) => state.trackNumber.fedExRates);
//   console.log("fedddddrate-->", fedexRate);
//   const serviceName = useSelector((state) => state.trackNumber.serviceType);
//   const cartList = useSelector((state) => state.cart.cart);
//   console.log("cartList checkout", cartList);
//   // const [cartItems, setcartItems] = useState(cartList);
//   console.log("service-->", serviceName);
//   const [amount, setAmount] = useState(200);
//   const dispatch = useDispatch();
//   const businessInfo = useSelector((state) => state.user.businessInfo);
//   console.log("businessInfo-->address", businessInfo);

//   useEffect(() => {
//     const payload = {
//       accountNumber: {
//         value: "235969831",
//       },
//       requestedShipment: {
//         shipper: {
//           address: {
//             postalCode: businessInfo.zip,
//             countryCode: businessInfo.state,
//           },
//         },
//         recipient: {
//           address: {
//             postalCode: "65247",
//             countryCode: "US",
//           },
//         },
//         pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//         rateRequestType: ["ACCOUNT", "LIST"],
//         requestedPackageLineItems: [
//           {
//             weight: {
//               units: "LB",
//               value: 1,
//             },
//           },
//         ],
//       },
//     };
//     dispatch(serviceTypeApi(payload));
//   }, []);

//   useEffect(() => {
//     // if (pincodes && stateAdd) { // Ensure they are set before making the call
//     const payload = {
//       accountNumber: {
//         value: "235969831",
//       },
//       requestedShipment: {
//         shipper: {
//           address: {
//             postalCode: businessInfo.zip,
//             countryCode: businessInfo.state,
//           },
//         },
//         recipient: {
//           address: {
//             postalCode: "65247",
//             countryCode: "US",
//           },
//         },
//         pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//         rateRequestType: ["ACCOUNT", "LIST"],
//         requestedPackageLineItems: [
//           {
//             weight: {
//               units: "LB",
//               value: 1,
//             },
//           },
//         ],
//       },
//     };

//     const data = async () => {
//       try {
//         const response = await dispatch(FedExRatesApi(payload));
//         console.log(response); // Handle response
//       } catch (error) {
//         console.error("Error fetching FedEx rates:", error);
//       }
//     };
//     data();
//     // }
//   }, []);

//   // const [selectedOption, setSelectedOption] = useState("");
//   // const [totalNetCharge, setTotalNetCharge] = useState(null) || 0; // Store totalNetCharge
//   // const [selectedOptions, setSelectedOptions] = useState({
//   //   seller: ""
//   // });

//   // const [totalNetCharges, setTotalNetCharges] = useState({
//   //   seller: 0
//   // });
//   const [searchParams] = useSearchParams();
//   const total = searchParams.get("total");
//   const normalizeString = (str) =>
//     str.replace(/\s+/g, " ").trim().toLowerCase();
//   const removeNonPrintableChars = (str) => str.replace(/[^\x20-\x7E]/g, "");

//   const handleChange = (seller, e) => {
//     const selectedServiceType = e.target.value;
//     setSelectedOptions((prevOptions) => ({
//       ...prevOptions,
//       [seller]: selectedServiceType,
//     }));
//     console.log("Selected service type:", selectedServiceType);
//     console.log("FedEx rates:", JSON.stringify(fedexRate, null, 2));

//     // First condition: Check if fedexRate exists and has elements
//     if (fedexRate && fedexRate.length > 0) {
//       // Use filter to find all matching rate details
//       const matchingRateDetails = fedexRate.filter((rate) => {
//         const normalizedRateServiceType = normalizeString(
//           removeNonPrintableChars(rate.serviceName)
//         );
//         const normalizedSelectedServiceType = normalizeString(
//           removeNonPrintableChars(selectedServiceType)
//         );

//         console.log(
//           "Comparing:",
//           normalizedRateServiceType,
//           "to",
//           normalizedSelectedServiceType
//         );
//         const isMatch =
//           normalizedRateServiceType === normalizedSelectedServiceType;
//         console.log("Match result:", isMatch);

//         return isMatch; // Return the match result
//       });

//       if (matchingRateDetails.length > 0) {
//         // Process all matching details
//         const netCharge = matchingRateDetails.reduce((total, rate) => {
//           return total + (rate?.ratedShipmentDetails[0]?.totalNetCharge || 0);
//         }, 0);
//         setTotalNetCharges((prevCharges) => ({
//           ...prevCharges,
//           [seller]: netCharge,
//         }));
//         console.log("Total Net Charge for matching services:", netCharge);

//         // Next condition check can go here
//         if (netCharge > 0) {
//           const parsedTotal = parseFloat(total); // Convert total to a number

//           // Check if parsedTotal is a valid number
//           if (!isNaN(parsedTotal)) {
//             navigate(
//               `/checkout?total=${parsedTotal.toFixed(
//                 2
//               )}&netCharge=${netCharge.toFixed(2)}`
//             );
//             console.log("Valid net charge available for processing.");
//           }
//         } else {
//           console.log("Net charge is zero or invalid.");
//         }
//       } else {
//         console.log("No matching service type found.");
//         setTotalNetCharges((prevCharges) => ({
//           ...prevCharges,
//           [seller]: null,
//         }));
//       }
//     } else {
//       console.log("fedexRate is not available or empty.");
//       setTotalNetCharges((prevCharges) => ({
//         ...prevCharges,
//         [seller]: null,
//       }));
//     }
//   };

//   const calculateSubtotal = (price, quantity) => price * quantity;
//   const groupedProducts = cartList.reduce((acc, item) => {
//     const seller = item.product.sellerName;
//     if (!acc[seller]) acc[seller] = [];
//     acc[seller].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="w-full h-full  p-4 ">
//       <h1 className="text-xl font-semibold text-orange-400">
//         2. Select shipment
//       </h1>
//       <div className="flex w-full">
//         <div className="w-[70%]">
//           {Object.entries(groupedProducts).map(([seller, products]) => (
//             <div key={seller}>
//               <h2 className="font-bold text-lg mt-4">Seller: {seller}</h2>

//               <div className="border p-4 my-4 rounded-md shadow-lg bg-white">
//                 <table className="min-w-full border shadow-md rounded-lg">
//                   <thead>
//                     <tr className="border-b text-base">
//                       <th className="px-2 md:px-3 text-base text-left font-semibold text-blue-950 tracking-wider">
//                         Seller Name
//                       </th>
//                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
//                         Image
//                       </th>
//                       <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
//                         Product name
//                       </th>
//                       <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
//                         Price
//                       </th>
//                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
//                         Quantity
//                       </th>
//                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
//                         Subtotal
//                       </th>
//                       <th className="px-2 md:px-3 py-1 text-left font-semibold text-blue-950 tracking-wider">
//                         Action
//                       </th>
//                     </tr>
//                   </thead>
//                   {products.map((tabledetail) => (
//                     <tbody key={tabledetail.product.id}>
//                       <tr className="text-sm">
//                         <td className="text-center">
//                           {tabledetail.product.sellerName}
//                         </td>
//                         <td>
//                           <img
//                             className="h-16 w-16 rounded-lg"
//                             src={tabledetail.product.imageUrl}
//                             alt={tabledetail.product.id}
//                           />
//                         </td>
//                         <td className="px-2 md:px-4 py-2 p-2 flex flex-wrap">
//                           {tabledetail.product.productName}
//                         </td>
//                         <td className="text-center">
//                           $
//                           {tabledetail.product?.salePrice > 0
//                             ? tabledetail.product.salePrice.toFixed(2)
//                             : tabledetail.product.unitPrice?.toFixed(2)}
//                         </td>
//                         <td className="text-center">{tabledetail.quantity}</td>
//                         <td className="text-center">
//                           {" "}
//                           {/* ${tabledetail?.Subtotal?.toFixed(2)} */}
//                           <strong>
//                             $
//                             {calculateSubtotal(
//                               tabledetail.product?.salePrice > 0
//                                 ? tabledetail.product.salePrice.toFixed(2)
//                                 : tabledetail.product.unitPrice?.toFixed(2),
//                               tabledetail.quantity
//                             )?.toFixed(2)}
//                           </strong>
//                         </td>
//                         <td className="text-center">
//                           {" "}
//                           <img
//                             src={deleteicon}
//                             className="h-5 w-5 rounded-lg flex justify-center items-center ml-6"
//                           />
//                         </td>
//                       </tr>
//                     </tbody>
//                   ))}
//                 </table>

//                 <div className="h-auto p-3 border  flex  rounded-md mt-3  ">
//                   <h1 className="text-base font-semibold text-blue-900">
//                     Shipment :
//                   </h1>
//                   <div className="mx-5">
//                     {/* <select
//                       id="delivery-options"
//                       value={selectedOptions[seller]}
//                       onChange={(e) => handleChange(seller, e)}
//                       className="bg-gray-100 border rounded-md"
//                     >
//                       <option value="" disabled className=" ">
//                         Select an option
//                       </option>

//                       <optgroup label="Delivery options"> */}
//                         {/* <option value="groundBusiness">FedEx Ground® (to businesses, Monday to Friday)</option> */}
//                         {/* <option value="homeDelivery">FedEx Home Delivery® (to residences, every day)</option> */}
//                         {/* {serviceName.map((item) => {
//                           return (
//                             <option
//                               key={item.serviceType}
//                               value={item.serviceName}
//                             >
//                               {item.serviceName}
//                             </option>
//                           );
//                         })} */}
//                         {/* {serviceName.map((item) => {
//                           // Find the matching rate for the current serviceName
//                           const matchingRate = fedexRate.find(
//                             (fed) => item.serviceName === fed.serviceName
//                           ); */}
//                           <select
//                       id="delivery-options"
//                       value={selectedOptions[seller] || ""}
//                       onChange={(e) => handleChange(seller, e)}
//                       className="bg-gray-100 border rounded-md"
//                     >
//                       <option value="" disabled>
//                         {/* {selectedOptions[seller] ? 'Select an option' : 'Please choose a delivery option'} */}
//                         {selectedOptions[seller] ? 'Please choose a delivery option' : 'Select an option'}

//                       </option>

//                       <optgroup label="Delivery options">
//                         {serviceName.map((item) => {
//                           const matchingRate = fedexRate.find(
//                             (fed) => item.serviceName === fed.serviceName
//                           );


//                           return (
//                             <option
//                               key={item.serviceType}
//                               value={item.serviceName}
//                             >
//                               {item.serviceName}
//                               {matchingRate
//                                 ? ` (${matchingRate.ratedShipmentDetails[0].totalNetCharge})`
//                                 : ""}
//                             </option>
//                           );
//                         })}
//                       </optgroup>
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <TextField
//                       label="amount"
//                       size="small"
//                       className="w-40 rounded-md h-4 border "
//                       value={(totalNetCharges[seller] || 0).toFixed(2)}
//                       onChange={(e) =>
//                         setAmount(parseFloat(e.target.value) || 0)
//                       }
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">$</InputAdornment>
//                         ),
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* // ))} */}
//             </div>
//           ))}
//         </div>

//         <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ml-4"></div>
//       </div>
//     </div>
//   );
// };

// export default ProccedtoShipment;



import React, { useEffect, useState } from "react";
import deleteicon from "../assets/trash.png";
import { TextField, InputAdornment } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FedExRatesApi, serviceTypeApi } from "../Api/TrackApi";
import { getUserByCustomerIdApi } from "../Api/UserApi";

const ProccedtoShipment = ({
  selectedOptions,
  setSelectedOptions,
  totalNetCharges,
  setTotalNetCharges,
}) => {
  const fedexRate = useSelector((state) => state.trackNumber.fedExRates);
  console.log("fedddddrate-->", fedexRate);
  const serviceName = useSelector((state) => state.trackNumber.serviceType);
  const cartList = useSelector((state) => state.cart.cart);
  console.log("cartList checkout", cartList);
  // const [cartItems, setcartItems] = useState(cartList);
  console.log("service-->", serviceName);
  const [amount, setAmount] = useState(200);
  const dispatch = useDispatch();
  const businessInfo = useSelector((state) => state.user.businessInfo);
  console.log("businessInfo", businessInfo);
  const navigate = useNavigate()
  // const [responseBusiness, setResponseBusiness] = useState(null)

  // useEffect(() => {
  //   const payload = {
  //     accountNumber: {
  //       value: "235969831",
  //     },
  //     requestedShipment: {
  //       shipper: {
  //         address: {
  //           postalCode: responseBusiness.businessInfo.zip,
  //           countryCode: responseBusiness.businessInfo.state,
  //         },
  //       },
  //       recipient: {
  //         address: {
  //           postalCode: "65247",
  //           countryCode: "US",
  //         },
  //       },
  //       pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //       rateRequestType: ["ACCOUNT", "LIST"],
  //       requestedPackageLineItems: [
  //         {
  //           weight: {
  //             units: "LB",
  //             value: 1,
  //           },
  //         },
  //       ],
  //     },
  //   };
  //   dispatch(serviceTypeApi(payload));
  // }, []);

  // useEffect(() => {
  //   // if (pincodes && stateAdd) { // Ensure they are set before making the call
  //   const payload = {
  //     accountNumber: {
  //       value: "235969831",
  //     },
  //     requestedShipment: {
  //       shipper: {
  //         address: {
  //           postalCode: responseBusiness.businessInfo.zip,
  //           countryCode: responseBusiness.businessInfo.state,
  //         },
  //       },
  //       recipient: {
  //         address: {
  //           postalCode: "65247",
  //           countryCode: "US",
  //         },
  //       },
  //       pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //       rateRequestType: ["ACCOUNT", "LIST"],
  //       requestedPackageLineItems: [
  //         {
  //           weight: {
  //             units: "LB",
  //             value: 1,
  //           },
  //         },
  //       ],
  //     },
  //   };

  //   const data = async () => {
  //     try {
  //       const response = await dispatch(FedExRatesApi(payload));
  //       console.log(response); // Handle response
  //     } catch (error) {
  //       console.error("Error fetching FedEx rates:", error);
  //     }
  //   };
  //   data();
  //   // }
  // }, []);

  // const [selectedOption, setSelectedOption] = useState("");
  // const [totalNetCharge, setTotalNetCharge] = useState(null) || 0; // Store totalNetCharge
  // const [selectedOptions, setSelectedOptions] = useState({
  //   seller: ""
  // });

  // const [totalNetCharges, setTotalNetCharges] = useState({
  //   seller: 0
  // });
  const [searchParams] = useSearchParams();
  const total = searchParams.get("total");
  const normalizeString = (str) =>
    str.replace(/\s+/g, " ").trim().toLowerCase();
  const removeNonPrintableChars = (str) => str.replace(/[^\x20-\x7E]/g, "");

  const handleChange = (seller, e) => {
    const selectedServiceType = e.target.value;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [seller]: selectedServiceType,
    }));
    console.log("Selected service type:", selectedServiceType);
    console.log("FedEx rates:", JSON.stringify(fedexRate, null, 2));

    // First condition: Check if fedexRate exists and has elements
    if (fedexRate && fedexRate.length > 0) {
      // Use filter to find all matching rate details
      const matchingRateDetails = fedexRate.filter((rate) => {
        const normalizedRateServiceType = normalizeString(
          removeNonPrintableChars(rate.serviceName)
        );
        const normalizedSelectedServiceType = normalizeString(
          removeNonPrintableChars(selectedServiceType)
        );

        console.log(
          "Comparing:",
          normalizedRateServiceType,
          "to",
          normalizedSelectedServiceType
        );
        const isMatch =
          normalizedRateServiceType === normalizedSelectedServiceType;
        console.log("Match result:", isMatch);

        return isMatch; // Return the match result
      });

      if (matchingRateDetails.length > 0) {
        // Process all matching details
        const netCharge = matchingRateDetails.reduce((total, rate) => {
          return total + (rate?.ratedShipmentDetails[0]?.totalNetCharge || 0);
        }, 0);
        setTotalNetCharges((prevCharges) => ({
          ...prevCharges,
          [seller]: netCharge,
        }));
        console.log("Total Net Charge for matching services:", netCharge);

        // Next condition check can go here
        if (netCharge > 0) {
          const parsedTotal = parseFloat(total); // Convert total to a number

          // Check if parsedTotal is a valid number
          if (!isNaN(parsedTotal)) {
            navigate(
              `/checkout?total=${parsedTotal.toFixed(
                2
              )}&netCharge=${netCharge.toFixed(2)}`
            );
            console.log("Valid net charge available for processing.");
          }
        } else {
          console.log("Net charge is zero or invalid.");
        }
      } else {
        console.log("No matching service type found.");
        setTotalNetCharges((prevCharges) => ({
          ...prevCharges,
          [seller]: null,
        }));
      }
    } else {
      console.log("fedexRate is not available or empty.");
      setTotalNetCharges((prevCharges) => ({
        ...prevCharges,
        [seller]: null,
      }));
    }
  };

  const calculateSubtotal = (price, quantity) => price * quantity;
  const groupedProducts = cartList.reduce((acc, item) => {
    const seller = item.product.sellerName;
    if (!acc[seller]) acc[seller] = [];
    acc[seller].push(item);
    return acc;
  }, {});

  // useEffect(() => {
  //   const data = async () => {
  //     const sellerIds = new Set();

  //     // Loop through the grouped products and collect unique sellerIds
  //     Object.entries(groupedProducts).forEach(([seller, products]) => {
  //       products.forEach((product) => {
  //         sellerIds.add(product.product.sellerId);  // Collect sellerId from each product
  //         console.log("selleerIsddd--> ", sellerIds)
  //       });
  //     });

  //     // Now, call the API for each unique sellerId
  //     for (const sellerId of sellerIds) {
  //       const res = await getUserByCustomerIdApi(sellerId);  // Call the API for each sellerId
  //       console.log("res---->", res)
  //       setResponseBusiness(res)
  //     }
  //   };

  //   data();
  // }, [groupedProducts]); 



  // useEffect(() => {
    
  //   const fetchSellerInfoAndCalculateRates = async () => {
  //     const sellerIds = new Set();

  //     // Collect unique sellerIds from grouped products
  //     Object.entries(groupedProducts).forEach(([_, products]) => {
  //       products.forEach((product) => {
  //         sellerIds.add(product.product.sellerId);
  //       });
  //     });

  //     // Loop through each sellerId, fetch their information, and set responseBusiness
  //     for (const sellerId of sellerIds) {
  //       try {
  //         const res = await getUserByCustomerIdApi(sellerId);
  //         setResponseBusiness(res);  // Store the business info of the current seller

  //         // Define payload for serviceTypeApi using responseBusiness
  //         const servicePayload = {
  //           accountNumber: {
  //             value: "235969831",
  //           },
  //           requestedShipment: {
  //             shipper: {
  //               address: {
  //                 postalCode: res.businessInfo.zip,       // Use dynamic response
  //                 countryCode: res.businessInfo.state,    // Use dynamic response
  //               },
  //             },
  //             recipient: {
  //               address: {
  //                 postalCode: "65247",
  //                 countryCode: "US",
  //               },
  //             },
  //             pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //             rateRequestType: ["ACCOUNT", "LIST"],
  //             requestedPackageLineItems: [
  //               {
  //                 weight: {
  //                   units: "LB",
  //                   value: 1,
  //                 },
  //               },
  //             ],
  //           },
  //         };

  //         // Call serviceTypeApi with the payload
  //         await dispatch(serviceTypeApi(servicePayload));

  //         // Define payload for FedExRatesApi using responseBusiness
  //         const ratePayload = {
  //           accountNumber: {
  //             value: "235969831",
  //           },
  //           requestedShipment: {
  //             shipper: {
  //               address: {
  //                 postalCode: res.businessInfo.zip,
  //                 countryCode: res.businessInfo.state,
  //               },
  //             },
  //             recipient: {
  //               address: {
  //                 postalCode: "65247",
  //                 countryCode: "US",
  //               },
  //             },
  //             pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //             rateRequestType: ["ACCOUNT", "LIST"],
  //             requestedPackageLineItems: [
  //               {
  //                 weight: {
  //                   units: "LB",
  //                   value: 1,
  //                 },
  //               },
  //             ],
  //           },
  //         };

  //         // Call FedExRatesApi with the payload
  //         const rateResponse = await dispatch(FedExRatesApi(ratePayload));
  //         console.log("FedEx Rates Response:", rateResponse);

  //       } catch (error) {
  //         console.error("Error processing seller or fetching rates:", error);
  //       }
  //     }
  //   };

  //   fetchSellerInfoAndCalculateRates();
  // }, [groupedProducts]);


  // const [responseBusiness, setResponseBusiness] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Step 1: Collect unique seller IDs from groupedProducts
  //       const sellerIds = new Set();
  //       Object.entries(groupedProducts).forEach(([_, products]) => {
  //         products.forEach((product) => {
  //           sellerIds.add(product.product.sellerId);
  //         });
  //       });

  //       // Step 2: Fetch business information for each seller
  //       const sellersInfo = [];
  //       for (const sellerId of sellerIds) {
  //         const res = await getUserByCustomerIdApi(sellerId);
  //         sellersInfo.push(res);  // Store each response
  //       }

  //       // Assuming you need the first response in the next step, we set it as `responseBusiness`
  //       setResponseBusiness(sellersInfo[0]);

  //       // Step 3: Call `serviceTypeApi` with the first seller's data
  //       const payload = {
  //         accountNumber: {
  //           value: "235969831",
  //         },
  //         requestedShipment: {
  //           shipper: {
  //             address: {
  //               postalCode: sellersInfo[0]?.businessInfo?.zip,
  //               countryCode: sellersInfo[0]?.businessInfo?.state,
  //             },
  //           },
  //           recipient: {
  //             address: {
  //               postalCode: "65247",
  //               countryCode: "US",
  //             },
  //           },
  //           pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //           rateRequestType: ["ACCOUNT", "LIST"],
  //           requestedPackageLineItems: [
  //             {
  //               weight: {
  //                 units: "LB",
  //                 value: 1,
  //               },
  //             },
  //           ],
  //         },
  //       };
  //       await dispatch(serviceTypeApi(payload));

  //       // Step 4: Call `FedExRatesApi` with the same payload
  //       const rateResponse = await dispatch(FedExRatesApi(payload));
  //       console.log("FedEx Rates Response:", rateResponse);

  //     } catch (error) {
  //       console.error("Error in data fetching process:", error);
  //     }
  //   };

  //   fetchData();  // Only runs once when component mounts
  // }, []);  // Empty dependency array means it only runs once


  const [responseBusiness, setResponseBusiness] = useState(null);
  console.log("ressssss", responseBusiness)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Collect unique seller IDs from groupedProducts
        const sellerIds = new Set();
        Object.entries(groupedProducts).forEach(([_, products]) => {
          products.forEach((product) => {
            sellerIds.add(product.product.sellerId);
          });
        });

        // Step 2: Fetch business information for each seller and store it in an array
        const sellersInfo = [];
        for (const sellerId of sellerIds) {
          const res = await getUserByCustomerIdApi(sellerId);
          sellersInfo.push(res); // Store each response
        }

        setResponseBusiness(sellersInfo); // Store the full list of sellers in state if needed

        // Step 3: Iterate over each seller's info and send payload for each
        for (const seller of sellersInfo) { // Use `sellersInfo` directly here
          const payload = {
            accountNumber: {
              value: "235969831",
            },
            requestedShipment: {
              shipper: {
                address: {
                  postalCode: seller?.businessInfo?.zip,
                  countryCode: seller?.businessInfo?.state,
                },
              },
              recipient: {
                address: {
                  postalCode: "65247",
                  countryCode: "US",
                },
              },
              pickupType: "DROPOFF_AT_FEDEX_LOCATION",
              rateRequestType: ["ACCOUNT", "LIST"],
              requestedPackageLineItems: [
                {
                  weight: {
                    units: "LB",
                    value: 1,
                  },
                },
              ],
            },
          };

          // Send the payload with `serviceTypeApi`
          await dispatch(serviceTypeApi(payload));

          // Call `FedExRatesApi` with the same payload
          const rateResponse = await dispatch(FedExRatesApi(payload));
          console.log("FedEx Rates Response for seller", seller.sellerId, ":", rateResponse);
        }

      } catch (error) {
        console.error("Error in data fetching process:", error);
      }
    };

    fetchData(); // Only runs once when component mounts
  }, []); // Empty dependency array means it only runs once

  return (
    <div className="w-full h-full  p-4 ">
      <h1 className="text-xl font-semibold text-orange-400">
        2. Select shipment
      </h1>
      <div className="flex w-full">
        <div className="w-[70%]">
          {Object.entries(groupedProducts).map(([seller, products]) => (
            <div key={seller}>
              <h2 className="font-bold text-lg mt-4">Seller: {seller}</h2>

              <div className="border p-4 my-4 rounded-md shadow-lg bg-white">
                <table className="min-w-full border shadow-md rounded-lg">
                  <thead>
                    <tr className="border-b text-base">
                      <th className="px-2 md:px-3 text-base text-left font-semibold text-blue-950 tracking-wider">
                        Seller Name
                      </th>
                      <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
                        Image
                      </th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
                        Product name
                      </th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
                        Price
                      </th>
                      <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
                        Quantity
                      </th>
                      <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
                        Subtotal
                      </th>
                      <th className="px-2 md:px-3 py-1 text-left font-semibold text-blue-950 tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {products.map((tabledetail) => {
                    useEffect(() => {
                      const fetchSellerData = async () => {
                        await getUserByCustomerIdApi(tabledetail.product.sellerId); // Send sellerId for each product
                      };
                      fetchSellerData();
                    }, [tabledetail.product.sellerId]);
                    return (
                    <tbody key={tabledetail.product.id}>
                      <tr className="text-sm">
                        <td className="text-center">
                            {tabledetail.product.sellerName}
                            {/* {tabledetail.product.sellerId} */}
                        </td>
                        <td>
                          <img
                            className="h-16 w-16 rounded-lg"
                            src={tabledetail.product.imageUrl}
                            alt={tabledetail.product.id}
                          />
                        </td>
                        <td className="px-2 md:px-4 py-2 p-2 flex flex-wrap">
                          {tabledetail.product.productName}
                        </td>
                        {/* <td className="text-center">
                          $
                          {tabledetail.product?.salePrice > 0
                            ? tabledetail.product.salePrice.toFixed(2)
                            : tabledetail.product.unitPrice?.toFixed(2)}
                        </td> */}
                        <td className="md:px-4 py-3 text-center">
                        $
                        {(() => {
                          const currentDate = new Date();
                          const saleStartDate = new Date(
                            tabledetail.product?.salePriceValidFrom
                          );
                          const saleEndDate = new Date(
                            tabledetail.product?.salePriceValidTo
                          );

                          // Check if salePrice exists, and the current date is within the sale period
                          if (
                            tabledetail.product?.salePrice > 0 &&
                            currentDate >= saleStartDate &&
                            currentDate <= saleEndDate
                          ) {
                            return tabledetail.product.salePrice.toFixed(2);
                          } else {
                            return tabledetail.product.unitPrice?.toFixed(2);
                          }
                        })()}
                      </td>
                        <td className="text-center">{tabledetail.quantity}</td>
                        {/* <td className="text-center">
                          {" "}
                          // {/* ${tabledetail?.Subtotal?.toFixed(2)} 
                          <strong>
                            $
                            {calculateSubtotal(
                              tabledetail.product?.salePrice > 0
                                ? tabledetail.product.salePrice.toFixed(2)
                                : tabledetail.product.unitPrice?.toFixed(2),
                              tabledetail.quantity
                            )?.toFixed(2)}
                          </strong>
                        </td> */}
                        <td className="px-2 md:px-4 text-right py-3">
                        <strong>
                          $
                          {(() => {
                            const currentDate = new Date();
                            const saleStartDate = new Date(
                              tabledetail.product?.salePriceValidFrom
                            );
                            const saleEndDate = new Date(
                              tabledetail.product?.salePriceValidTo
                            );

                            const price =
                            tabledetail.product?.salePrice > 0 &&
                              currentDate >= saleStartDate &&
                              currentDate <= saleEndDate
                                ? tabledetail.product.salePrice
                                : tabledetail.product.unitPrice;

                            return calculateSubtotal(
                              price,
                              tabledetail.quantity
                            )?.toFixed(2);
                          })()}
                        </strong>
                      </td>
                        <td className="text-center">
                          {" "}
                          <img
                            src={deleteicon}
                            className="h-5 w-5 rounded-lg flex justify-center items-center ml-6"
                          />
                        </td>
                      </tr>
                      </tbody>
                    )
                  })}
                </table>

                <div className="h-auto p-3 border  flex  rounded-md mt-3  ">
                  <h1 className="text-base font-semibold text-blue-900">
                    Shipment :
                  </h1>
                  <div className="mx-5">
                    {/* <select
                      id="delivery-options"
                      value={selectedOptions[seller]}
                      onChange={(e) => handleChange(seller, e)}
                      className="bg-gray-100 border rounded-md"
                    >
                      <option value="" disabled className=" ">
                        Select an option
                      </option>

                      <optgroup label="Delivery options"> */}
                        {/* <option value="groundBusiness">FedEx Ground® (to businesses, Monday to Friday)</option> */}
                        {/* <option value="homeDelivery">FedEx Home Delivery® (to residences, every day)</option> */}
                        {/* {serviceName.map((item) => {
                          return (
                            <option
                              key={item.serviceType}
                              value={item.serviceName}
                            >
                              {item.serviceName}
                            </option>
                          );
                        })} */}
                        {/* {serviceName.map((item) => {
                          // Find the matching rate for the current serviceName
                          const matchingRate = fedexRate.find(
                            (fed) => item.serviceName === fed.serviceName
                          ); */}
                          <select
                      id="delivery-options"
                      value={selectedOptions[seller] || ""}
                      onChange={(e) => handleChange(seller, e)}
                      className="bg-gray-100 border rounded-md"
                    >
                      <option value="" disabled>
                        {/* {selectedOptions[seller] ? 'Select an option' : 'Please choose a delivery option'} */}
                        {selectedOptions[seller] ? 'Please choose a delivery option' : 'Select an option'}

                      </option>

                      <optgroup label="Delivery options">
                        {serviceName.map((item) => {
                          const matchingRate = fedexRate.find(
                            (fed) => item.serviceName === fed.serviceName
                          );


                          return (
                            <option
                              key={item.serviceType}
                              value={item.serviceName}
                            >
                              {item.serviceName}
                              {matchingRate
                                ? ` (${matchingRate.ratedShipmentDetails[0].totalNetCharge})`
                                : ""}
                            </option>
                          );
                        })}
                      </optgroup>
                    </select>
                  </div>

                  <div className="mb-4">
                    <TextField
                      label="amount"
                      size="small"
                      className="w-40 rounded-md h-4 border "
                      value={(totalNetCharges[seller] || 0).toFixed(2)}
                      onChange={(e) =>
                        setAmount(parseFloat(e.target.value) || 0)
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* // ))} */}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ml-4"></div>
      </div>
    </div>
  );
};

export default ProccedtoShipment;
