import { LOGIN_USER, LOGIN_USER_FAIL, LOGOUT_USER, LOGOUT_USER_FAIL, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, LOGIN_USER_REQUEST } from "../Constants";


const initialState = {
    user: {},
    error: [],
    message: {}
}


export default function AuthReduers(state = initialState, actions) {
    switch (actions.type) {

        case REGISTER_USER_REQUEST:
        case LOGIN_USER_REQUEST:
        // case LOAD_USER_REQUEST:
            return {
                loading: true
            }

        case LOGIN_USER:
        case REGISTER_USER:
        // case LOAD_USER:
            return {
                // ...state,
                loading: false,
                isAuthenticated: true,
                user: actions.payload
            }


        case LOGOUT_USER:
            return {
                ...state,
                loading: false,
                user: null,
                isAuthenticated: false,

            }


        case REGISTER_USER_FAIL:
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: actions.payload
            }

        // case LOAD_USER_FAIL:
        //     return {
        //         isAuthenticated: false,
        //         loading: false,
        //         user: null,
        //         error: actions.payload
        //     }

        case LOGOUT_USER_FAIL:
            return {
                error: actions.payload,
                loading: false,
            }


        default:
            return state
    }
}
