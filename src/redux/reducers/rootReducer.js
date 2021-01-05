import appointmentsReducer from './appointmentsReducer';
import boilersReducer from './boilersReducer';
import boilerTypesReducer from './boilerTypesReducer';
import buildingsReducer from './buildingsReducer';
import customersReducer from './customersReducer';
import techniciansReducer from './techniciansReducer';
import {combineReducers} from 'redux';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    appointments: appointmentsReducer,
    boilers: boilersReducer,
    boilerTypes: boilerTypesReducer,
    buildings: buildingsReducer,
    customers: customersReducer,
    technicians: techniciansReducer,
    modal: modalReducer,
});

export default rootReducer;