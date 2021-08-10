import axiosInstance from '../helpers/axios'
import { productConstants } from "./constants"


export const addToCart = (id , userId) => {
    
    return async (dispatch) => {
        try {
          dispatch({ type: productConstants.ADD_TO_CART_REQUEST });
          const res = await axiosInstance.put(`/addToCart`,{productId:id , _id:userId});
          console.log("OOOOKKK", res.data.cart)
          if (res.status === 200){
              dispatch({
                  type: productConstants.ADD_TO_CART_SUCCESS,
                  payload: res.data.cart
                });
          } else {
            dispatch({ type: productConstants.ADD_TO_CART_FAILURE });
          }
        } catch (error) {
          console.log(error);
        } 
      };
}