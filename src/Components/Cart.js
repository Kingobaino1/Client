import { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      i: 0,
      total: 0
    };
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
  };
  nextImg(){
    this.setState({
      i: this.state.i + 1,
    });
  };

  prevImg() {
    if(this.state.i > 0){
    this.setState({
      i: this.state.i - 1,
    })
    }
  }

  render () {
    
    {
      if(this.props.cart.length > 0){
         return(
         <div>
           <div className='w'>           
           {
             this.props.cart.map((item) => {
               const url = `url(${item.gallery[this.state.i]})`
               return <div className='d-flex space w' key={item.name}>
                 <div className=''>
                    <h6>{item.name}</h6>
                    <h6>{this.props.symbol}{this.props.amount}</h6>
                   {item.attributes.map((attribute) =>{
                      return (<div>
                        <h1 key={attribute.name}>{attribute.name}:</h1>
                        <div className='d-flex'>
                        {attribute.items.map((att) => {
                          if(attribute.name === 'Color') {
                            return <div className='color-di' key={att.value}><button style={{backgroundColor: att.value}} className='color' onClick={() => {
                              this.setState({[attribute.name]: att.value});
                            }}></button></div>
                          }
                          return <div key={att.value}><button onClick={() => {
                            this.setState({[attribute.name]: att.value});
                          }}>{att.value}</button></div>
                        })
                        }
                      </div>
                      </div>
                      )
                   })}
                   </div> 
                   <div className='d-flex'>
                     <div className='flex'>
                       <div onClick={this.increment} className='plus'><h1 className='p'>+</h1></div>
                       <div><h6 className=''>3</h6></div>
                       <div onClick={this.decrement} className='plus'><h1 className='p'>-</h1></div>
                     </div>
                     <div> 
                       
                       <div style={{backgroundImage: url,
                                     backgroundPosition: 'center center'}} className='bg'>
                          <div className=''>
                                 <i className="fa-solid fa-angle-left" onClick={this.prevImg}></i>
                                 <i className="fa-solid fa-angle-right" onClick={this.nextImg}></i>
                          </div>
                        </div> 
                     </div>
                     <div>3</div>
                   </div>
               </div>
             })

           }
           </div>
           <div>
            <h4>Tax:</h4>
            <h4>Qty:</h4>
            <h4>Total:</h4>
           </div>
         </div>
    )
      }
return null
    }
    
    
  }
  
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartProductsReducer,
    cartItems: state.cartItemsReducer,
    qty: state.quantityReducer,
  };
};

export default connect(mapStateToProps)(Cart);
