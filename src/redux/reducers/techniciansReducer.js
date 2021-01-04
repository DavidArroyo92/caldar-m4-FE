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

const initialState = {
    isLoading: false,
    list: [],
    error: false
};

const techniciansReducer = (state = initialState, action) =>{
    switch(action.type) {
        case GET_TECHNICIANS_FETCHING:
            return{
                ...state,
                isLoading: true,
            };
        case GET_TECHNICIANS_FULFILLED:
            return{
                ...state,
                isLoading: false,
                list: action.payload
            };
        case GET_TECHNICIANS_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        case ADD_TECHNICIANS_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case ADD_TECHNICIANS_FULFILLED:
            return{
                ...state,
                isLoading: false,
                list:[
                    ...state.list, action.payload
                ]
            };
        case ADD_TECHNICIANS_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        case DEL_TECHNICIANS_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case DEL_TECHNICIANS_FULFILLED:
            return{
                ...state,
                list: state.list.filter(
                    (technician) =>{
                        return technician.id !== action.payload
                    })
                };
        case DEL_TECHNICIANS_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        case EDIT_TECHNICIANS_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case EDIT_TECHNICIANS_FULFILLED:
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

        case EDIT_TECHNICIANS_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        default:
             return state;
    }
}

export default techniciansReducer;