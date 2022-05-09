const initialState = {
  hover: '',
};

const dropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DROPDOWN':
      return { ...state, hover: action.payload };
    default:
      return state;
  };
};

export default dropDownReducer;
