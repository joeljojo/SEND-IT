// import store
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from '../Reducers/loginReducer'
import parcelReducer from '../Reducers/parcelReducer'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
//create store
const rootReducer = combineReducers({
    loginState: loginReducer,
    parcelState: parcelReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

//export store
export default store;