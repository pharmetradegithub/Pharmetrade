import axios from "axios";
import { setReturns } from "../Store/Store";


axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/'

export const fetchReturns = (customerId) => {
  return async (dispach) => {
    try {
      const returnsResponse = await axios.get(`/api/Dashboard/Seller/Returns?sellerId=${customerId}`) 
      if (returnsResponse.status === 200) {
        const returnsData = returnsResponse.data
        dispach(setReturns(returnsData))
      }
    } catch (error) {
      console.log("error", error)
    }
  }
}

