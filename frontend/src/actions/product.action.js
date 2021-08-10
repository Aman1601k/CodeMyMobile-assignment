import axiosInstance from '../helpers/axios'
import { productConstants } from "./constants"

export const getallproducts = () => {
    
    return async (dispatch) => {      
        dispatch({ type: productConstants.GET_PRODUCT_REQUEST});
        
        const res = await axiosInstance.get(`/getproducts`)
        console.log("okkk",res)
        if(res.status == 200){
            const {data} = res;
            dispatch({ 
                type: productConstants.GET_PRODUCT_SUCCESS,
                payload:{data}
            });
        }
        else{
            const {error} = res.data;
            dispatch({ 
                type: productConstants.GET_PRODUCT_FAILURE,
                payload:{error}
            });
        }
    }
}

export const getSingleproduct = (id) => {
    
    return async (dispatch) => {      
        dispatch({ type: productConstants.GET_SINGLE_PRODUCT_REQUEST});
        
        const res = await axiosInstance.get(`/product/${id}`)
        if(res.status == 200){
            const {data} = res;
            dispatch({ 
                type: productConstants.GET_SINGLE_PRODUCT_SUCCESS,
                payload:{data}
            });
        }
        else{
            const {error} = res.data;
            dispatch({ 
                type: productConstants.GET_SINGLE_PRODUCT_FAILURE,
                payload:{error}
            });
        }
    }
}
