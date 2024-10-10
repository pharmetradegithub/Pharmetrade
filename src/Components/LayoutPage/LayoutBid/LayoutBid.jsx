import React, { useState } from "react";
import Bid from "../../Bid";

const LayoutBid = () => {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    quantity: "1",
    comments: "",
    firstName: "Venkat",
    lastName: "Gollapalli",
    email: "rx@pharmacyplusnetwork.com",
    phone: "7893497040",
    strength: "",
    sellerType: "all",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    // <div
    //   className="w-[95%] mx-8  flex justify-center items-center"
    // // style={{ marginTop: `${topMargin }px` }}
    // >
    //   <div className="w-full bg-slate-100  py-8 h-full">
    //     <h2 className="text-2xl mb-4">Request For Quote</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="gap-4 ">
    //         <div>
    //           <label className="block text-base font-medium text-gray-700">
    //             Product Name
    //           </label>
    //           <input
    //             type="text"
    //             name="productName"
    //             placeholder="Product name you are looking for"
    //             value={formData.productName}
    //             onChange={handleChange}
    //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //           />
    //         </div>
    //         <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2">
    //           <div>
    //             <label className="block text-base font-medium text-gray-700">
    //               Price
    //             </label>
    //             <input
    //               type="text"
    //               name="price"
    //               placeholder="Price"
    //               value={formData.price}
    //               onChange={handleChange}
    //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //             />
    //           </div>
    //           <div>
    //             <label className="block text-base font-medium text-gray-700">
    //               Quantity
    //             </label>
    //             <input
    //               type="text"
    //               name="quantity"
    //               value={formData.quantity}
    //               onChange={handleChange}
    //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label className="block text-base font-medium text-gray-700">
    //             Comments
    //           </label>
    //           <textarea
    //             name="comments"
    //             value={formData.comments}
    //             onChange={handleChange}
    //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //           />
    //         </div>
    //       </div>
    //       <div className="border border-gray-200 bg-white rounded-lg p-4 mt-4">
    //         <h3 className="text-2xl font-semibold  mt-6 mb-4">
    //           Buyer Information
    //         </h3>
    //         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    //           <div>
    //             <label className="block text-base font-medium text-gray-700">
    //               First Name
    //             </label>
    //             <input
    //               type="text"
    //               name="firstName"
    //               value={formData.firstName}
    //               onChange={handleChange}
    //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //             />
    //           </div>
    //           <div>
    //             <label className="block text-base font-medium text-gray-700">
    //               Last Name
    //             </label>
    //             <input
    //               type="text"
    //               name="lastName"
    //               value={formData.lastName}
    //               onChange={handleChange}
    //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //             />
    //           </div>
    //           <div>
    //             <label className="block text-base font-medium text-gray-700">
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               value={formData.email}
    //               onChange={handleChange}
    //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //             />
    //           </div>
    //           <div>
    //             <label className="block text-base font-medium text-gray-700">
    //               Phone
    //             </label>
    //             <input
    //               type="text"
    //               name="phone"
    //               value={formData.phone}
    //               onChange={handleChange}
    //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //             />
    //           </div>
    //           <div className="md:col-span-2">
    //             <label className="block text-base font-medium text-gray-700">
    //               Strength
    //             </label>
    //             <input
    //               type="text"
    //               name="strength"
    //               value={formData.strength}
    //               onChange={handleChange}
    //               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="md:col-span-2">
    //         <label className="block text-base font-medium text-gray-700">
    //           Seller Type
    //         </label>
    //         <select
    //           name="sellerType"
    //           value={formData.sellerType}
    //           onChange={handleChange}
    //           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    //         >
    //           <option value="all">All</option>
    //           <option value="prescription">Prescription Drug Seller</option>
    //           <option value="general">General Merchandise Seller</option>
    //         </select>
    //       </div>
    //       <button
    //         type="submit"
    //         className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    //       >
    //         Request For Quote
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div>
      <Bid/>
    </div>
  );
};

export default LayoutBid;
