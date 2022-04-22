import LeftNav from './Components/LeftNav';
import MiddleNav from './Components/MiddleNav';
import RightNav from './Components/RightNav';
import { connect, useSelector } from 'react-redux';
import Test from './Components/test';
import Images from './Components/Images';
import {useState} from 'react';

const App = () => {
  const state = useSelector((state) => state.categoryReducer.data);
  const state1 = useSelector((state) => state.allProductReducer.data);
  const state2 = useSelector((state) => state.currencyReducer.data)
  const arr = state1.categories
  const [category, setCategory] = useState('all')
  const [currency, setCurrency] = useState('USD')
  const changeFilter = (e) => {
    const currency = e.target.value
    setCurrency(currency);
  }

    if (state.length !== 0 && arr) {
    return(
    <div>
      <div className='nav'>
         {state.categories.map((item) => {
          return <LeftNav name={item.name.toUpperCase()} key={item.name} categorySelector={() => {setCategory(item.name)}} />
        })} 
        <MiddleNav />
        <RightNav handleFilterChange={changeFilter}/>
      </div>
      <div className='imgs'>
        {
          arr.map((item) => {
            if(item.name === category) {
              return item.products.map((products) => {
                let label = products.prices
                for(let i = 0; i < label.length; i++) {
                  if(label[i].currency.label === currency)
                   return <Images src={products.gallery[0]} name={products.name} amount={label[i].amount} symbol={label[i].currency.symbol} key={products.name} />
                }
              })
            }
          })
        }
      </div>
    </div>
  )
  }
  return (
    <div>
      <Test />
    </div>
  )
}

export default connect()(App);
