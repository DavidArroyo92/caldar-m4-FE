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

//DECLARATE CONST AND IMPORT API
const URL= 'https://rr-caldar-gm4.herokuapp.com/Appointments';

//ACTION TO GET APPOINTMENT DATA

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
    return fetch(URL)
        .then(data=>data.json())
        .then(response=>{
            dispatch(getAppointmentFulfilled(response));
        })
        .catch(() =>{
            dispatch(getAppointmentRejected())
        });
};

//ACTION TO ADD APPOINTMENT DATA
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

export const AddAppointment = APPOINTMENT => dispatch =>{
    dispatch(addAppointmentFetching());
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(APPOINTMENT)
    }).then(data=> data.json())
        .then(response =>{
            dispatch(addAppointmentFulfilled(response));
        })
        .catch(() =>{
            dispatch(addAppointmentRejected())
        });
};

//ACTION TO DELETE APPOINTMENT DATA

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

export const delAppointment = id => dispatch =>{
    dispatch(delAppointmentFetching());
    return fetch(`${URL}/${id}`, {
        method: 'DELETE'
    }).then(data=> data.json())
        .then(response =>{
            dispatch(delAppointmentFulfilled(id));
        })
        .catch(() =>{
            dispatch(delAppointmentRejected())
        });
};

//ACTION TO EDIT APPOINTMENT DATA

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

export const editAppointment = APPOINTMENT => dispatch =>{
    dispatch(editAppointmentFetching());
    return fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(APPOINTMENT)
    }).then(data=> data.json())
        .then(response =>{
            dispatch(editAppointmentFulfilled(response));
        })
        .catch(() =>{
            dispatch(editAppointmentRejected())
        });
};
