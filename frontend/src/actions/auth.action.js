import axiosInstance from '../helpers/axios'
import { authConstants , userConstants } from "./constants"

export const login = (user) => {

    console.log(user);

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST});

        const res = await axiosInstance.post(`/signin` , {
            ...user
        })

        if(res.status == 200){
          window.location.reload()
          const {token , user} = res.data;
          localStorage.setItem('token', token );
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({ 
                type: authConstants.LOGIN_SUCCESS,
                payload:{
                    token , user
                  }
            });
          }else{
            if(res.status == 206){
                dispatch({ 
                  type: authConstants.LOGIN_FAILURE,
                    payload:{ error: res.data.error }
                });
              }
        }
      }
}

export const signup = (user) => {
  console.log(user);
  return async (dispatch) => {

      dispatch({ type: authConstants.SIGNUP_REQUEST});

      const res = await axiosInstance.post(`/signup` , {
          ...user
      })

      if(res.status == 200){
          const {message} = res.data;
          dispatch({ 
              type: authConstants.SIGNUP_SUCCESS,
              payload:{
                  message
              }
          });
      }else{
          if(res.status === 206){
              dispatch({ 
                  type: authConstants.SIGNUP_FAILURE,
                  payload:{ error: res.data.error  }
              });
          }
      }
  }
}

export const signout = () => {
    return async dispatch => {
      
        dispatch({type: authConstants.LOGOUT_REQUEST})
        const res = await axiosInstance.post(`/signout`)
        
        if(res.status === 200) {
          localStorage.clear();
          window.location.reload();
        dispatch({ type: authConstants.LOGOUT_SUCCESS})
        }else{
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: {error: res.data.error}
            })
        }
        
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({ 
                type: authConstants.LOGIN_SUCCESS,
                payload:{
                    token , user
                }
            });
        }else{
            dispatch({ 
                type: authConstants.LOGIN_FAILURE,
                payload:{ error: ''}
            });
        }
    }
}

