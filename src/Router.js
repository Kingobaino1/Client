import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import App from './Components/App';
import Cart from './Components/Cart';

const Path = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home" />}>
        </Route>
        <Route exact path="/home" element={<App />} />
        <Route exact path="/home/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default Path;
