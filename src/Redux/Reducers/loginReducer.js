import { USER_LOGIN} from "../types";
// intial state

const initialState = {
  user: {},
  error: null,
  loading: false,
  message: "",
  status: false,
};
//
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN.REQUEST:
      return {
        ...state,
        user: {},
        loading: true,
        error: "",
        status: false,
      };
    case USER_LOGIN.SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
        error: "",
        message: action.message,
        status: action.status,
      };
    case USER_LOGIN.FAIL:
      return {
        ...state,
        user: {},
        loading: false,
        error: action.error,
        status: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
