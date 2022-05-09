import { Component } from 'react';
import { connect } from 'react-redux';
import * as CartStyles from './styles/Cart.style';
import {
  quantity,
  cartItems,
  cart
  } from '../actions/index';

class ChangeImage extends Component {
  constructor(props) {
    super(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      url: 0,
    };
  };

  nextImg(num, length){
    if(num < length){
      this.setState({
        url: this.state.url + 1,
      });
    };
  };

  prevImg(num){
    if(num > 0){
      this.setState({
        url: this.state.url - 1,
      });
    };
  };

  increment(itemsId, itemId){
     if(itemsId === itemId){
      this.props.quantity(1);
      const item = this.props.cartReducer({
        id: itemId,
        qty: 1,
      });
      this.props.qty(item.payload);
     };
  };

  decrement(itemsId, itemId, num){
     if(itemsId === itemId && num > 1){
       this.props.quantity(-1);
        const item = this.props.cartReducer({
        id: itemId,
        qty: -1,
      });
      this.props.qty(item.payload);
     };
  };

  render() {
    return (
      <div className='d-flex'>
        {this.props.cartProducts.map((item) => {
          if(item.id !== this.props.id) return null
          return (
            <div className='flex' key={item.id}>
            <CartStyles.PlusMinus onClick={() => this.increment(item.id, this.props.id)}>
              <CartStyles.PM>+</CartStyles.PM>
            </CartStyles.PlusMinus>
            <div>
              <CartStyles.PM>{this.props.count}</CartStyles.PM>
            </div>
            <CartStyles.PlusMinus onClick={() => this.decrement(item.id, this.props.id, this.props.count)}>
              <CartStyles.PM>-</CartStyles.PM>
            </CartStyles.PlusMinus>
            </div>
          )
        })}
        <div> 
        {
          this.props.cartProducts.map((item) => {
            if(item.id !== this.props.id) return null
              return (
                <CartStyles.ImageStyle width={this.props.width} height={this.props.height} key={item.id} url={`url(${item.gallery[this.state.url]})`}>
                  <CartStyles.ChangeCartImage display={this.props.display}>
                    <CartStyles.NextPrevImageIcon>
                     <i className="fa-solid fa-angle-left" 
                        onClick={() => this.prevImg(this.state.url)}></i>
                     <i className="fa-solid fa-angle-right"
                        onClick={() => this.nextImg(this.state.url, this.props.num)}></i>
                    </CartStyles.NextPrevImageIcon>
                  </CartStyles.ChangeCartImage>
                </CartStyles.ImageStyle> 
              )
            // }
          })
        }
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    productReducer: state.productReducer.data.data,
    cartProducts: state.cartProductsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    quantity: count => dispatch(quantity(count)),
    qty: items => dispatch(cartItems(items)),
    cartReducer: item => dispatch(cart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeImage);
