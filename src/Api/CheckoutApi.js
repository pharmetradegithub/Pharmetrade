
import axios, { Axios } from 'axios';
import store from '../Store/Store';


axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const fetchAddAddressApi = async (payLaodNewForm) => {
  try {
    const response = await axios.post('/api/Customer/Address/Add', payLaodNewForm,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    if (response.status === 200) {
      // return response.data.result[0].productID;
      store.dispatch({ type: 'ADD_ADDRESS/setAddress', payload: response.data.result });
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
}


// export const fetchGetAddressByIdApi = async () => {
//   try {
//     const response = await axios.get(`/api/Customer/Address/GetById?addressId=${}`);
//     if (response.status === 200) {
//       return response.data.result[0];
//     } else {
//       console.error('Failed to fetch product by ID:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Error fetching product by ID:', error);
//   }
// };
