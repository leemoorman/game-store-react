import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Buy from './pages/Buy';
import Events from './pages/Events';
import About from './pages/About';
import Apply from './pages/Apply';
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = () =>{
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/buy-list" element={<Buy />} />
          <Route path="/upcoming-events" element={<Events />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/apply-now" element={<Apply />} />
          <Route path="/shopping-cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);