// Import the types
import { SEND_PARCEL, VIEW_PARCEL, TRACK_PARCEL, DELETE_PARCEL, EDIT_PARCEL } from '../types';
import { useDispatch } from 'react-redux';
import { parcelService } from '../Services/parcelService';


//create actions
const sendParcel = (parcel) => {

    return disptach => {
        let payload = {
            description: parcel.description,
            sendernumber: parcel.sendernumber,
            receivernumber: parcel.receivernumber,
            from: parcel.sendingfrom,
            to: parcel.deliveredto
        }
    };
};


const deleteParcel = (id) => {
    return {
        type: DELETE_PARCEL,
        payload: id,
    };
};

const editParcel = (parcels) => {
    return {
        type: EDIT_PARCEL,
        payload: parcels,
    };
};

export { sendParcel, deleteParcel, editParcel };