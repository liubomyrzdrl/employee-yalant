import { handleActions } from 'redux-actions';
import { getEmloyeesStart, getEmloyeesSuccess, getEmloyeesError } from './employeesActions';

const INITIAL_STATE = {
    items: [],
    isLoading: false,
    isSuccess: false,
    isError: null,
};

export default handleActions({
    [getEmloyeesStart]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },

    [getEmloyeesSuccess]: (state, action) => {
        return {
            ...state,
            items: action.payload,
            isLoading: false,
            isSuccess: true,
        };
    },

    [getEmloyeesError]: (state) => {
        return {
            ...state,
            isError: true,
        };
    },

},
INITIAL_STATE
);