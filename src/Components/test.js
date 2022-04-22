import { Component } from 'react';
import { connect } from 'react-redux';
import{
  category,
  allProduct,
  currency,
 } from '../actions/index';

class Test extends Component {
  render() {

    return(
      <div>Hello</div>
  )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    categoryReducer: dispatch(category()),
    allProductReducer: dispatch(allProduct()),
    currencyReducer: dispatch(currency()),
  }
};

export default connect(null, mapDispatchToProps)(Test);
