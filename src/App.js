import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import InfoForAll from './Components/info_for_all';
import Products from './Components/products';
import Profile from './Components/profile';
import Error from './Components/For_o_ForPage';
import StyledNavbar from './Components/StyledNavbar';

const App = () => {

  return (

      <Router className="router">
        
        <StyledNavbar/>
       
      <hr/>
      <Routes>
        <Route path="/" exact element={ <InfoForAll />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/profile:loggedName" element={<Profile />}/>
        <Route path="*" element={<Error />}/>
      </Routes>

    </Router>
  );
};


export default App;

