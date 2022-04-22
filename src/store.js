import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import categoryReducer from './reducers/category';
import allProductReducer from './reducers/allItems';
import currencyReducer from './reducers/currency';

const middleWares = [thunk, logger]
const reducers = combineReducers({
  categoryReducer,
  allProductReducer,
  currencyReducer,
});

const store = createStore(reducers, applyMiddleware(...middleWares));

export default store;
