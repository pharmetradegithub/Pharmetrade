// import React, { useEffect, useState } from "react";
// import dropdown from "../../../assets/Icons/dropdown.png";
// import dropdownup from "../../../assets/Icons/dropdownUp.png";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

// const categories = [
//   // "All categories",
//   { id: 1, name: "Prescription Medications" },
//   { id: 2, name: "Baby & Child Care Products" },
//   { id: 4, name: "Health care products" },
//   { id: 5, name: "Household Suppliers" },
//   { id: 6, name: "Oral Care Products" },
//   { id: 7, name: "Stationery & Gift Wrapping Supplies" },
//   { id: 8, name: "Vision Products" },
//   { id: 9, name: "Diet & Sports Nutrition" },
//   { id: 10, name: "Vitamins, Minerals & Supplements" },
//   { id: 11, name: "Personal Care Products" },
// ];

// const allCategoriesSubItems = [
//   { name: "Prescription_drug", checked: false },
//   // { name1: "(EA)", checked1: false },
//   // { name: "Cough Cold & Flu", checked: false },
//   // { name: "Digestive Health", checked: false },
// ];

// function ProductSideBar({ handleChange }) {
//   // const [dropdownOpen, setDropdownOpen] = useState({
//   //   allCategories: false,
//   //   deals: false,
//   //   brands: false,
//   //   packing: false,
//   // });
//   const productCriteria = useSelector(
//     (state) => state.product.productsByCriteria
//   );
//   const location = useLocation();
//   const [categoryName, setCategoryName] = useState("");

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const category = searchParams.get("CategoryName");

//     if (category) {
//       setCategoryName(category);
//     }
//   }, [location.search]);

//   const toggleDropdown = (category) => {
//     setDropdownOpen((prevState) => ({
//       ...prevState,
//       [category]: !prevState[category],
//     }));
//   };

//   return (
//     <div className="w-full overflow-y-scroll h-full bg-slate-50 text-lg py-4 pl-4">
//       {categories.map((category, index) => (
//         // <div
//         //   key={index}
//         //   className="w-[90%] mb-2 rounded-md bg-blue-900 text-white"
//         // >
//         //   <div className={`border-1 ${categoryName.split(" ")[0] === category.split(" ")[0]?"bg-gray-400":"bg-blue-900"} px-4 py-1 rounded-md text-base flex justify-between items-center cursor-pointer text-white hover:bg-gray-400 hover:text-black `}>
//         //     <p>{category}</p>
//         //   </div>
//         // </div>
//         <div
//         key={category.id}
//         className={`w-[90%] mb-2 rounded-md ${categoryName === category.name ? "bg-gray-400" : "bg-blue-900"
//           } text-white`}
//       >
//         <div
//           className={`border-1 ${categoryName.split(" ")[0] === category.name.split(" ")[0] ? "bg-gray-400" : "bg-blue-900"} px-4 py-1 rounded-md text-base flex justify-between items-center cursor-pointer text-white hover:bg-gray-400 hover:text-black `}
//           onClick={() => handleChange(category)}
//         >
//           <p>{category.name}</p>
//         </div>
//       </div>
//       ))}
//     </div>
//   );
// }

// export default ProductSideBar;




import React, { useEffect, useState } from "react";
import dropdown from "../../../assets/Icons/dropdown.png";
import dropdownup from "../../../assets/Icons/dropdownUp.png";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";



const allCategoriesSubItems = [
  { name: "Prescription_drug", checked: false },
  // { name1: "(EA)", checked1: false },
  // { name: "Cough Cold & Flu", checked: false },
  // { name: "Digestive Health", checked: false },
];

function ProductSideBar({ handleChange }) {
  // const [dropdownOpen, setDropdownOpen] = useState({
  //   allCategories: false,
  //   deals: false,
  //   brands: false,
  //   packing: false,
  // });
  const components = useSelector((state) => state.master.productCategoryGetAll)
  const productCriteria = useSelector(
    (state) => state.product.productsByCriteria
  );
  const location = useLocation();
  const [categoryName, setCategoryName] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("CategoryName");
  
  console.log(categoryId ,"number");
  const toggleDropdown = (category) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="w-full overflow-y-scroll h-full bg-slate-50 text-lg py-4 pl-4">
      {components?.map((category, index) => (
        <div
        key={category.productCategoryId}
        className={`w-[90%] mb-2 rounded-md ${categoryId == category.productCategoryId ? "bg-gray-400" : "bg-blue-900"
          } text-white`}
      >
        <div
          className={`border-1 ${categoryId == category.productCategoryId ? "bg-gray-400" : "bg-blue-900"} px-4 py-1 rounded-md text-base flex justify-between items-center cursor-pointer text-white hover:bg-gray-400 hover:text-black `}
          onClick={() => handleChange(category)}
        >
          <p>{category.categoryName}</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default ProductSideBar;
