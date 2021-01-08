import {
    GET_TECHNICIANS_FETCHING,
    GET_TECHNICIANS_FULFILLED,
    GET_TECHNICIANS_REJECTED,
    ADD_TECHNICIANS_FETCHING,
    ADD_TECHNICIANS_FULFILLED,
    ADD_TECHNICIANS_REJECTED,
    DEL_TECHNICIANS_FETCHING,
    DEL_TECHNICIANS_FULFILLED,
    DEL_TECHNICIANS_REJECTED,
    EDIT_TECHNICIANS_FETCHING,
    EDIT_TECHNICIANS_FULFILLED,
    EDIT_TECHNICIANS_REJECTED
} from '../types/types-technicians';

const URL = 'https://app-caldar-gm4.herokuapp.com/api/technician';

const getTechnicianFetching = () => ({
    type: GET_TECHNICIANS_FETCHING,
});

const getTechnicianFulfilled = (payload) => ({
    type: GET_TECHNICIANS_FULFILLED,
    payload,
});

const getTechnicianRejected = () => ({
    type: GET_TECHNICIANS_REJECTED,
});

export const getTechnicians = () => (dispatch) => {
    dispatch(getTechnicianFetching());
    return fetch(URL)
        .then(data => data.json())
        .then(response => {
            dispatch(getTechnicianFulfilled(response));
        })
        .catch(() => {
            dispatch(getTechnicianRejected ());
        })
};

const addTechnicianFetching = () => ({
    type: ADD_TECHNICIANS_FETCHING,
});

const addTechnicianFulfilled = (payload) => ({
    type: ADD_TECHNICIANS_FULFILLED,
    payload,
});

const addTechnicianRejected = () => ({
    type: ADD_TECHNICIANS_REJECTED,
});

export const addTechnician = (
    firstName,
    lastName,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity,
) => (dispatch) => {
    dispatch(addTechnicianFetching());
    const dataSend = {
        firstName,
        lastName,
        email,
        typeIds,
        skillsId,
        hour_rate,
        daily_capacity,
    };
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend),
      };
    return fetch(URL, requestOptions)
        .then(data=> data.json())
        .then(response => {
            dispatch(addTechnicianFulfilled(response));
        })
        .then(() => dispatch(getTechnicians()))
        .catch(() => {
            dispatch(addTechnicianRejected ());
        })
};

const editTechnicianFetching = () => ({
    type: EDIT_TECHNICIANS_FETCHING,
});

const editTechnicianFulfilled = (payload) => ({
    type: EDIT_TECHNICIANS_FULFILLED,
    payload,
});

const editTechnicianRejected = () => ({
    type: EDIT_TECHNICIANS_REJECTED,
});

export const editTechnician = (
    _id,
    firstName,
    lastName,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity,
) => (dispatch) => {
    dispatch(editTechnicianFetching());
    const dataSend = {
        _id,
        firstName,
        lastName,
        email,
        typeIds,
        skillsId,
        hour_rate,
        daily_capacity,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend),
      };
    return fetch(`${URL}/${_id}`, requestOptions)
        .then(data=> data.json())
        .then(response => {
            dispatch(editTechnicianFulfilled(response));
        })
        .then(() => dispatch(getTechnicians()))
        .catch(() => {
            dispatch(editTechnicianRejected ());
        })
};

const delTechnicianFetching = () => ({
    type: DEL_TECHNICIANS_FETCHING,
});

const delTechnicianFulfilled = (payload) => ({
    type: DEL_TECHNICIANS_FULFILLED,
    payload,
});

const delTechnicianRejected = () => ({
    type: DEL_TECHNICIANS_REJECTED,
});

export const delTechnician = (_id) => (dispatch) => {
    dispatch(delTechnicianFetching());
    const dataSend = { _id };
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    };
    return fetch(`${URL}/${_id}`, requestOptions)
        .then(data => data.json())
        .then(response => {
            dispatch(delTechnicianFulfilled(_id));
        })
        .then(() => dispatch(getTechnicians()))
        .catch(() => {
            dispatch(delTechnicianRejected ());
        })
};

