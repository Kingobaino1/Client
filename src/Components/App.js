import { Component } from 'react';
import LeftNav from './LeftNav';
import MiddleNav from './MiddleNav';
import RightNav from './RightNav';
import { connect } from 'react-redux';
import Loading from './loading';
import Images from './Images';
import Product from './Product';
import Cart from './Cart';
import { itemId, displayProduct } from '../actions/index';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: 'all',
      currency: 'USD',
      symbol: '$',
      amount: 0,
      id: '',
      cart: false,
    };
  }

  render() {
    this.cat = this.props.category.data;
    this.state1 = this.props.allProducts.data.categories;
    if (this.cat && this.state1) {
      console.log(this.state1)
      return (
        <div>
          <div className='nav'>
             {this.cat.categories.map((item) => {
              return <LeftNav name={item.name} key={item.name} />
            })} 
            <MiddleNav />
            <RightNav />   
          </div>
          { (this.state.id.length === 0) ? 
              <div className='imgs'>
                { 
                  this.state1.map((item) => {
                    if(item.name === this.props.cate.category) {
                      return item.products.map((products) => {
                        let label = products.prices;
                        for(let i = 0; i < label.length; i++) {
                          if(label[i].currency.label === this.props.currency) {
                          return (
                            <div onClick={() => {
                              this.setState({
                                id: products.id,
                                symbol: label[i].currency.symbol,
                                amount: label[i].amount,
                              })
                              this.props.productReducer(products.id)
                              this.props.currentItemId({id: products.id});
                              }} key={products.name}>
                                <Images src={products.gallery[0]} name={products.name}
                                        amount={label[i].amount} symbol={label[i].currency.symbol}
                                        key={products.name}
                                />          
                            </div>
                          );
                        };
                        }
                      });
                    } return null;
                  })
                }
              </div> :
              <>
              <Product sign={this.state.symbol} amount={this.state.amount} />
              <Cart />
              </>
          }
        </div>
      )
    }
    return (
      <div>
        <Loading />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.categoryReducer,
    cate:state.currentCategoryReducer.category,
    allProducts: state.allProductReducer,
    productPage: state.productReducer.data.data,
    currency: state.currencyReducer.label
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  productReducer: id => dispatch(displayProduct(id)),
  currentItemId: id => dispatch(itemId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
