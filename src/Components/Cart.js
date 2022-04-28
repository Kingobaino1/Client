import { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render () {
    {
      if(this.props.cart.length > 0){
        console.log(this.props.cart)
        console.log(this.props.product)
        console.log(this.props.cartItems)
        
         return(
      <div>with data</div>
    )
      }
      return(
        <div>Without data</div>
      )
    }
    
    
  }
  
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartProductsReducer,
    product: state.productReducer,
    cartItems: state.cartItemsReducer,
  };
};

export default connect(mapStateToProps)(Cart);
