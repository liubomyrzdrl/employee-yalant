import { createAction } from 'redux-actions';

export const addBirthday = createAction('ADD_BIRTHDAY');
export const addBirthdayList = createAction('ADD_BIRTHDAY_LIST');
export const removeBirthday = createAction('REMOVE_BIRTHDAY');