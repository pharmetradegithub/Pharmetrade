
import axios from 'axios';
import store, { setAdmin } from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const GetCustomers = async (customerId = null, email = null, mobile = null) => {
  try {
    const response = await axios.get(`/api/Customer/GetCustomers`);
    if (response.status === 200) {
      return response.data.result;
    } else {
      console.error('Failed to fetch banners:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};

export const GetByAdminCriteriaAPI = async (obj) => {
  try {
    const response = await axios.post('/api/Customer/GetByCriteria', obj);
    if (response.status === 200) {
      console.log(response);
      return response.data.result;
    }
  } catch (error) {
    console.error('Error fetching banners:', error);

  }
}

export const fetchAdminLogin = (userId) => {
  return async (dispatch) => {
    try {
      const responseLogin = await axios.get(`/api/Dashboard/GetAdminDashboard?adminId=${userId}`)
      console.log('responseLogin-->', responseLogin)
      if (responseLogin.status === 200) {
        const response = responseLogin.data;
        dispatch(setAdmin(response))
      } else {
        console.error('Failed to fetch login:', responseLogin.data.message);
      }
    } catch (error) {
      console.error('Error fetching login:', error);
    }
  }
}
