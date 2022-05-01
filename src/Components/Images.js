import { Component } from 'react';

class Images extends Component {
  render(){
    return(
      <div onClick={() => this.props.goToProductPage(this.props.id) }>
        <div>
          <img src={this.props.src} alt='Products' className="img imgs" />
        <div>
          {this.props.name}
        </div>
        <div><span>{this.props.symbol}</span><span>{this.props.amount}</span></div>
      </div>
      </div>
      
    );
  };
};

export default (Images);
