import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../UpdateParcel/UpdateParcel.css";
import { updateParcel } from "../../Redux/Actions/parcelActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const UpdateParcel = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.state.id;

  const [description, setDescription] = useState(location.state.description);
  const [sendernumber, setSenderNumber] = useState(location.state.sendernumber);
  const [receivernumber, setReceiverNumber] = useState(
    location.state.receivernumber
  );
  const [startlocation, setStartLocation] = useState(
    location.state.startlocation
  );
  const [endlocation, setEndLocation] = useState(location.state.endlocation);

  const handleUpdateParcel = (e) => {
    e.preventDefault();
    const parcel = {
      description: description,
      sendernumber: sendernumber,
      receivernumber: receivernumber,
      startlocation: startlocation,
      endlocation: endlocation,
    };
    dispatch(updateParcel(id, parcel));
    navigate("/parcels/viewparcel");
  };
  const state = useSelector((state) => state.updateParcelState);
  const { error, loading, status, success } = state;
  if (status) {
    swal({
      icon: "success",
      text: success,
      timer: 3000,
    });
  } else if (loading) {
    swal({
      text: "Loading ...",
    });
  } else if (error !== "") {
    swal({
      icon: "error",
      text: error,
      timer: 3000,
    });
  }

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
        <button>
          <Link to={"/parcels/viewparcel"}>Cancel</Link>
        </button>
      </form>
    </div>
  );
};

export default UpdateParcel;
