import React from "react";
import "../UserDashboard/UserDashboard.css";
import { Link } from "react-router-dom";
import { MdOutlineHome, MdSend, MdPreview, MdLogout } from "react-icons/md";
import { Routes, Route, Navigate } from "react-router-dom";
import SendParcel from "../SendParcel/SendParcel";
import ViewParcel from "../ViewParcel/ViewParcel";

const UserDashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="user_left">
          <ul>
            <li>
              <div className="user-dash-home">
                <div>
                  <MdOutlineHome size={21} />
                </div>
                <div>
                  <Link to="/">home</Link>
                </div>
              </div>
            </li>
            <li>
              <div className="user-dash-home">
                <div>
                  <MdSend size={21} />
                </div>
                <div>
                  <Link to="sendparcel">send parcel</Link>
                </div>
              </div>
            </li>
            <li>
              <div className="user-dash-home">
                <div>
                  <MdPreview size={21} />
                </div>
                <div>
                  <Link to="viewparcel">view parcel</Link>
                </div>
              </div>
            </li>
            <li>
              <div className="user-dash-home">
                <div>
                  <MdLogout size={21} />
                </div>
                <div>
                  <Link to="/">logout</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="user_right">
          <div className="display">
            <Routes>
              <Route path="/" element={<Navigate to="sendparcel" />} />
              <Route path="sendparcel" element={<SendParcel />} />
              <Route path="viewparcel" element={<ViewParcel />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
