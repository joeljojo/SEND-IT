import { SEND_PARCEL, VIEW_PARCEL, TRACK_PARCEL, DELETE_PARCEL, EDIT_PARCEL } from '../types';

// define initial state
const initialState = {
    parcel: []
};

// ccreate the reducer
const parcelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_PARCEL:
            return {
                ...state,
                parcel: [...state.parcel, action.payload]
            };
        default:
            {
                return state;
            }
    }

}


//export the reducer
export default parcelReducer;