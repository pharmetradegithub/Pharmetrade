


// import React, { useState, useEffect } from "react";
// import AnimatedText from "./AnimatedText";
// import BuyImg from "../../../assets/Buy_icon.png";
// import JoinImg from "../../../assets/Join-icon.png";
// import SellImg from "../../../assets/Sell-icon.png";
// import BidImg from "../../../assets/Bid-icon.png";
// // import mobileBuy from "../../../assets/mobileBuy.png"; 
// // import mobileJoin from "../../../assets/mobileJoin.jpg"; 
// // import mobileSell from "../../../assets/mobileSell.jpg"; 
// // import mobileBid from "../../../assets/mobileBid.jpg"; 
// import mobileBuy from "../../../assets/mobileBuy.png"; 
// import mobileJoin from "../../../assets/mobileJoin1.png"; 
// import mobileSell from "../../../assets/mobileSell1.png"; 
// import mobileBid from "../../../assets/mobileBid1.png"; 

// const MobileView = () => {
//   const [selectedStepIndex, setSelectedStepIndex] = useState(0);

//   const steps = [
//     {
//       img: BuyImg,
//       heading: "Buy",
//       content: "Discover Quality Health Products: Shop Now",
//       mobileImage: mobileBuy,
//     },
//     {
//       img: JoinImg,
//       heading: "Join",
//       content: "Join Our Community: Become a Member",
//       mobileImage: mobileJoin,
//     },
//     {
//       img: SellImg,
//       heading: "Sell",
//       content: "Sell Your Products: Partner with Us",
//       mobileImage: mobileSell,
//     },
//     {
//       img: BidImg,
//       heading: "Bid",
//       content: "Unlock Great Deals through Bidding: Start Now",
//       mobileImage: mobileBid,
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSelectedStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, []);

//   const handleClick = (index) => {
//     setSelectedStepIndex(index);
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-center ">
//       <h1 className="text-3xl font-semibold text-text-blue my-4">
//         Get Our Mobile App Today
//       </h1>

//       <div className="flex w-[80%] justify-center">
//         <div className="w-[55%] h-full flex flex-col justify-center">
//           <AnimatedText />

//           <div className="flex flex-col w-[90%]">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center p-1 rounded-lg shadow-inner border w-full my-2  cursor-pointer ${
//                   index === selectedStepIndex ? "bg-gray-300" : ""
//                 }`}
//                 onClick={() => handleClick(index)}
//               >
//                 <img
//                   className="text-xl p-1 w-9 h-9 text-blue-900"
//                   src={step.img}
//                   alt={step.heading}
//                 />
//                 <div className="p-2 w-full">
//                   <h2 className="text-[16px] font-bold text-blue-900">
//                     {step.heading}
//                   </h2>
//                   <p className="text-[15px] text-gray-700 font-medium">
//                     {step.content}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="w-full">
//             <button className="border border-gray-500 bg-blue-900 text-white mt-2 p-2 rounded-lg w-44 mb-8">
//               Download Now
//             </button>
//           </div>
//         </div>
//         <div className="w-[45%] h-full flex justify-center items-center">
//           <img
//             src={steps[selectedStepIndex].mobileImage}
//             className="w-[250px] h-[400px]"
//             alt="Mobile App"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileView;



import React, { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import BuyImg from "../../../assets/Buy_icon.png";
import JoinImg from "../../../assets/Join-icon.png";
import SellImg from "../../../assets/Sell-icon.png";
import BidImg from "../../../assets/Bid-icon.png";
import playstore from '../../../assets/googleplay.png'
import appstore from '../../../assets/apple[1].png'
// import mobileBuy from "../../../assets/mobileBuy.png"; 
// import mobileJoin from "../../../assets/mobileJoin.jpg"; 
// import mobileSell from "../../../assets/mobileSell.jpg"; 
// import mobileBid from "../../../assets/mobileBid.jpg"; 
import mobileBuy from "../../../assets/mobileBuy.png"; 
import mobileJoin from "../../../assets/mobileJoin1.png"; 
import mobileSell from "../../../assets/mobileSell1.png"; 
import mobileBid from "../../../assets/mobileBid1.png"; 

const MobileView = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const steps = [
    {
      img: BuyImg,
      heading: "Buy",
      content: "Discover Quality Health Products: Shop Now",
      mobileImage: mobileBuy,
    },
    {
      img: JoinImg,
      heading: "Join",
      content: "Join Our Community: Become a Member",
      mobileImage: mobileJoin,
    },
    {
      img: SellImg,
      heading: "Sell",
      content: "Sell Your Products: Partner with Us",
      mobileImage: mobileSell,
    },
    {
      img: BidImg,
      heading: "Bid",
      content: "Unlock Great Deals through Bidding: Start Now",
      mobileImage: mobileBid,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleClick = (index) => {
    setSelectedStepIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-semibold text-text-blue my-4">
        Get Our Mobile App Today
      </h1>

      <div className="flex w-[80%] justify-center">
        <div className="w-[55%] h-full flex flex-col justify-center">
          <AnimatedText />

          <div className="flex flex-col w-[90%]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center p-1 rounded-lg shadow-inner border w-full my-2  cursor-pointer ${
                  index === selectedStepIndex ? "bg-gray-300" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <img
                  className="text-xl p-1 w-9 h-9 text-blue-900"
                  src={step.img}
                  alt={step.heading}
                />
                <div className="p-2 w-full">
                  <h2 className="text-[16px] font-bold text-blue-900">
                    {step.heading}
                  </h2>
                  <p className="text-[15px] text-gray-700 font-medium">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="w-full">
            <button className="border border-gray-500 bg-blue-900 text-white mt-2 p-2 rounded-lg w-44 mb-8">
              Download Now
            </button>
          </div> */}
           <div className=' flex py-6'>
               
               <button className='bg-blue-900 text-white mx-4 w-32 h-8 rounded-md flex items-center p-2'>
                   <img src={playstore} className='w-6'/>
                 {" "}  Google Play
               </button>

               <button className='bg-blue-900 rounded-md text-white mx-6 w-28 flex h-8 items-center'>
                   <img src={appstore} className='w-8 '/>
                   App Store</button>
           </div>
        </div>
        <div className="w-[45%] h-full flex justify-center items-center">
          <img
            src={steps[selectedStepIndex].mobileImage}
            className="w-[250px] h-[400px]"
            alt="Mobile App"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileView;
