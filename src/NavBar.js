import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return(
      <div className="NavBar navbar navbar-light bg-light static-top">
        <div className="nav-links container">
          <Link className="logo" to="/"><h2>Logo</h2></Link>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Button className="link">Sign up</Button>
        </div>
      </div>
    )
  }

export default NavBar;