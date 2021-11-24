import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_TOKEN
  } from './actionTypes'

  import * as api from '../_api.services/api.auth'
  import {returnErrors} from './error'

  //reducers
const initstate = {
    token:  localStorage.getItem('token') ,
    isAuthenticated: null,
    isLoading: false,
    user: null}

    const authUser = ( state=initstate, action) => {
    switch (action.type) {
      case USER_LOADING:
        return {
            ...state,
            isLoading: true
          }
      case USER_LOADED:
        return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload
          }
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        return {
            ...state,
            user:action.payload.user,
            token:action.payload.token,
            isAuthenticated: true,
            isLoading: false
          }
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
        localStorage.removeItem('token')
        return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
              }
      case SET_TOKEN:
        return {
          ...state,
          token: localStorage.getItem('token') 
        }
      default:
        return state
    }
  }


  //actions

//Register User
 const signupUser = ({ name, email,tel, password,language }) => {
   return  async (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // Request body
  const body = JSON.stringify({ name, email,tel, password,language })
  console.log(body)
  try {
    const {data}=await api.registerUser(body,config)
    dispatch({
        type:REGISTER_SUCCESS,
        payload:data
    })
  } catch (err) {
    dispatch(
        returnErrors(err.response.data, err.response.status, REGISTER_FAIL)
      )
      dispatch({
        type: REGISTER_FAIL
      })
  }

}
  } 
  
const setToken =()=>{ 
  return (dispatch) => {
    dispatch({ type: SET_TOKEN })
  }  
}

// Check token & load user
   const loadUser = () => {
     return async (dispatch) => {
      // User loading
  dispatch({ type: USER_LOADING })
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('token') 
    }
  }

  try {
    const {data:user}= await api.checkUserToken(config)
  dispatch({
    type: USER_LOADED,
    payload: user
  })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
  }
  

  }
   } 
    
// Login User
 const signinUser = ({ email, password }) => {
   return async (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    // Request body
    const body = JSON.stringify({ email, password })
  
    try {
      const {data:user}= await api.signIn(body,config)
      dispatch({
    type: LOGIN_SUCCESS,
    payload: user
    })
    } catch (err) {
      dispatch(
        returnErrors(err.response.data, err.response.status, LOGIN_FAIL)
      )
      dispatch({
        type: LOGIN_FAIL
      })
    }
   
  } } 

// Logout User
 const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}
  
export default authUser
export {logout,signinUser,loadUser,signupUser,setToken}
 