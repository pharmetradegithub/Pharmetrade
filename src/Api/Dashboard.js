import axios from "axios"
import {setCustomerDashboardId, setCustomerOrder, setSellCustomer, setSellerDashboardId, setTotalProductDashboard } from '../Store/Store'
axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const fetchSellerDashboard = (customerId) => {
  return async (dispatch) => {
    try {
      // console.log(`Fetching data for sellerId: ${customerId}`);
      const response = await axios.get(`/api/Dashboard/GetSellerDashboard?sellerId=${customerId}`);
      console.log('API Response:', response);
      if (response.status === 200) {
        const sellerData = response.data;
        // console.log('fetchSellerDashboard-->', sellerData);
        dispatch(setSellerDashboardId(sellerData));
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}

export const fetchCustomerDashboard = (customerId) => {
  return async (dispatch) => {
    try {
      console.log('Fetching data for customer dashboard');
      const response = await axios.get(`/api/Dashboard/GetBuyerDashboard?buyerId=${customerId}`)
      // console.log('API Response:', response);
      if (response.status === 200) {
        const customerData = response.data;
        dispatch(setCustomerDashboardId(customerData))
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}

export const fetchTotalProductDashboard = (customerId) => {
  return async (dispatch) => {
    try {
      console.log('Fetching data for total dashboard');
      const response = await axios.get(`/api/Orders/Seller/Products?vendorId=${customerId}`)
      console.log('API total Response -->', response);
      if (response.status === 200) {
        const ProductData = response.data.result;
        console.log("productTotal-->", ProductData)
        dispatch(setTotalProductDashboard(ProductData))
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}

export const fetchCustomerOrered = (customerId) => {
  return async (dispatch) => {
    try {
      console.log('Fetching data for total dashboard');
      const response = await axios.get(`/api/Orders/Seller/Customers?vendorId=${customerId}`)
      console.log('API total Response -->', response);
      if (response.status === 200) {
        const ProductData = response.data.result;
        console.log("customer-->", ProductData)
        dispatch(setCustomerOrder(ProductData))
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}


export const fetchSellCustomer = (customerId) => {
  return async (dispatch) => {
    try {
      // console.log('Fetching data for customer dashboard');
      const response = await axios.get(`/api/Orders/Seller/Customers?vendorId=${customerId}`)
      console.log('API sell customer Response:', response);
      if (response.status === 200) {
        const customerData = response.data;
        dispatch(setSellCustomer(customerData))
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}