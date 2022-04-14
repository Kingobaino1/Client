import { Component } from 'react';

class RightNav extends Component {
  render() {
    return (
      <div className='right'>
        <ul className='nav-ul'>
          <li>
            <span>
              <i className="fa-solid fa-dollar-sign"></i>
              <i className="fa-solid fa-angle-down"></i>
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

export default RightNav;
