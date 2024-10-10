import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Landing from "./Components/HomePage/LandingPage/Landing";
// import Login from "./Components/Login";
import Logo from "./assets/logo2.png";

import Nav from "./Components/HomePage/Layout/Nav";
import { NavbarProvider } from "./Components/NavbarContext";
import Product from "./Components/Product";
// import Products from "./Components/Products";
import Items from "./Components/Items";
import Signup from "./Components/Signup";
import OTP2 from "./Components/OTP2";
import Password from "./Components/Password";
import Changepassword from "./Components/Changepassword";
import Signin from "./Components/Signin";
import Checkout from "./Components/Checkout";
import Order from "./Components/Order";
import Wishlist from "./Components/Wishlist";
import ScrollToTop from "./Components/ScrollToTop";
import SellerNav from "./Components/Seller/Layout/SellerNav";
import SellerPanel from "./Components/Seller/Layout/SellerPanel";
import Sidebar from "./Components/Seller/Layout/SideBar";
import Settings from "./Components/Seller/Settings/Settings";
import Payouts from "./Components/Seller/Payouts/Payouts";
import AccountPanel from "./Components/UserAccount/Layout/AccountPanel";
import MyAccount from "./Components/UserAccount/MyAccount/MyAccount";
import MyOrders from "./Components/UserAccount/MyOrders/MyOrders";
import OrderHistory from "./Components/OrderHistory";
import UpsShipping from "./Components/Seller/Settings/UpsShipping";
import FedexShipping from "./Components/Seller/Settings/FedexShipping";
import ShippingSetting from "./Components/Seller/Settings/ShippingSetting";
import ManageShipping from "./Components/Seller/Settings/ManageShipping";
import AddProducts from "./Components/Seller/Dashboard/AddProducts";
import Orders from "./Components/Seller/Dashboard/Orders";
import Dashboard from "./Components/Seller/Dashboard/Dashboard";
import Customers from "./Components/Seller/Dashboard/Customers";
import Earnings from "./Components/Seller/Earnings/Earnings";
import Review from "./Components/Seller/Review/Review";
import Return from "./Components/Seller/Returns/Return";
import AssignProduct from "./Components/Seller/AssignProducts/AssignProduct";
import AssignProductList from "./Components/Seller/AssignProductList/AssignProductList";
import RequestQuote from "./Components/Seller/RequestQuote/RequestQuote";
import QuotedProducts from "./Components/Seller/RequestQuote/QuotedProducts";
import ProductFields from "./Components/Seller/Components/ProductFields";
import HomeLayout from "./Components/HomePage/Layout/HomeLayout";
import DownloadProduct from "./Components/UserAccount/DownloadProduct/DownloadProduct";
import Addressbook from "./Components/UserAccount/AddressBook/Addressbook";
import AccountInfo from "./Components/UserAccount/AccountInfo/AccountInfo";
import StoredPayment from "./Components/UserAccount/StoredPayment/StoredPayment";
import ProductReview from "./Components/UserAccount/ProductReview/ProductReview";
import Newsletter from "./Components/UserAccount/Newsletter/Newsletter";
import DeleteAccount from "./Components/UserAccount/DeleteAccount/DeleteAccount";
import SavedLater from "./Components/UserAccount/SavedForLater/SavedLater";
import MyReturn from "./Components/UserAccount/MyReturn/MyReturn";
import MyWishlist from "./Components/UserAccount/MyWishlist/MyWishlist";
import MyRequestedQuote from "./Components/UserAccount/MyRequestedQuote/MyRequestedQuote";
import Bid from "./Components/Bid";
import Buy from "./Components/Buy";
import WhyPharma from "./Components/HomePage/NavLinks/WhyPharma";
import AboutUs from "./Components/HomePage/NavLinks/AboutUs";
import Contactus from "./Components/HomePage/NavLinks/Contactus";
import TermsAndConditions from "./Components/TermsAndConditions";
import AddXlSheet from "./Components/Seller/Dashboard/Products/AddXlSheet";
import RequestDemo from "./Components/HomePage/NavLinks/RequestDemo";
import Offers from "./Components/Offers";
import AdminPanel from "./Components/Admin/Layouts/AdminPanel";
import AdminDasboard from "./Components/Admin/Dashboard/AdminDasboard";
import Faqs from "./Components/Faqs";
import LayoutPanel from "./Components/LayoutPage/LayoutStatic/LayoutPanel";
import LayoutDashboard from "./Components/LayoutPage/LayoutDashboard/LayoutDashboard";
import LayoutSellerDashboard from "./Components/LayoutPage/LayoutDashboard/LayoutSellerDashboard";
import LayoutCustomerDashboard from "./Components/LayoutPage/LayoutDashboard/LayoutCustomerDashboard";
import LayoutBuy from "./Components/LayoutPage/LayoutBuy/LayoutBuyProducts";
import LayoutBid from "./Components/LayoutPage/LayoutBid/LayoutBid";
import LayoutJoin from "./Components/LayoutPage/LayoutJoin/LayoutJoin";
import LayoutSell from "./Components/LayoutPage/LayoutSell/LayoutSell";
import LayoutWishlist from "./Components/LayoutPage/LayoutBuy/LayoutWishlist";
import LayoutOrderlist from "./Components/LayoutPage/LayoutBuy/LayoutOrderlist";
// import LayoutReturn from "./Components/LayoutPage/LayoutBuy/LayoutReturn";
import LayoutSidebar from "./Components/LayoutPage/LayoutStatic/LayoutSidebar";
import LayoutaddProduct from "./Components/LayoutPage/LayoutSell/LayoutaddProduct";
import LayoutSellOrders from "./Components/LayoutPage/LayoutSell/LayoutSellOrders";
import LayoutCustomers from "./Components/LayoutPage/LayoutSell/LayoutCustomers";
import EditFields from "./Components/Seller/Components/EditFields";
import LayoutPayouts from "./Components/LayoutPage/LayoutSell/LayoutPaymentHistory";
import LayoutEarnings from "./Components/LayoutPage/LayoutSell/LayoutEarnings";
import LayoutReview from "./Components/LayoutPage/LayoutSell/LayoutShippingDetails";
import LayoutAssignProduct from "./Components/LayoutPage/LayoutSell/LayoutRequestForQuote";
import LayoutAssignProductList from "./Components/LayoutPage/LayoutSell/LayoutSalesHistory";
import LayoutAddBulkProduct from "./Components/LayoutPage/LayoutSell/LayoutAddBulkProduct";
import LayoutPostingProducts from "./Components/LayoutPage/LayoutSell/LayoutProducts/LayoutPostingProducts";
import LayoutSalesHistory from "./Components/LayoutPage/LayoutSell/LayoutSalesHistory";
import LayoutShippingDetails from "./Components/LayoutPage/LayoutSell/LayoutShippingDetails";
import LayoutRequestForQuote from "./Components/LayoutPage/LayoutSell/LayoutRequestForQuote";
import LayoutSellReturn from "./Components/LayoutPage/LayoutSell/LayoutSellReturn";
import LayoutEditProduct from "./Components/LayoutPage/LayoutSell/LayoutProducts/LayouEditProduct";
import LayoutUpsShipping from "./Components/LayoutPage/LayoutSell/LayoutUpsShipping";
import LayoutFedexshipping from "./Components/LayoutPage/LayoutSell/LayoutFedexshipping";
import LayoutAllQuotesProducts from "./Components/LayoutPage/LayoutSell/LayoutAllQuotesProducts";
import LayoutAllrequestedQuote from "./Components/LayoutPage/LayoutSell/LayoutAllrequestedQuote";
import LayoutSetting from "./Components/LayoutPage/LayoutSetting/LayoutSetting";
import LayoutPaymentHistory from "./Components/LayoutPage/LayoutSell/LayoutPaymentHistory";
import { useSelector } from "react-redux";
import { getUserByCustomerIdApi, UserMenuItemsApi } from "./Api/UserApi";
import { getCartItemsApi } from "./Api/CartApi";
import { fetchWishlistItemsApi } from "./Api/WishList";
import { LoadingApi, TopMarginApi } from "./Api/HomeStaticApi";
import { fetchAllBannersApi } from "./Api/BannerApi";
import {
  fetchAllProductsApi,
  fetchOtcProductsApi,
  fetchRecentSoldProductsApi,
  fetchRxProductsApi,
} from "./Api/ProductApi";
import ProductsPanel from "./Components/HomeProducts/Layout/ProductsPanel";
import AllProducts from "./Components/HomeProducts/Components/AllProducts";
import OtcProducts from "./Components/HomeProducts/Components/OtcProducts";
import RxProducts from "./Components/HomeProducts/Components/RxProducts";
import Address from "./Components/CheckoutPage/Address";
import LayoutOtcProducts from "./Components/LayoutPage/LayoutNavComponents/LayoutOtcProducts";
import Gethelphere from "./Components/Gethelphere";
import CategoryProducts from "./Components/HomeProducts/Components/CategoryProducts";
import LayoutCategory from "./Components/LayoutPage/LayoutCategory/LayoutCategory";
import LayoutProfile from "./Components/LayoutPage/LayoutProfile/LayoutProfile";
// import AdminBanners from './Components/Admin/Banners/AdminBanners'
import AdminBanners from "./Components/Admin/Banners/AdminBanners";
import Login from "./Components/Login";
import OffersProducts from "./Components/HomeProducts/Components/OffersProducts";
import Customer from "./Components/Admin/Customer/CustomerList";
import CustomerList from "./Components/Admin/Customer/CustomerList";
import SellerList from "./Components/Admin/RetailSeller/SellerList";
import LayoutBuyerUpcomingGrid from "./Components/LayoutPage/LayoutDashboard/LayoutBuyerUpcomingGrid";
import LayoutBuyerReceiversgrid from "./Components/LayoutPage/LayoutDashboard/LayoutBuyerReceiversgrid";
import LayoutBuyerCancelledgrid from "./Components/LayoutPage/LayoutDashboard/LayoutBuyerCancelledgrid";
import Products from "./Components/Admin/Products/TotalProducts";
import Settlement from "./Components/Admin/Components/Settlement";
import Incomimg from "./Components/Admin/Components/Incomimg";
import Outgoing from "./Components/Admin/Components/Outgoing";
import OtcProductsAdmin from "./Components/Admin/Products/OtcProductsAdmin";
import RxProductsAdmin from "./Components/Admin/Products/RxProductsAdmin";
import OfferedProductsAdmin from "./Components/Admin/Products/OfferedProductsAdmin";
import EditProductAdmin from "./Components/Admin/Products/EditProductAdmin";
import EditSellerList from "./Components/Admin/RetailSeller/EditSellerList";
import GeneralMerchandiseSeller from "./Components/Admin/GeneralMerchandiseSeller/GeneralMerchandiseSeller";
import PharmacyDistributor from "./Components/Admin/PharmacyDistributor/PharmacyDistributor";

// import { customerOrderGetApi } from "./Api/CustomerOrderList";

function App() {
  const location1 = useLocation();
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.home.loading);
  const userId = localStorage.getItem("userId");

  const topMargin = useSelector((state) => state.home.TopMargin);
  const topDivRef = useRef(null);

  useEffect(() => {
    const LoadAll = async (userId) => {
      LoadingApi(true);
      if (userId) {
        const userDetails = await getUserByCustomerIdApi(userId);
        await UserMenuItemsApi(userDetails.customerDetails.customerTypeId);
        await getCartItemsApi(userId);
        await fetchWishlistItemsApi(userId);
      }
      await fetchAllBannersApi();
      await fetchRecentSoldProductsApi(10);
      await fetchOtcProductsApi();
      await fetchRxProductsApi();
      await fetchAllProductsApi();
      TopMarginApi(topDivRef?.current?.offsetHeight);
      LoadingApi(false);
    };

    const token = localStorage.getItem("token");
    LoadAll(userId);
  }, [userId]);
  useEffect(() => {
    // console.log("Scrolling at top");
    window.scrollTo(0, 0);
  }, [location1.pathname]);
  const [wishItems, setWishItems] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [productsList, setProductsList] = useState([]);
  // Ref for the top fixed div

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  function addCart(prolist) {
    setCartItems([...cartItems, prolist]);
  }

  function wishList(prolist) {
    setWishItems([...wishItems, prolist]);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/GetAll"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (Array.isArray(data.result)) {
          setProductsList(data.result);
          setQuantities(data.result.map(() => 1)); // Set initial quantity to 1 for all products
        } else {
          setProductsList([]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <NavbarProvider>
      {/* {!excludePatterns.test(location.pathname) && (
        <Nav topDivRef={topDivRef} cartItems={cartItems} />
      )} */}
      <div
        className={`w-screen ${loading == false ? "hidden" : "flex"
          } flex flex-col justify-center items-center z-[100] bg-slate-200 absolute h-screen`}
      >
        <div className="animate-pulse flex justify-center items-center flex-col">
          <img src={Logo} alt="" />
        </div>
      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/PharmetradeLogin" element={<Login />} />
        <Route path="/otp2" element={<OTP2 />} />
        <Route path="/password" element={<Password />} />
        <Route path="/changepassword" element={<Changepassword />} />

        <Route
          element={
            <HomeLayout
              topMargin={topMargin}
              topDivRef={topDivRef}
              cartItems={cartItems}
            />
          }
        >
          <Route path="/allProducts" element={<ProductsPanel />}>
            <Route path="" element={<AllProducts />} />
            <Route path="/allProducts/OtcProducts" element={<OtcProducts />} />
            <Route path="offers" element={<OffersProducts />} />

            <Route path="/allProducts/RxProducts" element={<RxProducts />} />
            <Route
              path="/allProducts/CategoryProducts"
              element={<CategoryProducts />}
            />
          </Route>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          {/* <Route
            path="/products"
            element={<Products addCart={addCart} wishList={wishList} />}
          /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/order" element={<Order />} />
          <Route path="/pops" element={<Product />} />
          <Route
            path="/app"
            element={<Landing addCart={addCart} wishList={wishList} />}
          />
          <Route
            path="/"
            element={<Landing addCart={addCart} wishList={wishList} />}
          />
          <Route
            path="/detailspage/:id"
            element={<Items addCart={addCart} productList={productsList} />}
          />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/bid" element={<Bid />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/whypharmetrade" element={<WhyPharma />} />
          <Route path="/aboutus" element={<AboutUs />} />{" "}
          {/* <Route path="/contactus" element={<Contactus />} /> */}
          <Route path="/requestdemo" element={<RequestDemo />} />
          {/* <Route
            path="/offers"
            element={<Offers addCart={addCart} wishList={wishList} />}
          /> */}
          <Route path="/faqs" element={<Faqs />} />
          <Route
            path="/wishlist"
            element={
              <Wishlist wishItems={wishItems} setWishItems={setWishItems} />
            }
          />
        </Route>

        <Route path="/checkout" element={<Address />} />
        <Route path="/contactus" element={<Contactus />} />

        <Route path="/gethelphere" element={<Gethelphere />} />

        {/* <Route
          path="/allProducts"
          element={
            <ProductsPanel
              topDivRef={topDivRef}
              cartItems={cartItems}
              topMargin={topMargin}
            />
          }
        >
          <Route path="" element={<AllProducts />} />
          <Route path="/allProducts/OtcProducts" element={<OtcProducts />} />
          <Route path="/allProducts/RxProducts" element={<RxProducts />} />
          <Route path="offers" element={<OffersProducts />} />
          <Route
            path="/allProducts/CategoryProducts"
            element={<CategoryProducts />}
          />
        </Route> */}

        <Route path="/seller" element={<SellerPanel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="market-product-list" element={<AddProducts />} />
          <Route path="add-single-product" element={<ProductFields />} />
          <Route
            path="edit-single-product/:addproductID"
            element={<EditFields />}
          />
          <Route path="add-xl-sheet" element={<AddXlSheet />} />
          <Route path="customers" element={<Customers />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="review" element={<Review />} />
          <Route path="returns" element={<Return />} />
          <Route path="assign-products" element={<AssignProduct />} />
          <Route path="assign-product-list" element={<AssignProductList />} />
          <Route path="request-quote" element={<RequestQuote />} />
          <Route path="quoted-product" element={<QuotedProducts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="ups-shipping" element={<UpsShipping />} />
          <Route path="fedex-shipping" element={<FedexShipping />} />
          <Route path="shipping-settings" element={<ShippingSetting />} />
          <Route path="manage-shipping" element={<ManageShipping />} />
        </Route>

        <Route path="/layout" element={<LayoutPanel cartItems={cartItems} />}>
          <Route
            path="/layout"
            element={<LayoutDashboard addCart={addCart} wishList={wishList} />}
          />
          <Route path="/layout/layoutprofile" element={<LayoutProfile />} />
          <Route
            path="/layout/layoutsellerdashboard"
            element={<LayoutSellerDashboard />}
          />
          <Route
            path="/layout/layoutcustomerdashboard"
            element={<LayoutCustomerDashboard />}
          />

          <Route path="/layout/layoutbuyerupcominggrid" element={<LayoutBuyerUpcomingGrid />} />
          <Route path="/layout/layoutbuyerreceivedgrid" element={<LayoutBuyerReceiversgrid />} />
          <Route path="/layout/layoutbuyercancelledgrid" element={<LayoutBuyerCancelledgrid />} />
          <Route path="/layoutsell" element={<LayoutSell />} />
          <Route path="/layout/addproduct" element={<LayoutaddProduct />} />
          <Route
            path="/layout/addbulkproduct"
            element={<LayoutAddBulkProduct />}
          />

          <Route
            path="/layout/postingproducts"
            element={<LayoutPostingProducts />}
          />
          <Route
            path="/layout/layout-edit-single-product/:productID"
            element={<LayoutEditProduct />}
          />
          <Route path="/layout/sellorders" element={<LayoutSellOrders />} />
          <Route path="/layout/sellcustomers" element={<LayoutCustomers />} />
          <Route path="/layout/ups-shipping" element={<LayoutUpsShipping />} />
          <Route
            path="/layout/fedex-shipping"
            element={<LayoutFedexshipping />}
          />
          <Route
            path="/layout/requestedquote"
            element={<LayoutAllrequestedQuote />}
          />
          <Route
            path="/layout/quotedproducts"
            element={<LayoutAllQuotesProducts />}
          />
          <Route
            path="/layout/sellpaymenthistory"
            element={<LayoutPaymentHistory />}
          />
          <Route path="/layout/sellearnings" element={<LayoutEarnings />} />
          <Route
            path="/layout/sellreview"
            element={<LayoutShippingDetails />}
          />
          <Route path="/layout/sellreturn" element={<LayoutSellReturn />} />
          <Route
            path="/layout/sellassignproducts"
            element={<LayoutRequestForQuote />}
          />
          <Route path="/layout/saleshistory" element={<LayoutSalesHistory />} />
          <Route path="/layout/layoutsetting" element={<LayoutSetting />} />
          <Route
            path="/layout/layoutbuy"
            element={
              <LayoutBuy
                addCart={addCart}
                productList={productsList}
                quantities={quantities}
                setQuantities={setQuantities}
              />
            }
          />
          <Route path="/layout/layoutjoin" element={<Signup />} />
          <Route path="/layout/layoutbid" element={<LayoutBid />} />
          <Route
            path="/layout/layoutwishlist"
            element={
              <LayoutWishlist
                wishItems={wishItems}
                setWishItems={setWishItems}
                quantities={quantities}
                setQuantities={setQuantities}
              />
            }
          />
          <Route path="/layout/layoutorderlist" element={<LayoutOrderlist />} />
          {/* <Route path='/layout/layoutreturn' element={<LayoutReturn />} /> */}
          <Route path="/layoutsidebar" element={<LayoutSidebar />} />
          <Route
            path="/layout/layoutOtcProducts"
            element={<LayoutOtcProducts />}
          />
          <Route
            path="/layout/layoutCategoryProducts"
            element={<LayoutCategory />}
          />
        </Route>

        <Route path="/pharmEtradeadmin" element={<AdminPanel />}>
          <Route path="" element={<AdminDasboard />} />
          <Route
            path="/pharmEtradeadmin/AdminBanners"
            element={<AdminBanners />}
          />
          <Route path="/pharmEtradeadmin/customerList" element={<CustomerList />} />
          <Route path="/pharmEtradeadmin/RetailPharmacyList" element={<SellerList />} />
          <Route path="/pharmEtradeadmin/GeneralMerchandiseSellerList" element={<GeneralMerchandiseSeller/>} />
          <Route path="/pharmEtradeadmin/PharmacyDistributorList" element={<PharmacyDistributor />} />
          <Route path="/pharmEtradeadmin/products" element={<Products />} />
          <Route path="/pharmEtradeadmin/EditProductAdmin" element={<EditProductAdmin />} />
          <Route
            path="/pharmEtradeadmin/EditSellerList"
            element={<EditSellerList />}
          />
          <Route path="/pharmEtradeadmin/OtcProducts" element={<OtcProductsAdmin />} />
          <Route path="/pharmEtradeadmin/RxProducts" element={<RxProductsAdmin />} />
          <Route path="/pharmEtradeadmin/OfferedProducts" element={<OfferedProductsAdmin />} />
          <Route path="/pharmEtradeadmin/Settlement" element={<Settlement />} />
          <Route path="/pharmEtradeadmin/Incoming" element={<Incomimg />} />
          <Route path="/pharmEtradeadmin/Outgoing" element={<Outgoing />} />
        </Route>

        <Route element={<AccountPanel topMargin={topMargin} />}>
          <Route path="/user" element={<MyAccount />} />
          <Route path="/user/orders" element={<MyOrders />} />
          <Route path="/user/downloads" element={<DownloadProduct />} />
          <Route path="/user/address-book" element={<Addressbook />} />
          <Route path="/user/account-info" element={<AccountInfo />} />
          <Route path="/user/payment-methods" element={<StoredPayment />} />
          <Route path="/user/reviews" element={<ProductReview />} />
          <Route path="/user/newsletter" element={<Newsletter />} />
          {/* <Route path="/user/delete-account" element={<DeleteAccount/>} /> */}
          <Route path="/user/saved" element={<SavedLater />} />
          <Route path="/user/returns" element={<MyReturn />} />
          <Route path="/user/wishlist" element={<MyWishlist />} />
          <Route path="/user/quote" element={<MyRequestedQuote />} />
        </Route>
      </Routes>

      {/* <ScrollToTop/> */}
      {/* <Landing2 />
        <Sliders />
        <Footers /> */}
    </NavbarProvider>
  );
}

export default App;
