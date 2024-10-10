import React, { useState } from 'react';
import image from '../../../assets/offers_1.png';
import image2 from '../../../assets/offers_2.png'
import image1 from '../../../assets/offers_3.png'
import next from '../../../assets/Next_icon.png'
import previous from "../../../assets/Previous_icon.png";
import { CiSearch, CiMenuKebab } from "react-icons/ci";

import { Navigate, useNavigate } from 'react-router-dom';
const LayoutBuyerReceiversgrid = () => {
    const Buyergrids = [
        {
            src: image,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image1,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image2,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image1,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image2,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image1,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image2,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image1,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image2,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image1,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        {
            src: image2,
            itemName: "2SAN VAGINAL PH SCREENING TEST",
            itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
            itempackage: "string",
            unitprice: 1200.00,
        },
        // Add more items...
    ];

    const itemsPerPage = 5; // Set the number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedItemIndex, setExpandedItemIndex] = useState(null);

    // Calculate the total number of pages
    const totalPages = Math.ceil(Buyergrids.length / itemsPerPage);

    // Function to handle pagination
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Function to toggle item details
    const toggleItemDetails = (index) => {
        if (expandedItemIndex === index) {
            setExpandedItemIndex(null);
        } else {
            setExpandedItemIndex(index);
        }
    };

    // Calculate the index range for items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = Buyergrids.slice(startIndex, endIndex);

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/detailspage/:id')
    }

    return (
        <div className='w-full h-[80vh] mt-4 overflow-y-auto'>
            <div className='flex flex-col mx-5'>
                <h1 className='text-xl text-blue-900 font-semibold'>Received Deliveries</h1>

                {/* search start */}
                <div className="relative flex my-4">
                    <input
                        type="text"
                        placeholder="Search Product....."
                        //   value={searchQuery}
                        //   onChange={(e) => setSearchQuery(e.target.value)}
                        className="border rounded-xl h-10 w-64 text-left px-8 gap-2"
                    />
                    <CiSearch className="absolute left-2 top-3 text-gray-400 " />
                </div>
                {/* search end */}
                <div className='w-full '>
                    {displayedItems.map((Buyergrid, index) => (
                        <div key={index} className='pb-4 border rounded-lg shadow-lg  justify-around mb-4 flex'>
                            <div>
                                <img src={Buyergrid.src} alt={Buyergrid.itemName} className='w-36 h-28 cursor-pointer p-2' onClick={handleClick} />
                                <p>Received Date :<span className='text-red-500 text-sm'> 04-17-2024</span></p>

                            </div>
                            <div className='flex flex-col mt-2 ml-4'>
                                <p className='text-base font-semibold'>Item Details</p>
                                <p className='text-base font-semibold'>{Buyergrid.itemName}</p>
                                <p className='text-sm w-48'>
                                    {expandedItemIndex === index
                                        ? Buyergrid.itemDetails
                                        : Buyergrid.itemDetails.slice(0, 100) + '...'}
                                    <button
                                        onClick={() => toggleItemDetails(index)}
                                        className='text-blue-500 ml-2'
                                    >
                                        {expandedItemIndex === index ? 'See Less' : 'See More'}
                                    </button>
                                </p>
                            </div>
                            <div className='mt-2 ml-4'>
                                <span className='text-base font-semibold'>Package </span>
                                <p>{Buyergrid.itempackage}</p>
                            </div>
                            <div className='mt-2 ml-4'>
                                <span className='text-base font-semibold'>Unit Price </span>
                                <p>${Buyergrid.unitprice.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination controls with Next and Previous */}
                <div className='flex justify-end mt-4 space-x-2 my-4'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                        disabled={currentPage === 1}
                    >
                        <img src={previous} className='w-4 h-4' />
                    </button>

                    {/* Page number buttons */}
                    {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {i + 1}
                        </button>
                    ))} */}
                    <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
                        {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                        disabled={currentPage === totalPages}
                    >
                        <img src={next} className='w-4 h-4' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LayoutBuyerReceiversgrid;
