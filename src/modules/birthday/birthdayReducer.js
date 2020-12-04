import { handleActions } from 'redux-actions';
import { addBirthday, addBirthdayList, removeBirthday  } from './birthdayActions';

const INITIAL_STATE = {
    items: [
      
    ],
};
 

export default handleActions({
   [addBirthday]: (state, action) => {
        window.localStorage.setItem('e', JSON.stringify({
        ...state,
        items: [
            ...state.items,
            action.payload,
        ],
      }));
      
    return {
        ...state,
        items: [
            ...state.items,
            action.payload,
        ],
        
    };

},
   [addBirthdayList]: (state, action) => {
        
    return {
        ...state,
         items: action.payload,
        
        
    };

},

   [removeBirthday]: (state, action) => {
    window.localStorage.removeItem('e');
     return {
         ...state,
         items: state.items.filter(item => item.id !== action.payload),
    };
},
},
INITIAL_STATE
);

