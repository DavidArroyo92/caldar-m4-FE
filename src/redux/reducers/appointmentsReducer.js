import {
    GET_APPOINTMENT_FETCHING,
    GET_APPOINTMENT_FULFILLED,
    GET_APPOINTMENT_REJECTED,
    ADD_APPOINTMENT_FETCHING,
    ADD_APPOINTMENT_FULFILLED,
    ADD_APPOINTMENT_REJECTED,
    DEL_APPOINTMENT_FETCHING,
    DEL_APPOINTMENT_FULFILLED,
    DEL_APPOINTMENT_REJECTED,
    EDIT_APPOINTMENT_FETCHING,
    EDIT_APPOINTMENT_FULFILLED,
    EDIT_APPOINTMENT_REJECTED} from "../actions/appointmentsActions"

const initialState = {
    isLoading: false,
    list: [],
    error: false
};

const appointmentsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case GET_APPOINTMENT_FETCHING:
            return{
                ...state,
                isLoading: true,
            };
        case GET_APPOINTMENT_FULFILLED:
            return{
                ...state,
                isLoading: false,
                list: action.payload
            };
        case GET_APPOINTMENT_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        case ADD_APPOINTMENT_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case ADD_APPOINTMENT_FULFILLED:
            return{
                ...state,
                isLoading: false,
                list:[
                    ...state.list, action.payload
                ]
            };
        case ADD_APPOINTMENT_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        case DEL_APPOINTMENT_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case DEL_APPOINTMENT_FULFILLED:
            return{
                ...state,
                list: state.list.filter(
                    (appointment) =>{
                        return appointment.id !== action.payload
                    })
                };
        case DEL_APPOINTMENT_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        case EDIT_APPOINTMENT_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case EDIT_APPOINTMENT_FULFILLED:
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            };

        case EDIT_APPOINTMENT_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        default:
             return state;
    }
}

export default appointmentsReducer;