import authReducer from './auth.reducer';
import productReducer from './product.reducer'
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
    }    
)

export default rootReducer;