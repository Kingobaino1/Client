import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import App from './Components/App';
import Cart from './Components/Cart';
import Product from './Components/Product'

const Path = () => (
  <>
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Navigate replace to="/home" />}>
        </Route> */}
        <Route exact path="/" element={<App />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path='/:products' element={<Product />} />

      </Routes>
    </BrowserRouter>
  </>
);

export default Path;
