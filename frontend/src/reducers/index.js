import authReducer from './auth.reducer';
import productReducer from './product.reducer'
import cartReducer from './cart.reducer'
import {combineReducers} from 'redux';

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS') {
      return appReducer(undefined, action);
    }
    return appReducer(state, action);
  };

const appReducer = combineReducers(
    {
        auth: authReducer,
        product: productReducer,
        cart: cartReducer,
    }    
)

export default rootReducer;