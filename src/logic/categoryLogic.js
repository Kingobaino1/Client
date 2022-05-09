const categoryLogic = (products, product, currency) => {
  let total = 0;
  let symbol = '';
  products.map((item) => {
    product.map((cart) => {
      if (item.id === cart.id) {
        item.prices.map((amount) => {
          if(amount.currency.label === currency){
            const itemPrice = cart.qty * amount.amount;
            total += itemPrice
            total = Math.round(total * 100) / 100
            symbol = amount.currency.symbol
          } 
        })
      }
  })
});
const tax = Math.round(0.21 * total * 100) / 100 ;
 return {
   total,
   symbol,
   tax,
 };
};

export default categoryLogic;
