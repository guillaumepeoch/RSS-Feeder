import React from 'react';
import { Link } from 'react-router-dom';

// import SideNavigation from './sideNavigation/SideNavigation'

import style from './header.module.css'

const Header = function(){
  
  const navBar = function(){
    return (
      <div className={style.bars}>
        News!
        <div className={style.authentification}>
          <Link to="/SignIn">
            Sign In 
          </Link>
          <Link to="/SignUp">
            Sign Up 
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <header className={style.header}>
      {navBar()}
    </header>
  );
}

export default Header;
