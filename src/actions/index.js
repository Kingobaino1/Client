import Constants from './constants';
import
{
  request,
  allProducts,
  currencies,
  product,
  }  from '../Queries/queries';

  const {
    CATEGORY,
    ALLCAT,
    CURRENCY,
    SHOW,
    CART,
    ADD_CART,
    ID,
    CART_QUERY,
    COUNT,
  } = Constants();

const category = () => async(dispatch) => {
    const response = await request;
    dispatch({
      type: CATEGORY,
      payload: response.data,
    });
  };

const allProduct = () => async(dispatch) => {
  const response = await allProducts;
  dispatch({
    type: ALLCAT,
    payload: response.data,
  });
};

const currency = () => async(dispatch) => {
  const response = await currencies;
  dispatch({
    type: CURRENCY,
    payload: response.data,
  });
};

const displayProduct = (id) => async(dispatch) => {
  const res = await product(id);
  dispatch({
    type: SHOW,
    payload: res,
    isFetching: false,
  });
};

const cart = (item) => ({
  type: CART,
  payload: item,
});

const cartProducts = (product) => ({
  type: ADD_CART,
  payload: product,
});

const itemId = (id) => ({
  type: ID,
  payload: id,
});

const cartItems = (items) =>({
    type: CART_QUERY,
    payload: items,
  });

const quantity = (count) => ({
  type: COUNT,
  payload: count 
});

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
};
