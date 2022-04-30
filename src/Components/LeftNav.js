import { Component } from 'react';
import { currentCategory } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LeftNav extends Component {
  constructor(props) {
    super(props);
  };

  render(){
    return (
      <div className='left'>
        <nav className='nav-ul'>
          <div style={{color: 'green'}} onClick={() => {
            
            this.props.category({category: this.props.name})}}>{(this.props.name).toUpperCase()} </div>
        </nav>
      </div>
    );
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    category: item => dispatch(currentCategory(item)),
  };
};

export default connect(null, mapDispatchToProps)(LeftNav);
