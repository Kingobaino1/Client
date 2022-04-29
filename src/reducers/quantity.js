const initialState = 0;

const quantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT':
      return action.payload + state;
    default:
      return state;
  };
};

export default quantityReducer;
