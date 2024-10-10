import axios from 'axios';
import store from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const getCartItemsApi = async (customerId) => {
    try {
      const response = await axios.get(`/api/Cart/GetCartItems?customerId=${customerId}`);
      if (response.status === 200 && response.data.result !== null) {
        const cartItems = response.data.result.map(item => ({
          ...item,
          updateQuantity: item.quantity 
        }));
        store.dispatch({ type: 'cart/setCart', payload: cartItems });
      } else {
        console.error('Failed to fetch cart items:', response.data.message);
        return null;
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
      return null;
    }
  };

export const addCartApi = async (cartItem) => {
    try {
      const response = await axios.post('/api/Cart/Add', cartItem);
      if (response.status === 200) {
        const cartItems = response.data.result.map(item => ({
          ...item,
          updateQuantity: item.quantity 
        }));
        store.dispatch({ type: 'cart/setCart', payload: cartItems });
      } else {
        console.error('Failed to add item to cart:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

export const removeItemFromCartApi = async (cartId) => {
    try {
      const response = await axios.post(`/api/Cart/Delete?CartId=${cartId}`);
      if (response.status === 200) {
        store.dispatch({ type: 'cart/removeFromCart', payload: { id: cartId } });
      } else {
        console.error('Failed to remove item from cart:', response.data.message);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  
  
  