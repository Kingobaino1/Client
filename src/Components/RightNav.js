import { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeCurrency,
  currentCategory
  } from '../actions/index';

class RightNav extends Component {
  constructor(props){
    super(props);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.goToCart = this.goToCart.bind(this);
  }

  selectCurrency(e) {
    e.preventDefault();
    const currency = e.target.value;
    this.props.label(currency);
  };

  goToCart(e){
    e.preventDefault();
    this.props.category({category: 'cart'});
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
                    <i className="fa-solid fa-dollar-sign"></i>
                    <select id="filter" onChange={this.selectCurrency}>
                      {this.props.currency.data.currencies.map((item) => (
                        <option key={item.label} value={item.label}>
                          {item.symbol} {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              </span>
            </li>
          </ul>
          <ul className='nav-ul' onClick={this.goToCart}>
              <li><i className="fa-solid fa-cart-shopping"></i></li>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);
