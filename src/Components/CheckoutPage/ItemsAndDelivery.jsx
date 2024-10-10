import React, { useEffect, useState } from 'react'
import offer from "../../assets/offers_1.png";
import { useDispatch, useSelector } from 'react-redux';
import { setGetOrder } from '../../Store/Store';
import previous from '../../assets/Previous_icon.png'
import next from '../../assets/Next_icon.png'

const ItemsAndDelivery = () => {


  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const getOrder = useSelector((state) => state.order.getOrder)
  console.log("getOrder-->", getOrder) 
  const date = new Date()
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is 0-indexed, so add 1
const day = String(date.getDate()).padStart(2, '0');
const year = date.getFullYear();

const formattedDate = `${month}-${day}-${year}`;

console.log(date)
    const itemsdetails = [
        {
          // img: 'offer',  // Assuming 'offer' is a string representing the image or icon name
          name: "Pharmacy Pharmetrade",
          type: "Syrup",
          Strength: "500mg",
          Price: 320,
          purchase: "sold by",
          Company_Name: "Pharmetrade",
          option: "Choose a delivery option",
          delivery1: "Monday 9 Sept",
          deliivery_type1: "FREE Delivery",
        },
      ];

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = getOrder.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.ceil((getOrder?.length || 0) / itemsPerPage);
    
      const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      };
    
      const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      };

  return (
    <div >
    <h1>4 Review items and delivery</h1>
    {/* {getOrder.map((itemsdetail, index) => (
      <div  key={index}>
    <div className=" border rounded-md p-4 m-3 ">
      <h1 className="text-lg font-semibold text-green-600">
      
      </h1>
      <p className="text-base flex flex-wrap">
        If you order in the next 10 hours and 50 minutes (
        Details )
      </p>
      <p className="text-base flex flex-wrap">
        Items dispatched by Pharmetrade{" "}
      </p>
       
       <div className='flex justify-between'>
        
       
          <div className="mt-4 p-2">
              <img src={itemsdetail.imageUrl} className="w-28 h-24  p-4 " />
          </div>
          <div>
            <p className="text-base font-semibold flex flex-wrap">
                {itemsdetail.productName}
            </p>
            <p className="text-base font-semibold flex flex-wrap">
              {itemsdetail.type}
            </p>
            <p className="text-base font-semibold">
              {itemsdetail.Strength}
            </p>
            <p className="text-red-600 font-semibold">
              {" "}
                ${itemsdetail.totalAmount}
            </p>
            <input
              type="number"
                //  value={quantities[index]}
                value={itemsdetail.quantity}
              // onChange={(e) =>
              //   handleQuantityChange(index, Number(e.target.value))
              // }
              className="text-xl border rounded-lg p-1 w-16"
              min="1"
            />
            <div className="flex">
                <p>{}</p>
                <p>{itemsdetail.customerName}</p>
            </div>
          </div>

          <div>
            <p className="text-base font-semibold">
              {itemsdetail.option} :
            </p>
            <label className="flex items-center text-base text-green-600 font-semibold">
              <input
                type="radio"
                name={`delivery${index}`}
                value={itemsdetail.delivery_type1}
                className="mr-2"
              />
              {itemsdetail.delivery1}
            </label>
            <p className="text-base ml-5">
              {itemsdetail.deliivery_type1}
            </p>
          </div>


          </div>
        </div>
     
    </div>
  ))} */}

<div>
      {currentItems.map((itemsdetail, index) => (
        <div key={index}>
          <div className="border rounded-md p-4 m-3 shadow-lg">
            <h1 className="text-lg font-semibold text-green-600">
              Arriving {formattedDate} {/* Updated date format */}
            </h1>
            <p className="text-base flex flex-wrap">
              If you order in the next 10 hours and 50 minutes (Details)
            </p>
            <p className="text-base flex flex-wrap">
              Items dispatched by Pharmetrade
            </p>

            <div className="flex justify-around">
              <div className="mt-4 p-2">
                <img
                  src={itemsdetail.imageUrl}
                  className="w-44 h-28 p-4"
                  alt="product"
                />
              </div>
              <div>
                <p className="text-base font-semibold flex flex-wrap">
                  {itemsdetail.productName}
                </p>
                <p className="text-base font-semibold flex flex-wrap">
                  {itemsdetail.type}
                </p>
                <p className="text-base font-semibold">
                  {itemsdetail.Strength}
                </p>
                <p className="text-red-600 font-semibold">
                  ${itemsdetail.totalAmount.toFixed(2)}
                </p>
                <input
                  type="number"
                  value={itemsdetail.quantity}
                  className="text-xl border rounded-lg p-1 w-16"
                  min="1"
                />
                {/* <div className="flex">
                  <p>{}</p>
                  <p>{itemsdetail.customerName}</p>
                </div> */}
              </div>

              {/* <div>

                <p className="text-base font-semibold">
                  {itemsdetail.option}:
                </p>
                <label className="flex items-center text-base text-green-600 font-semibold">
                  <input
                    type="radio"
                    name={`delivery${index}`}
                    value={itemsdetail.delivery_type1}
                    className="mr-2"
                  />
                  {itemsdetail.delivery1}
                </label>
                <p className="text-base ml-5">{itemsdetail.delivery_type1}</p>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>


    <div className="flex justify-end my-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="mx-2 px-4 border p-2 text-white rounded-lg"
          >
            <img src={previous} className="w-2" alt="Previous Page" />
          </button>
          <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 border p-2 text-white rounded-lg"
          >
            <img src={next} className="w-2" alt="Next Page" />
          </button>
        </div>
  </div>
  )
}

export default ItemsAndDelivery
