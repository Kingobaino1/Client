import { useQuery } from '@apollo/client';
import { CATEGORY_QUERY } from './Queries/categories';
import LeftNav from './Components/LeftNav';
import MiddleNav from './Components/MiddleNav';
import RightNav from './Components/RightNav';

const App = () => {
  const { data } = useQuery(CATEGORY_QUERY);
  if (data) {
    return(
    <div className='nav'>
      {data.categories.map((item) => {
        return <LeftNav name={item.name.toUpperCase()} />
      })}
      <MiddleNav />
      <RightNav />
    </div>
  )
  }
  return (
    <div>Hello World!</div>
  )
}

export default App;
