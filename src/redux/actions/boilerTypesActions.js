import {
    GET_BOILERTYPE_FETCHING,
    GET_BOILERTYPE_FULFILLED,
    GET_BOILERTYPE_REJECTED,
    ADD_BOILERTYPE_FETCHING,
    ADD_BOILERTYPE_FULFILLED,
    ADD_BOILERTYPE_REJECTED,
    DEL_BOILERTYPE_FETCHING,
    DEL_BOILERTYPE_FULFILLED,
    DEL_BOILERTYPE_REJECTED,
    EDIT_BOILERTYPE_FETCHING,
    EDIT_BOILERTYPE_FULFILLED,
    EDIT_BOILERTYPE_REJECTED,
  } from "../types/types-boilerTypes";
  
  //DECLARATE CONST AND IMPORT API
  const URL = "https://app-caldar-gm4.herokuapp.com/api/boilerType";
  
  //ACTION TO GET BOILERTYPE DATA
  
  const getBoilerTypeFetching = () => ({
    type: GET_BOILERTYPE_FETCHING,
  });
  
  const getBoilerTypeFulfilled = (payload) => ({
    type: GET_BOILERTYPE_FULFILLED,
    payload,
  });
  
  const getBoilerTypeRejected = () => ({
    type: GET_BOILERTYPE_REJECTED,
  });
  
  export const getBoilerTypes = () => (dispatch) => {
    dispatch(getBoilerTypeFetching());
    return fetch(URL)
      .then((data) => data.json())
      .then((response) => {
        dispatch(getBoilerTypeFulfilled(response));
      })
      .catch(() => {
        dispatch(getBoilerTypeRejected());
      });
  };
  
  //ACTION TO ADD BOILERTYPE DATA
  const addBoilerTypeFetching = () => ({
    type: ADD_BOILERTYPE_FETCHING,
  });
  
  const addBoilerTypeFulfilled = (payload) => ({
    type: ADD_BOILERTYPE_FULFILLED,
    payload,
  });
  
  const addBoilerTypeRejected = () => ({
    type: ADD_BOILERTYPE_REJECTED,
  });
  
  export const addBoilerType = (
    skillsId,
    type,
    stock,
    description
  ) => (dispatch) => {
    dispatch(addBoilerTypeFetching());
    const dataSend = {
      skillsId,
      type,
      stock,
      description,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    };
  
    return fetch(URL, requestOptions)
      .then((data) => data.json())
      .then((response) => {
        dispatch(addBoilerTypeFulfilled(response));
      })
      .then(() => dispatch(getBoilerTypes()))
      .catch(() => {
        dispatch(addBoilerTypeRejected());
      });
  };
  
  //ACTION TO DELETE BOILERTYPE DATA
  
  const delBoilerTypeFetching = () => ({
    type: DEL_BOILERTYPE_FETCHING,
  });
  
  const delBoilerTypeFulfilled = (payload) => ({
    type: DEL_BOILERTYPE_FULFILLED,
    payload,
  });
  
  const delBoilerTypeRejected = () => ({
    type: DEL_BOILERTYPE_REJECTED,
  });
  
  export const delBoilerType = (_id) => (dispatch) => {
    dispatch(delBoilerTypeFetching());
    const dataSend = { _id };
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    };
  
    return fetch(`${URL}/${_id}`, requestOptions)
      .then((data) => data.json())
      .then((response) => {
        dispatch(delBoilerTypeFulfilled(_id));
      })
      .then(() => dispatch(getBoilerTypes()))
      .catch(() => {
        dispatch(delBoilerTypeRejected());
      });
  };
  
  //ACTION TO EDIT BOILERTYPE DATA
  
  const editBoilerTypeFetching = () => ({
    type: EDIT_BOILERTYPE_FETCHING,
  });
  
  const editBoilerTypeFulfilled = (payload) => ({
    type: EDIT_BOILERTYPE_FULFILLED,
    payload,
  });
  
  const editBoilerTypeRejected = () => ({
    type: EDIT_BOILERTYPE_REJECTED,
  });
  
  export const editBoilerType = (
    _id,
    skillsId,
    type,
    stock,
    description
  ) => (dispatch) => {
    dispatch(editBoilerTypeFetching());
  
    const dataSend = {
      _id,
      skillsId,
      type,
      stock,
      description,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    };
  
    return fetch(`${URL}/${_id}`, requestOptions)
      .then((data) => data.json())
      .then((response) => {
        dispatch(editBoilerTypeFulfilled(response));
      })
      .then(() => dispatch(getBoilerTypes()))
      .catch(() => {
        dispatch(editBoilerTypeRejected());
      });
  };
  