const initialState = {
  data: [],
  label: 'USD',
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENCY':
      return { ...state, data: action.payload };
    case 'CHANGE_CURRENCY':
      return { ...state, label: action.payload };
    default:
      return state;
  };
};

export default currencyReducer;
