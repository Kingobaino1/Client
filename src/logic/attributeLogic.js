const attributeLogic = (attr) => {
  let array;
  attr.map((item) => {
    array = Object.values(item);
  })
  return{
    array,
  }
}

export default attributeLogic;
