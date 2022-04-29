import { Component } from 'react';
import { Link } from 'react-router-dom';

class Images extends Component {
  render(){
    return(
      <div>
        {/* <Link to={this.props.name}> */}
          <img src={this.props.src} alt='Products' className="img imgs" />
        {/* </Link> */}
        <div>
          {this.props.name}
        </div>
        <div><span>{this.props.symbol}</span><span>{this.props.amount}</span></div>
      </div>
    );
  };
};

export default Images;
