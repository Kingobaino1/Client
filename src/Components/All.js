import { Component } from 'react';
import { connect } from 'react-redux';
import Images from './Images';
import { displayProduct, itemId, currentCategory } from '../actions/index';

class All extends Component {
  constructor(props){
    super(props);
    this.goToProductPage = this.goToProductPage.bind(this);
  }

  goToProductPage(id){
     this.props.productReducer(id);
      this.props.currentItemId({id: id});
      this.props.category({category: 'pdp'});
  };

  render() {
    this.allCategory = this.props.all.data.categories;
    if(this.allCategory){
    return(
      <div className='imgs'>
        {
          (this.allCategory.map((item) => {
           return (item.name === this.props.new) ?
               item.products.map((product) => {
                  const label = product.prices;
                  for(let i = 0; i < label.length; i++){
                    if(label[i].currency.label === this.props.currency){
                      return <Images src={product.gallery[0]} name={product.name}
                                     amount={label[i].amount} symbol={label[i].currency.symbol}
                                     key={product.name}
                                     goToProductPage={() => {this.goToProductPage(product.id)}}
                             />
                    }
                  }
                }): null
              
            }
          )
          ) 
       } 
      </div>
    )}
  };
};

const mapStateToProps = (state) => {
  return {
    all: state.allProductReducer,
    currency: state.currencyReducer.label,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  productReducer: id => dispatch(displayProduct(id)),
  currentItemId: id => dispatch(itemId(id)),
  category: item => dispatch(currentCategory(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(All);
