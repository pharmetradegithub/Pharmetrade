// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { useNavbarContext } from "../../NavbarContext";
// import { useState, useRef, useEffect } from "react";
// import ProductSection from "../Components/ProductSection";
// import MobileView from "../Components/MobileView";
// import OffersSlider from "../Components/OfferBannerSlider";
// import { useSelector } from "react-redux";

// function Sliders({wishList,addCart}) {
//   const searchBarRef = useRef(null);

//   const OTCProducts = useSelector((state) => state.product.otcProducts);
//   const RXProducts = useSelector((state) => state.product.rxProducts);


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("");
//           } else {
//             entry.target.classList.remove("");
//           }
//         });
//       },
//       { threshold: 0.5 } // Adjust threshold as needed
//     );

//     if (searchBarRef.current) {
//       observer.observe(searchBarRef.current);
//     }

//     return () => {
//       if (searchBarRef.current) {
//         observer.unobserve(searchBarRef.current);
//       }
//     };
//   }, []);


//   const { pop } = useNavbarContext();

//   return (
//     <>
//       <div className="">
//         <div className="w-full flex justify-between items-center ">
//           <div className="w-[48%]">
//             <ProductSection
//              addCart={addCart} wishList={wishList}
//               products={RXProducts.slice(0, 3)}
//               heading="Rx Items"
//               path={`/products?header=${"Rx Items"}`}
//             />
//           </div>
//           <div className="w-[48%]">
//             <ProductSection
//              addCart={addCart} wishList={wishList}
//               products={OTCProducts.slice(0, 3)}
//               heading="OTC Items"
//               path={`/products?header=${"OTC Items"}`}
//             />
//           </div>
//         </div>
//         {/* <div>
//           <ProductSlider Title={"New Products"} data={newProducts} />
//         </div> */}
        
//         <div className="mt-8">
//           <OffersSlider />
//         </div>

//         <div
//           className={
//             pop
//               ? " getTouchs  xl:w-80% relative h-5% md:mt-24 xl:mt-48 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
//               : " getTouchs md:ml-0 md:w-80% md:h-5% xl:w-80% relative h-15% md:mt-12 xl:mt-20 xl:mx-8 rounded-md xl:p-5 xl:flex xl:flex-col xl:justify-center"
//           }
//         >
//           <div className="border-2 md:p-0 border-white w-auto md:h-5% md:w-auto xl:w-auto xl:h-5% lg:ml-4 xl:flex xl:justify-center lg:mr-4 lg:mt-4 lg:mb-4 xl:ml-12 rounded-md">
//             <p className="absolute xl:top-4 z-5 right-1/2  h-5% bg-box-blue text-white px-4 py-2 rounded-md  text-2xl">
//               Get In Touch{" "}
//             </p>
//             <div className="ml-10 md:flex md:flex-row md:gap-10 lg:gap-20 xl:flex xl:flex-row xl:gap-50 ">
//               <div className="flex items-center justify-center lg:pb-4 lg:pl-4 xl:pr-4">
//                 <div
//                   ref={searchBarRef}
//                   className="relative flex items-center w-full max-w-md"
//                 >
//                   <div className="md:w-screen xl:w-fit xl:pl-8 ">
//                     <ul className="md:text-xl xl:text-2xl text-white font-light  bounce-in-top  w-96">
//                       <li className="w-96 ">Manage Inventory</li>
//                       <li className="">Increase cash flow </li>
//                       <li className="">Grow you business</li>
//                       <li className="">Promote products and deals</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-5 pr-36 mt-7  justify-start items-center">
//                 <input
//                   type="text"
//                   placeholder="Enter Your Name"
//                   className="w-72 h-10 px-5 "
//                 />
//                 <input
//                   type="text"
//                   placeholder="Enter Your Contact"
//                   className="w-72 h-10 px-5"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Enter Your Email"
//                   className="w-72 h-10 px-5"
//                 />
//                 <button className="bg-box-blue text-white rounded-lg w-fit p-2 my-2">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" w-full flex justify-center py-4">
//           <MobileView/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sliders;


import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavbarContext } from "../../NavbarContext";
import { useState, useRef, useEffect } from "react";
import ProductSection from "../Components/ProductSection";
import MobileView from "../Components/MobileView";
import OffersSlider from "../Components/OfferBannerSlider";
import { useSelector } from "react-redux";

function Sliders({wishList,addCart}) {
  const searchBarRef = useRef(null);

  const OTCProducts = useSelector((state) => state.product.otcProducts);
  const RXProducts = useSelector((state) => state.product.rxProducts);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add your class here
          } else {
            entry.target.classList.remove('visible'); // Remove your class here
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (searchBarRef.current) {
      observer.observe(searchBarRef.current);
    }

    return () => {
      if (searchBarRef.current) {
        observer.unobserve(searchBarRef.current);
      }
    };
  }, []);

  const { pop } = useNavbarContext();

  return (
    <>
      <div className="">
        <div className="w-full flex justify-between items-center ">
          <div className="w-[48%]">
            <ProductSection
             addCart={addCart} wishList={wishList}
              products={RXProducts.slice(0, 3)}
              heading="Rx Items"
              // path={`/products?header=${"Rx Items"}`}
              path={"/allProducts/RxProducts"}
            />
          </div>
          <div className="w-[48%]">
            <ProductSection
             addCart={addCart} wishList={wishList}
              products={OTCProducts.slice(0, 3)}
              heading="OTC Items"
              // path={`/products?header=${"OTC Items"}`}
              path={"/allProducts/OtcProducts"}
            />
          </div>
        </div>
        {/* <div>
          <ProductSlider Title={"New Products"} data={newProducts} />
        </div> */}
        
        <div className="mt-8">
          <OffersSlider />
        </div>

        <div className=" w-full flex justify-center pt-4 ">
          <MobileView/>
        </div>

        <div className="  pb-6">

        <div
          className={
            pop
              ? " getTouchs  xl:w-80% relative h-5% md:mt-24 xl:mt-48 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
              : " getTouchs md:ml-0  md:w-80% md:h-5% xl:w-80% relative h-15% md:mt-6 xl:mt-12 xl:mx-8 rounded-md xl:p-5 xl:flex xl:flex-col xl:justify-center"
          }
        >
          <div className="border-2  md:p-0 border-white w-auto md:h-5% md:w-auto xl:w-auto xl:h-5% lg:ml-4 xl:flex xl:justify-center lg:mr-4 lg:mt-4 lg:mb-4 xl:ml-12 rounded-md">
            <p className="absolute xl:top-4 z-5 right-1/2  h-5% bg-box-blue text-white px-4 py-2 rounded-md  text-2xl">
              Get In Touch{" "}
            </p>
            <div className="ml-10 md:flex md:flex-row md:gap-10 lg:gap-20 xl:flex xl:flex-row xl:gap-50 ">
              <div className="flex items-center justify-center lg:pb-4 lg:pl-4 xl:pr-4">
                <div
                  ref={searchBarRef}
                  className="relative flex items-center w-full max-w-md"
                >
                  <div className="md:w-screen xl:w-fit xl:pl-8 ">
                    <ul className="md:text-xl xl:text-2xl text-white font-light  bounce-in-top  w-96">
                      <li className="w-96 ">Manage Inventory</li>
                      <li className="">Increase cash flow </li>
                      <li className="">Grow you business</li>
                      <li className="">Promote products and deals</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 pr-36 mt-7  justify-start items-center">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-72 h-10 px-5 "
                />
                <input
                  type="text"
                  placeholder="Enter Your Contact"
                  className="w-72 h-10 px-5"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-72 h-10 px-5"
                />
                <button className="bg-box-blue text-white rounded-lg w-fit p-2 my-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}

export default Sliders;
