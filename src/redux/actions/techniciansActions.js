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

export const addTechnicians = technician => (dispatch) => {
    dispatch(addTechniciansFetching());
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(technician)
    }).then(data=> data.json())
        .then(data => data.json())
        .then(response => {
            dispatch(addTechniciansFulfilled(response));
        })
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

export const editTechnicians = technician => (dispatch) => {
    dispatch(editTechniciansFetching());
    return fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(technician)
    }).then(data=> data.json())
        .then(response => {
            dispatch(editTechniciansFulfilled(response));
        })
        .catch(() => {
            dispatch(editTechniciansRejected ());
        })
};

const deleteTechniciansFetching = () => ({
    type: DEL_TECHNICIANS_FETCHING,
});

const deleteTechniciansFulfilled = (payload) => ({
    type: DEL_TECHNICIANS_FULFILLED,
    payload,
});

const deleteTechniciansRejected = () => ({
    type: DEL_TECHNICIANS_REJECTED,
});

export const deleteTechnicians = id => (dispatch) => {
    dispatch(deleteTechniciansFetching());
    return fetch(`${URL}/${id}`, {
        method:'DELETE'})
        .then(data => data.json())
        .then(response => {
            dispatch(deleteTechniciansFulfilled(id));
        })
        .catch(() => {
            dispatch(deleteTechniciansRejected ());
        })
};

