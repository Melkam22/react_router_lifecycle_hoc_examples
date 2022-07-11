import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import InfoForAll from './Components/info_for_all';
import Products from './Components/products';
import Profile from './Components/profile';

const App = () => {

  return (

      <Router>
        <nav>
        <ul>
       header <br/> 
           <li><Link to="/"> InfoForAll</Link></li>  <br/>
           <li><Link to="/products"> Products</Link></li>  <br/>
           <li><Link to="/profile"> Profile</Link></li>  <br/>
          
           {/* <Link to={{
             pathname: '/profile'
           }}>Profile</Link> <br/> */}
    </ul> 
        </nav>
       
      <h2>Routes</h2>
      <Routes>
        <Route path="/" exact element={ <InfoForAll />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>

    </Router>
  );
};


export default App;

