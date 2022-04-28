import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Redux/Actions/loginActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginState);

  useEffect(() => {
    const { error, loading, message, status } = loginState;
    if (status) {
      swal({
        icon: "success",
        text: message,
        timer: 3000,
      });
      setTimeout(() => {
        navigate("/parcels");
      }, 2000);
    } else if (loading) {
      swal({
        text: "Loading ....",
      });
    } else if (error !== "") {
      swal({
        icon: "error",
        text: error,
        timer: 3000,
      });
    }
  }, [loginState, navigate]);

  const dispatch = useDispatch();

  const loginInput = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    dispatch(login(user));
  };
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

export default Login;
