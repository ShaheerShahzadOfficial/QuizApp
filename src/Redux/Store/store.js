import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import AuthReduers  from "../Reducers/AuthReducer"
import AllUsers from "../Reducers/SuperAdmin"


const rootReducer = combineReducers({
    Auth : AuthReduers,
Users: AllUsers
})


const initialState = {

}

const Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)


export default Store