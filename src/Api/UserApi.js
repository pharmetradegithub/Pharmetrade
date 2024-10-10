import axios from 'axios';
import store from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const loginUserApi = async (username, password) => {
  try {
    const response = await axios.post(
      `/api/Customer/Login?UserName=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}`
    );

    if (response.status === 200) {

      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('token', response.data.token);
      const userDetails = await axios.get(`/api/Customer/GetByCustomerId?customerId=${response.data.userId}`);
      if (response.status === 200) {
        store.dispatch({ type: 'user/setUser', payload: userDetails.data.result[0] });
      } else {
        console.error('Failed to fetch user data:', response.data.message);
      }
      return response.data.userId;
    } else {
      console.error('Login failed:', response.data.message);
    }
  } catch (error) {
    console.error('Failed to log in:', error);
  }
};
export const loginAdminUserApi = async (username, password) => {
  try {
    const response = await axios.post(
      `/api/Customer/AdminLogin?adminId=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}`
    );

    if (response.status === 200) {

      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('token', response.data.token);
      const userDetails = await axios.get(`/api/Customer/GetByCustomerId?customerId=${response.data.userId}`);
      if (response.status === 200) {
        store.dispatch({ type: 'user/setUser', payload: userDetails.data.result[0] });
      } else {
        console.error('Failed to fetch user data:', response.data.message);
      }
      return response.data.userId;
    } else {
      console.error('Login failed:', response.data.message);
    }
  } catch (error) {
    console.error('Failed to log in:', error);
  }
};
export const getUserByCustomerIdApi = async (customerId) => {
  try {
    const response = await axios.get(`/api/Customer/GetByCustomerId?customerId=${customerId}`);
    if (response.status === 200) {

      store.dispatch({ type: 'user/setUser', payload: response.data.result[0] });
      return response.data.result[0];
    } else {
      console.error('Failed to fetch user data:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
export const UserMenuItemsApi = async(accountTypeId)=>{
  try {
   
    const response = await axios.get(`/api/Menu/GetByAccountType?CustomerTypeId=${accountTypeId}`);
    if (response.status === 200) {

      store.dispatch({ type: 'user/setMenuItems', payload: response.data.result });

    } else {
      console.error('Failed to fetch user data:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

export const logoutUserApi = ()=>{
  store.dispatch({type:'user/clearUser'});
  store.dispatch({type:'cart/clearCart'});
  store.dispatch({type:'wishlist/clearWishList'})
  localStorage.clear();
}





