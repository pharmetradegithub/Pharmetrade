import axios from "axios";
import { setAddAddress, setAddress } from "../Store/Store";

axios.defaults.baseURL = "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/"

// export const fetchGetByCustomerId = (customerId) => {
//   return async (dispatch) => {
//     try {
//       const customerID = await axios.get(`/api/Customer/Address/GetByCustomerId?customerId=${customerId}`)
//       console.log("customerAddress--->", customerID)
//       if (customerID.status === 200) {
//         const response = customerID.data,
//           dispatch(setAddress(response)); 
//       } else {
//         console.log("error address")
//       }
//     } catch(error) {
//       console.log("error", error)
//      }
//   }
// }

export const fetchGetByCustomerId = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Customer/Address/GetByCustomerId?customerId=${customerId}`);
      console.log("customerId",customerId)
      console.log(response, "reppppp")
      if (response.status === 200) {
        const getCustomerId = response.data.result;
        console.log('Dispatching get customerId action:', getCustomerId); // Log before dispatch
        dispatch(setAddress(getCustomerId)); // Dispatch action
      } else {
        console.error('Failed to get customerId  action:', response.data.message);
      }
    } catch (error) {
      console.error('Error get customerId  action:', error);
    }
  };
};
export const fetchAddAddress = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Customer/Address/Add', payload);
      console.log(response, "user---")
      if (response.status === 200) {
        const addAddress = response.data.result[0]
        dispatch(setAddAddress(addAddress))
      } else {
        console.error('Failed to add address action:', response.data.message);
      }
    } catch (error) {
      console.log("error", error)
    }
  }
}

export const fetchDeleteAddressApi = async (addressID) => {
  try {
    const response = await axios.post(`/api/Customer/Address/Delete?addressId=${addressID}`);
    if (response.status === 200) {
      return response.data.result;
    } else {
      console.error('Failed to fetch Address delete:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching Address delete:', error);

  }
}