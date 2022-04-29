const initialState = [];

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_QUERY':
      return [ ...state, action.payload ];
    default:
      return state;
  };
};

export default cartItemsReducer;
