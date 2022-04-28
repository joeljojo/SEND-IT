import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import Logo from "../../Images/logo2.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="nav-bar">
          <div className="logo">
            <img src={Logo} alt="SEND-IT" />
          </div>
          <div className="nav-list">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about us</Link>
              </li>
              <li>
                <Link to="/contact">contact us</Link>
              </li>
              <li>
                <Link to="/login">sign in</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
