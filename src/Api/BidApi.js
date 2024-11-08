import axios from './api'; 
import store, { setGetBidsBySeller } from "../Store/Store"


export const fetchCustomer = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Customer/GetByCustomerId?customerId=${customerId}`)
      if (response.data.result === 200) {
        const data = response.data.result
        dispatch(setBidCustomerDetails(data))
      }
    } catch (error) {
      console.error(error);
    }
  }
}
export const GetBidsBySeller = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Bid/GetBidsByBuyer?buyerId=${customerId}`);
      if (response.status === 200) {
        const data = response.data.result; // Adjust this based on your API structure
        dispatch(setGetBidsBySeller(data));
      } else {
        console.log("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  };
};


export const AddBidAPI = async (obj) => {
  try {
    const response = await axios.post(`/api/Bid/Add`, obj);
    if (response.status === 200 && response.data.result !== null) {
      return;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const fetchQuotedProduct = async (customerId) => {
  try {
    const response = await axios.get(`/api/Bid/GetProductsQuotedBySeller?sellerId=${customerId}`)
    if (response.status === 200 && response.data.result !== null) {
      store.dispatch({ type: 'bid/SetBidQuotedProduct', payload: response.data.result})
    } else {
      console.error('Failed to fetch bid data:', response.data.message);
    }

  } catch (error) {
    console.error('Failed to fetch bid data:', error.message);
  }
}