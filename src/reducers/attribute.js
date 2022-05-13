const initialState = [];

const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ATTRIBUTE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default attributeReducer;
