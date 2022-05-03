const initialState = [];

const cartProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const inCart = state.filter((item) => item.id === action.payload.id);
      if(inCart.length === 0){
        return [...state, action.payload];
      } else {
          return [...state];
      }
    default:
      return state;
};
};
export default cartProductsReducer;
