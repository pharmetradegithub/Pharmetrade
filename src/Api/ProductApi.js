
import axios from 'axios';
import store, { setSpecialOffer, setGetProductSpecialOffer, setDeactiveProduct, setDeleteProduct } from '../Store/Store';
// import store, { setGetProductSpecialOffer } from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

const SET_PRODUCTS = 'product/setProducts';
const SET_PRODUCT_BY_ID = 'product/setProductById';
const SET_EX_PRODUCTS = 'product/setRxProducts';
const SET_OTC_PRODUCTS = 'product/setOtcProducts';
const SET_PRODUCTS_BY_SELLER = 'product/setProductsBySeller';
const SET_RECENT_SOLD_PRODUCTS = 'product/setRecentSoldProducts';
const SET__PRODUCTS_SPECIAL_OFFER = 'product/setSpecialOffer'
const SET_Criteria_Products = 'product/setCriteriaProducts'

export const fetchAllProductsApi = async () => {
  try {
    const response = await axios.get('/api/Product/GetAll');
    if (response.status === 200) {
      const cartItems = store.getState().cart.cart;
      const cartItemsMap = new Map(cartItems.map(item => [item.product.productID, item.quantity]));
      const products = response.data.result.map(product => ({
        ...product,
        CartQuantity: cartItemsMap.get(product.productID) || 0
      }))
      store.dispatch({ type: SET_PRODUCTS, payload: { products: products, name: "ALL PRODUCTS" } });
    } else {
      console.error('Failed to fetch all products:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching all products:', error);
  }
};
export const AddUpSellProductAPI = async (productId, ToaddproductId) => {
  try {
    const response = await axios.post(
      `/api/Product/AddUpsellProduct?productId=${productId}&upsellProductId=${ToaddproductId}`
    );

    if (response.status === 200) {
      return;
    } else {
      console.error('Failed to add upsell product:', response.data.message);
    }
  } catch (error) {
    console.error('Error adding upsell product:', error);
    throw error;
  }
};
export const AddCrossSellProductAPI = async (productId, crossSellProductId) => {
  try {
    const response = await axios.post(
      `/api/Product/AddCrossSellProduct?productId=${productId}&crossSellProductId=${crossSellProductId}`
    );

    if (response.status === 200) {

      return response.data; // Return the response data if needed
    } else {
      console.error('Failed to add cross-sell product:', response.data.message);
    }
  } catch (error) {
    console.error('Error adding cross-sell product:', error);
    throw error;
  }
};
export const AddRelatedProductAPI = async (productId, relatedProductId) => {
  try {
    const response = await axios.post(
      `/api/Product/AddRelatedProduct?productId=${productId}&relatedProductId=${relatedProductId}`
    );

    if (response.status === 200) {
      console.log("hey");
      return;
    } else {
      console.error('Failed to add related product:', response.data.message);
    }
  } catch (error) {
    console.error('Error adding related product:', error);
    throw error;
  }
};
export const RemoveRelatedProductAPI = async (productId, relatedProductId) => {
  try {
    const response = await axios.post(
      `/api/Product/RemoveRelatedProduct?productId=${productId}&relatedProductId=${relatedProductId}`
    );

    if (response.status === 200) {
      console.log("Successfully removed related product.");
      return;
    } else {
      console.error('Failed to remove related product:', response.data.message);
    }
  } catch (error) {
    console.error('Error removing related product:', error);
    throw error;
  }
};
export const RemoveCrossSellProductAPI = async (productId, crossSellProductId) => {
  try {
    const response = await axios.post(
      `/api/Product/RemoveCrossSellProduct?productId=${productId}&crossSellProductId=${crossSellProductId}`
    );

    if (response.status === 200) {
      console.log("Successfully removed cross-sell product.");
      return;
    } else {
      console.error('Failed to remove cross-sell product:', response.data.message);
    }
  } catch (error) {
    console.error('Error removing cross-sell product:', error);
    throw error;
  }
};
export const RemoveUpsellProductAPI = async (productId, upsellProductId) => {
  try {
    const response = await axios.post(
      `/api/Product/RemoveUpsellProduct?productId=${productId}&upsellProductId=${upsellProductId}`
    );

    if (response.status === 200) {
      console.log("Successfully removed upsell product.");
      return;
    } else {
      console.error('Failed to remove upsell product:', response.data.message);
    }
  } catch (error) {
    console.error('Error removing upsell product:', error);
    throw error;
  }
};

export const fetchCriteriaProductsApi = async (data, name, isProductIds = false) => {
  try {
    const response = await axios.post(
      "/api/Product/GetByCriteria",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      if (isProductIds == true) {
        return response.data.result;
      }
      console.log(response.data, "FetchCreteria")
      const cartItems = store.getState().cart.cart;
      const cartItemsMap = new Map(cartItems.map(item => [item.product.productID, item.quantity]));
      const products = response.data.result.map(product => ({
        ...product,
        CartQuantity: cartItemsMap.get(product.productID) || 0
      }))
      store.dispatch({ type: SET_Criteria_Products, payload: { products: products, name: name } });
    } else {
      console.error('Failed to fetch all products:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching all products:', error);
  }
};

export const fetchProductByIdApi = async (productId) => {
  try {
    const response = await axios.get(`/api/Product/GetById?productId=${productId}`);
    if (response.status === 200) {
      return response.data.result[0];
    } else {
      console.error('Failed to fetch product by ID:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
  }
};

export const fetchRelatedProductApi = async (productID) => {
  try {
    const response = await axios.get(`/api/Product/GetRelatedProducts?productId=${productID}`);
    if (response.status === 200) {
      const relatedProduct = response.data.result;
      store.dispatch({ type: 'product/setRelatedProduct', payload: relatedProduct == null ? [] : relatedProduct });

      console.log(relatedProduct);
      return relatedProduct; // Return the related product data
    } else {
      console.error('Failed to fetch product by ID:', response.data.message);
      return null; // Return null or handle error response accordingly
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null; // Return null or handle error accordingly
  }
};

export const fetchUpsellProductApi = async (productID) => {
  try {
    const response = await axios.get(`/api/Product/GetUpsellProducts?productId=${productID}`);
    if (response.status === 200) {
      const upsellProducts = response.data.result;
      store.dispatch({ type: 'product/setUpSellProduct', payload: upsellProducts == null ? [] : upsellProducts });

      console.log(upsellProducts);
      return upsellProducts; // Return the upsell products data
    } else {
      console.error('Failed to fetch upsell products:', response.data.message);
      return null; // Return null or handle error response accordingly
    }
  } catch (error) {
    console.error('Error fetching upsell products:', error);
    return null; // Return null or handle error accordingly
  }
};

export const fetchCrossSellProductApi = async (productID) => {
  try {
    const response = await axios.get(`/api/Product/GetCrossSellProducts?productId=${productID}`);
    if (response.status === 200) {
      const crossSellProducts = response.data.result;
      store.dispatch({ type: 'product/setCrossSellProduct', payload: crossSellProducts == null ? [] : crossSellProducts });

      console.log(crossSellProducts);
      return crossSellProducts; // Return the cross-sell products data
    } else {
      console.error('Failed to fetch cross-sell products:', response.data.message);
      return null; // Return null or handle error response accordingly
    }
  } catch (error) {
    console.error('Error fetching cross-sell products:', error);
    return null; // Return null or handle error accordingly
  }
};

export const fetchGetProductOffer = (categorySpecificationId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Product/GetProductOffers?specificationId=${categorySpecificationId}`);
      if (response.status === 200) {
        const specialOffer = response.data.result;
        console.log('Dispatching get  SpecialOffer action:', specialOffer); // Log before dispatch
        dispatch(setGetProductSpecialOffer(specialOffer)); // Dispatch action
      } else {
        console.error('Failed to fetch Special Offer:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching special offer:', error);
    }
  };
};

export const fetchDeactiveProduct = (productID) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/Product/DeActivateProduct?productId=${productID}`);
      if (response.status === 200) {
        const deactiveProduct = response.data.result;
        console.log('Dispatching Deactive Product action:', deactiveProduct); // Log before dispatch
        dispatch(setDeactiveProduct(deactiveProduct)); // Dispatch action
      } else {
        console.error('Failed to fetch Deactive Product:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching Deactive Product:', error);
    }
  };
};

// export const fetchDeleteProduct = (productID) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(`/api/Product/DeleteProduct?productId=${productID}`);
//       if (response.status === 200) {
//         const deleteProduct = response.data.result;
//         console.log('Dispatching Deactive Product action:', deleteProduct); // Log before dispatch
//         dispatch(setDeleteProduct(deleteProduct)); // Dispatch action
//       } else {
//         console.error('Failed to fetch Deactive Product:', response.data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching Deactive Product:', error);
//     }
//   };
// };

export const DeactivateProductAPI = async (productID) => {
  try {
    const response = await axios.post(`/api/Product/DeActivateProduct?productId=${productID}`);
    if (response.status === 200) {
      return response.data.result;
    } else {
      console.error('Failed to fetch Deactive Product:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching Deactive Product:', error);

  }
}
export const DeleteProductAPI = async (productID) => {
  try {
    const response = await axios.post(`/api/Product/DeleteProduct?productId=${productID}`);
    if (response.status === 200) {
      return response.data.result;
    } else {
      console.error('Failed to fetch Deactive Product:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching Deactive Product:', error);

  }
}
export const fetchProductOffer = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Product/SpecialOffers`);
      console.log('API response:', response.data); // Log API response
      if (response.status === 200) {
        const specialOffer = response.data.result;
        console.log('Dispatching set Special Offer action:', specialOffer); // Log before dispatch
        dispatch(setSpecialOffer(specialOffer)); // Dispatch action
      } else {
        console.error('Failed to fetch special offer Product:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching special offer Product:', error);
    }
  };
};

export const fetchRxProductsApi = async () => {
  try {
    const response = await axios.get('/api/Product/GetRxProducts');
    if (response.status === 200) {
      store.dispatch({ type: SET_EX_PRODUCTS, payload: response.data.result });
    } else {
      console.error('Failed to fetch RX products:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching RX products:', error);
  }
};

export const fetchOtcProductsApi = async () => {
  try {
    const response = await axios.get('/api/Product/GetOTCProducts');
    if (response.status === 200) {
      store.dispatch({ type: SET_OTC_PRODUCTS, payload: response.data.result });
    } else {
      console.error('Failed to fetch OTC products:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching OTC products:', error);
  }
};

export const fetchProductsBySellerApi = async (sellerId) => {
  try {
    const response = await axios.get(`/api/Product/GetBySeller?sellerId=${sellerId}`);
    if (response.status === 200) {
      console.log(response);
      store.dispatch({ type: SET_PRODUCTS_BY_SELLER, payload: { sellerId, products: response.data.result } });
    } else {
      console.error('Failed to fetch products by seller:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching products by seller:', error);
  }
};

export const fetchRecentSoldProductsApi = async (numberOfProducts) => {
  try {
    const response = await axios.get(`/api/Product/GetRecentSoldProducts?numberOfProducts=${numberOfProducts}`);
    if (response.status === 200) {
      store.dispatch({ type: SET_RECENT_SOLD_PRODUCTS, payload: response.data.result });
    } else {
      console.error('Failed to fetch recent sold products:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching recent sold products:', error);
  }
};

export const uploadImageApi = async (sellerId, productId, file) => {
  try {
    const imgData = new FormData();
    imgData.append('image', file);
    console.log(sellerId, productId);
    const response = await axios.post(`/api/Product/Image/Upload?sellerId=${sellerId}&productId=${productId}`, imgData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      return response.data.imageUrl;
    } else {
      console.error('Failed to upload image:', response.data.message);
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

export const AddProductApi = async (FormData, user) => {
  try {
    const response = await axios.post(
      "/api/Product/Add",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return "Added";
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
export const AddProductInfoApi = async (FormData, user) => {
  try {
    const response = await axios.post(
      "/api/Product/ProductInfo/Add",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data.result[0].productID;
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
export const AddProductGallery = async (FormData, user) => {
  try {
    const response = await axios.post(
      "/api/Product/Gallery/Add",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data.result[0].productGalleryId;
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
export const AddProductPriceApi = async (FormData, user) => {
  try {
    const response = await axios.post(
      "/api/Product/Price/Add",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data.result[0].productPriceId;
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
export const AddProductSizeApi = async (FormData) => {
  try {
    const response = await axios.post(
      "/api/Product/Size/Add",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data.result[0].productSizeId;
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};


export const EditProductInfoApi = async (FormData, user) => {
  try {
    const response = await axios.post(
      "/api/Product/ProductInfo/Edit",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data.result[0].productID;
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
export const EditProductGallery = async (FormData, user) => {
  try {
    const response = await axios.post(
      "/api/Product/Gallery/Edit",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return "Added";
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
export const EditProductPriceApi = async (FormData, user) => {
  try {
    const response = await axios.post(
      "/api/Product/Price/Edit",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return "Added";
    } else {
      console.error("Failed to submit product:", response.data.message);
    }

  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};