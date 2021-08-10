import { productConstants } from "../actions/constants";

const initState = {
  products: [],
}; 

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case productConstants.GET_PRODUCT_REQUEST:
      state = {
        ...state,
      };
      break;
    case productConstants.GET_PRODUCT_SUCCESS:
      state = {
        ...state,
        products:action.payload.data
      };
      break;
    case productConstants.GET_PRODUCT_FAILURE:
      state = {
        ...state,
      };
      break;
    }
    return state;
};
