import React, { useEffect, useState } from "react";
import { getParcel, deleteParcel } from "../../Redux/Actions/parcelActions";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../ViewParcel/ViewParcel.css";

import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

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

const ViewParcel = () => {
  const { parcel } = useSelector((state) => state.getParcelState);
  const [data, setData] = useState([]);

  // const { id } = parcel;
  // console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Handle the Edit Parcel
  // const handleEdit = (id) => {

  // };

  // Handle the Delete Parcel
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteParcel(id));
    dispatch(getParcel());
  };

  console.log(parcel);

  // Fuction to display parcels

  useEffect(() => {
    dispatch(getParcel());
  }, [dispatch]);

  // const renderParcels = parcel.map((item) => {
  //   return (
  //     <table>
  // <tr>
  //   <th>Description</th>
  //   <th>Sender</th>
  //   <th>Receiver</th>
  //   <th>From</th>
  //   <th>Current</th>
  //   <th>To</th>
  // </tr>
  // <tr>
  //   <td>{item.description}</td>
  //   <td>{item.sendernumber}</td>
  //   <td>{item.receivernumber}</td>
  //   <td>{item.startlocation}</td>
  //   <td>{item.currentlocation}</td>
  //   <td>{item.endlocation}</td>
  // </tr>
  //     </table>
  //   );
  // });
  return (
    <div>
      {
        <table>
          <tr>
            <th>Description</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>From</th>
            <th>Current</th>
            <th>To</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {parcel.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.sendernumber}</td>
                <td>{item.receivernumber}</td>
                <td>{item.startlocation}</td>
                <td>{item.currentlocation}</td>
                <td>{item.endlocation}</td>
                <td>
                  <MdEdit
                    size={21}
                    color="#0000ff"
                    // onClick={handleEdit(item.id)}
                  />
                </td>
                <td>
                  <MdDelete
                    size={21}
                    color="#ff0000"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      }
    </div>
  );
};

ViewParcel.propTypes = propTypes;
ViewParcel.defaultProps = defaultProps;
// #endregion

export default ViewParcel;
