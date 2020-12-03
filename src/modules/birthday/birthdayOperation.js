import { addBirthday, removeBirthday } from './birthdayActions';

export function addBirthdayFunc(item) {
    return function addBirthdayThunk(dispatch) {
            console.log('addBirthdayThunk');
        dispatch(addBirthday(item));
    };
};

export function removeBirthdayFunc(itemId) {

    return function removeBirthdayThunk(dispatch) {
       
        dispatch(removeBirthday(itemId));
    };
};