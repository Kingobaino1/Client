const initialState = {
  data: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART':
      return { ...state, data: action.payload, amount: action.payload.amount };
    default:
      return state;
  };
};

export default cartReducer;
