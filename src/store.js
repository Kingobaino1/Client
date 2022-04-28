import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import categoryReducer from './reducers/category';
import allProductReducer from './reducers/allItems';
import currencyReducer from './reducers/currency';
import productReducer from './reducers/product';
import cartReducer from './reducers/cart';
import cartProductsReducer from './reducers/addToCart';
import itemIdReducer from './reducers/itemId';
import cartItemsReducer from './reducers/cartItems';

const middleWares = [thunk, logger]
const reducers = combineReducers({
  categoryReducer,
  allProductReducer,
  currencyReducer,
  productReducer,
  cartReducer,
  cartProductsReducer,
  itemIdReducer,
  cartItemsReducer,
});

const store = createStore(reducers, applyMiddleware(...middleWares));

export default store;
