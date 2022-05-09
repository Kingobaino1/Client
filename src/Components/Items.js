import { Component } from 'react';

class Items extends Component {
  render() {
    return (
      <div>
          <div>
            <div style={{backgroundImage: `url(${this.props.src})`,
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat'}}
                  className='img imgs'>
             <div className='out-stock font-style w'>{this.props.stock}</div> 
            </div>
            <div className='name font-style'>
              {this.props.name}
            </div>
            <div className='currency font-style'><span>{this.props.symbol}</span><span>{this.props.amount}</span></div>
          </div>
      </div>  
    );
  };
};

export default Items;
