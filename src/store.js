import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';


const initialState = {};

const middleware = [logger];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
