import * as actionTypes from './constants';
import
{
  request,
  allProducts,
  currencies,
  product,
  }  from '../Queries/queries';

const category = () => async(dispatch) => {
    const response = await request;
    dispatch({
      type: actionTypes.CATEGORY,
      payload: response.data,
      isFetching: false,
    });
  };

const allProduct = () => async(dispatch) => {
  const response = await allProducts;
  dispatch({
    type: actionTypes.ALLCAT,
    payload: response.data,
    loading: false,
  });
};

const currency = () => async(dispatch) => {
  const response = await currencies;
  dispatch({
    type: actionTypes.CURRENCY,
    payload: response.data,
  });
};

const displayProduct = (id) => async(dispatch) => {
  const res = await product(id);
  dispatch({
    type: actionTypes.SHOW,
    payload: res,
    isFetching: false,
  });
};

const cart = (item) => ({
  type: actionTypes.CART,
  payload: item,
});

const cartProducts = (product) => ({
  type: actionTypes.ADD_CART,
  payload: product,
});

const itemId = (id) => ({
  type: actionTypes.ID,
  payload: id,
});

const cartItems = (item) =>({
    type: actionTypes.CART_QUERY,
    payload: item
  });

const quantity = (count) => ({
  type: actionTypes.COUNT,
  payload: count,
});

const changeCurrency = (label) => ({
  type: actionTypes.CHANGE_CURRENCY,
  payload: label,
});

const currentCategory = (category) => ({
  type: actionTypes.CURRENT_CATEGORY,
  payload: category,
});

const price = (item) => ({
  type: actionTypes.PRICE,
  payload: item
});

const dropDown = (hover) => ({
  type: actionTypes.DROPDOWN,
  payload: hover,
})

export{
  category,
  allProduct,
  currency,
  displayProduct,
  cart,
  cartProducts,
  itemId,
  cartItems,
  quantity,
  changeCurrency,
  currentCategory,
  price,
  dropDown,
};
