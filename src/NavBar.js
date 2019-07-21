import React from 'react';
import Button from './Button';

const NavBar = () => {
    return(
      <div className="navbar navbar-light bg-light static-top">
        <div className="container">
          <h2>Logo</h2>
          <Button>Sign up</Button>
        </div>
      </div>
    )
  }

export default NavBar;