

// import React, { useEffect, useRef } from "react";
// import left from "../../../assets/arrowleft.png";
// import right from "../../../assets/arrowright.png";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProductOffer } from "../../../Api/ProductApi";

// let newoffer = [];

// const OfferSlider = ({ images, Title }) => {
//   const carouselContainer = useRef(null);
//   const specialOffers = useSelector((state) => state.product.productSpecialOffer);
//   console.log("offer-->", specialOffers)
//   newoffer = [];
//   specialOffers.map((element, index) => {
//     const newObject = {...element, image: images[index]};
//     newoffer.push(newObject);
//   })
//   console.log("new offere", newoffer);

//   const navigation = (dir) => {
//     const container = carouselContainer.current;

//     const scrollAmount =
//       dir === "left"
//         ? container.scrollLeft - (container.offsetWidth + 20)
//         : container.scrollLeft + (container.offsetWidth + 20);

//     container.scrollTo({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProductOffer()); // Dispatch the API call to fetch special offers
//   }, [dispatch]);


//   const overlayTexts = [
//     "Up to 65% off | Deals on OTC Products",
//     "Up to 45% off | Deals on RX Products",
//     "Up to 65% off | Deals on OTC Products",
//     "Up to 45% off | Deals on RX Products",
//     "Up to 65% off | Deals on OTC Products",
//     "Up to 45% off | Deals on RX Products",
//     "Up to 65% off | Deals on OTC Products",
//     "Up to 45% off | Deals on RX Products",
//   ];
//   console.log("offerSpecial---------", specialOffers)
//   return (
//     <div className="flex flex-col justify-center gap-10 pt-4 pb-8">
//       <div className="flex justify-between ml-4 font-semibold text-3xl">
//         <p>{Title}</p>

//         <div className="flex justify-end mr-14 gap-2">
//           <button
//             className="bg-white rounded-sm p-2"
//             onClick={() => navigation("left")}
//           >
//             <img src={left} className="w-4 h-4" alt="Left" />
//           </button>
//           <button
//             className="bg-white rounded-sm p-2 "
//             onClick={() => navigation("right")}
//           >
//             <img src={right} className="w-4 h-4 " alt="Right" />
//           </button>
//         </div>
//       </div>
//       <div className="w-full px-1 flex  justify-between">
//         <div
//           ref={carouselContainer}
//           className="flex w-full   gap-2 overflow-x-scroll "
//         >
//           {newoffer.map((element, index) => (
//             <div
//               key={index}
//               className="border bg-white shadow-2xl min-w-[300px] Laptop:min-w-[320px] p-4 relative flex flex-col gap-3 items-center justify-center"
//             >
               
//                 <p key={index} className="w-full h-12 text-[17px] font-semibold cursor-pointer">
//                 Up to {element?.discount}% off | Deals on {element?.specificationName}
//                 </p>
            
//               <div>
//                 {" "}
//                 <Link to="/offers">
//                   <img
//                     src={element.image}
//                     className="w-[300px] cursor-pointer Laptop:w-[320px] shadow-sm shadow-slate-100 Laptop:h-[200px] h-[180px] rounded-sm"
//                     alt={`Offer ${index + 1}`}
//                   />
//                 </Link>
//               </div>

//               <div className="w-full mt-8 text-black flex font-semibold justify-end">
//                 <Link to="/offers" className="hover:text-red-500">
//                   See all offers
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OfferSlider;



import React, { useEffect, useRef } from "react";
import left from "../../../assets/arrowleft.png";
import right from "../../../assets/arrowright.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProductOffer, fetchProductOffer } from "../../../Api/ProductApi";
// import { fetchGetProductOffer, fetchProductOffer } from "../../../Api/ProductApi";

let newoffer = [];

const OfferSlider = ({ images, Title }) => {
  const carouselContainer = useRef(null);
  const specialOffers = useSelector((state) => state.product.productSpecialOffer);
  console.log("offer-->", specialOffers)
  newoffer = [];
  specialOffers.map((element, index) => {
    const newObject = {...element, image: images[index]};
    newoffer.push(newObject);
    return newObject
  })
  console.log("new offere", newoffer);

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductOffer()); // Dispatch the API call to fetch special offers
  }, [dispatch]);


  const overlayTexts = [
    "Up to 65% off | Deals on OTC Products",
    "Up to 45% off | Deals on RX Products",
    "Up to 65% off | Deals on OTC Products",
    "Up to 45% off | Deals on RX Products",
    "Up to 65% off | Deals on OTC Products",
    "Up to 45% off | Deals on RX Products",
    "Up to 65% off | Deals on OTC Products",
    "Up to 45% off | Deals on RX Products",
  ];
  console.log("offerSpecial---------", specialOffers)

  const handleSeeOffers = (categorySpecificationId) => {
    try {
      dispatch(fetchGetProductOffer(categorySpecificationId))
    }
    catch (error) {
      console.log("error")
    }
  }


  return (
    <div className="flex flex-col justify-center gap-10 pt-4 pb-8">
      <div className="flex justify-between ml-4 font-semibold text-3xl">
        <p>{Title}</p>

        <div className="flex justify-end mr-14 gap-2">
          <button
            className="bg-white rounded-sm p-2"
            onClick={() => navigation("left")}
          >
            <img src={left} className="w-4 h-4" alt="Left" />
          </button>
          <button
            className="bg-white rounded-sm p-2 "
            onClick={() => navigation("right")}
          >
            <img src={right} className="w-4 h-4 " alt="Right" />
          </button>
        </div>
      </div>
      <div className="w-full px-1 flex  justify-between">
        <div
          ref={carouselContainer}
          className="flex w-full   gap-2 overflow-x-scroll "
        >
          {newoffer.map((element, index) => (
            <div
              key={index}
              className="border bg-white shadow-2xl min-w-[300px] Laptop:min-w-[320px] p-4 relative flex flex-col gap-3 items-center justify-center"
            >
               
                <p key={index} className="w-full h-12 text-[17px] font-semibold cursor-pointer">
                Up to {element?.discount}% off | Deals on {element?.specificationName}
                </p>
            
              <div>
                {" "}
                <Link to="/allProducts/offers">
                  <img
                    src={element.image}
                    className="w-[300px] cursor-pointer Laptop:w-[320px] shadow-sm shadow-slate-100 Laptop:h-[200px] h-[180px] rounded-sm"
                    alt={`Offer ${index + 1}`}
                    onClick={()=>handleSeeOffers(element?.categorySpecificationId)}
                  />
                </Link>
              </div>

              <div className="w-full mt-8 text-black flex font-semibold justify-end" onClick={()=>handleSeeOffers(element?.categorySpecificationId)}>
                <Link to="/allProducts/offers" className="hover:text-red-500">
                  See all offers
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSlider;



