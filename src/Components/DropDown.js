import { Component } from 'react';
import { connect } from 'react-redux';
import ChangeImage from './ChangeImage';
import categoryLogic from '../logic/currencyLogic';
import attributeLogic from '../logic/attributeLogic';
import * as CartStyles from './styles/Cart.style';
import { AmountStyled } from './styles/Amount.style';
import * as DropDownStyles from './styles/DropDown.style';

class DropDown extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0,
    };
    this.total = 0;
    this.symbol = '';
  };
 
  render () {
    const { total, symbol } = categoryLogic(
                                this.props.cart,
                                this.props.cartItems,
                                this.props.currency
                              );
    if(this.props.cart.length > 0) {
      return (
        <DropDownStyles.Cart>
        <CartStyles.Hide 
        >
          {(this.props.qty > 1) ?
            <CartStyles.SmlScreen>
              <div>My Bag:</div> <div>{this.props.qty} items</div>
            </CartStyles.SmlScreen>:
            <CartStyles.SmlScreen>
              <div>My Bag:</div> <div>{this.props.qty} item</div>
            </CartStyles.SmlScreen>
          }
        </CartStyles.Hide>

        <DropDownStyles.Body>
          <div>           
          {
            this.props.cart.map((item) => {
              const qt = this.props.quantity.filter((a) => a.id === item.id)
              const length = item.gallery.length;
              this.attrArray = attributeLogic(this.props.attribute);
              this.attributeArray = this.attrArray.array;
              console.log(this.attributeArray)
              console.log(this.attrArray)
              return (
                <DropDownStyles.DropDownItems key={item.name}>
                  <div className=''>
                    <DropDownStyles.ItemName>{item.name}</DropDownStyles.ItemName>
                    <div>
                    {item.prices.map(element => {
                       if(element.currency.label !== this.props.currency) return null
                         return (
                            <DropDownStyles.Amount key={element.amount}>
                              <div>{element.currency.symbol}</div>
                              <span>{element.amount}</span>
                            </DropDownStyles.Amount>
                         )
                    })}
                    </div>
                    {item.attributes.map((attribute) =>{
                       return (<div key={attribute.name}>
                         <DropDownStyles.ItemName>{attribute.name}:</DropDownStyles.ItemName>
                         <div key={attribute.name} className='d-flex'>
                         {attribute.items.map((att, index) => {
                           if(attribute.name === 'Color') {
                             return (
                               <div key={att.value}>
                                  <DropDownStyles.Color border={(this.attributeArray.includes(att.value) || this.state.indexActive === index) ? '3px dotted #52D67A': ''}
                                                        color={att.value} onClick={(e) => this.selectValue(e, index)}>

                                  </DropDownStyles.Color>
                               </div>
                             )
                           }
                           return (
                             <div key={att.value}>
                               <DropDownStyles.OtherAttribute bg={(this.attributeArray.includes(att.value) || this.state.indexActive === index) ? '#1D1F22': ''}
                                                              color={(this.attributeArray.includes(att.value) || this.state.indexActive === index) ? 'white': ''}
                                                              Onclick={() => {}}>{att.value}
                               </DropDownStyles.OtherAttribute>
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
                                     length={length} num={length - 1} display='none'
                                     count={qt[0].qty } width='90px' height='100px' />
                      </div>
                    </div>
                </DropDownStyles.DropDownItems>
              )
            })
          }
          <CartStyles.Total hideTotal={this.props.hideTotal}>
            <div>
              <div>Total</div>
              <AmountStyled>
                <div>{symbol}</div>
                <span>{total}</span>
              </AmountStyled>
            </div>
          </CartStyles.Total >
          </div>
          <DropDownStyles.Checkout>
              <DropDownStyles.ViewBag>VIEW BAG</DropDownStyles.ViewBag>
              <DropDownStyles.Order >CHECK OUT</DropDownStyles.Order>
          </DropDownStyles.Checkout>
        </DropDownStyles.Body>
        </DropDownStyles.Cart>
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

export default connect(mapStateToProps)(DropDown);
