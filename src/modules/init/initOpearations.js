// eslint-disable-next-line no-unused-vars
import { addBirthdayListFunc } from '../birthday/birthdayOperation';
 
export function handleInit() {
    return function handleInitThunk (dispatch) {
        const storage = window.localStorage.getItem('e');
        if(storage) {
            const items = JSON.parse(storage);
            dispatch(addBirthdayListFunc(items.items));
             
        }
    };
};