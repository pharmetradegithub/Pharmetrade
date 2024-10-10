import React, { useState, useEffect } from "react";
import next from "../assets/Next_icon.png";
import previous from "../assets/Previous_icon.png";
import { Tooltip } from "@mui/material";

const Pagination = ({
  productList,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  indexOfFirstItem,
  indexOfLastItem,
}) => {
  const totalPages = Math.ceil((productList?.length || 0) / itemsPerPage);

  const handleGoToFirstPage = () => {
    setCurrentPage(1);
  };

  const handleGoToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to page 1 when items per page is changed
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <span className="font-semibold">Items per page: </span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="bg-white w-auto h-10 px-2 p-2 cursor-pointer text-black border rounded-md"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <div className="flex justify-end my-2">
        <button
          style={{ color: "blue" }}
          onClick={handleGoToFirstPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg cursor-pointer"
        >
          <Tooltip title="First page" placement="top" >
            <div className="flex ">
              <img src={previous} className="w-2" alt="Next Page" />
              <img src={previous} className="w-2" alt="Next Page" />
            </div>
          </Tooltip>
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" alt="Previous Page" />
        </button>
        <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
          Showing {indexOfFirstItem + 1}-{indexOfLastItem} of{" "}
          {productList.length}
          {/* {currentPage} of {totalPages} */}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" alt="Next Page" />
        </button>
        <button
          style={{ color: "blue" }}
          onClick={handleGoToLastPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg "
        >
          
          <Tooltip title="Last page" placement="top" >
            <div className="flex ">
            <img src={next} className="w-2" alt="Next Page" />
            <img src={next} className="w-2" alt="Next Page" />
            </div>
          </Tooltip>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
