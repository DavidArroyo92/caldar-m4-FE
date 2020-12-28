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
    EDIT_BUILDING_REJECTED} from '../actions/buildingsActions'

const initialState = {
    isLoading: false,
    list: [],
    error: false
};

const buildingsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case GET_BUILDING_FETCHING:
            return{
                ...state,
                isLoading: true,
            };
        case GET_BUILDING_FULFILLED:
            return{
                ...state,
                isLoading: false,
                list: action.payload
            };
        case GET_BUILDING_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };
        
        case ADD_BUILDING_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case ADD_BUILDING_FULFILLED:
            return{
                ...state,
                isLoading: false,
                list:[
                    ...state.list, action.payload
                ]
            };
        case ADD_BUILDING_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        case DEL_BUILDING_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case DEL_BUILDING_FULFILLED:
            return{
                ...state,
                list: state.list.filter(
                    (building) =>{
                        return building.id !== action.payload
                    })
                };
        case DEL_BUILDING_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        case EDIT_BUILDING_FETCHING:
            return{
                ...state,
                isLoading: true,
            };

        case EDIT_BUILDING_FULFILLED:
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

        case EDIT_BUILDING_REJECTED:
            return{
                ...state,
                isLoading: false,
                error: true
            };

        default:
             return state;
    }
}

export default buildingsReducer;