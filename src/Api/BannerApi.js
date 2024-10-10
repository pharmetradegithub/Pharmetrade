
import axios from 'axios';
import store from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';


// Action types for banner
const SET_BANNER = 'banner/setBanner';
const ADD_BANNER = 'banner/addBanner';
const EDIT_BANNER = 'banner/editBanner';
const DELETE_BANNER = 'banner/deleteBanner';

export const uploadCustomerImageApi = async (imageData) => {
  try {
    const response = await axios.post('/api/Customer/Upload', imageData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Assuming you're sending image data as form-data
      },
    });
    if (response.status === 200) {
      const imageUrl = response.data.imageUrl;
      console.log('Image uploaded successfully:', imageUrl);
      return imageUrl;
    } else {
      console.error('Failed to upload image:', response.data.message);
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};
// Fetch all banners
export const fetchAllBannersApi = async () => {
  try {
    const response = await axios.get('/api/Banner/GetAll');
    if (response.status === 200) {
      store.dispatch({ type: SET_BANNER, payload: response.data.result });
    } else {
      console.error('Failed to fetch banners:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};
export const addBannerApi = async (bannerData) => {
  try {
    const response = await axios.post('/api/Banner/Add', bannerData);
    if (response.status === 200) {
      store.dispatch({ type: ADD_BANNER, payload: response.data.result[0] });
    } else {
      console.error('Failed to add banner:', response.data.message);
    }
  } catch (error) {
    console.error('Error adding banner:', error);
  }
};

// Edit a banner
export const editBannerApi = async (bannerId, updatedBannerData) => {
  try {
    const response = await axios.post(`/api/Banner/Edit`, { bannerId, ...updatedBannerData });
    if (response.status === 200) {
      store.dispatch({ type: EDIT_BANNER, payload: response.data.result[0] });
    } else {
      console.error('Failed to edit banner:', response.data.message);
    }
  } catch (error) {
    console.error('Error editing banner:', error);
  }
};

// Delete a banner
export const deleteBannerApi = async (bannerId) => {
  try {
    const response = await axios.post(`/api/Banner/Delete?bannerId=${bannerId}`);
    if (response.status === 200) {
      store.dispatch({ type: DELETE_BANNER, payload: bannerId });
    } else {
      console.error('Failed to delete banner:', response.data.message);
    }
  } catch (error) {
    console.error('Error deleting banner:', error);
  }
};

