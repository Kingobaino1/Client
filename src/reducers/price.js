const initialState = []

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRICE':
      const inCart = state.filter((item) => item.id === action.payload.id);
      const inCart2 =  state.filter((item) => item.id !== action.payload.id);
      if(inCart.length === 0){
        return [...state, {id: action.payload.id, symbol: action.payload.symbol, amount: action.payload.amount}];
      } else {
          return [...inCart2, {id: action.payload.id, symbol: action.payload.symbol, amount: action.payload.amount}];
      }
    default:
      return state;
  };
};

export default priceReducer;
