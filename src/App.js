import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import InfoForAll from './component/info_for_all';
import Products from './component/products';
import Profile from './component/profile';

const App = () => {

  return (

      <Router>
      <div>
      <header>
       header <br/> 
           <Link to="/">InfoForAll</Link> <br/>
           <Link to="/products">Products</Link> <br/>
           <Link to="/profile">Profile</Link> <br/>
           {/* <Link to={{
             pathname: '/profile'
           }}>Profile</Link> <br/> */}
      <hr/>
    </header> 
      <h2>Routes</h2>
      <Routes>
        <Route path="/" exact component={InfoForAll}/>
        <Route path="/products" component={Products}/>
        <Route path="/profile" component={Profile}/>
        </Routes>

        </div>
    </Router>
  );
};


export default App;

 