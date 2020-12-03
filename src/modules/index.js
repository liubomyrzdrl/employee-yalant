/* eslint-disable import/no-duplicates */
import { combineReducers } from 'redux';
import employeeReducer from './employees';
import birthdayReducer from './birthday';
import initReducer from './init';

export default combineReducers({
    employeeReducer,
    birthdayReducer,
    initReducer,
});

 
