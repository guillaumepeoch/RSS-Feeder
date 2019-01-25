import React from 'react';

import './layout.css'

import Header from '../../components/header/Header';
//import Footer from '../../components/footer/Footer';

const Layout = function(props){
  return (
    <div>
      <Header
      />
       { props.children }
    </div>
  );
}

export default Layout
