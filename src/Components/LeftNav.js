import { Component } from 'react';

class LeftNav extends Component {
  render(){
    return (
      <div className='left'>
        <ul className='nav-ul'>
          <button onClick={this.props.categorySelector}>{this.props.name} </button>
        </ul>
      </div>
    )
  }
}

export default LeftNav;
