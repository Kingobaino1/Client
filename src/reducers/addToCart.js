const initialState = []

const cartProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return [...state, action.payload];
    default:
      return state;
  };
};

export default cartProductsReducer;
