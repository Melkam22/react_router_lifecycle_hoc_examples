import React from 'react';
import { NavLink } from 'react-router-dom';
//import './App.css';

const StyledNavbar = () => {

  return (
    
        <nav className='navBar'>
            <NavLink to="/" style={({isActive})=> {return {color:isActive ? 'red' : 'black'}}}> InfoForAll</NavLink> 
            <NavLink to="/products" style={({isActive})=> {return {color:isActive ? 'red' : 'black'}}}> Products</NavLink>
            <NavLink to="/profile" style={({isActive})=> {return {color:isActive ? 'red' : 'black'}}}> Profile</NavLink>
        </nav>
 
  );
};

export default StyledNavbar;