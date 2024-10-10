import axios from 'axios';
import { setCategorySpecificationsGetAll, setProductCategoryGetAll } from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';



export const fetchNdcUpcListApi = async (value) => {
  try {
    const response = await axios.get(`/api/Masters/GetNDCUPCList?NDC=${value}`);
    if (response.status === 200) {
        if(response.data.result.length==0)
        {
            const response1 = await axios.get(`/api/Masters/GetNDCUPCList?UPC=${value}`);
            return response1.data.result[0];
        }
        return response.data.result[0];
    } else {
      console.error('Failed to fetch banners:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};

export const fetchProductCategoriesGetAll = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Masters/ProductCategories/GetAll`);
      console.log('API response:', response.data); // Log API response
      if (response.status === 200) {
        const ProductCategoryGetAll = response.data.result;
        console.log('Dispatching  action:', ProductCategoryGetAll); // Log before dispatch
        dispatch(setProductCategoryGetAll(ProductCategoryGetAll)); // Dispatch action
      } else {
        console.error('Failed to category get all Product:', response.data.message);
      }
    } catch (error) {
      console.error('Error  category get all Product:', error);
    }
  };
}


export const fetchCategorySpecificationsGetAll = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Masters/CategorySpecifications/GetAll`);
      console.log('API response:', response.data); // Log API response
      if (response.status === 200) {
        const CategorySpecificationsGetAll = response.data.result;
        console.log('Dispatching  action:', CategorySpecificationsGetAll); // Log before dispatch
        dispatch(setCategorySpecificationsGetAll(CategorySpecificationsGetAll)); // Dispatch action
      } else {
        console.error('Failed to category get all Product:', response.data.message);
      }
    } catch (error) {
      console.error('Error  category get all Product:', error);
    }
  };
}

