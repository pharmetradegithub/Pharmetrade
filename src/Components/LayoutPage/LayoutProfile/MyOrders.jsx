// import React from 'react'

// const MyOrders = () => {
//   return (
//     <div >
//       Myorders
//     </div>
//   )
// }

// export default MyOrders
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiSearch, CiMenuKebab } from "react-icons/ci";

function MyOrders() {
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    {
      order: "00000754",
      date: "9/6/23",
      ship: "Venkat Gollapalli",
      ordertotal: "$7.99",
      status: "Pending",
      action: "View Order",
      r: "Reorder"
    },
    {
      order: "00000435",
      date: "8/12/23",
      ship: "Venkat Gollapalli",
      ordertotal: "$6.54",
      status: "Pending",
      action: "View Order",
      r: "Reorder"
    },
    {
      order: "00000765",
      date: "9/11/23",
      ship: "Venkat Gollapalli",
      ordertotal: "$9.54",
      status: "Pending",
      action: "View Order",
      r: "Reorder"
    }, {
      order: "00000324",
      date: "10/12/23",
      ship: "Venkat Gollapalli",
      ordertotal: "$4.54",
      status: "Pending",
      action: "View Order",
      r: "Reorder"
    }, {
      order: "00000675",
      date: "20/12/23",
      ship: "Venkat Gollapalli",
      ordertotal: "$5.54",
      status: "Pending",
      action: "View Order",
      r: "Reorder"
    },
  ];

  // const stats = [
  //   { label: "Total Orders", value: "2,420", percentage: 20 },
  //   { label: "Total Products", value: "3,843", percentage: 25 },
  //   { label: "Base Amount", value: "1,700", percentage: -11 },
  //   { label: "Purchase Amount", value: "2,530", percentage: 17 },
  // ];

  const filteredProducts = products.filter(
    (product) =>
      product.ship.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.order.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-200 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold">List of Orders</h1>
        </div>

        <div className="border rounded-md text-[15px] bg-white mt-4">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b-2">
                <th className="px-4 py-2 text-left">ORDER</th>
                <th className="px-4 py-2 text-left">DATE</th>
                <th className="px-4 py-2 text-left">SHIP TO</th>
                <th className="px-4 py-2 text-left">ORDER TOTAL</th>
                <th className="px-4 py-2 text-left">STATUS</th>
                <th className="px-4 py-2 text-left">ACTION</th>
                <th className="px-4 py-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const rows = [];
                for (let i = 0; i < filteredProducts.length; i++) {
                  rows.push(
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2">{filteredProducts[i].order}</td>
                      <td className="px-4 py-2">{filteredProducts[i].date}</td>
                      <td className="px-4 py-2">{filteredProducts[i].ship}</td>
                      <td className="px-4 py-2">{filteredProducts[i].ordertotal}</td>
                      <td className="px-4 py-2">{filteredProducts[i].status}</td>
                      <td className="px-4 py-2">{filteredProducts[i].action}</td>
                      <td className="px-4 py-2">{filteredProducts[i].r}</td>
                    </tr>
                  );
                }
                return rows;
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;

