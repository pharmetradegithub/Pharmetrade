


// import React, { useState } from "react";
// import dropdown from "../assets/Icons/dropdown.png";
// import dropdownup from "../assets/Icons/dropdownUp.png";

// const categories = [
//   // "All categories",
//   "Prescription Medications" ,
//  "Baby & Child Care Products",
//   "Health care products" ,
//   "Household Suppliers",
//   "Oral Care Products",
//   "Stationery & Gift Wrapping Supplies",
//   "Vision Products",
//   "Diet & Sports Nutrition",
//   "Vitamins, Minerals & Supplements" ,
//  "Personal Care products",
// ];

// const allCategoriesSubItems = [
//   { name: "Prescription_drug", checked: false },
//   // { name1: "(EA)", checked1: false },
//   // { name: "Cough Cold & Flu", checked: false },
//   // { name: "Digestive Health", checked: false },
// ];

// function PLeft() {
//   const [dropdownOpen, setDropdownOpen] = useState({
//     allCategories: false,
//     deals: false,
//     brands: false,
//     packing: false, 
//   });

//   const toggleDropdown = (category) => {
//     setDropdownOpen((prevState) => ({
//       ...prevState,
//       [category]: !prevState[category],
//     }));
//   };

//   return (
//     <div className="w-full overflow-y-scroll h-full bg-slate-50 text-lg py-4 pl-4">
//       {categories.map((category, index) => (
//         <div
//           key={index}
//           className="w-[90%] mb-2 rounded-md bg-blue-900 text-white"
//         >
//           <div
//             className={`border-1 bg-blue-900 px-4 py-1 rounded-md flex justify-between items-center cursor-pointer text-white hover:bg-red-100 hover:text-black ${
//               dropdownOpen.allCategories && category === "All categories"
//                 ? " "
//                 : ""
//             }`}
//             onClick={() =>
//               toggleDropdown(
//                 category === "All categories"
//                   ? "allCategories"
//                   : category.toLowerCase()
//               )
//             }
//           >
//             <p>{category}</p>
//             {["All categories", "Deals", "Brands", "Packing"].includes(category) && (
//               <span className="ml-2">
//                 {dropdownOpen[
//                   category === "All categories"
//                     ? "allCategories"
//                     : category.toLowerCase()
//                 ] ? (
//                   <img src={dropdownup} className="w-5" />
//                 ) : (
//                   <img src={dropdown} className="w-5" />
//                 )}
//               </span>
//             )}
//           </div>
//           <div className={`pl-4 mt-2 ${dropdownOpen.allCategories && category === "All categories" ? "hover:bg-red-100 hover:text-black rounded-md" : ""}`}>
//             {dropdownOpen.allCategories && category === "All categories" && (
//               <div>
//                 {allCategoriesSubItems.map((item, subIndex) => (
//                   <div
//                     key={subIndex}
//                     className="flex items-center mb-2 rounded-md p-2"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={item.checked}
//                       onChange={() => {}}
//                       className="mr-2 pr-2 hover:bg-red-100 hover:text-black"
//                     />
//                     <label>{item.name}</label>
//                   </div>
//                 ))}
//               </div>
//             )}
//             {dropdownOpen.deals && category === "Deals" && (
//               <div className="text-sm gap-4 pr-4 cursor-pointer">
//                 <p className="hover:bg-red-100 rounded-md p-2 hover:text-black">
//                   Discount 75%
//                 </p>
//                 <p className="hover:bg-red-100 rounded-md p-2 hover:text-black">
//                   Discount 50%
//                 </p>
//                 <p className="hover:bg-red-100 rounded-md p-2 hover:text-black">
//                   Discount 25%
//                 </p>
//                 <p className="hover:bg-red-100 hover:text-black rounded-md p-2">
//                   Expiring within 3 months
//                 </p>
//                 <p className="hover:bg-red-100 hover:text-black rounded-md p-2">
//                   Expiring within 6 months
//                 </p>
//                 <p className="hover:bg-red-100 hover:text-black rounded-md p-2">
//                   Expiring within 12 months
//                 </p>
//                 <p className="hover:bg-red-100 hover:text-black rounded-md p-2">
//                   Wholesaler items
//                 </p>
//                 <p className="hover:bg-red-100 hover:text-black rounded-md p-2">
//                   Top Selling Products
//                 </p>
//               </div>
//             )}
//             {dropdownOpen.brands && category === "Brands" && (
//               <div className="text-sm pr-4 mt-2 mb-2 cursor-pointer">
//                 <p className="hover:bg-red-100 hover:text-black rounded-md p-2">
//                   Brands Subcategory 1
//                 </p>
//                 <p className="hover:bg-red-100 hover:text-black rounded-md p-2">
//                   Brands Subcategory 2
//                 </p>
//               </div>
//             )}
//             {dropdownOpen.packing && category === "Packing" && (
//               <div className="text-sm pr-6 mt-2 mr-4 cursor-pointer hover:bg-red-100 hover:text-black rounded-md p-2">
//                 <input
//                   type="checkbox"
//                   // checked={allCategoriesSubItems[1].checked1} 
//                   // onChange={() => {}}
//                   className="mr-2 pr-2 hover:bg-red-100 hover:text-black"
//                 />
//                 <label className="pr-4 ">(EA)</label>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PLeft;