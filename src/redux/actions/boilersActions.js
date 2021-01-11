import { requestGet,requestPost,requestPut,requestDelete } from '../../utils/request';
import {
  GET_BOILER_FETCHING,
  GET_BOILER_FULFILLED,
  GET_BOILER_REJECTED,
  ADD_BOILER_FETCHING,
  ADD_BOILER_FULFILLED,
  ADD_BOILER_REJECTED,
  DEL_BOILER_FETCHING,
  DEL_BOILER_FULFILLED,
  DEL_BOILER_REJECTED,
  EDIT_BOILER_FETCHING,
  EDIT_BOILER_FULFILLED,
  EDIT_BOILER_REJECTED,
} from "../types/types-boilers";

//DECLARATE CONST AND IMPORT API
const URL = "https://app-caldar-gm4.herokuapp.com/api/boilers";

//ACTION TO GET BOILER DATA

const getBoilerFetching = () => ({
  type: GET_BOILER_FETCHING,
});

const getBoilerFulfilled = (payload) => ({
  type: GET_BOILER_FULFILLED,
  payload,
});

const getBoilerRejected = () => ({
  type: GET_BOILER_REJECTED,
});

export const getBoilers = () => (dispatch) => {
  dispatch(getBoilerFetching());
  return requestGet(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBoilerFulfilled(response));
    })
    .catch(() => {
      dispatch(getBoilerRejected());
    });
};

//ACTION TO ADD BOILER DATA
const addBoilerFetching = () => ({
  type: ADD_BOILER_FETCHING,
});

const addBoilerFulfilled = (payload) => ({
  type: ADD_BOILER_FULFILLED,
  payload,
});

const addBoilerRejected = () => ({
  type: ADD_BOILER_REJECTED,
});

export const addBoiler = (
  typeId,
  maintainceRate,
  hourMaintainceCost,
  hourEventualCost
) => (dispatch) => {
  dispatch(addBoilerFetching());
  const dataSend = {
    typeId,
    maintainceRate,
    hourMaintainceCost,
    hourEventualCost,
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataSend),
  };

  return requestPost(URL, requestOptions)
    .then((data) => data.json())
    .then((response) => {
      dispatch(addBoilerFulfilled(response));
    })
    .then(() => dispatch(getBoilers()))
    .catch(() => {
      dispatch(addBoilerRejected());
    });
};

//ACTION TO DELETE BOILER DATA

const delBoilerFetching = () => ({
  type: DEL_BOILER_FETCHING,
});

const delBoilerFulfilled = (payload) => ({
  type: DEL_BOILER_FULFILLED,
  payload,
});

const delBoilerRejected = () => ({
  type: DEL_BOILER_REJECTED,
});

export const delBoiler = (_id) => (dispatch) => {
  dispatch(delBoilerFetching());
  const dataSend = { _id };
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataSend),
  };

  return requestDelete(`${URL}/${_id}`, requestOptions)
    .then((data) => data.json())
    .then((response) => {
      dispatch(delBoilerFulfilled(_id));
    })
    .then(() => dispatch(getBoilers()))
    .catch(() => {
      dispatch(delBoilerRejected());
    });
};

//ACTION TO EDIT BOILER DATA

const editBoilerFetching = () => ({
  type: EDIT_BOILER_FETCHING,
});

const editBoilerFulfilled = (payload) => ({
  type: EDIT_BOILER_FULFILLED,
  payload,
});

const editBoilerRejected = () => ({
  type: EDIT_BOILER_REJECTED,
});

export const editBoiler = (
  _id,
  typeId,
  maintainceRate,
  hourMaintainceCost,
  hourEventualCost
) => (dispatch) => {
  dispatch(editBoilerFetching());

  const dataSend = {
    _id,
    typeId,
    maintainceRate,
    hourMaintainceCost,
    hourEventualCost,
  };
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataSend),
  };

  return requestPut(`${URL}/${_id}`, requestOptions)
    .then((data) => data.json())
    .then((response) => {
      dispatch(editBoilerFulfilled(response));
    })
    .then(() => dispatch(getBoilers()))
    .catch(() => {
      dispatch(editBoilerRejected());
    });
};
