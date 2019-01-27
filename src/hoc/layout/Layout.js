import React from 'react';

import './layout.css'
import styles from './layout.module.css'

import Header from '../../components/header/Header';
import SideMenu from '../../components/side_menu/SideMenu';

const Layout = function(props){
  return (
    <div>
      <Header
      />
      <div>
        <SideMenu
        />
        <div className={styles.main}>
          { props.children }
        </div>
      </div>
    </div>
  );
}

export default Layout
