import { SEND_PARCEL, VIEW_PARCEL, DELETE_PARCEL, EDIT_PARCEL } from "../types";
// intial state

// Send parcel
const initialSendParcelState = {
  parcel: {},
  error: "",
  loading: false,
  success: "",
  status: false,
};

//view parcel
const initialViewParcelState = {
  parcel: [],
  error: "",
  loading: false,
};

//Delete parcel
const initialDeleteParcelState = {
  parcel: [],
  error: "",
  loading: false,
};

//Update parcel
const initialUpdateParcelState = {
  parcel: [],
  error: "",
  loading: false,
  status: false,
  message: "",
  success: "",
};
// Send Parcel Reducer
export const sendParcelReducer = (state = initialSendParcelState, action) => {
  switch (action.type) {
    case SEND_PARCEL.REQUEST:
      return {
        ...state,
        parcel: {},
        loading: true,
        error: "",
        status: false,
        success: "",
      };
    case SEND_PARCEL.SUCCESS:
      return {
        ...state,
        parcel: action.parcel,
        loading: false,
        error: "",
        status: true,
        success: action.success,
      };

    case SEND_PARCEL.FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: false,
      };
    default:
      return state;
  }
};

// get Parcel Reducer
export const getParcelReducer = (state = initialViewParcelState, action) => {
  switch (action.type) {
    case VIEW_PARCEL.REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case VIEW_PARCEL.SUCCESS:
      return {
        ...state,
        parcel: [...action.parcel],
        loading: false,
        error: "",
      };
    case VIEW_PARCEL.FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// Delete Parcel Reducer
export const deleteParcelReducer = (
  state = initialDeleteParcelState,
  action
) => {
  switch (action.type) {
    case DELETE_PARCEL.REQUEST:
      return {
        loading: true,
        error: "",
      };

    case DELETE_PARCEL.SUCCESS:
      return {
        loading: false,
        message: "Parcel Deleted Successfully",
        error: "",
      };
    case DELETE_PARCEL.FAIL:
      return {
        loading: false,
        message: "An Error Occured!",
        error: action.error,
      };
    default:
      return state;
  }
};

// Update Parcel

export const updateParcelReducer = (
  state = initialUpdateParcelState,
  action
) => {
  switch (action.type) {
    case EDIT_PARCEL.REQUEST:
      return {
        loading: true,
        error: "",
      };

    case EDIT_PARCEL.SUCCESS:
      return {
        loading: false,
        error: "",
        status: action.status,
        success: action.success,
      };

    case EDIT_PARCEL.FAIL:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
