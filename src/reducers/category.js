const initialState = {
  data: [],
  isFetching: false
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return {...state, data: action.payload, isFetching: action.isFetching };
    default:
      return state;
  }
}

export default categoryReducer;
