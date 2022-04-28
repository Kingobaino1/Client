const initialState = {
  data: {},
};

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_QUERY':
      return { ...state, data: action.payload };
    default:
      return state;
  };
};

export default cartItemsReducer;
