// import store
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../Reducers/loginReducer";
import {
  sendParcelReducer,
  getParcelReducer,
  deleteParcelReducer,
  updateParcelReducer,
} from "../Reducers/parcelReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
//create store
const rootReducer = combineReducers({
  loginState: loginReducer,
  sendParcelState: sendParcelReducer,
  getParcelState: getParcelReducer,
  deleteParcelState: deleteParcelReducer,
  updateParcelState: updateParcelReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//export store
export default store;
