import axios from 'axios'
import {
  ADD_KEY,
  ADD_KEY_FAIL,
  ADD_KEY_REQUEST,
  EDIT_KEY,
  EDIT_KEY_FAIL,
  EDIT_KEY_REQUEST,
  GET_KEY,
  GET_KEY_FAIL,
  GET_KEY_REQUEST,
} from '../Constants'

const AddKey = () => (dispatch) => {
  dispatch({
    type: ADD_KEY_REQUEST,
  })

  axios
    .post(
      'http://localhost:4000/superAdmin/AddKey',
      {},
      {
        withCredentials: true,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      },
    )
    .then((result) => {
      dispatch({ type: ADD_KEY })
    })
    .catch((err) => {
      dispatch({ type: ADD_KEY_FAIL, payload: err?.response?.data?.msg })
    })
}

const GetKey = () => (dispatch) => {
  dispatch({
    type: GET_KEY_REQUEST,
  })

  axios
    .put(
      'http://localhost:4000/superAdmin/getKey',
      {
        withCredentials: true,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      },
    )
    .then((result) => {
      dispatch({ type: GET_KEY })
    })
    .catch((err) => {
      dispatch({ type: GET_KEY_FAIL, payload: err?.response?.data?.msg })
    })
}

const EditKey = (id) => (dispatch) => {
    dispatch({
      type: EDIT_KEY_REQUEST,
    })
  
    axios
      .put(
        `http://localhost:4000/superAdmin/editKey/${id}`,{
          withCredentials: true,
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then((result) => {
        dispatch({ type: EDIT_KEY })
      })
      .catch((err) => {
        dispatch({ type: EDIT_KEY_FAIL, payload: err?.response?.data?.msg })
      })
  }
  

export { AddKey, GetKey,EditKey }
