import React,{useState} from 'react';
import '../Register/Register.css';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import PropTypes from 'prop-types';

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
const Register = () => {
    const [username,setUserName] = useState("");
    const [fullname,setFullName] = useState("");
    const [phonenumber,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    //handle register
    const register =(event)=>{
        event.preventDefault()

        const user = {
            username:username,
            fullname:fullname,
            phonenumber:phonenumber,
            email: email,
            password: password
        };
        Axios.post('http://localhost:4700/user',user)
        .then(function(response){
            console.log(response.data)
        })
       
    }


    return <div className='reg-body'>
    <form>
    <div className='container'>
    <h1>Create <span>Send-IT</span> Account</h1>
    <div className='form-control'>
    <input type='text' placeholder='Username' value={username} onChange={(e)=>setUserName(e.target.value)}></input>
    </div>
    <div className='form-control'>
    <input type='text' placeholder='Full Name' value={fullname} onChange={(e)=>setFullName(e.target.value)}></input>
    </div>
    <div className='form-control'>
    <input type='text' placeholder='Phone Number' value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input>
    </div>
    <div className='form-control'>
    <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    </div>
    <div className='form-control'>
    <input type='text' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
    <div className='form-control'>
    <button onClick={register}><Link to="/login">Register</Link></button>
    </div>
    <div className='form-control'>
    <button  id='btn-cancel'><Link to="/login">Cancel</Link></button>
    </div>
    </div>
        </form>
    </div>;
}

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
// #endregion

export default Register;