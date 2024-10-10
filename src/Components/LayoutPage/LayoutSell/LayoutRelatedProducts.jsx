import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import related from "../../../assets/Related.png";
import upSell from "../../../assets/upSell.png";
import crossSell from "../../../assets/crossSell.png";
import filter from "../../../assets/Icons/filter_icon.png";
import next from "../../../assets/Next_icon.png";
import previous from "../../../assets/Previous_icon.png";
import Notification from "../../../Components/Notification";

import {
  AddCrossSellProductAPI,
  AddRelatedProductAPI,
  AddUpSellProductAPI,
  fetchCriteriaProductsApi,
  fetchCrossSellProductApi,
  fetchProductsBySellerApi,
  fetchUpsellProductApi,
  RemoveCrossSellProductAPI,
  RemoveRelatedProductAPI,
  RemoveUpsellProductAPI,
} from "../../../Api/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedProductApi } from "../../../Api/ProductApi";
import Bin from "../../../assets/trash.png";
import Pagination from "../../Pagination";

const LayoutRelatedProducts = () => {
  const [formData, setFormData] = useState({
    categorySpecification: 0,
    productCategory: 0,
    manufacturer: "",
    brandName: "",
    expirationDate: "",
    ndcUpc: "",
    salePriceForm: "",
    salePriceTo: "",
    productName: "",
  });

  const components = useSelector((state) => state.master.productCategoryGetAll);
  console.log("relatedproduct-->", components);
  const [buttonClick, setButtonClick] = useState(false);
  const [ButtonUpClick, setButtonUpClick] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isUpsellFilterVisible, setIsUpsellFilterVisible] = useState(false);
  const [isRelatedFiltervisible, setIsRelatedFiltervisible] = useState(false);
  const [isCrossSellFiltervisible, setCrossSellFilterVisible] = useState(false);
  const [product, setproduct] = useState(null);
  const productDetails = useSelector((state) => state.product.Products);

  const categorySpecificationGetAll = useSelector(
    (state) => state.master.setCategorySpecificationsGetAll
  );
  console.log("relatedcategory-->", categorySpecificationGetAll);

  const productsByCriteria = useSelector(
    (state) => state.product.productsByCriteria
  );

  const relatedProducts = useSelector((state) => state.product.RelatedProducts);
  const UpSellProducts = useSelector((state) => state.product.UpSellProducts);
  const CrossSellProducts = useSelector(
    (state) => state.product.CrossSellProducts
  );

  console.log(productsByCriteria, "gnn");
  const [loading, setloading] = useState(true);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  console.log(
    relatedProducts,
    UpSellProducts,
    CrossSellProducts,
    "related one"
  );
  // const relatedProducts = useSelector((state) => state.product)
  useEffect(() => {
    const fetchAll = async () => {
      const productId = localStorage.getItem("productId");
      const searchParams = new URLSearchParams(location.search);
      const queryProductId = searchParams.get("productId");
      fetchRelatedProductApi(
        queryProductId == null ? productId : queryProductId
      );
      fetchCrossSellProductApi(
        queryProductId == null ? productId : queryProductId
      );
      fetchUpsellProductApi(
        queryProductId == null ? productId : queryProductId
      );
    };
    fetchAll();
  }, []);

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

  const handleCrossSellCancel = () => {
    setCrossSellFilterVisible(false);
    setButtonClicked(false);
  };
  const handleAddSelected = async (index, toproductID) => {
    const productId = localStorage.getItem("productId");
    const searchParams = new URLSearchParams(location.search);
    const queryProductId = searchParams.get("productId");
    console.log(productId, toproductID, index);
    try {
      if (index == 1) {
        await AddRelatedProductAPI(
          queryProductId == null ? productId : queryProductId,
          toproductID
        );
        await fetchRelatedProductApi(
          queryProductId == null ? productId : queryProductId
        );
        // await AddRelatedProductAPI(toproductID,toproductID);
        // await fetchRelatedProductApi(toproductID);
      } else if (index == 2) {
        await AddUpSellProductAPI(
          queryProductId == null ? productId : queryProductId,
          toproductID
        );
        await fetchUpsellProductApi(
          queryProductId == null ? productId : queryProductId
        );
        // await AddUpSellProductAPI(toproductID,toproductID);
        // await fetchUpsellProductApi(toproductID);
      } else {
        await AddCrossSellProductAPI(
          queryProductId == null ? productId : queryProductId,
          toproductID
        );
        await fetchCrossSellProductApi(
          queryProductId == null ? productId : queryProductId
        );
        // await AddCrossSellProductAPI(toproductID,toproductID);
        // await fetchCrossSellProductApi(toproductID);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveSelectedProducts = async (index, toproductID) => {
    const productId = localStorage.getItem("productId");
    const searchParams = new URLSearchParams(location.search);
    const queryProductId = searchParams.get("productId");
    console.log(productId, toproductID, index);
    try {
      if (index == 1) {
        await RemoveRelatedProductAPI(
          queryProductId == null ? productId : queryProductId,
          toproductID
        );
        await fetchRelatedProductApi(
          queryProductId == null ? productId : queryProductId
        );
      } else if (index == 2) {
        await RemoveUpsellProductAPI(
          queryProductId == null ? productId : queryProductId,
          toproductID
        );
        await fetchUpsellProductApi(
          queryProductId == null ? productId : queryProductId
        );
      } else {
        await RemoveCrossSellProductAPI(
          queryProductId == null ? productId : queryProductId,
          toproductID
        );
        await fetchCrossSellProductApi(
          queryProductId == null ? productId : queryProductId
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const sellerId = localStorage.getItem("userId");

  const productsbySeller = useSelector(
    (state) => state.product.productsBySeller[sellerId]
  );
  const handleCriteria = async () => {
    const sellerId = localStorage.getItem("userId");
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
      vawdSeller: sellerId,
      topSellingProducts: false,
      buyAgain: false,
      productCategoryId: formData.productCategory,
      categorySpecificationId: formData.categorySpecification,
      ndcupc: formData.ndcUpc,
      productName: formData.productName,
    };
    setloading(true);
    await fetchCriteriaProductsApi(Criteria, "Apply Filter");
    await fetchProductsBySellerApi(sellerId);
    setCurrentPage(1);
    setloading(false);
  };

  // Handle input change for all form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Placeholder for reset functionality
  const handleReset = () => {
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

  // const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  // const [currentItems, setCurrentItems] = useState([]); // Holds the products to be displayed on the current page
  // const itemsPerPage = 5;
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  // const totalPages = Math.ceil(
  //   (productsByCriteria?.length || 0) / itemsPerPage
  // );

  // // Calculate the range of items to be displayed on the current page
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsByCriteria.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((productsByCriteria?.length || 0) / itemsPerPage);

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

  // Slice the products based on the current page and items per page
  // useEffect(() => {
  //   if (productsByCriteria) {
  //     setCurrentItems(
  //       productsByCriteria.slice(indexOfFirstItem, indexOfLastItem)
  //     );
  //   }
  // }, [productsByCriteria, currentPage]);

  // Handle page navigation
  // const handleNextPage = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  // const handlePreviousPage = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  return (
    <div className="font-sans font-medium">
      <Notification show={notification.show} message={notification.message} />
      <div className=" bg-white p-2 px-4   w-full Largest:w-[60%] ">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center">
            {/* <div className="flex flex-col w-36">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div> */}
            <div className="flex flex-col mr-5">
              <label className="font-semibold">Category Specification:</label>
              <select
                className="w-52 h-8  pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.categorySpecification}
                name="categorySpecification"
              >
                <option value="">Select a category</option>
                {categorySpecificationGetAll.map((item) => {
                  return (
                    <option value={item.categorySpecificationId}>
                      {item.specificationName}
                    </option>
                  );
                })}
                {/* <option value="1"> Prescription Drug</option>
                <option value="2">OTC Product</option>
                <option value="3">General Merchandise</option> */}
              </select>
            </div>
            <div className="flex flex-col mr-7">
              <label className="font-semibold">Product Category:</label>
              <select
                name="productCategory"
                className="w-56 h-8 pl-1 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.productCategory}
              >
                <option value="">Select a product category</option>
                {/* <option value="1">Default Category</option>
                <option value="2">Electronics</option> */}
                {components.map((items) => {
                  return (
                    <option value={items.productCategoryId}>
                      {items.categoryName}
                    </option>
                  );
                })}
                {/* <option value="1">Prescription Medications</option>
                <option value="2">Baby & Child Care Products</option>
                <option value="4">Health care products</option>
                <option value="5">Household Suppliers</option>
                <option value="6">Oral Care Products</option>
                <option value="7">Stationery & Gift Wrapping Supplies</option>
                <option value="8">Vision Products</option>
                <option value="9">Diet & Sports Nutrition</option>
                <option value="10">Vitamins, Minerals & Supplements</option>
                <option value="11">Personal Care products</option> */}
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
              <label>Brand Name:</label>
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
              <label>NDC / UPC:</label>
              <input
                name="ndcUpc"
                type="text"
                className="w-56 h-8 pl-1 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.ndcUpc}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-sm font-semibold">Sale Price From:</label>
              <input
                name="salePriceForm"
                type="Date"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.salePriceForm}
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
              />
            </div>

            <div className="flex flex-col ">
              <label className="text-sm font-semibold">Sale Price To:</label>
              <input
                name="salePriceTo"
                type="Date"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.salePriceTo}
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex  justify-between ">
          <div className="font-semibold flex flex-col mr-6">
            <label>Product Name:</label>
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
              onClick={() => handleReset()}
              className="bg-blue-900 p-2 mx-1 text-white border rounded-md"
            >
              RESET
            </button>
          </div>
        </div>
      </div>

      <div className={`${loading == true ? "hidden" : "false"}`}>
        <div className="my-6 border w-full Largest:w-[60%] rounded-md bg-white h-auto overflow-scroll">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b font-semibold">
                {/* <th className=" p-4  text-left text-sm  w-32">
                        <select className="text-black">
                          <option>-</option>
                        </select>
                      </th> */}
                <th className=" p-2  text-left text-sm w-32 ">ID</th>
                <th className=" p-2  text-left text-sm w-40">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-32">Category</th>
                <th className=" p-2  text-left text-sm w-32">Status</th>
                <th className=" p-2  text-left text-sm bw-44">Type</th>
                <th className=" p-2 text-right text-sm  w-44">Price</th>
                <th className=" p-2   text-sm w-48">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems && currentItems.length > 0 ? (
                currentItems.map((product, index) => (
                  <tr key={index} className="border-b">
                    {/* <td className=" p-2">
                <input className=" h-6 w-4" type="checkbox" />
              </td> */}
                    <td className="text-sm p-2 "> {index + 1}</td>
                    <td className="text-sm p-2">
                      <img
                        src={
                          product?.productGallery?.imageUrl ||
                          "placeholder-image-url"
                        }
                        className="w-12 h-12"
                      // alt={product?.productName || "No image"}
                      />
                    </td>
                    <td className="text-sm p-2">
                      {product?.productName || "No name"}
                    </td>
                    <td className="text-sm p-2">
                      {product?.categorySpecification?.specificationName ||
                        "No specification"}
                    </td>
                    <td className="text-sm p-2">
                      {product?.status || "No status"}
                    </td>
                    <td className="text-sm p-2">
                      {product?.productCategory?.categoryName || "No category"}
                    </td>
                    {/* <td className="text-sm p-2 text-right">
                      {product?.salePrice
                        ? `$${product.salePrice.toFixed(2)}`
                        : "No price"}
                    </td> */}
                    <td className="text-sm p-2 text-right">
                      $
                      {product?.salePrice > 0
                        ? product?.salePrice.toFixed(2)
                        : product?.unitPrice?.toFixed(2)}
                    </td>

                    <td className="px-4 py-2 cursor-pointer flex items-center space-x-2">
                      <Tooltip title="Add to Related Products" placement="top">
                        <img
                          src={related}
                          alt="related"
                          className="cursor-pointer w-6 h-6"
                          onClick={() => {
                            handleAddSelected(1, product?.productID);
                            setNotification({
                              show: true,
                              message: "Added to Related Product!",
                            });
                            setTimeout(
                              () =>
                                setNotification({ show: false, message: "" }),
                              3000
                            );
                          }}
                        />
                      </Tooltip>

                      <Tooltip title="Add to Up-Sell Products" placement="top">
                        <img
                          src={upSell}
                          alt="upSell"
                          className="cursor-pointer w-6 h-5"
                          onClick={() => {
                            handleAddSelected(2, product?.productID);
                            setNotification({
                              show: true,
                              message: "Added to Up-Sell Product!",
                            });
                            setTimeout(
                              () =>
                                setNotification({ show: false, message: "" }),
                              3000
                            );
                          }}
                        />
                      </Tooltip>

                      <Tooltip
                        title="Add to Cross-Sell Products"
                        placement="top"
                      >
                        <img
                          src={crossSell}
                          alt="crossSell"
                          className="cursor-pointer w-7 h-7"
                          onClick={() => {
                            handleAddSelected(3, product?.productID);
                            setNotification({
                              show: true,
                              message: "Added to Cross-Sell Product!",
                            });
                            setTimeout(
                              () =>
                                setNotification({ show: false, message: "" }),
                              3000
                            );
                          }}
                        />
                      </Tooltip>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center p-4">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={productsByCriteria}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        {/* <div className="flex justify-end my-2">
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
        </div> */}

      </div>
      <h1 className="text-2xl font-semibold">Related Products </h1>
      <div className="flex  justify-between w-full Largest:w-[60%]">
        <p>
          Related products are shown to customers in addition to the item the
          customer is looking at.{" "}
        </p>
      </div>

      {/* section start */}
      <div>
        <div className="my-6 border w-full Largest:w-[60%] rounded-md bg-white ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b font-semibold">
                <th className=" p-4  text-left text-sm  w-16">
                  <select className="text-black">
                    <option>-</option>
                  </select>
                </th>
                <th className=" p-2  text-left text-sm w-10">ID</th>
                <th className=" p-2  text-left text-sm w-24">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-48">Category</th>
                <th className=" p-2  text-left text-sm w-24">Status</th>
                <th className=" p-2  text-left text-sm w-52">Type</th>
                <th className=" p-2  text-right text-sm  w-24">Price</th>
                <th className=" p-2  text-left text-sm  w-24">Action</th>
              </tr>
            </thead>

            <tbody>
              {relatedProducts.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2">
                    <input className=" h-6 w-4" type="checkbox" />
                  </td>
                  <td className="text-sm p-2"> {index + 1}</td>
                  <td className="text-sm p-2">
                    <img
                      src={product.productGallery.imageUrl}
                      className="w-7 h-7"
                    />
                  </td>
                  <td className="text-sm p-2">{product.productName}</td>
                  <td className="text-sm p-2">
                    {product.categorySpecification.specificationName}
                  </td>
                  <td className="text-sm p-2">{product.status}</td>
                  <td className="text-sm p-2">
                    {product.productCategory.categoryName}
                  </td>
                  {/* <td className="text-sm p-2">
                    ${product.salePrice?.toFixed(2)}
                  </td> */}

                  <td className="text-sm p-2 text-right">
                    $
                    {product?.salePrice > 0
                      ? product?.salePrice.toFixed(2)
                      : product?.unitPrice?.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 cursor-pointer">
                    <Tooltip title="Delete" placement="top">
                      <img
                        src={Bin}
                        alt="Delete"
                        className="cursor-pointer w-7 h-7"
                        onClick={() =>
                          handleRemoveSelectedProducts(1, product?.productID)
                        }
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
        </div>

        <div className="my-6 border rounded-md bg-white w-full Largest:w-[60%] ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white  ">
              <tr className="border-b font-semibold">
                <th className=" p-4  text-left text-sm  w-16">
                  <select className="text-black">
                    <option>-</option>
                  </select>
                </th>
                <th className=" p-2  text-left text-sm w-10">ID</th>
                <th className=" p-2  text-left text-sm w-24">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-48">Category</th>
                <th className=" p-2  text-left text-sm w-24">Status</th>
                <th className=" p-2 text-left text-sm w-52">Type</th>
                <th className=" p-2  text-right text-sm  w-24">Price</th>
                <th className=" p-2 text-left text-sm w-24">Action</th>
              </tr>
            </thead>

            <tbody>
              {UpSellProducts.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2">
                    <input className=" h-6 w-4" type="checkbox" />
                  </td>
                  <td className="text-sm p-2"> {index + 1}</td>
                  <td className="text-sm p-2">
                    <img
                      src={product.productGallery.imageUrl}
                      className="w-7 h-7"
                    />
                  </td>
                  <td className="text-sm p-2">{product.productName}</td>
                  <td className="text-sm p-2">
                    {product.categorySpecification.specificationName}
                  </td>
                  <td className="text-sm p-2">{product.status}</td>
                  <td className="text-sm p-2">
                    {product.productCategory.categoryName}
                  </td>
                  {/* <td className="text-sm p-2">
                    ${product.salePrice?.toFixed(2)}
                  </td> */}
                  <td className="text-sm p-2 text-right">
                    ${product?.salePrice > 0
                      ? product?.salePrice.toFixed(2)
                      : product?.unitPrice?.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 cursor-pointer">
                    <Tooltip title="Delete" placement="top">
                      <img
                        src={Bin}
                        alt="Delete"
                        className="cursor-pointer w-7 h-7"
                        onClick={() =>
                          handleRemoveSelectedProducts(2, product?.productID)
                        }
                      />
                    </Tooltip>
                  </td>
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
      </div>

      <div className="my-6 border rounded-md bg-white w-full Largest:w-[60%]">
        <table className="w-full">
          <thead className="bg-blue-900 text-white  ">
            <tr className="border-b font-semibold">
              <th className=" p-4  text-left text-sm   w-16">
                <select className="text-black">
                  <option>-</option>
                </select>
              </th>
              <th className=" p-2  text-left text-sm w-10">ID</th>
              <th className="p-2  text-left text-sm  w-24">Thumbnail</th>
              <th className=" p-2  text-left text-sm w-80">Name</th>
              <th className=" p-2  text-left text-sm w-48 ">Category</th>
              <th className=" p-2  text-left text-sm w-24">Status</th>
              <th className=" p-2 text-left text-sm w-52">Type</th>
              <th className=" p-2 text-right text-sm w-24">Price</th>
              <th className=" p-2 text-left text-sm w-24">Action</th>
            </tr>
          </thead>

          <tbody>
            {CrossSellProducts.map((product, index) => (
              <tr key={index} className="border-b">
                <td className=" p-2">
                  <input className=" h-6 w-4" type="checkbox" />
                </td>
                <td className="text-sm p-2"> {index + 1}</td>
                <td className="text-sm p-2">
                  <img
                    src={product.productGallery.imageUrl}
                    className="w-7 h-8"
                  />
                </td>
                <td className="text-sm p-2">{product.productName}</td>
                <td className="text-sm p-2">
                  {product.categorySpecification.specificationName}
                </td>
                <td className="text-sm p-2">{product.status}</td>
                <td className="text-sm p-2">
                  {product.productCategory.categoryName}
                </td>
                {/* <td className="text-sm p-2 text-left">
                  {" "}
                  ${product.salePrice?.toFixed(2)}
                </td> */}
                <td className="text-sm p-2 text-right">
                  ${product?.salePrice > 0
                    ? product?.salePrice.toFixed(2)
                    : product?.unitPrice?.toFixed(2)}
                </td>
                <td className="px-4 py-2 cursor-pointer">
                  <Tooltip title="Delete" placement="top">
                    <img
                      src={Bin}
                      alt="Delete"
                      className="cursor-pointer w-7 h-7"
                      onClick={() =>
                        handleRemoveSelectedProducts(3, product?.productID)
                      }
                    />
                  </Tooltip>
                </td>
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
