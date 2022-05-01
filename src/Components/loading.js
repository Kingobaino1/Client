import { Component } from 'react';
import { connect } from 'react-redux';
import{
  category,
  allProduct,
  currency,
 } from '../actions/index';

class Loading extends Component {

  render() {
    return(
      <div className='load'><h1 className="loading">Loading...</h1></div>
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
