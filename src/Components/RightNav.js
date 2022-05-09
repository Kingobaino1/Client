import { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { HiddenCart } from './styles/Cart.style';
import {
  changeCurrency,
  currentCategory,
  dropDown,
  } from '../actions/index';

class RightNav extends Component {
  constructor(props){
    super(props);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.goToCart = this.goToCart.bind(this);
    this.showCart = this.showCart.bind(this);
    this.hideCart = this.hideCart.bind(this);
    this.state = {
      display: 'none',
    };
  }

  selectCurrency(e) {
    e.preventDefault();
    const currency = e.target.value;
    this.props.label(currency);
  };

  goToCart(e){
    e.preventDefault();
    this.props.category({category: 'cart'});
    this.setState({
      display: 'none',
    });
    this.props.dropCart({
      hover: false,
    });
  };

  showCart(){
    this.setState({
      display: 'inline-block',
    });
    this.props.dropCart({
      hover: '',
    });
    console.log('rgba(57, 55, 72, 0.22)')
  };

  hideCart() {
    this.setState({
      display: 'none',
    });
  };

  render() {
    if(this.props.currency.data.currencies) {
      return (
        <div className='right'>
          <ul className='nav-ul'>
            <li>
              <span>
                <label htmlFor="categories" className="">
                  <div className="">
                    <i className="fa-solid fa-dollar-sign font-style"></i>
                    <select className='options' id="filter" onChange={this.selectCurrency}>
                      {this.props.currency.data.currencies.map((item) => (
                        <option  key={item.label} value={item.label}>
                          {item.symbol} {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              </span>
            </li>
          </ul>
          <ul className='nav-ul drop-down' onClick={this.goToCart} onMouseEnter={this.showCart}
                                            onMouseLeave={this.hideCart}>
              <li ><i style={{}} className="fa-solid fa-cart-shopping"></i></li>
              <HiddenCart display={this.state.display}>
                <DropDown smallScreen='block' display='none' hideTotal='block'/>
              </HiddenCart>
          </ul>
          {this.props.quantity > 0 ?
            <div className='count'>{this.props.quantity}</div> : null
          }
        </div>
      );
    } ;
  };
};

const mapStateToProps = (state) => {
  return {
   currency: state.currencyReducer,
   quantity: state.quantityReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    label: item => dispatch(changeCurrency(item)),
    category: item => dispatch(currentCategory(item)),
    dropCart: cart => dispatch(dropDown(cart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);
