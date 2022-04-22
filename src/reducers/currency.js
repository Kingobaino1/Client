const initialState = {
  data: []
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENCY':
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default currencyReducer;
