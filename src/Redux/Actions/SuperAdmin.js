import axios from "axios"
import { GET_ALL_USER, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST } from "../Constants"

const AllUser = () => async (dispatch) => {
    dispatch({
        type: GET_ALL_USER_REQUEST
    })

    await axios.get("http://localhost:4000/superAdmin/allUser", {
        withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" }
    }).then((result) => {
        dispatch({
            type: GET_ALL_USER,
            payload: result.data
        })
    }).catch((err) => {
        dispatch({
            type: GET_ALL_USER_FAIL,
            payload: err.response.data
        })
    })


}

export {
    AllUser
}