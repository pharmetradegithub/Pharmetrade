import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/img1.png";
function OrderHistory({ topMargin }) {
  const [searchQuery, setSearchQuery] = useState("");
  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const YearDropdown = () => {
    const currentYear = new Date().getFullYear();
    const years = generateYears(2000, currentYear);

    return (
      <select className="border  rounded-md mx-2 shadow-md bg-slate-200">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div
      className="max-w-5xl  m-auto my-6"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      {/* <div className='w-screen h-screen'> */}

      {/* <div className="flex my-2">
        <p className="text-xl">Your Accounts</p>
        <p className="text-xl text-red-400 mx-4">
          <Link to="/orderlist">Your Orders</Link>
        </p>
      </div> */}

      <div className="flex justify-between items-center ">
        <h2 className="text-3xl font-semibold"> Your Orders</h2>

        <div className="flex   text-end justify-end items-center">
          <div className="flex bg-white border rounded-xl  h-12 w-64   p-2 m-5 ">
            <input
              type="text"
              placeholder="search product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-left relative"
            />
          </div>
          <button className="border rounded-full w-52 text-xl p-2 bg-blue-900 text-white">
            Search order
          </button>
        </div>
      </div>
      {/* links start */}
      <div className="flex   ">
        <button className=" border-b border-red-500  hover:text-blue-900 text-black w-60   h-9  text-xl">
          Orders
        </button>

        <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
          {" "}
          {""}
          <Link to="/layout/layoutbuyerreceivedgrid"> Received Orders</Link>
        </button>
        <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
          {" "}
          {""}
          <Link to="/layout/layoutbuyerupcominggrid"> Upcoming Orders</Link>
        </button>

        <button className="  border-b hover:border-red-500 hover:text-red-500 text-black w-60 h-9 text-xl">
          {" "}
          {""}
          <Link to="/layout/layoutbuyercancelledgrid"> Cancelled Orders</Link>
        </button>
      </div>
      {/* limks end */}
      <div className="flex my-4">
        <h1>Orders Placed In</h1>
        <YearDropdown className="border rounded-lg" />
      </div>
      {/* section start */}

      <div className="border my-6 rounded-lg shadow-md">
        <div className="flex justify-between border-b pb-2 pt-2 pr-3 pl-3 bg-slate-200">
          <div>
            <h1 className="">Order Placed</h1>
            <p>7 April 2024</p>
          </div>
          <div>
            <h1>Total</h1>
            <p>$ 299.00</p>
          </div>
          <div>
            <h1>Ship To</h1>
            <p className="text-blue-900"> Customer Name</p>
          </div>
          <div>
            <h1>Order ID</h1>

            <p className="text-blue-900">
              <Link to="/"> View Order Details | Invoice</Link>{" "}
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between pt-3 pr-3 pl-3">
            <div className="">
              <h1 className="text-xl font-semibold">Delivery Date</h1>
              <p>Package was handed to resident</p>
            </div>
            <div className="flex flex-col">
              <button className="border rounded-lg p-2 w-60 shadow-md">
                Leave Seller Feedback
              </button>
              <button className="border rounded-lg p-2 my-2 shadow-md">
                Write a product review
              </button>
            </div>
          </div>

          <div className="flex  border-b">
            <div className="flex m-0">
              <img src={img} className="w-24 h-40 m-0 p-0" />

              <div className="flex flex-col   ">
                <p className="max-w-2xl text-sky-900">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veritatis, vitae ipsa ducimus dolores qui veniam quibusdam
                  voluptatum Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit.dolores qui veniam quibusdam voluptatum Lorem
                </p>
                <p className="my-2 text-sm">
                  Return Window closed on 22 April 2024
                </p>
                <div className=" flex my-2">
                  <button className="border rounded-lg p-2 bg-blue-900 text-white w-48 shadow-md">
                    <Link to="/allProducts"> Buy it again</Link>
                  </button>
                  <button className="border rounded-lg p-2 mx-3 shadow-md w-48">
                  <Link to='/detailspage/:id'>View your item</Link>  
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <button className="text-blue-900">Archieve order</button>
          </div>
        </div>
      </div>
      {/* section end */}
    </div>

    // </div>
  );
}

export default OrderHistory;
