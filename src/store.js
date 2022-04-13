import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './reducers/category'

const reducers = combineReducers({
  categoryReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
