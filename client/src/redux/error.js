import { GET_ERRORS, CLEAR_ERRORS } from './actionTypes'


//reducers

const initstate = {
    msg: {},
    status: null,
    id: null
  }

  const  error = ( state=initstate, action) => {
    switch (action.type) {
        case GET_ERRORS:
          return {
            msg: action.payload.msg,
            status: action.payload.status,
            id: action.payload.id
          }
        case CLEAR_ERRORS:
          return {
            msg: {},
            status: null,
            id: null
          }
        default:
          return state
      }
  }

  //actions
// RETURN ERRORS
 const returnErrors = (msg ,status, id = null) => {
    return {
      type: GET_ERRORS,
      payload: { msg, status, id }
    }
  }
  
  // CLEAR ERRORS
   const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    }
  }
  
  export default error
export {returnErrors,clearErrors}
  