import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css"

const Navbar = ()=> {
  return (
    <nav className="navigation">
     
    <div className="link-container">
      <span>Menu</span>
     <div className="nav-line"></div>
     <div className="nav-line"></div>
     <div className="nav-line"></div>
    
    
    <Link to="/">Home</Link>
    
      
    <Link to="/">Home</Link>
  

    <Link to="/">Home</Link>
 

    <Link to="/">Home</Link>
    </div>
       
     
    </nav>
  )
}

export default Navbar
