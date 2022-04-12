import { USER_LOGIN, USER_LOGOUT } from "../types";
import Axios from "axios";

//Login

const login = (user) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN.REQUEST,
  });

  try {
    await Axios.post("http://localhost:4700/user/login", user).then((res) => {
      if (res.data.status) {
        dispatch({
          type: USER_LOGIN.SUCCESS,
          message: res.data.success,
          user: res.data.user,
          status: res.data.status,
        });
      } else {
        dispatch({
          type: USER_LOGIN.FAIL,
          message: "Login Failed",
          error: res.data.error,
          status: res.data.staus,
        });

        console.log(res.data.status);
      }
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN.FAIL,
      error: error.message,
    });
  }
};

//lOGOUT
const logout = (user) => {
  return {
    type: USER_LOGOUT,
    payload: user,
  };
};

export { login, logout };
