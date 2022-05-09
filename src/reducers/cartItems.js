const initialState = []

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_QUERY':
      const inCart = state.filter((item) => item.id === action.payload.id);
      const inCart2 =  state.filter((item) => item.id !== action.payload.id);
      if(inCart.length === 0){
        return [...state,
                  {
                    id: action.payload.id,
                    qty: action.payload.qty + 1,
                    amount: action.payload.amount
                  }
               ];
      } else {
          return [...inCart2,
                     {
                       id: action.payload.id,
                       qty: inCart[0].qty + action.payload.qty,
                       amount: inCart[0].amount
                     }
                  ];
      }
    default:
      return state;
  };
};

export default cartItemsReducer;
