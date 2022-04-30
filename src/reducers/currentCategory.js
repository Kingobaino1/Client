const initialState = {
  category: 'all',
};

const currentCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_CATEGORY':
      return { ...state, category: action.payload };
    default:
      return state;
  };
};

export default currentCategoryReducer;
