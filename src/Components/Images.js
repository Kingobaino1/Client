import { Component } from 'react';
import Items from './Items';

class Images extends Component {
  render(){
    if(this.props.stock){
      return(
        <div onClick={() => this.props.goToProductPage(this.props.id)}>
          <Items src={this.props.src} name={this.props.name}
               symbol={this.props.symbol} amount={this.props.amount}
               stock=''
          />
        </div>
      );
    };
      return (
        <div>
          <Items src={this.props.src} name={this.props.name}
            symbol={this.props.symbol} amount={this.props.amount}
            stock='OUT OF STOCK'
          /> 
        </div>
      );
  };
};

export default (Images);
