import { USER_LOGIN, USER_LOGOUT } from "../types";
// intial state

const initialState = {
    user: {},
    error: '',
    loading: false
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN.REQUEST:
            return {
                ...state,
                user: {},
                loading: true,
                error: '',
            }
        case USER_LOGIN.SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
                error: '',
            }
        case USER_LOGIN.FAIL:
            return {
                ...state,
                user: {},
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }



}

export default loginReducer