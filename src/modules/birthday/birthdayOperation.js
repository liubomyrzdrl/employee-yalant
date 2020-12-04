import { addBirthday, addBirthdayList, removeBirthday } from './birthdayActions';

export function addBirthdayFunc(item) {
    return function addBirthdayThunk(dispatch) {
       
        dispatch(addBirthday(item));
    };
};

export function addBirthdayListFunc(items) {
    return function addBirthdayListThunk(dispatch) {
       
        dispatch(addBirthdayList(items));
    };
};

export function removeBirthdayFunc(itemId) {

    return function removeBirthdayThunk(dispatch) {
       
        dispatch(removeBirthday(itemId));
    };
};