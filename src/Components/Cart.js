import { Component } from 'react';
import { connect } from 'react-redux';
import ChangeImage from './ChangeImage';
import categoryLogic from '../logic/categoryLogic';
import * as CartStyles from './styles/Cart.style';
import { AmountStyled } from './styles/Amount.style';

class Cart extends Component {
  constructor(props){
    super(props);
    this.selectColor = this.selectColor.bind(this);
    this.state = {
      total: 0,
    };
    this.total = 0;
    this.symbol = '';
  };

  selectColor = (color) => (e) => {
    console.log(color);
    console.log(e)
  }
 
  render () {
    const { total, symbol, tax } = categoryLogic(this.props.cart, this.props.cartItems, this.props.currency);
    if(this.props.cart.length > 0) {
      return (
        <CartStyles.CartContainer>
        <CartStyles.CartTitle display={this.props.display}>
          CART
        </CartStyles.CartTitle>
        <div>
          <div className='w'>           
          {
            this.props.cart.map((item) => {
              const qt = this.props.quantity.filter((a) => a.id === item.id)
              const length = item.gallery.length;
              return (
                <CartStyles.CartBody key={item.name}>
                  <div className=''>
                    <CartStyles.CartName>{item.name}</CartStyles.CartName>
                    <div>
                    {item.prices.map(element => {
                       if(element.currency.label !== this.props.currency) return null
                         return (
                            <AmountStyled key={element.amount}>
                              <div>{element.currency.symbol}</div>
                              <span>{element.amount}</span>
                            </AmountStyled>
                         )
                    })}
                    </div>
                    {item.attributes.map((attribute) =>{
                       return (<div key={attribute.name}>
                         <CartStyles.AttributeName>{attribute.name}:</CartStyles.AttributeName>
                         <div key={attribute.name} className='d-flex'>
                         {attribute.items.map((att) => {
                           if(attribute.name === 'Color') {
                             return (
                               <div key={att.value}>
                                  <CartStyles.ColorAttribute color={att.value} onClick={() => console.log('hello world')}>

                                  </CartStyles.ColorAttribute>
                               </div>
                             )
                           }
                           return (
                             <div key={att.value}>
                               <CartStyles.OtherAttribute onClick={this.selectColor(att.value)}>{att.value}</CartStyles.OtherAttribute>
                             </div>
                           )
                          
                         })
                         }
                       </div>
                       </div>
                       )
                    })}
                    </div> 
                 
                    <div className='d-flex'>
                      <div className='d-flex'>
                        <ChangeImage id={qt[0].id} init={qt[0].qty}
                                     length={length} num={length - 1} display='block'
                                     count={qt[0].qty } width='200px' height='200px' />
                      </div>
                    </div>
                </CartStyles.CartBody>
              )
            })
          }
          </div>
          <CartStyles.CartFooter>                            
            <AmountStyled>
              Tax 21%: <div style={{paddingBottom: '2px'}}>{symbol}</div>
              <span>{tax}</span>
            </AmountStyled>
            <div style={{paddingBottom: '2px'}}>Quantity: {this.props.qty}</div>
            <AmountStyled style={{paddingTop: '2px'}}>
              Total: <div>{symbol}</div>
              <span>{total}</span>
              </AmountStyled>
              <CartStyles.Order onClick={() => {}}>ORDER</CartStyles.Order>
          </CartStyles.CartFooter>
        </div>
        </CartStyles.CartContainer>
    )
    }
  return null
  } 
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartProductsReducer,
    cartItems: state.cartItemsReducer,
    qty: state.quantityReducer,
    quantity: state.cartItemsReducer,
    currency: state.currencyReducer.label,
  };
};

export default connect(mapStateToProps)(Cart);
