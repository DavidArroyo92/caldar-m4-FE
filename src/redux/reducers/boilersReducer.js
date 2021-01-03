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
  
  const initialState = {
    isLoading: false,
    list: [],
    error: false,
  };
  
  const boilersReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BOILER_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
      case GET_BOILER_FULFILLED:
        return {
          ...state,
          isLoading: false,
          list: action.payload,
        };
      case GET_BOILER_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
        };
  
      case ADD_BOILER_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
  
      case ADD_BOILER_FULFILLED:
        return {
          ...state,
          isLoading: false,
          list: [...state.list, action.payload],
        };
      case ADD_BOILER_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
        };
  
      case DEL_BOILER_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
  
      case DEL_BOILER_FULFILLED:
        return {
          ...state,
          list: state.list.filter((boiler) => {
            return boiler.id !== action.payload;
          }),
        };
      case DEL_BOILER_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
        };
  
      case EDIT_BOILER_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
  
      case EDIT_BOILER_FULFILLED:
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
  
      case EDIT_BOILER_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };
  
  export default boilersReducer;