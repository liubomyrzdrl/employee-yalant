/* eslint-disable import/no-duplicates */
import { combineReducers } from 'redux';
import employeeReducer from './employees';
import birthdayReducer from './birthday';

export default combineReducers({
    employeeReducer,
    birthdayReducer,
});

 
