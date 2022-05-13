import { Component } from 'react';
import { connect } from 'react-redux';
import ChangeImage from './ChangeImage';
import currencyLogic from '../logic/currencyLogic';
import * as CartStyles from './styles/Cart.style';
import { AmountStyled } from './styles/Amount.style';
import attributeLogic from '../logic/attributeLogic';

class Cart extends Component {
  constructor(props){
    super(props);
    this.selectValue = this.selectValue.bind(this);
    this.attrArray = attributeLogic(this.props.attribute);
    this.attributeArray = this.attrArray.array;
    this.state = {
      total: 0,
      indexActive: null,
    };
    this.total = 0;
    this.symbol = '';
  };

  selectValue(e, index){
    e.preventDefault();
    this.setState({
      indexActive: index,
    });
  };
 
  render () {
    const { total, symbol, tax } = currencyLogic(
                                                 this.props.cart,
                                                 this.props.cartItems,
                                                 this.props.currency);
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
                         {attribute.items.map((att, index) => {
                           if(attribute.name === 'Color') {
                             return (
                               <div key={att.value}>
                                  <CartStyles.ColorAttribute border={(this.attributeArray.includes(att.value) || this.state.indexActive === index) ? '3px dotted #52D67A': ''}
                                                             color={att.value} onClick={(e) => this.selectValue(e, index)}>

                                  </CartStyles.ColorAttribute>
                               </div>
                             )
                           }
                           return (
                             <div key={att.value}>
                               <CartStyles.OtherAttribute bg={(this.attributeArray.includes(att.value) || this.state.indexActive === index) ? '#1D1F22': ''}
                                                          color={(this.attributeArray.includes(att.value) || this.state.indexActive === index) ? 'white': ''}
                                                          onClick={(e) => this.selectValue(e, index)}>{att.value}</CartStyles.OtherAttribute>
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
    attribute: state.attributeReducer,
  };
};

export default connect(mapStateToProps)(Cart);
