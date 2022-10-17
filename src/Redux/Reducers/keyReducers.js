import {GET_KEY, GET_KEY_FAIL, GET_KEY_REQUEST} from "../Constants"

const initialState = {
    key:{},
    error: [],
}

export default function AllUsers(state = initialState, actions) {
    switch (actions.type) {

        case GET_KEY_REQUEST:
            return {
                loading: true
            }

            case GET_KEY:
                return{
                    loading:false,
                    key:actions.payload
                }

                case GET_KEY_FAIL:
                    return{
                        loading:false,
                        error:actions.payload

                    }


        default:
            return state

    }
}