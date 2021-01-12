import {
    LOGIN_FETCHING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    LOGOUT_FETCHING,
    LOGOUT_FULFILLED,
    LOGOUT_REJECTED,
    SET_AUTHENTIFICATION
} from '../types/types-auth';

const initialState = {
    isLoading: false,
    error: false,
    authenticated: false
};

const authReducer = (state = initialState, action) =>{
    switch(action.type) {
        case LOGIN_FETCHING:
            return{
                ...state,
                isLoading: true,
            };
        case LOGIN_FULFILLED:
            return{
                ...state,
                isLoading: false,
                authenticated: true
            };
        case LOGIN_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        case LOGOUT_FETCHING:
            return{
                ...state,
                isLoading: true,
            };
        case LOGOUT_FULFILLED:
            return{
                ...state,
                isLoading: false,
                error: false,
                authenticated: false
            };
        case LOGOUT_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        case SET_AUTHENTIFICATION:
            return{
                ...state,
                authenticated: true
            };
        default:
            return state;
    }
}

export default authReducer;