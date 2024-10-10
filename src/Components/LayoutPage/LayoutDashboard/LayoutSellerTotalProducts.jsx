import React from 'react'
import view from '../../../assets/Icons/eye_view.png'
import { Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
const LayoutSellerTotalProducts = () => {
    const totalProduct = useSelector((state) => state.dashboard.getTotalProductDashboard)
    const products = [
      
        {
            id: "01",
            Joining: "10-27-2024",
            name: "Another Medicine",
            Expiration: "08-30-2026",
            productStatus: "",
            Total: "900.00",
            type: "View Order",
        },
        {
            id: "000",
            Joining: "10-27-2024",
            name: "Generic Medicine",
            Expiration: "08-30-2026",
            productStatus: "",
            Total: "900.00",
            type: "View Order",
        },
        {
            id: "000",
            Joining: "10-27-2024",
            name: "Generic Medicine",
            Expiration: "08-30-2026",
            productStatus: "Ordered",
            Total: "900.00",
            type: "View Order",
        },
        {
            id: "000",
            Joining:"10-27-2024",
            name: "Generic Medicine",
            Expiration: "08-30-2026",
            productStatus: "Ordered",
            Total: "900.00",
            type: "View Order",
        },
        {
            id: "000",
            Joining:"10-27-2024",
            name: "Generic Medicine",
            Expiration: "08-30-2026",
            productStatus: "",
            Total: "900.00",
            type: "View Order",
        },
        
    ];
    return (
        <div>
            <h1 className='text-blue-900 text-xl font-semibold my-3'>TotalProducts</h1>
            <table className="w-full">
                <thead className="bg-blue-900 text-white">
                    <tr className="border-b-2">
                        <th className="px-4 py-2 text-left">Order ID</th>
                        <th className="px-4 py-2 text-left">Product Name</th>
                        <th className="px-4 py-2 text-left">Product Joining</th>
                        <th className="px-4 py-2 text-left">Product Expiration</th>
                        <th className="px-4 py-2 text-left">Product Action</th>
                        <th className="px-4 py-2 text-left">Total</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-scroll'>
                    {totalProduct && totalProduct.length > 0 ? (
                        totalProduct.map((product, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{product.productName}</td>
                                <td className="px-4 py-2">{product.Joining}</td>
                                <td className="px-4 py-2">{product.Expiration}</td>
                                <td className="px-4 py-2">{product.productStatus}</td>
                                <td className="px-4 py-2">${product.totalAmount}</td>
                                <td className='text-center flex justify-center cursor-pointer'>
                                    <Tooltip placement='top' title="view">
                                        <img src={view} className='w-6 h-6 mt-2 -ml-3' />
                                    </Tooltip>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center text-gray-500 py-4">
                                No product available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default LayoutSellerTotalProducts