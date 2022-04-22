import
{
  request,
  allProducts,
  currencies,
  }  from '../Queries/categories';

const CATEGORY = 'CATEGORY';
const ALLCAT = 'ALLCAT';
const CURRENCY = 'CURRENCY';

const category = () => async(dispatch) => {
    const response = await request
    dispatch({
      type: CATEGORY,
      payload: response.data,
    });
  };

const allProduct = () => async(dispatch) => {
  const response = await allProducts
  dispatch({
    type: ALLCAT,
    payload: response.data
  })
};

const currency = () => async(dispatch) => {
  const response = await currencies
  dispatch({
    type: CURRENCY,
    payload: response.data
  })
}

export{
  category,
  allProduct,
  currency,
}
