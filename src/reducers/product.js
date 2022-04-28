const initialState = {
  data: [],
  isFetching: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, data: action.payload,  isFetching: action.isFetching };
    default:
      return state;
  };
};

export default productReducer;
