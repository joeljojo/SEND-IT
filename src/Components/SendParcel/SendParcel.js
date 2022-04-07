import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { sendParcel } from '../../Redux/Actions/parcelActions';
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





const SendParcel = () => {
const [desc, setDesc] = useState("");
const [sender, setSender] = useState("");
const [receiver, setReceiver] = useState("");
const [departurePoint,setDeparturePoint] = useState("");
const [destinationPoint, setDestinationPoint] = useState("");

const dispatch = useDispatch();

// Hundle the sendInputFunction
const sendInput = (event)=>{
    event.preventDefault()
    const parcel ={
        description: desc,
        sendernumber: sender,
        receivernumber: receiver,
        startlocation: departurePoint,
        endlocation: destinationPoint
    };

    dispatch(sendParcel(parcel))
    

    
//     Axios.post('http://localhost:4700/parcel',parcel)
// .then(function(response){
//     console.log(response.data)
// })
   
   
}
    return <div>
        <form>
            <div className='heading'>
                <h1>Send Parcel with Send-IT</h1>
            </div>
            <div className='form-control'>
                <input type='text' placeholder='Description' value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <input type='text' placeholder='Sender Number' value={sender} onChange={(e)=>setSender(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <input type='text' placeholder='Receiver Number' value={receiver} onChange={(e)=>setReceiver(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <input type='text' placeholder='Sending From:' value={departurePoint} onChange={(e)=>setDeparturePoint(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <input type='text' placeholder='Delivered To:' value={destinationPoint} onChange={(e)=>setDestinationPoint(e.target.value)}></input>
            </div>
            <div className='btn'>
                <button id='btn' onClick={sendInput}> Send Parcel</button>
            </div>
        </form>
    </div>;
 }

SendParcel.propTypes = propTypes;
SendParcel.defaultProps = defaultProps;
// #endregion

export default SendParcel;