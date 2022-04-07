import { SEND_PARCEL, VIEW_PARCEL, DELETE_PARCEL, EDIT_PARCEL } from "../types";
import Axios from "axios";

//Login

const sendParcel = (parcel) => async (dispatch) => {
  dispatch({
    type: SEND_PARCEL.REQUEST,
  });

  try {
    await Axios.post("http://localhost:4700/parcel", parcel).then(function (
      response
    ) {
      //console.log(response);
    });

    dispatch({
      type: SEND_PARCEL.SUCCESS,
      message: "Parcel Sent in successfuly",
    });
  } catch (error) {
    dispatch({
      type: SEND_PARCEL.FAIL,
      error: error.message,
    });
  }
};

// Get Parcel
const getParcel = () => async (dispatch) => {
  dispatch({
    type: VIEW_PARCEL.REQUEST,
  });

  try {
    await Axios.get("http://localhost:4700/parcels").then((res) => {
      if (res.data.status) {
        dispatch({
          type: VIEW_PARCEL.SUCCESS,
          parcel: res.data.parcel,
          message: "Parcel Fetched in successfuly",
        });

        console.log(res.data.parcel);
      } else {
        dispatch({
          type: VIEW_PARCEL.FAIL,
          message: "Failed",
        });
      }
    });
  } catch (error) {
    dispatch({
      type: VIEW_PARCEL.FAIL,
      error: error.message,
    });
  }
};

// Delete Parcel
const deleteParcel = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_PARCEL.REQUEST,
  });

  try {
    await Axios.delete(`http://localhost:4700/parcel/${id}`).then(function (
      response
    ) {
      //console.log(response);
    });

    dispatch({
      type: DELETE_PARCEL.SUCCESS,
      message: "Parcel Deleted in successfuly",
    });
  } catch (error) {
    dispatch({
      type: DELETE_PARCEL.FAIL,
      error: error.message,
    });
  }
};

// Update Parcel
const updateParcel = (id) => async (dispatch) => {
  dispatch({
    type: EDIT_PARCEL.REQUEST,
  });

  try {
    await Axios.put(`http://localhost:4700/parcel/${id}`).then(function (
      response
    ) {
      //console.log(response);
    });

    dispatch({
      type: EDIT_PARCEL.SUCCESS,
      message: "Parcel Updated in successfuly",
    });
  } catch (error) {
    dispatch({
      type: EDIT_PARCEL.FAIL,
      error: error.message,
    });
  }
};

export { sendParcel, getParcel, deleteParcel, updateParcel };
