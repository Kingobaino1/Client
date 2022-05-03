import { Component } from 'react';
import { connect } from 'react-redux';
import { quantity } from '../actions/index';

class ChangeImage extends Component {
  constructor(props) {
    super(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      url: 0,
      qty: this.props.init,
    };
  };

  nextImg(num, length){
    if(num < length){
      this.setState({
        url: this.state.url + 1,
      });
    };
  };

  prevImg(num){
    if(num > 0){
      this.setState({
        url: this.state.url - 1,
      });
    };
  };

  increment(itemsId, itemId){
     if(itemsId === itemId){
      this.setState({
        qty: this.state.qty + 1,
      });
      this.props.quantity(1);
     };
  };

  decrement(itemsId, itemId, num){
     if(itemsId === itemId && num > 1){
       this.props.quantity(-1);
        this.setState({
         qty: this.state.qty - 1
       });
     };
  };

  render() {
    return (
      <div className='d-flex'>
        {this.props.cartProducts.map((item) => {
          if(item.id === this.props.id){
          return <div className='flex'>
          <div onClick={() => this.increment(item.id, this.props.id)} className='plus'><h1 className='p'>+</h1></div>
          <div><h6 className=''>{this.state.qty}</h6></div>
          <div onClick={() => this.decrement(item.id, this.props.id, this.state.qty)} className='plus'><h1 className='p'>-</h1></div>
        </div>
          }
        })}
        <div> 
        {
          this.props.cartProducts.map((item) => {
            if(item.id === this.props.id){
              return (
                <div style={{backgroundImage: `url(${item.gallery[this.state.url]})`,
                       backgroundPosition: 'center center'}} className='bg'>
                  <div className=''>
                     <i className="fa-solid fa-angle-left" 
                        onClick={() => this.prevImg(this.state.url)}></i>
                     <i className="fa-solid fa-angle-right"
                        onClick={() => this.nextImg(this.state.url, this.props.num)}></i>
                  </div>
                </div> 
              )
            }
          })
        }
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    productReducer: state.productReducer.data.data,
    cartProducts: state.cartProductsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    quantity: count => dispatch(quantity(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeImage);
