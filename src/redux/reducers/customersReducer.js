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

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CUSTOMER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_CUSTOMER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ADD_CUSTOMER_FETCHING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_CUSTOMER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    case ADD_CUSTOMER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case DEL_CUSTOMER_FETCHING:
      return {
        ...state,
        isLoading: true,
      };

    case DEL_CUSTOMER_FULFILLED:
      return {
        ...state,
        list: state.list.filter((customer) => {
          return customer.id !== action.payload;
        }),
      };
    case DEL_CUSTOMER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case EDIT_CUSTOMER_FETCHING:
      return {
        ...state,
        isLoading: true,
      };

    case EDIT_CUSTOMER_FULFILLED:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      };

    case EDIT_CUSTOMER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default customersReducer;
