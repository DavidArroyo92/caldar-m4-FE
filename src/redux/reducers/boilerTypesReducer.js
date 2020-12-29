import {
    GET_BOILERTYPE_FETCHING,
    GET_BOILERTYPE_FULFILLED,
    GET_BOILERTYPE_REJECTED,
    ADD_BOILERTYPE_FETCHING,
    ADD_BOILERTYPE_FULFILLED,
    ADD_BOILERTYPE_REJECTED,
    DELETE_BOILERTYPE_FETCHING,
    DELETE_BOILERTYPE_FULFILLED,
    DELETE_BOILERTYPE_REJECTED,
    EDIT_BOILERTYPE_FETCHING,
    EDIT_BOILERTYPE_FULFILLED,
    EDIT_BOILERTYPE_REJECTED} from "../types/types-boilerTypes"

const initialState = {
    isLoading: false,
    list: [],
    error: false
};

const boilerTypesReducer = (state = initialState, action) =>{
    switch(action.type) {
        case GET_BOILERTYPE_FETCHING:
            return{
                ...state,
                isLoading: true,
            };
        case GET_BOILERTYPE_FULFILLED:
            return{
                ...state,
                isLoading: false,
                list: action.payload
            };
        case GET_BOILERTYPE_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        case ADD_BOILERTYPE_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case ADD_BOILERTYPE_FULFILLED:
            return{
                ...state,
                isLoading: false,
                list:[
                    ...state.list, action.payload
                ]
            };
        case ADD_BOILERTYPE_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        case DELETE_BOILERTYPE_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case DELETE_BOILERTYPE_FULFILLED:
            return{
                ...state,
                list: state.list.filter(
                    (boilerType) =>{
                        return boilerType._id !== action.payload
                    })
                };
        case DELETE_BOILERTYPE_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        case EDIT_BOILERTYPE_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case EDIT_BOILERTYPE_FULFILLED:
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        _id: action._id,
                        text: action.text,
                        completed: false
                    }
                ]
            };

        case EDIT_BOILERTYPE_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        default:
             return state;
    }
}

export default boilerTypesReducer;