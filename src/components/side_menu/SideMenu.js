import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom'

import styles from './sidemenu.module.css';

class SideMenu  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources:['Washington Post', 'NY Times', 'NPR']
    };
  }
  
  render(){
    return(
      <ul className={styles.menu}>
        { this.state.sources.map(function(link, index){ 
          return (
            <li className={styles.source}>{link}</li>
          );
         }) }
      </ul>
    );
  }
}

export default SideMenu;
