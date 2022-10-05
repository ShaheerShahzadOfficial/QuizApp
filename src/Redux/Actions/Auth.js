import axios from "axios"
import { LOAD_USER, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGOUT_USER, LOGOUT_USER_FAIL, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_REQUEST } from "../Constants";



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


const Login = (email, password) => async (dispatch) => {

    dispatch({ type: LOGIN_USER_REQUEST });



    await axios.post("http://localhost:4000/auth/Login", {
        email, password
    }, { withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
        dispatch({
            type: LOGIN_USER,
            payload: result.data?.user
        })
    }).catch((err) => {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: err.response.data

        })
    });

}


const Logout = () => async (dispatch) => {

    dispatch({ type: LOGIN_USER_REQUEST });



    await axios.delete("http://localhost:4000/auth/logout", { withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
        dispatch({
            type: LOGOUT_USER,
            payload: result.data?.message
        })
    }).catch((err) => {
        dispatch({
            type: LOGOUT_USER_FAIL,
            payload: err?.response?.data

        })
    });

}

export const LoadUser = () => async (dispatch) => {
    try {


        dispatch({ type: LOAD_USER_REQUEST });


        const { data } = await axios.get("http://localhost:4000/auth/userDetails", { withCredentials: true, credentials: "include" })
        dispatch({
            type: LOAD_USER,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data
        })
    }

}

export {
    Register,Login,Logout
}