import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {


  return (
    <div>
    
        <Link to="/home">HOME</Link>
        <Link to="/project">Project</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
    </div>
      
  );
}

export default Nav;
