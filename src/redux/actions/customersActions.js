import { requestGet,requestPost,requestPut,requestDelete } from '../../utils/request';
import {
  GET_CUSTOMER_FETCHING,
  GET_CUSTOMER_FULFILLED,
  GET_CUSTOMER_REJECTED,
  ADD_CUSTOMER_FETCHING,
  ADD_CUSTOMER_FULFILLED,
  ADD_CUSTOMER_REJECTED,
  DEL_CUSTOMER_FETCHING,
  DEL_CUSTOMER_FULFILLED,
  DEL_CUSTOMER_REJECTED,
  EDIT_CUSTOMER_FETCHING,
  EDIT_CUSTOMER_FULFILLED,
  EDIT_CUSTOMER_REJECTED,
} from "../types/types-customers";

//DECLARATE CONST AND IMPORT API
const URL = "https://app-caldar-gm4.herokuapp.com/api/customers";

//ACTION TO GET CUSTOMER DATA

const getCustomerFetching = () => ({
  type: GET_CUSTOMER_FETCHING,
});

const getCustomerFulfilled = (payload) => ({
  type: GET_CUSTOMER_FULFILLED,
  payload,
});

const getCustomerRejected = () => ({
  type: GET_CUSTOMER_REJECTED,
});

export const getCustomers = () => (dispatch) => {
  dispatch(getCustomerFetching());
  return requestGet(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getCustomerFulfilled(response));
    })
    .catch(() => {
      dispatch(getCustomerRejected());
    });
};

//ACTION TO ADD CUSTOMER DATA
const addCustomerFetching = () => ({
  type: ADD_CUSTOMER_FETCHING,
});

const addCustomerFulfilled = (payload) => ({
  type: ADD_CUSTOMER_FULFILLED,
  payload,
});

const addCustomerRejected = () => ({
  type: ADD_CUSTOMER_REJECTED,
});

export const addCustomer = (
  customerType,
  email,
  buildingsIds,
  fiscalAddress
) => (dispatch) => {
  dispatch(addCustomerFetching());
  const dataSend = { customerType, email, buildingsIds, fiscalAddress };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataSend),
  };

  return requestPost(URL, requestOptions)
    .then((data) => data.json())
    .then((response) => {
      dispatch(addCustomerFulfilled(response));
    })
    .then(() => dispatch(getCustomers()))
    .catch(() => {
      dispatch(addCustomerRejected());
    });
};

//ACTION TO DELETE CUSTOMER DATA

const delCustomerFetching = () => ({
  type: DEL_CUSTOMER_FETCHING,
});

const delCustomerFulfilled = (payload) => ({
  type: DEL_CUSTOMER_FULFILLED,
  payload,
});

const delCustomerRejected = () => ({
  type: DEL_CUSTOMER_REJECTED,
});

export const delCustomer = (_id) => (dispatch) => {
  dispatch(delCustomerFetching());
  const dataSend = { _id };
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataSend),
  };

  return requestDelete(`${URL}/${_id}`, requestOptions)
    .then((data) => data.json())
    .then((response) => {
      dispatch(delCustomerFulfilled(_id));
    })
    .then(() => dispatch(getCustomers()))
    .catch(() => {
      dispatch(delCustomerRejected());
    });
};

//ACTION TO EDIT CUSTOMER DATA

const editCustomerFetching = () => ({
  type: EDIT_CUSTOMER_FETCHING,
});

const editCustomerFulfilled = (payload) => ({
  type: EDIT_CUSTOMER_FULFILLED,
  payload,
});

const editCustomerRejected = () => ({
  type: EDIT_CUSTOMER_REJECTED,
});

export const editCustomer = (
  _id,
  customerType,
  email,
  buildingsIds,
  fiscalAddress
) => (dispatch) => {
  dispatch(editCustomerFetching());

  const dataSend = { _id, customerType, email, buildingsIds, fiscalAddress };
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataSend),
  };

  return requestPut(`${URL}/${_id}`, requestOptions)
    .then((data) => data.json())
    .then((response) => {
      dispatch(editCustomerFulfilled(response));
    })
    .then(() => dispatch(getCustomers()))
    .catch(() => {
      dispatch(editCustomerRejected());
    });
};
