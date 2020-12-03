import { handleActions } from 'redux-actions';
import { addBirthday, removeBirthday  } from './birthdayActions';

const INITIAL_STATE = {
    items: [],
};
 

export default handleActions({
   [addBirthday]: (state, action) => {
      
      
    return {
        ...state,
        items: [
            ...state.items,
            action.payload,
        ],
    };
},

   [removeBirthday]: (state, action) => {
       console.log(action.payload);
     return {
         ...state,
         items: state.items.filter(item => item.id !== action.payload),
    };
},
},
INITIAL_STATE
);

