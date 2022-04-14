import React, { useEffect, useState } from "react";
import { getParcel, deleteParcel } from "../../Redux/Actions/parcelActions";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import UpdateParcel from "../UpdateParcel/UpdateParcel";
import swal from "sweetalert";
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
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle the Delete Parcel
  const handleDelete = (id) => {
    dispatch(deleteParcel(id));
    dispatch(getParcel());
  };

  //Handle Edit
  const handleEdit = (
    id,
    description,
    sendernumber,
    receivernumber,
    startlocation,
    endlocation
  ) => {
    navigate("/updateparcel", {
      state: {
        id: id,
        description: description,
        sendernumber: sendernumber,
        receivernumber: receivernumber,
        startlocation: startlocation,
        endlocation: endlocation,
      },
    });
  };

  // Fuction to display parcels

  useEffect(() => {
    dispatch(getParcel(page, perPage));
  }, [dispatch, page, perPage]);
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
                    color="#5f95ed"
                    onClick={() => {
                      handleEdit(
                        item.id,
                        item.description,
                        item.sendernumber,
                        item.receivernumber,
                        item.startlocation,
                        item.endlocation
                      );
                    }}
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
      <div className="pagination-btn">
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(e.target.value);
            setPage(1);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
        <div>
          <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>
            Previous
          </button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

ViewParcel.propTypes = propTypes;
ViewParcel.defaultProps = defaultProps;
// #endregion

export default ViewParcel;
