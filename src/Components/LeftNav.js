import { Component } from 'react';
import { currentCategory } from '../actions/index';
import { connect } from 'react-redux';
import { SelectCategory } from './styles/Category.style';

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
    });
  };

  render(){
    if(this.props.data.categories){
      return (
        this.props.data.categories.map((item) => {
          return (
            <div className='left' key={item.name}>
              <nav className='nav-ul'>
                <SelectCategory onClick={(e) => this.selectCategory(e, item.name)} >
                       <div className="font-style left-nav {this.state.selected && (this.state.category === item.name) ?
                                       'cat-color': 'default'}">
                         {(item.name).toUpperCase()}
                      </div>
                       <div className={this.state.selected && (this.state.category === item.name) ? 
                                      'bk-color': 'default'}></div>
                </SelectCategory>
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
