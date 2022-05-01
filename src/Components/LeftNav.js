import { Component } from 'react';
import { currentCategory } from '../actions/index';
import { connect } from 'react-redux';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.selectCategory = this.selectCategory.bind(this);
    this.state = {
      color: '',
      category: 'all',
    };
  };

  selectCategory(name){
    this.props.category({category: name});
    console.log(name)
  };


  render(){
    if(this.props.data.categories){
          return (
    this.props.data.categories.map((item) => {
      return (
        <div className='left' key={item.name}>
          <nav className='nav-ul'>
            <div style={{color: this.state.color}} onClick={() => this.selectCategory(item.name)}>{(item.name).toUpperCase()} </div>
          </nav>
        </div>
    );
    })
    )
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.categoryReducer.data,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    category: item => dispatch(currentCategory(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);
