import { productConstants } from "../actions/constants";

const initState = {
  cart:[]
}; 

export default (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case productConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
      };
      break;
    case productConstants.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cart = action.payload
      };
      break;
    case productConstants.ADD_TO_CART_FAILURE:{
      state = {
        ...state,
      }
      break;
    }
  }
  return state;
};
