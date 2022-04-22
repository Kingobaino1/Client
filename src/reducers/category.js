const initialState = {
  data: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return {...state, data: action.payload};
    default:
      return state;
  }
}

export default categoryReducer;
