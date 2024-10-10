// import React, { useEffect, useRef } from "react";
// import PLeft from "./PLeft";
// import PRight from "./PRight";
// import { useSearchParams } from "react-router-dom";

// function Products({ addCart, wishList, topMargin }) {
//   const [searchParams] = useSearchParams();

//   const Header = searchParams.get("header"); // Replace "someParam" with the actual query parameter you want to access.

//   return (
//     <div
//       className="flex flex-row justify-center pr-4 h-screen gap-10"
//       style={{
//         marginTop: `${topMargin + 4}px`,
//       }}
//     >
//       <div  className="h-screen flex justify-center w-72 overflow-y-scroll">
//         <PLeft  />
//       </div>
//       <div  className="w-[calc(100%-288px)] h-screen overflow-y-scroll">
//         <PRight Title={Header} addCart={addCart} wishList={wishList} topMargin={topMargin} />
//       </div>
//     </div>
//   );
// }

// export default Products;