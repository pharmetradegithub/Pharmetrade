import React, { useState } from 'react';
import LayoutBuyerReceiversgrid from './LayoutBuyerReceiversgrid';
import LayoutBuyerUpcomingGrid from './LayoutBuyerUpcomingGrid';
import LayoutBuyerCancelledgrid from './LayoutBuyerCancelledgrid';
import LayoutBuyerOrders from './LayoutBuyerOrders'
import { useSelector } from 'react-redux';
const LayoutDashboard = () => {
  const [visibleGrid, setVisibleGrid] = useState(null); // To track which grid is visible
  const customerList = useSelector((state) => state.dashboard.getCustomerId)
  console.log("customerList-->", customerList)

  const toggleGrid = (grid) => {
    setVisibleGrid((prev) => (prev === grid ? null : grid)); // Toggle the grid visibility
  };

  const orders = [
    {
      label: "Orders", quantity: customerList.totalOrders, color: 'green', grid: "orders" }, // Static color for orders
    {
      label: "Received", quantity: customerList.receivedOrders, color: 'blue', grid: "received" },
    {
      label: "Upcoming", quantity: customerList.upcomingOrders, color: 'orange', grid: "upcoming" },
    {
      label: "Cancelled", quantity: customerList.cancelledOrders, color: 'red', grid: "cancelled" },
  ];

  // const CircleProgress = ({ percentage, color }) => {
  //   const radius = 20;
  //   const strokeWidth = 4;
  //   const circumference = 2 * Math.PI * radius;
  //   const progress = (percentage / 100) * circumference;

  //   return (
  //     <svg width={50} height={50}>
  //       <circle
  //         cx="25"
  //         cy="25"
  //         r={radius}
  //         stroke="#e0e0e0"
  //         strokeWidth={strokeWidth}
  //         fill="none"
  //       />
  //       <circle
  //         cx="25"
  //         cy="25"
  //         r={radius}
  //         stroke={color}
  //         strokeWidth={strokeWidth}
  //         fill="none"
  //         strokeDasharray={circumference}
  //         strokeDashoffset={circumference - progress}
  //         strokeLinecap="round"
  //         transform="rotate(-90 25 25)" // Start progress from the top
  //       />
  //       {/* Percentage Text */}
  //       <text
  //         x="50%"
  //         y="50%"
  //         dominantBaseline="middle"
  //         textAnchor="middle"
  //         fontSize="10"
  //         fill={color}
  //         fontWeight="bold"
  //       >
  //         {percentage}%
  //       </text>
  //     </svg>
  //   );
  // };

  return (
    <div className='w-full h-full bg-gray-100 flex items-center justify-center overflow-y-scroll'>
      <div className='w-[97%] h-full mt-4 mx-5 '>
        <div>
          <h1 className='text-2xl text-blue-900 font-semibold'>Customer dashboard</h1>
        </div>
        <div className='flex justify-center items-center flex-wrap  gap-4 w-full mt-8 border p-4 rounded-lg shadow-lg'>

          <div className='flex gap-6 mt-4'>
            {orders.map((order) => (
              <div
                key={order.label}
                className='p-4 w-56 h-28 justify-between items-center flex shadow-lg rounded-lg bg-white cursor-pointer'
                onClick={() => toggleGrid(order.grid)} // Toggle the corresponding grid
                style={{ borderBottom: `4px solid ${order.color}` }}
              >
                <div className='w-full flex justify-between flex-col'>
                  <div className='flex flex-col justify-start '>
                    <p className='text-2xl hover:text-red-500'>{order.label}</p>
                  </div>
                  <div className='flex justify-between mt-2'>
                    <p className='text-3xl mt-2'>{order.quantity}</p>
                    {/* Circle with colored border and percentage */}
                    {/* <CircleProgress percentage={order.quantity} color={order.color} /> */}
                    {/* <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${order.color}`}
                    // style={{ backgroundColor: 'transparent' }}
                  >
                    <span className='text-xl'>{order.quantity}%</span>
                   
                  </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conditionally render the grids based on which one is selected */}
        <div>
          {visibleGrid === "orders" && <LayoutBuyerOrders />}
        </div>
        <div>
          {visibleGrid === "received" && <LayoutBuyerReceiversgrid />}
        </div>
        <div>
          {visibleGrid === "upcoming" && <LayoutBuyerUpcomingGrid />}
        </div>
        <div>
          {visibleGrid === "cancelled" && <LayoutBuyerCancelledgrid />}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
