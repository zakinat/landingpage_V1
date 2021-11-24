//redux
import { combineReducers,createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
//reducers

import authUser from "./authUser"


const middleWare = [thunk]


export const ConfigureStore = () => {

const store = createStore(
  combineReducers({
    authUser,
  }),
  composeWithDevTools(applyMiddleware(...middleWare))
)

return store
}

