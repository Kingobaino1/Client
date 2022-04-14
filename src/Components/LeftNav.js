import { Component } from 'react';

class LeftNav extends Component {
  render(){
    return (
      <div className='left'>
        <ul className='nav-ul'>
          <li>{this.props.name}</li>
        </ul>
      </div>
    )
  }
}

export default LeftNav;
