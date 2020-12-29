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

const URL = 'https://app-caldar-gm4.herokuapp.com/technician';

const getTechniciansFetching = () => ({
    type: GET_TECHNICIANS_FETCHING,
});

const getTechniciansFulfilled = (payload) => ({
    type: GET_TECHNICIANS_FULFILLED,
    payload,
});

const getTechniciansRejected = () => ({
    type: GET_TECHNICIANS_REJECTED,
});

export const getTechnicians = () => (dispatch) => {
    dispatch(getTechniciansFetching());
    return fetch(URL)
        .then(data => data.json())
        .then(response => {
            dispatch(getTechniciansFulfilled(response));
        })
        .catch(() => {
            dispatch(getTechniciansRejected ());
        })
};

const addTechniciansFetching = () => ({
    type: ADD_TECHNICIANS_FETCHING,
});

const addTechniciansFulfilled = (payload) => ({
    type: ADD_TECHNICIANS_FULFILLED,
    payload,
});

const addTechniciansRejected = () => ({
    type: ADD_TECHNICIANS_REJECTED,
});

export const addTechnicians = (
    firstName,
    lastName,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity,
) => (dispatch) => {
    dispatch(addTechniciansFetching());
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
            dispatch(addTechniciansFulfilled(response));
        })
        .then(() => dispatch(getTechnicians()))
        .catch(() => {
            dispatch(addTechniciansRejected ());
        })
};

const editTechniciansFetching = () => ({
    type: EDIT_TECHNICIANS_FETCHING,
});

const editTechniciansFulfilled = (payload) => ({
    type: EDIT_TECHNICIANS_FULFILLED,
    payload,
});

const editTechniciansRejected = () => ({
    type: EDIT_TECHNICIANS_REJECTED,
});

export const editTechnicians = (
    _id,
    firstName,
    lastName,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity,
) => (dispatch) => {
    dispatch(editTechniciansFetching());
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
            dispatch(editTechniciansFulfilled(response));
        })
        .then(() => dispatch(getTechnicians()))
        .catch(() => {
            dispatch(editTechniciansRejected ());
        })
};

const delTechniciansFetching = () => ({
    type: DEL_TECHNICIANS_FETCHING,
});

const delTechniciansFulfilled = (payload) => ({
    type: DEL_TECHNICIANS_FULFILLED,
    payload,
});

const delTechniciansRejected = () => ({
    type: DEL_TECHNICIANS_REJECTED,
});

export const delTechnicians = (_id) => (dispatch) => {
    dispatch(delTechniciansFetching());
    const dataSend = { _id };
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    };
    return fetch(`${URL}/${_id}`, requestOptions)
        .then(data => data.json())
        .then(response => {
            dispatch(delTechniciansFulfilled(_id));
        })
        .then(() => dispatch(getTechnicians()))
        .catch(() => {
            dispatch(delTechniciansRejected ());
        })
};

