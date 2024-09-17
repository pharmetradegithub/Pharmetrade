

import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import related from "../../../assets/Related.png";
import upSell from "../../../assets/upSell.png";
import crossSell from "../../../assets/crossSell.png";
import filter from "../../../assets/Icons/filter_icon.png";
import { AddCrossSellProductAPI, AddRelatedProductAPI, AddUpSellProductAPI, fetchCriteriaProductsApi, fetchCrossSellProductApi, fetchUpsellProductApi } from "../../../Api/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import {fetchRelatedProductApi } from "../../../Api/ProductApi";
import Bin from "../../../assets/Bin.png"

const LayoutRelatedProducts = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const [ButtonUpClick, setButtonUpClick] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isUpsellFilterVisible, setIsUpsellFilterVisible] = useState(false);
  const [isRelatedFiltervisible, setIsRelatedFiltervisible] = useState(false);
  const [isCrossSellFiltervisible, setCrossSellFilterVisible] = useState(false);
  const [product, setproduct] = useState(null);
  const productDetails = useSelector((state) => state.product.Products);
  const productsByCriteria = useSelector((state)=>state.product.productsByCriteria);
  const relatedProducts = useSelector((state)=>state.product.RelatedProducts);
  const UpSellProducts = useSelector((state)=>state.product.UpSellProducts);
  const CrossSellProducts = useSelector((state)=>state.product.CrossSellProducts);

  console.log(productsByCriteria,"gnn");
  const [loading,setloading] = useState(true);

  console.log(relatedProducts,UpSellProducts,CrossSellProducts,"related one");
  // const relatedProducts = useSelector((state) => state.product)
  useEffect(() => {
    const fetchAll =async ()=>{
      const productId = localStorage.getItem("productId");
        fetchRelatedProductApi(productId);
        fetchCrossSellProductApi(productId);
        fetchUpsellProductApi(productId);
    }
    fetchAll()
  }, [])
  
  const handleRelatedFilter = () => {
  setIsRelatedFiltervisible(true);
  setButtonClick(true);
  };
  const handleCancelRelated = () => {
    setIsRelatedFiltervisible(false);
    setButtonClick(false);
    };
  const handleUpsellFilter = () => {
    setIsUpsellFilterVisible(true);
    setButtonUpClick(true);
  };
  const handleCancelUpsell = () => {
   setIsUpsellFilterVisible(false);
   setButtonUpClick(false);
  };
  const handleCrossSellFilter = () => {
    setCrossSellFilterVisible(true);
    setButtonClicked(true);
  };

  const handleCrossSellCancel =()=>{
    setCrossSellFilterVisible(false);
    setButtonClicked(false);
}
const handleAddSelected = async(index,toproductID)=>{
  const productId = localStorage.getItem("productId");
  console.log(productId,toproductID,index);
  try {
    if(index==1)
    {
      await AddRelatedProductAPI(productId,toproductID);
      await fetchRelatedProductApi(productId);
    }
    else if(index==2)
    {
      await AddUpSellProductAPI(productId,toproductID);
      await fetchUpsellProductApi(productId);
    }
    else
    {
      await AddCrossSellProductAPI(productId,toproductID);
      await fetchCrossSellProductApi(productId);
    }

  } catch (error) {
    console.log(error);
  }
}
  const handleCriteria = async () => {
    let Criteria = {
      deals: "",
      brands: "",
      generics: "",
      discount: 0,
      expiring: 0,
      wholeSeller: "",
      pharmacyItems: false,
      prescriptionDrugs: false,
      otcProducts: false,
      vawdSeller: "",
      topSellingProducts: false,
      buyAgain: false,
      productCategoryId: formData.productCategory,
      categorySpecificationId: formData.categorySpecification,
      ndcupc: formData.ndcUpc,
      productName: formData.productName,
    };
    setloading(true);
    await fetchCriteriaProductsApi(Criteria, "Apply Filter");
    setloading(false);
  };


  const [formData, setFormData] = useState({
    categorySpecification: "",
    productCategory: "",
    manufacturer: "",
    brandName: "",
    expirationDate: "",
    ndcUpc: "",
    salePriceForm: "",
    salePriceTo: "",
    productName: "",
  });


  // Handle input change for all form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Placeholder for reset functionality
  const handleRelatedClick = () => {
    setFormData({
      categorySpecification: "",
      productCategory: "",
      manufacturer: "",
      brandName: "",
      expirationDate: "",
      ndcUpc: "",
      salePriceForm: "",
      salePriceTo: "",
      productName: "",
    });
  };

  const products = [
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
  ];


  const dispatch = useDispatch(); // Hook for dispatch

 
const handlerelatedProduct = (productID) => {
    console.log("productIdddddd-->", productID)
    
      fetchRelatedProductApi(productID); // Dispatch the thunk
   
  };

  

  return (
    <div className="font-sans font-medium">
      <div className=" bg-white p-2 px-4   w-full Largest:w-[60%] ">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center">
            {/* <div className="flex flex-col w-36">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div> */}
            <div className="flex flex-col mr-5">
              <label className="font-semibold">
                Category Specification:
                <span className="text-red-600">*</span>
              </label>
              <select
                className="w-52 h-8  pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.categorySpecification}
                name="categorySpecification"
              >
                <option value="">Select a category</option>
                <option value="1"> Prescription Drug</option>
                <option value="2">OTC Product</option>
                <option value="3">General Merchandise</option>
              </select>
            </div>
            <div className="flex flex-col mr-7">
              <label className="font-semibold">
                Product Category:
                <span className="text-red-600">*</span>
              </label>
              <select
                name="productCategory"
                className="w-56 h-8 pl-1 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.productCategory}
              >
                <option value="">Select a product category</option>
                <option value="1">Default Category</option>
                <option value="2">Electronics</option>
              </select>
            </div>
            <div className="flex flex-col mr-6 ">
              <label className="text-sm font-semibold">Manufacturer:</label>
              <input
                name="manufacturer"
                type="text"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.manufacturer}
              />
            </div>
            <div className="font-semibold  ml-0 flex flex-col">
              <label>
                Brand Name:<span className="text-red-600">*</span>
              </label>
              <input
                name="brandName"
                type="text"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.brandName}
              />
            </div>
          </div>

          <div className="flex justify-between items-center my-2">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Expiration Date:</label>
              <input
                name="expirationDate"
                type="Date"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.expirationDate}
              />
            </div>
            <div className="font-semibold flex flex-col ">
              <label>
                NDC / UPC:<span className="text-red-600">*</span>
              </label>
              <input
                name="ndcUpc"
                type="text"
                className="w-56 h-8 pl-1 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.ndcUpc}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-sm font-semibold">
                Sale Price Form ($):
              </label>
              <input
                name="salePriceForm"
                type="Date"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.salePriceForm}
              />
            </div>

            <div className="flex flex-col ">
              <label className="text-sm font-semibold">Sale Price To($):</label>
              <input
                name="salePriceTo"
                type="Date"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.salePriceTo}
              />
            </div>
          </div>
        </div>
        <div className="flex  justify-between ">
          <div className="font-semibold flex flex-col mr-6">
            <label>
              Product Name:<span className="text-red-600">*</span>
            </label>
            <input
              name="productName"
              type="text"
              className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
              onChange={handleInputChange}
              value={formData.productName}
            />
          </div>
          {/* <div className="my-4 flex">
            <button className="bg-blue-900 text-white p-2 mx-2 border rounded-md">
              APPLY FILTER
            </button>
            <button
              onClick={handleCriteria}
              className="bg-blue-900 p-2 mx-1 text-white border rounded-md"
            >
              {" "}
              RESET
            </button>
          </div> */}
          <div className="my-4 flex">
            <button
              onClick={handleCriteria}
              className="bg-blue-900 text-white p-2 mx-2 border rounded-md"
            >
              APPLY FILTER
            </button>
            <button
              // onClick={() => setFormData(initialFormState)}
              className="bg-blue-900 p-2 mx-1 text-white border rounded-md"
            >
              RESET
            </button>
          </div>
        </div>
      </div>

      <div className={`${loading==true?"hidden":"false"}`}>
        <div className="my-6 border w-full Largest:w-[60%] rounded-md bg-white ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b font-semibold">
                {/* <th className=" p-4  text-left text-sm  w-32">
                        <select className="text-black">
                          <option>-</option>
                        </select>
                      </th> */}
                <th className=" p-2  text-left text-sm w-32">ID</th>
                <th className=" p-2  text-left text-sm w-40">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-32">Category</th>
                <th className=" p-2  text-left text-sm w-32">Status</th>
                <th className=" p-2  text-left text-sm bw-44">Type</th>
                <th className=" p-2  text-left text-sm  w-44">Price</th>
                <th className=" p-2   text-sm w-48">Action</th>
              </tr>
            </thead>
            <tbody>
              {productsByCriteria.map((product, index) => (
                <tr key={index} className="border-b">
                  {/* <td className=" p-2">
                          <input className=" h-6 w-4" type="checkbox" />
                        </td> */}
                  <td className="text-sm p-2"> {product.id}</td>
                  <td className="text-sm p-2">
                    <img src={product.productGallery.imageUrl} className="w-12 h-12"/></td>
                  <td className="text-sm p-2">{product.productName}</td>
                  <td className="text-sm p-2">{product.categorySpecification.specificationName}</td>
                  <td className="text-sm p-2">{product.status}</td>
                  <td className="text-sm p-2">{product.productCategory.categoryName}</td>
                  <td className="text-sm p-2">{product.salePrice}</td>
                  <td className="px-4 py-2 cursor-pointer flex items-center space-x-2">
                    <Tooltip title="Related Products" placement="top">
                      <img
                        src={related}
                        alt="related"
                        className="cursor-pointer w-6 h-6"
                        onClick={() => handleAddSelected(1,product.productID)}
                      />
                    </Tooltip>
                    <Tooltip title="Up-Sell Products" placement="top">
                      <img
                        src={upSell}
                        alt="upSell"
                        className="cursor-pointer w-6 h-5"
                        onClick={() => handleAddSelected(2,product.productID)}

                      />
                    </Tooltip>
                    <Tooltip title="Cross-Sell Products" placement="top">
                      <img
                        src={crossSell}
                        alt="crossSell"
                        className="cursor-pointer w-7 h-7"
                        onClick={() => handleAddSelected(3,product.productID)}

                      />
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Related Products </h1>
      <div className="flex  justify-between w-full Largest:w-[60%]">
        <p>
          Related products are shown to customers in addition to the item the
          customer is looking at.{" "}
        </p>
        <button
          className={`  text-base font-medium p-2 rounded-md  h-8 flex items-center  ${
            buttonClick ? "bg-white text-blue-900" : "bg-blue-900 text-white"
          }`}
          onClick={handleRelatedFilter}
        >
          <img src={filter} className="w-6 h-3 px-1" />
          Filter
        </button>
      </div>
      {isRelatedFiltervisible && (
        <div className=" bg-white p-2 px-4   w-full Largest:w-[60%] ">
          <div className="flex justify-between">
            <div className="flex flex-col w-36">
              <label>Id From</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>to</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>Price From</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>to</label>
              <input className="border rounded-sm" />
            </div>

            <div className="flex flex-col w-36">
              <label>Name</label>
              <input className="border rounded-sm" />
            </div>
          </div>

          <div className="flex justify-between my-2">
            <div className="flex flex-col w-36">
              <label>Status</label>
              <select className="border rounded-sm">
                <option></option>
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label> Attribute Set</label>
              <select className="border rounded-sm">
                <option></option>
                <option>Merchandise</option>
                <option>OTC Product</option>
                <option>Rx Product</option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label>Type</label>
              <select className="border rounded-sm w-">
                <option></option>
                <option>Simple Product</option>
                <option>Virtual Product</option>
                <option>Configurable Product</option>
                <option>Downloadable Product</option>
                <option>Grouped Product</option>
                <option>Bundle Product</option>
                <option>Quote </option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label>SKU</label>
              <input className="border rounded-sm" />
            </div>

            <div className="my-4 flex">
              <button
                onClick={handleCancelRelated}
                className="bg-blue-900 p-2 mx-1 text-white border rounded-md"
              >
                {" "}
                Cancel
              </button>
              <button className="bg-blue-900 text-white p-2 mx-2 border rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* section start */}
      <div>
        <div className="my-6 border w-full Largest:w-[60%] rounded-md bg-white ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b font-semibold">
                <th className=" p-4  text-left text-sm  w-32">
                  <select className="text-black">
                    <option>-</option>
                  </select>
                </th>
                <th className=" p-2  text-left text-sm w-32">ID</th>
                <th className=" p-2  text-left text-sm w-40">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-48">Category</th>
                <th className=" p-2  text-left text-sm w-32">Status</th>
                <th className=" p-2  text-left text-sm bw-44">Type</th>
                <th className=" p-2  text-left text-sm  w-44">Price</th>
                <th className=" p-2  text-left text-sm  w-44">Action</th>
              </tr>
            </thead>
            <tbody>
              {relatedProducts.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2">
                    <input className=" h-6 w-4" type="checkbox" />
                  </td>
                  <td className="text-sm p-2"> {product.productID}</td>
                  <td className="text-sm p-2">
                    <img src={product.productGallery.imageUrl} className="w-7 h-7"/></td>
                  <td className="text-sm p-2">{product.productName}</td>
                  <td className="text-sm p-2">{product.categorySpecification.specificationName}</td>
                  <td className="text-sm p-2">{product.status}</td>
                  <td className="text-sm p-2">{product.productCategory.categoryName}</td>
                  <td className="text-sm p-2">{product.salePrice}</td>
                  <td className="px-4 py-2 cursor-pointer">
                  <Tooltip title="Delete" placement="top">
                      <img
                        src={Bin}
                        alt="Delete"
                        className="cursor-pointer w-7 h-7"
                        onClick={() => handleRelatedDelete()}

                      />
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="font-sans font-medium">
        <h1 className="text-2xl font-semibold">Up-Sell Products </h1>
        <div className="flex  justify-between w-full Largest:w-[60%]">
          <p>
            An up-sell item is offered to the customer as a pricier or
            higher-quality alternative to the product the customer is looking
            at.
          </p>
          <button
            className={`  text-base font-medium p-2 rounded-md  h-8 flex  items-center justify-end ${
              ButtonUpClick
                ? "bg-white text-blue-900"
                : "bg-blue-900 text-white"
            }`}
            onClick={handleUpsellFilter}
          >
            {" "}
            <img src={filter} className="w-6 h-3 px-1" />
            Filter
          </button>
        </div>
        {isUpsellFilterVisible && (
          <div className=" bg-white p-2 px-5   w-full Largest:w-[60%]">
            <div className="flex justify-between">
              <div className="flex flex-col w-36">
                <label>Id From</label>
                <input className="border rounded-sm" />
              </div>
              <div className="flex flex-col w-36">
                <label>to</label>
                <input className="border rounded-sm" />
              </div>
              <div className="flex flex-col w-36">
                <label>Price From</label>
                <input className="border rounded-sm" />
              </div>
              <div className="flex flex-col w-36">
                <label>to</label>
                <input className="border rounded-sm" />
              </div>

              <div className="flex flex-col w-36">
                <label>Name</label>
                <input className="border rounded-sm" />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col w-36">
                <label>Status</label>
                <select className="border rounded-sm">
                  <option></option>
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>

              <div className="flex flex-col w-36">
                <label> Attribute Set</label>
                <select className="border rounded-sm">
                  <option></option>
                  <option>Merchandise</option>
                  <option>OTC Product</option>
                  <option>Rx Product</option>
                </select>
              </div>

              <div className="flex flex-col w-36">
                <label>Type</label>
                <select className="border rounded-sm w-">
                  <option></option>
                  <option>Simple Product</option>
                  <option>Virtual Product</option>
                  <option>Configurable Product</option>
                  <option>Downloadable Product</option>
                  <option>Grouped Product</option>
                  <option>Bundle Product</option>
                  <option>Quote </option>
                </select>
              </div>

              <div className="flex flex-col w-36">
                <label>SKU</label>
                <input className="border rounded-sm" />
              </div>

              <div className="my-4 flex justify-end">
                <button
                  onClick={handleCancelUpsell}
                  className="bg-blue-900 p-2 mx-2 text-white border rounded-md"
                >
                  {" "}
                  Cancel
                </button>
                <button className="bg-blue-900 text-white p-2 mx-1 border rounded-md">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="my-6 border rounded-md bg-white w-full Largest:w-[60%] ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white  ">
              <tr className="border-b font-semibold">
                <th className=" p-4  text-left text-sm  w-32">
                  <select className="text-black">
                    <option>-</option>
                  </select>
                </th>
                <th className=" p-2  text-left text-sm w-32">ID</th>
                <th className=" p-2  text-left text-sm w-40">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-48">Category</th>
                <th className=" p-2  text-left text-sm w-32">Status</th>
                <th className=" p-2 text-left text-sm bw-44">Type</th>
                <th className=" p-2  text-left text-sm  w-44">Price</th>
                <th className=" p-2  text-left text-sm  w-44">Action</th>
              </tr>
            </thead>
            <tbody>
              {UpSellProducts.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2">
                    <input className=" h-6 w-4" type="checkbox" />
                  </td>
                  <td className="text-sm p-2"> {product.productID}</td>
                  <td className="text-sm p-2">
                    <img src={product.productGallery.imageUrl} className="w-7 h-7"/></td>
                  <td className="text-sm p-2">{product.productName}</td>
                  <td className="text-sm p-2">{product.categorySpecification.specificationName}</td>
                  <td className="text-sm p-2">{product.status}</td>
                  <td className="text-sm p-2">{product.productCategory.categoryName}</td>
                  <td className="text-sm p-2">{product.salePrice}</td>
                  <td className="px-4 py-2 cursor-pointer">
                  <Tooltip title="Delete" placement="top">
                      <img
                        src={Bin}
                        alt="Delete"
                        className="cursor-pointer w-7 h-7"
                        onClick={() => handleRelatedDelete()}

                      />
                    </Tooltip></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* section start */}
      <h1 className="text-2xl font-semibold">Cross-Sell Products </h1>
      <div className="flex justify-between w-full Largest:w-[60%]">
        <p>
          These "impulse-buy" products appear next to the shopping cart as
          cross-sells to the items already in the shopping cart.
        </p>
        <button
          className={` text-base font-medium  p-2 rounded-md  h-8 flex items-center ${
            isButtonClicked
              ? "bg-white text-blue-900"
              : "bg-blue-900 text-white"
          }`}
          onClick={handleCrossSellFilter}
        >
          <img src={filter} className="w-6 h-3 px-1" />
          Filter
        </button>
      </div>
      {isCrossSellFiltervisible && (
        <div className=" bg-white p-2 px-5  w-full Largest:w-[60%] ">
          <div className="flex justify-between">
            <div className="flex flex-col w-36">
              <label>Id From</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>to</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>Price From</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>to</label>
              <input className="border rounded-sm" />
            </div>

            <div className="flex flex-col w-36">
              <label>Name</label>
              <input className="border rounded-sm" />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col w-36">
              <label>Status</label>
              <select className="border rounded-sm">
                <option></option>
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label> Attribute Set</label>
              <select className="border rounded-sm">
                <option></option>
                <option>Merchandise</option>
                <option>OTC Product</option>
                <option>Rx Product</option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label>Type</label>
              <select className="border rounded-sm w-">
                <option></option>
                <option>Simple Product</option>
                <option>Virtual Product</option>
                <option>Configurable Product</option>
                <option>Downloadable Product</option>
                <option>Grouped Product</option>
                <option>Bundle Product</option>
                <option>Quote </option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label>SKU</label>
              <input className="border rounded-sm" />
            </div>
            <div className="my-4 flex justify-end">
              <button
                onClick={handleCrossSellCancel}
                className="bg-blue-900 p-2 mx-2 text-white border rounded-md"
              >
                {" "}
                Cancel
              </button>
              <button className="bg-blue-900 text-white p-2 mx-1 border rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="my-6 border rounded-md bg-white w-full Largest:w-[60%]">
        <table className="w-full">
          <thead className="bg-blue-900 text-white  ">
            <tr className="border-b font-semibold">
              <th className=" p-4  text-left text-sm   w-32">
                <select className="text-black">
                  <option>-</option>
                </select>
              </th>
              <th className=" p-2  text-left text-sm w-32">ID</th>
              <th className="p-2  text-left text-sm  w-40">Thumbnail</th>
              <th className=" p-2  text-left text-sm w-80">Name</th>
              <th className=" p-2  text-left text-sm w-48 ">Category</th>
              <th className=" p-2  text-left text-sm w-32">Status</th>
              <th className=" p-2 text-left text-sm w-44">Type</th>
              <th className=" p-2  text-left text-sm w-44">Price</th>
              <th className=" p-2 text-left text-sm w-32">Action</th>
            </tr>
          </thead>
          <tbody>
            {CrossSellProducts.map((product, index) => (
              <tr key={index} className="border-b">
                <td className=" p-2">
                  <input className=" h-6 w-4" type="checkbox" />
                </td>
                <td className="text-sm p-2"> {product.productID}</td>
                <td className="text-sm p-2"><img src={product.productGallery.imageUrl} className="w-7 h-8"/></td>
                <td className="text-sm p-2">{product.productName}</td>
                <td className="text-sm p-2">{product.categorySpecification.specificationName}</td>
                <td className="text-sm p-2">{product.status}</td>
                <td className="text-sm p-2">{product.productCategory.categoryName}</td>
                <td className="text-sm p-2">{product.salePrice}</td>
                <td className="px-4 py-2 cursor-pointer">
                  <Tooltip title="Delete" placement="top">
                      <img
                        src={Bin}
                        alt="Delete"
                        className="cursor-pointer w-7 h-7"
                        onClick={() => handleRelatedDelete()}

                      />
                    </Tooltip></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* section end */}
    </div>
     
  );
};

export default LayoutRelatedProducts;
