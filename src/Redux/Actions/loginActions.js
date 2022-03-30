import { USER_LOGIN, USER_LOGOUT } from "../types";
import Axios from 'axios'

//Login

const login = (user) => async dispatch => {

    dispatch({
        type: USER_LOGIN.REQUEST
    })

    try {
        await Axios.post("http://localhost:4700/user/login", user)

        dispatch({
            type: USER_LOGIN.SUCCESS,
            message: "Logged in successfuly"
        })

    } catch (error) {
        dispatch({
            type: USER_LOGIN.FAIL,
            error: error.message
        })
    }
}

//lOGOUT
const logout = (user) => {
    return {
        type: USER_LOGOUT,
        payload: user
    }
}

export { login, logout }