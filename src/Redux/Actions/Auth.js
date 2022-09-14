import axios from "axios"
import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_REQUEST } from "../Constants";



const Register = (name, email, password) => async (dispatch) => {

dispatch({
    type:REGISTER_USER_REQUEST
})
    await axios.post("http://localhost:4000/auth/register", {
        name, email, password
    }, { withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
        dispatch({
            type: REGISTER_USER,
            payload: result.data
        })
    }).catch((err) => {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response.data

        })
    });

}


export const Login = (email, password) => async (dispatch) => {

    dispatch({ type: LOGIN_USER_REQUEST });



    await axios.post("http://localhost:4000/auth/Login", {
        email, password
    }, { withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
        dispatch({
            type: LOGIN_USER,
            payload: result.data
        })
    }).catch((err) => {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: err.response.data

        })
    });

}

export {
    Register
}