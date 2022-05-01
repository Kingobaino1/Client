import { Component } from 'react';
import { connect } from 'react-redux';
import { cart, cartProducts, cartItems, quantity } from '../actions/index';

class Product extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      id: this.props.itemId.id,
    };
  };

  addToCart(e) {
    e.preventDefault();
    const item = this.props.cartReducer(this.state);
    const product = this.props.productReducer.product;
    this.props.cartProductsReducer(product);
    this.props.cartItemsReducer(item.payload);
    this.props.quantity(1);
  };

  render(){
    if(!(this.props.productReducer == null)){
      return(
          <div className='w-1'>
              <div className='sml-img-div'>
                <img src={this.props.productReducer.product.gallery[1]} alt='Products' className='sml-img' />
              </div>
            <div> 
              <img src={this.props.productReducer.product.gallery[4]} alt='Products' className='bg-img' />
            </div>
            <div>
              <div className='name'>{this.props.productReducer.product.name}</div>
              <div>
                {
                this.props.productReducer.product.attributes.length > 0 ?
                
                  this.props.productReducer.product.attributes.map((attribute) => {
                    return  <div className='color-di' key={attribute.name}>
                      <h1 key={attribute.name}>{attribute.name}:</h1>
                      <div className='d-flex'>
                        {attribute.items.map((att) => {
                          if(attribute.name === 'Color') {
                            return <div className='color-di' key={att.value}><button style={{backgroundColor: att.value}} className='color' onClick={() => {
                            }}></button></div>
                          }
                          return <div key={att.value}><button onClick={() => {
                          }}>{att.value}</button></div>
                        })
                        }
                      </div>
                      </div>
                  })
                 : <div></div>
                }
                <div>
                  <h6>Price:</h6>
                    {this.props.productReducer.product.prices.map((price) => {
                      if(price.currency.label === this.props.currency){
                        return <div key={price.amount}><span>{price.currency.symbol}</span><span>{price.amount}</span></div>
                      }
                    })}
                </div>
              </div>
              <div><button onClick={this.addToCart}>ADD TO CART</button></div>
              <div dangerouslySetInnerHTML={ { __html: this.props.productReducer.product.description } } className='w-3' /></div>
          </div>
      )
    }
  };
};

const mapStateToProps = (state) => {
  return {
    productReducer: state.productReducer.data.data,
    cartProducts: state.cartProductsReducer,
    itemId: state.itemIdReducer.id,
    currency: state.currencyReducer.label,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartReducer: item => dispatch(cart(item)),
    cartProductsReducer: (product) => dispatch(cartProducts(product)),
    cartItemsReducer: items => dispatch(cartItems(items)),
    quantity: count => dispatch(quantity(count)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
