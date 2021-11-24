//redux
import { combineReducers,createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
//reducers

import authUser from "./authUser"
import error from "./error"


const middleWare = [thunk]


export const ConfigureStore = () => {

const store = createStore(
  combineReducers({
    authUser,
    error,
  }),
  composeWithDevTools(applyMiddleware(...middleWare))
)

return store
}

