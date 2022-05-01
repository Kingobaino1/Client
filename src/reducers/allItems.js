const initialState = {
  data: [],
  loading: false,
};

const allProductReducer = (state = initialState, action) => { 
  switch (action.type) {
    case 'ALLCAT':
      return { ...state, data: action.payload, loading: action.loading };
    default:
      return state;
  }
}

export default allProductReducer;
