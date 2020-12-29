import {
    GET_BUILDING_FETCHING,
    GET_BUILDING_FULFILLED,
    GET_BUILDING_REJECTED,
    ADD_BUILDING_FETCHING,
    ADD_BUILDING_FULFILLED,
    ADD_BUILDING_REJECTED,
    DEL_BUILDING_FETCHING,
    DEL_BUILDING_FULFILLED,
    DEL_BUILDING_REJECTED,
    EDIT_BUILDING_FETCHING,
    EDIT_BUILDING_FULFILLED,
    EDIT_BUILDING_REJECTED
} from '../types/types-buildings.js'

//DECLARATE CONST AND IMPORT API 
const URL= "https://app-caldar-gm4.herokuapp.com/buildings";

//ACTION TO GET BUILDING DATA

const getBuildingFetching = () => ({
    type: GET_BUILDING_FETCHING,
});

const getBuildingFulfilled = (payload) => ({
    type: GET_BUILDING_FULFILLED,
    payload,

});

const getBuildingRejected = () => ({
    type: GET_BUILDING_REJECTED,
});

export const getBuildings = () => dispatch =>{
    dispatch(getBuildingFetching());
    return fetch(URL)
        .then((data)=>data.json())
        .then((response)=>{
            dispatch(getBuildingFulfilled(response));
        })
        .catch(() =>{
            dispatch(getBuildingRejected())
        });
};

//ACTION TO ADD BUILDING DATA

const addBuildingFetching = () => ({
    type: ADD_BUILDING_FETCHING,
});

const addBuildingFulfilled = (payload) => ({
    type: ADD_BUILDING_FULFILLED,
    payload,

});

const addBuildingRejected = () => ({
    type: ADD_BUILDING_REJECTED,
});

export const AddBuilding = (
    businessName,
    email,
    phone,
    adress
) => (dispatch) => {
    dispatch(addBuildingFetching());
    const dataSend = {
        businessName,
        email,
        phone,
        adress
    }; 
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(dataSend),
    };
    return fetch(URL, requestOptions)
        .then((data)=> data.json())
        .then((response) =>{
            dispatch(addBuildingFulfilled(response));
        })
        .catch(() =>{
            dispatch(addBuildingRejected())
        });
};

//ACTION TO DELETE BUILDING DATA

const delBuildingFetching = () => ({
    type: DEL_BUILDING_FETCHING,
});

const delBuildingFulfilled = (payload) => ({
    type: DEL_BUILDING_FULFILLED,
    payload,

});

const delBuildingRejected = () => ({
    type: DEL_BUILDING_REJECTED,
});

export const delBuilding = (_id) => (dispatch) =>{
    dispatch(delBuildingFetching());
    const dataSend = {_id};
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(dataSend),
    };
    return fetch(`${URL}/${_id}`, requestOptions)
        .then((data) => data.json())
        .then((response) => {
            dispatch(delBuildingFulfilled(_id));
        })
        .catch(() =>{
            dispatch(delBuildingRejected());
        });
};

//ACTION TO EDIT BUILDING DATA

const editBuildingFetching = () => ({
    type: EDIT_BUILDING_FETCHING,
});

const editBuildingFulfilled = (payload) => ({
    type: EDIT_BUILDING_FULFILLED,
    payload,

});

const editBuildingRejected = () => ({
    type: EDIT_BUILDING_REJECTED,
});

export const editBuilding = (
        _id,
        businessName,
        email,
        phone,
        adress
) => (dispatch) =>{
    dispatch(editBuildingFetching());

    const dataSend= {
        _id,
        businessName,
        email,
        phone,
        adress}
    const requestOptions = {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend),
    }
    return fetch(`${URL}/${_id}`, requestOptions )
    .then((data)=> data.json())
        .then((response) =>{
            dispatch(editBuildingFulfilled(response));
        })
        .catch(() =>{
            dispatch(editBuildingRejected())
        });
};
