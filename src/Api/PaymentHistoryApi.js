import axios from './api'; 
import { setPaymentHistory } from "../Store/Store"

export const fetchPaymentHistory = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Orders/Seller/Payments?sellerId=${customerId}`)
      console.log("responsePayHis-->", response)
    if (response.status === 200) {
      const paymentHistoryData = response.data.result
      console.log("payment dispatch", paymentHistoryData)
      dispatch(setPaymentHistory(paymentHistoryData))
    } else {
      console.log("error from payment history")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchGetOrderBySellerId = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Orders/Seller/GetAll?vendorId=${customerId}`);
      if (response.status === 200) {
        const paymentHistoryData = response.data.result;
        console.log('Dispatching setSpecialOffer action:', paymentHistoryData); // Log before dispatch
        dispatch(setPaymentHistory(OrderBySellerId)); // Dispatch action
      } else {
        console.error('Failed to fetch order:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };
};