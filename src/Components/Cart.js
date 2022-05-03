import { Component } from 'react';
import { connect } from 'react-redux';
import ChangeImage from './ChangeImage';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0
    };
  };
 
  render () {
    {
      if(this.props.cart.length > 0) {
        return (
         <div>
           <div className='w'>           
           {
             this.props.cart.map((item) => {
               const qt = this.props.quantity.filter((a) => a.id === item.id)
               const length = item.gallery.length;
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
                            }}></button></div>
                          }
                          return <div key={att.value}><button onClick={() => {
                          }}>{att.value}</button></div>
                        })
                        }
                      </div>
                      </div>
                      )
                   })}
                   </div> 
                
                   <div className='d-flex'>
                     <div className='d-flex'><ChangeImage id={qt[0].id} init={qt[0].qty} length={length} num={length - 1} /></div>
                   </div>
               </div>
             })
           }
           </div>
           <div>
            <h4>Tax:</h4>
            <h4>Qty: {this.props.qty}</h4>
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
    quantity: state.cartItemsReducer

  };
};

export default connect(mapStateToProps)(Cart);
