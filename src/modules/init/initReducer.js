import { handleActions } from 'redux-actions';
import { init  } from './initActions';

const INITIAL_STATE = {
  isLoading: false,
};
 

export default handleActions({
   [init]: (state) => {
      
      
    return {
        ...state,
       isLoading: true, 
        
    };

},
 
},
INITIAL_STATE
);

