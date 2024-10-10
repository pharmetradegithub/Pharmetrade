import React from "react";
import view from "../../../assets/Icons/eye_view.png";
import { Tooltip } from "@mui/material";
const LayoutDashboardGrid = ({ onClose }) => {
  const products = [
    {
      id: "000",
      TotalDate: "09-24-2034",
      name: "Generic Medicine",
      Total: "350.00",
      Product_Expiration: "10-24-2034",
      Type: "Syrup",
      Quantity: "100mg",
      Action: "View Order",
    },
    {
      id: "001",
      TotalDate: "09-24-2034",
      name: "Another Medicine",
      Total: "250.00",
      Product_Expiration: "10-24-2034",
      Type: "Syrup",
      Quantity: "100mg",

      Action: "View Order",
    },
    {
      id: "000",
      TotalDate: "09-24-2034",
      name: "Generic Medicine",
      Total: "350.00",
      Product_Expiration: "10-24-2034",
      Type: "Syrup",
      Quantity: "100mg",

      Action: "View Order",
    },
    {
      id: "000",
      TotalDate: "09-24-2034",
      name: "Generic Medicine",
      Total: "350.00",
      Product_Expiration: "10-24-2034 ",
      Type: "Syrup",
      Quantity: "100mg",

      Action: "View Order",
    },
  ];
  return (
    <div>
      <h1 className=" font-semibold text-xl text-blue-900">Latest Products</h1>

      <div className="border rounded-md text-[15px] bg-white mt-4  ">
        <table className="w-full">
          <thead className="bg-blue-900 text-white">
            <tr className="border-b-2">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Purchased On</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Product Expiration</th>

              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            {products.map((product, index) => (
              <tr key={index} className="border-b  ">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.TotalDate}</td>

                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.Product_Expiration}</td>

                <td className="px-4 py-2">${product.Total}</td>
                <td className="px-4 py-2">{product.Type}</td>
                <td className="px-4 py-2">{product.Quantity}</td>
                <td className="text-center flex  justify-center cursor-pointer">
                  <Tooltip placement="top" title="view">
                    <img src={view} className="w-6 h-6 mt-2 -ml-3" />
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LayoutDashboardGrid;
