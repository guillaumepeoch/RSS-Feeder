import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import styles from './sidemenu.module.css';

class SideMenu  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources:[{
        id:1,
        name:'Washington Post'
      },
      {
        id:2,
        name:'NY Times'
      },
      {
        id:3,
        name:'NPR'
      }]
    };
  }
  
  render(){
    return(
      <ul className={styles.menu}>
        { this.state.sources.map(function(link, index){ 
          return (
            <li key={index}>
              <Link to={`/News/${link.id}`} className={styles.source}>{link.name}</Link>
            </li>
          );
         }) }
      </ul>
    );
  }
}

export default withRouter(SideMenu);
