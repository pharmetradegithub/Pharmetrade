
import axios from "axios"
import { setEarning } from "../Store/Store"

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/'

export const fetchEarningsAPi = (customerId) => {
  return async (dispatch) => {
    try {
      const earningResponse = await axios.get(`/api/Dashboard/Seller/Earnings?sellerId=${customerId}`)
      console.log("earning--->", earningResponse)
      if (earningResponse.status === 200) {
        const earningData = earningResponse.data
        dispatch(setEarning(earningData))
      }
    } catch (error) {
      console.log("error", error)
     }
  }
}