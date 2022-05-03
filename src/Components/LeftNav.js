import { Component } from 'react';
import { category, currentCategory } from '../actions/index';
import { connect } from 'react-redux';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.selectCategory = this.selectCategory.bind(this);
    this.state = {
      selected: false,
      category: '',
    };
  };

  selectCategory(e,name){
    e.preventDefault();
    this.props.category({category: name});
    this.setState({
      selected: true,
      category: name,
    })
    // e.target.style.color = 'green';
    // e.target.removeEventListener('onClick', this.selectCategory);
  };


  render(){
    if(this.props.data.categories){
      return (
        this.props.data.categories.map((item) => {
          return (
            <div className='left' key={item.name}>
              <nav className='nav-ul'>
                <div onClick={(e) => this.selectCategory(e, item.name)}>
                       <div className={this.state.selected && (this.state.category === item.name) ? 'cat-color': 'default'}>{(item.name).toUpperCase()}</div>
                       <div className={this.state.selected && (this.state.category === item.name) ? 'bk-color': 'default'}></div>
                </div>
              </nav>
            </div>
          );
        })
      );
    };
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
