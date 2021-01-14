import { requestGet,requestPost,requestPut,requestDelete } from '../../utils/request';
import {
    GET_APPOINTMENT_FETCHING,
    GET_APPOINTMENT_FULFILLED,
    GET_APPOINTMENT_REJECTED,
    ADD_APPOINTMENT_FETCHING,
    ADD_APPOINTMENT_FULFILLED,
    ADD_APPOINTMENT_REJECTED,
    DEL_APPOINTMENT_FETCHING,
    DEL_APPOINTMENT_FULFILLED,
    DEL_APPOINTMENT_REJECTED,
    EDIT_APPOINTMENT_FETCHING,
    EDIT_APPOINTMENT_FULFILLED,
    EDIT_APPOINTMENT_REJECTED
} from '../types/types-appointments'

const URL= 'https://app-caldar-gm4.herokuapp.com/api/appointment';


const getAppointmentFetching = () => ({
    type: GET_APPOINTMENT_FETCHING,
});

const getAppointmentFulfilled = (payload) => ({
    type: GET_APPOINTMENT_FULFILLED,
    payload,

});

const getAppointmentRejected = () => ({
    type: GET_APPOINTMENT_REJECTED,
});

export const getAppointments = () => dispatch =>{
    dispatch(getAppointmentFetching());
    return requestGet(URL)
        .then(data=>data.json())
        .then(response=>{
            dispatch(getAppointmentFulfilled(response));
        })
        .catch(() =>{
            dispatch(getAppointmentRejected())
        });
};


const addAppointmentFetching = () => ({
    type: ADD_APPOINTMENT_FETCHING,
});

const addAppointmentFulfilled = (payload) => ({
    type: ADD_APPOINTMENT_FULFILLED,
    payload,

});

const addAppointmentRejected = () => ({
    type: ADD_APPOINTMENT_REJECTED,
});

export const addAppointment = (buildingId,boilerId,start_timestamp,end_timestamp ) => dispatch =>{
    dispatch(addAppointmentFetching());
    const dataSend = { buildingId,boilerId,start_timestamp,end_timestamp };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    };
    return requestPost(URL,requestOptions)
        .then(data=> data.json())
        .then(response =>{
            dispatch(addAppointmentFulfilled(response));
        })
        .then(() => dispatch(getAppointments()))
        .catch(() =>{
            dispatch(addAppointmentRejected())
        });
};


const delAppointmentFetching = () => ({
    type: DEL_APPOINTMENT_FETCHING,
});

const delAppointmentFulfilled = (payload) => ({
    type: DEL_APPOINTMENT_FULFILLED,
    payload,

});

const delAppointmentRejected = () => ({
    type: DEL_APPOINTMENT_REJECTED,
});

export const delAppointment = (_id) => dispatch =>{
    dispatch(delAppointmentFetching());
    const dataSend = { _id };
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend),
    };
    return requestDelete(`${URL}/${_id}`, requestOptions)
    .then(data=> data.json())
        .then(response =>{
            dispatch(delAppointmentFulfilled(_id));
        })
        .then(() => dispatch(getAppointments()))
        .catch(() =>{
            dispatch(delAppointmentRejected())
        });
};


const editAppointmentFetching = () => ({
    type: EDIT_APPOINTMENT_FETCHING,
});

const editAppointmentFulfilled = (payload) => ({
    type: EDIT_APPOINTMENT_FULFILLED,
    payload,

});

const editAppointmentRejected = () => ({
    type: EDIT_APPOINTMENT_REJECTED,
});

export const editAppointment = (_id,buildingId,boilerId,start_timestamp,end_timestamp ) => dispatch =>{
    dispatch(editAppointmentFetching());
    const dataSend = {_id, buildingId,boilerId,start_timestamp,end_timestamp };
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend),
  };
    return requestPut(`${URL}/${_id}`, requestOptions)
        .then(data=> data.json())
        .then(response => {
            dispatch(editAppointmentFulfilled(response));
        })
        .then(() => dispatch(getAppointments()))
        .catch(() =>{
            dispatch(editAppointmentRejected())
        });
};
