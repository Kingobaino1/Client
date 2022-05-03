import { adjustQtyDown } from "../actions";

const initialState = {
  num: 0,
}

const adjustQtyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QTY_UP':
      // const increase = state.filter((item) => item.payload.id === action.payload.id);
      // const remove = state.filter((item) => item.payload.id !== action.payload.id);
      // // state.map((item) => {
      //   if(increase.length === 0){
      //     return [...state, {id: action.payload.id, qty: action.payload.qty}];
      //   } else {
      //     return [...remove, {id: action.id, up: increase[0].up + 1}]
          // console.log(1)
          //   increase[0][action.value] ++
          // state.map((item) => {
          //   if(item.id.id === action.id.id){
          //   item['id']['up'] = item.id.up + 1;
          //   return state }
          // })
          
        // };
      // });
    case 'QTY_DOWN':
      return { ...state, num: state.num + action.payload}
    default:
      return state;
  };
};

export default adjustQtyReducer;
