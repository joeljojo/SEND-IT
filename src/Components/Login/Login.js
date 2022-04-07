import React, { useState } from "react";
import Header from "../Header/Header";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { login } from "../../Redux/Actions/loginActions";
import { useDispatch } from "react-redux";
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
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginInput = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    dispatch(login(user));
    navigate("/parcels");
  };
  // dispatch action

  return (
    <div>
      <div>
        <form>
          <div className="login-form">
            <h1>Sign In</h1>
            <div className="form-control">
              <input
                type="text"
                placeholder="Email or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <button onClick={loginInput}>Sign In</button>
          </div>
          <div className="last">
            <div className="link">
              <Link to="/register">Create an account</Link>
            </div>
          </div>
          <div className="last2">
            <div className="link2">
              <Link to="/forgotpassword">Forgot Password</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
// #endregion

export default Login;
