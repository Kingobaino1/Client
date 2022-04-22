const initialState = {
  data: [],
};

const allProductReducer = (state = initialState, action) => { 
  switch (action.type) {
    case 'ALLCAT':
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default allProductReducer;
