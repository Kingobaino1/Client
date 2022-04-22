import { Component } from 'react';
import { connect } from 'react-redux';

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
          <ul className='nav-ul'>
          <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   currency: state.currencyReducer,
  }
}

export default connect(mapStateToProps)(RightNav);
