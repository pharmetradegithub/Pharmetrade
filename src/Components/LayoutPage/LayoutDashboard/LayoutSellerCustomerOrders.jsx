import React from 'react'
import view from '../../../assets/Icons/eye_view.png'
import { Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
const LayoutSellerCustomerOrders = () => {
    const customerOrder = useSelector((state) => state.dashboard.getCustomerOrder)

    const products = [
        {
            id: "000",
            thumbnail: "08-30-2026",
            name: "Generic Medicine",
            Total: "350.00",
            CustomerName: "Ram Manda",
            status: "Pending",
            type: "View Order",
        },
        {
            id: "001",
            thumbnail: "08-30-2026",
            name: "Another Medicine",
            Total: "250.00",
            CustomerName: "Ram Manda",
            status: "Orderd",
            type: "View Order",
        },
        {
            id: "000",
            thumbnail: "08-30-2026",
            name: "Generic Medicine",
            Total: "350.00",
            CustomerName: "Ram Manda",
            status: "Orderd",
            type: "View Order",
        },
        {
            id: "000",
            thumbnail: "08-30-2026",
            name: "Generic Medicine",
            Total: "350.00",
            CustomerName: "Ram Manda",
            status: "Orderd",
            type: "View Order",
        },
        
    ];
    return (
        <div>
                        <h1 className='text-blue-900 text-xl font-semibold my-3'>CustomersOrdered</h1>

            <table className="w-full">
                <thead className="bg-blue-900 text-white">
                    <tr className="border-b-2">
                        <th className="px-4 py-2 text-left">Order ID</th>
                        <th className="px-4 py-2 text-left">Purchased On</th>
                        <th className="px-4 py-2 text-left">Products Name</th>
                        <th className="px-4 py-2 text-left">Total</th>
                        <th className="px-4 py-2 text-left">Customer</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-scroll'>
                    {customerOrder && customerOrder.length > 0 ? (
                        customerOrder.map((product, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{product.id}</td>
                                <td className="px-4 py-2">{product.thumbnail}</td>
                                <td className="px-4 py-2">{product.name}</td>
                                <td className="px-4 py-2">${product.Total}</td>
                                <td className="px-4 py-2">{product.CustomerName}</td>
                                <td className="px-4 py-2">{product.status}</td>
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
                                No orders available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default LayoutSellerCustomerOrders