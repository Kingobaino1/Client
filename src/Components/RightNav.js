import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class RightNav extends Component {
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
        {this.props.carts.length > 0 ?
          <div className='count'>{this.props.carts.length}</div> : null
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   currency: state.currencyReducer,
   carts: state.cartProductsReducer
  }
}

export default connect(mapStateToProps)(RightNav);
