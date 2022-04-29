import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class RightNav extends Component {
  constructor(props){
    super(props);
    // this.openCart = this.openCart.bind(this);
  }

  // openCart(){
  //   return true
  // }


  render() {
    return (
      <div className='right'>
        <ul className='nav-ul'>
          <li>
            <span>
            <label htmlFor="categories" className="">
             <div className="">
               <i className="fa-solid fa-dollar-sign"></i>
            <select id="filter" onChange={this.props.handleFilterChange}>
            {this.props.currency.data.currencies.map((item) => (
            <option
              key={item.label}
              value={item.label}
            >
              
                {item.symbol} {item.label}
            </option>
          ))}
        </select>
      </div>
    </label>
            </span>
          </li>
          </ul>
          <Link to='cart'>
          <ul className='nav-ul'>
          <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
        
        </Link>
        {this.props.quantity > 0 ?
          <div className='count'>{this.props.quantity}</div> : null
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   currency: state.currencyReducer,
   quantity: state.quantityReducer
  }
}

export default connect(mapStateToProps)(RightNav);
