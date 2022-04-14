import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../UpdateParcel/UpdateParcel.css";
import { updateParcel } from "../../Redux/Actions/parcelActions";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const UpdateParcel = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.state.id;
  console.log(id);

  const [description, setDescription] = useState(location.state.description);
  const [sendernumber, setSenderNumber] = useState(location.state.sendernumber);
  const [receivernumber, setReceiverNumber] = useState(
    location.state.receivernumber
  );
  const [startlocation, setStartLocation] = useState(
    location.state.startlocation
  );
  const [endlocation, setEndLocation] = useState(location.state.endlocation);

  const handleUpdateParcel = () => {
    const parcel = {
      description: description,
      sendernumber: sendernumber,
      receivernumber: receivernumber,
      startlocation: startlocation,
      endlocation: endlocation,
    };
    dispatch(updateParcel(id, parcel));
    // navigate("/parcels/viewparcel");
  };

  return (
    <div className="update">
      <h1>Update Parcel</h1>
      <form>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          required
        />
        <label>Sender Number</label>
        <input
          type="text"
          placeholder="Sender Number"
          required
          value={sendernumber}
          onChange={(e) => {
            setSenderNumber(e.target.value);
          }}
        />
        <label>Receiver Number</label>
        <input
          type="text"
          placeholder="Receiver Number"
          required
          value={receivernumber}
          onChange={(e) => {
            setReceiverNumber(e.target.value);
          }}
        />
        <label>Sending From</label>
        <input
          type="text"
          placeholder="Sending From:"
          required
          value={startlocation}
          onChange={(e) => {
            setStartLocation(e.target.value);
          }}
        />
        <label>Delivered To</label>
        <input
          type="text"
          placeholder="Delivered To:"
          required
          value={endlocation}
          onChange={(e) => {
            setEndLocation(e.target.value);
          }}
        />
        <button onClick={handleUpdateParcel}>Submit</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

UpdateParcel.propTypes = propTypes;
UpdateParcel.defaultProps = defaultProps;
// #endregion

export default UpdateParcel;