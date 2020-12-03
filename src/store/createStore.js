import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  logger  from 'redux-logger';
import reducer from '../modules';


const store = createStore(reducer, applyMiddleware( thunk, logger ));

export const useStore = () => store;

export  default store;