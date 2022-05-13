import { Component } from 'react';
import { connect } from 'react-redux';
import { LoadingComponent } from './styles/Loading.style' 
import{
  category,
  allProduct,
  currency,
 } from '../actions/index';

class Loading extends Component {

  render() {
    return(
      <div className='load'><LoadingComponent>Loading...</LoadingComponent></div>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryReducer: dispatch(category()),
    allProductReducer: dispatch(allProduct()),
    currencyReducer: dispatch(currency()),
  }
};

export default connect(null, mapDispatchToProps)(Loading);
