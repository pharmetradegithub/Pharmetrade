import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Outlet, useNavigate } from "react-router-dom";
import Footers from "../../Footers";
import {
  fetchAllProductsApi,
  fetchOtcProductsApi,
  fetchRecentSoldProductsApi,
  fetchRxProductsApi,
} from "../../../Api/ProductApi";
import { useSelector } from "react-redux";
import { fetchAllBannersApi } from "../../../Api/BannerApi";
import { LoadingApi } from "../../../Api/HomeStaticApi";
import { getUserByCustomerIdApi } from "../../../Api/UserApi";
import { getCartItemsApi } from "../../../Api/CartApi";
import { fetchWishlistItemsApi } from "../../../Api/WishList";

const HomeLayout = ({ topDivRef, cartItems, topMargin }) => {
  // const userId = localStorage.getItem("userId");
  // useEffect(() => {
  //   const LoadAll = async (userId) => {
  //     LoadingApi(true);
  //     if(userId)
  //     {
  //       await getUserByCustomerIdApi(userId);
  //       await getCartItemsApi(userId);
  //       await fetchWishlistItemsApi(userId);
  //     }

  //     await fetchAllBannersApi();
  //     await fetchRecentSoldProductsApi(10);
  //     await fetchOtcProductsApi();
  //     await fetchRxProductsApi();
  //     await fetchAllProductsApi();
  //     LoadingApi(false);
  //   };
    
  //   const token = localStorage.getItem("token");
  //   LoadAll(userId);
  // }, [userId]);
  const [Criteria,setCriteria]= useState({
    deals: "string",
    brands: "string",
    generics: "string",
    discount: 0,
    expiring: 0,
    wholeSeller: "string",
    pharmacyItems: "string",
    prescriptionDrugs: "string",
    otcProducts: "string",
    vawdSeller: "string",
    topSellingProducts: "string",
    buyAgain: "string"
  })
  const navigate= useNavigate();
  const [productData,setproductData] = useState();
  const TriggerAPI = async (obj)=>{
      setCriteria(obj); 
      console.log(obj,"object criteria");

      // navigate('/products');
      
  }
  return (
    <div className="w-screen overflow-scroll ">
      <Nav topDivRef={topDivRef} TriggerAPI={TriggerAPI} />
      <div
        className="w-full flex justify-center mt-[122px]"      >
        <div className="Largest:w-[1550px]  Laptop:w-full  w-full ">
          <Outlet />
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default HomeLayout;
