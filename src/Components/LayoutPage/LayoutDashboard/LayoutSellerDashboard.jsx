import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import LayoutDashboardgrid from './LayoutDashboardGrid'
import { useDispatch, useSelector } from 'react-redux';
import LayoutSellerTotalProducts from './LayoutSellerTotalProducts';
import LayoutSellerProductOrderd from './LayoutSellerProductOrderd';
import LayoutSellerCustomerOrders from './LayoutSellerCustomerOrders';
// import { fetchSellerDashboard } from '../../../Api/DashBoardApi';
import { fetchAllProductsApi } from '../../../Api/ProductApi';
import { fetchCustomerOrered, fetchSellerDashboard, fetchTotalProductDashboard } from '../../../Api/Dashboard';
import { fetchSellerGetAll } from '../../../Api/OrderApi';
const LayoutSellerDashboard = () => {
  const user = useSelector((state) => state.user.user);
  console.log("layoutDash-->", user)
  const sellerId = useSelector((state) => state.dashboard.getSellerId)
  console.log("sellerId--->", sellerId)
  const dispatch = useDispatch()
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isPercentageShown, setIsPercentageShown] = useState(false);
  const sellerDashboard = useSelector((state) => state.dashboard.getSellerId)
  console.log("sellerdash-->", sellerDashboard)
  const navigate = useNavigate();

  // Handle Latest button click to show percentage or close the grid
  const products = useSelector((state) => state.product.Products);
  const handleClick = () => {
    console.log("dashboardLayout-->", products)
    if (isGridOpen) {
      // If grid is open, close it
      setIsGridOpen(false);
      setIsPercentageShown(false);
    } else if (!isPercentageShown) {
      // Show percentage first
      setIsPercentageShown(true);
    } else {
      // If percentage is shown, open the grid
      setIsGridOpen(true);
    }
  };

  // Handle closing the grid
  const closeGrid = () => {
    setIsGridOpen(false);
    setIsPercentageShown(false); // Reset everything when the grid is closed
  };

  // Handle percentage click to show the grid
  const handlePercentageClick = () => {
    setIsGridVisible(true);
  };

  const totalProduct = useSelector((state) => state.dashboard.getTotalProductDashboard)
  console.log("totaldash-->", totalProduct)
  const customerOrdered = useSelector((state) => state.dashboard.getCustomerOrder)
  console.log("getCustomerOrder-->", customerOrdered)

  const [visibleGrid, setVisibleGrid] = useState(null); // To track which grid is visible


  const toggleGrid = (grid) => {
    setVisibleGrid((prev) => (prev === grid ? null : grid)); // Toggle the grid visibility
  };
  // grid data
  const product = [
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "001",
      thumbnail: "D061D23",
      name: "Another Medicine",
      attributeSet: "250",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "001",
      thumbnail: "D061D23",
      name: "Another Medicine",
      attributeSet: "250",
      productStatus: "",
      status: "",
      type: "View Order",
    },
  ];


  const details = [
    {
      totalOrder: sellerDashboard?.totalOrders, label: "Incoming Orders", percentage: sellerDashboard?.
        productsOrdered, color: "red", grid: "totalProducts"
    }, // Red
    {
      label: "Outgoing Orders", percentage: sellerDashboard?.outgoingOrdersCount, color: "orange", grid: "productsOrdered"
    }, // Yellow
    {
      label: "Total No.of Products Count", percentage: sellerDashboard?.totalProducts, color: "green", grid: "customersOrdered"
    }, // Green

    {
      label: "Total Incoming Order Value", percentage: sellerDashboard?.totalPurchaseValue, color: "blue", grid: "customersOrdered"
    },
    {
      label: "Total Outgoing Order Value", percentage: sellerDashboard?.totalSaleValue, color: "purple", grid: "customersOrdered"
    },
  ];

  const productdetails = [
    { totalproducts: 9, heading: "Top Selling Products", label: "ALEGRA 24 HOUR", number: 5, sales: "Sales", text: "DAYQUIL LIQ 80Z", quantity: 3 },

  ]
  const customerdetails = [
    { totalcutomers: 200, label: "This month customer count", Quantity: 0, text: "Last month customer count", number: 0 }
  ]

  const [selectedOption, setSelectedOption] = useState('Yearly'); // Default option

  // Handle dropdown selection
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
 

  useEffect(() => {
    console.log(user, "uerr--->")
    dispatch(fetchTotalProductDashboard(user?.customerId))
    dispatch(fetchCustomerOrered(user?.customerId))
    dispatch(fetchSellerGetAll(user?.customerId))
  }, [user?.customerId])

  // Images for each option (you can replace these with actual image URLs or paths)
  const imageMap = {
    Yearly: 'https://th.bing.com/th/id/OIP.CS3OjmHCzVZEsK3JNkHNyQHaE8?w=222&h=180&c=7&r=0&o=5&pid=1.7',
    Monthly:
      "https://i.ytimg.com/vi/dBJynLx819I/maxresdefault.jpg",
    Weekly: "https://s3.envato.com/files/500220660/screenshots/15.png",
    Daily: 'https://th.bing.com/th/id/OIP.aoXhfbHqx42fr7fUzSHh4gHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7',
  };

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


  // const handleTotalProduct = (index) => {
  //   // dispatch(fetchTotalProductDashboard(user?.customerId))
  //   navigate(`/layout/${index}`);
  // }


  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900  font-semibold">Seller Dashboard</h1>
        </div>

        <div className="flex flex-col ">
          <div className='flex justify-center flex-wrap  gap-2 w-full mt-8 border p-4 rounded-lg shadow-lg'>

            {/* <div className='flex flex-col items-center justify-center ml-7'>
              <h1 className='text-xl font-semibold'>Order(s)</h1>
              <p className='text-3xl '>{sellerDashboard?.totalOrders}</p>
            </div> */}
            <div className='flex gap-3 ml-2 '>
              {details.map((detail, index) => (
                <div className='flex gap-4'>

                  <div
                    key={index}
                    className="bg-white w-44 rounded-lg shadow-xl cursor-pointer  h-28 p-1 flex flex-col justify-between"
                    onClick={() => toggleGrid(detail.grid)}
                    style={{ borderBottom: `4px solid ${detail.color}` }} // Set bottom border color
                  >

                    <div className="flex justify-between items-center">
                      <h1 className='hover:text-red-600 hover:underline px-2 '>{detail.label}</h1>

                    </div>
                    <div className="flex justify-between">
                      <p className='items-center flex justify-center text-3xl mt-4 font-semibold px-2'>{detail.percentage}</p>
                      {/* <CircleProgress percentage={detail.percentage} color={detail.color} /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
           

            {/* <div
              className="w-48 h-28 bg-white rounded-lg shadow-xl border-b-4 border-b-blue-900 flex items-center justify-center cursor-pointer"
              onClick={handleClick}
            >
              {!isPercentageShown ? (
                <h1 className="hover:text-red-500 font-semibold text-xl text-center">
                  Latest
                </h1>
              ) : !isGridOpen ? (
                <h1 className="text-blue-900 font-semibold text-3xl text-center">
                  85%
                </h1> // Example percentage
              ) : (
                <h1 className="hover:text-red-500 font-semibold text-xl text-center">
                  Close Latest
                </h1>
              )}
            </div> */}


          </div>

          <div className='flex flex-wrap gap-6 w-full mt-8 border rounded-lg shadow-lg p-4'>
            {/* products */}

            {/* <h1 className='text-xl font-semibold'> Product(s)</h1> */}
            <div className='flex flex-col items-center justify-center ml-4'>
              <h1 className='text-xl font-semibold'>Product(s)</h1>
              <p className='text-3xl '>{sellerDashboard?.productsOrdered}</p>
            </div>
            {/* <p>Top Selling Products</p> */}

            <div className=''>
              {productdetails.map((productdetail, index) => (
                <div >
                  {/* <h1 className='text-3xl items-center justify-start text-center flex'>{productdetail.totalproducts}</h1> */}
                  <div className='w-48 p-4  border rounded-lg shadow-lg  h-28 bg-white '>
                    <div className=''>
                      <h1 className='flex justify-center '>{productdetail.heading}</h1>
                      <p className='border mt-2'></p>
                    </div>
                    <div className='overflow-y-scroll h-10 '>

                      <div className='flex justify-between mt-2  '>
                        <h1 className=' flex flex-wrap'> {productdetail.label}</h1>
                        <div className='flex flex-col'>
                          <p>{productdetail.number}</p>
                          <p>{productdetail.sales}</p>
                        </div>
                      </div>
                      <div className='flex justify-between  '>
                        <h1 className=' flex flex-wrap'> {productdetail.text}</h1>
                        <div className='flex flex-col '>
                          <p>{productdetail.quantity}</p>
                          <p>{productdetail.sales}</p>
                        </div>

                      </div>
                      <div className='flex justify-between mt-2  '>
                        <h1 className='flex flex-wrap'> {productdetail.label}</h1>
                        <div className='flex flex-col'>
                          <p>{productdetail.number}</p>
                          <p>{productdetail.sales}</p>
                        </div>
                      </div>
                      <div className='flex justify-between  '>
                        <h1 className=' flex flex-wrap'> {productdetail.text}</h1>
                        <div className='flex flex-col '>
                          <p>{productdetail.quantity}</p>
                          <p>{productdetail.sales}</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* customers */}

            <div className=' flex gap-8'>
              <div className='flex flex-col items-center justify-center ml-5'>
                <h1 className='text-xl font-semibold'>Customers(s)</h1>
                <p className='text-3xl '>{sellerDashboard?.customersOrdered}</p>
              </div>
              <div   >
                {customerdetails.map((customerdetail, index) => (
                  <div className='flex'>
                    {/* <h1 className='text-3xl items-center text-center -ml-5 justify-start flex'>{customerdetail.totalcutomers}</h1> */}
                    <div className='w-48 p-4 ml-8  border rounded-lg shadow-lg h-28 bg-white'>
                      <div className='flex border-b -mt-2'>
                        <h1> {customerdetail.label} :</h1>
                        <p className=''>{customerdetail.Quantity}</p>
                      </div>


                      <div className='flex '>
                        <h1> {customerdetail.text} :</h1>
                        < p className=''>{customerdetail.number}</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>

        {/* <div className='mt-8'>
          {isGridOpen && (
            <LayoutDashboardgrid data={products} onClose={closeGrid} />
          )}
        </div> */}






        <div>
          {visibleGrid === "customersOrdered" && <LayoutSellerCustomerOrders />}
        </div>
        <div>
          {visibleGrid === "productsOrdered" && <LayoutSellerProductOrderd />}
        </div>
        <div>
          {visibleGrid === "totalProducts" && <LayoutSellerTotalProducts />}
        </div>
      </div>


    </div>
  );
};

export default LayoutSellerDashboard;



