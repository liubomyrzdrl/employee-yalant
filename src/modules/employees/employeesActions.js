import { createAction } from 'redux-actions';

export const getEmloyeesStart = createAction('GET_EMPLOYEES_START');
export const getEmloyeesSuccess = createAction('GET_EMPLOYEES_SUCCESS');
export const getEmloyeesError = createAction('GET_EMPLOYEES_ERROR');