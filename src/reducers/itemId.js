const initialState = {
  id: ''
};

const itemIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ID':
      return { ...state, id: action.payload };
    default:
      return state;
  };
};

export default itemIdReducer;
