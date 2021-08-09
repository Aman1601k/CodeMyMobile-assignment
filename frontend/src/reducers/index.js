import authReducer from './auth.reducer';

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
    }    
)

export default rootReducer;