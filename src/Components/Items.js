import { Component } from 'react';

class Items extends Component {
  render() {
    return (
      <div>
          <div>
            <div style={{backgroundImage: `url(${this.props.src})`,
                           backgroundSize: 'contain',
                           backgroundRepeat: 'no-repeat'}}
                  className='img imgs'>
              <div className='stock'><h5>{this.props.stock}</h5></div>
            </div>
            <div>
              {this.props.name}
            </div>
            <div><span>{this.props.symbol}</span><span>{this.props.amount}</span></div>
          </div>
      </div>  
    );
  };
};

export default Items;
