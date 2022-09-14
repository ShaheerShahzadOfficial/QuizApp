import {GET_ALL_USER, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST} from "../Constants"

const initialState = {
    user: [],
    error: [],
}

export default function AllUsers(state = initialState, actions) {
    switch (actions.type) {

        case GET_ALL_USER_REQUEST:
            return {
                loading: true
            }

            case GET_ALL_USER:
                return{
                    loading:false,
                    user:actions.payload
                }

                case GET_ALL_USER_FAIL:
                    return{
                        loading:false,
                        error:actions.payload

                    }


        default:
            return state

    }
}