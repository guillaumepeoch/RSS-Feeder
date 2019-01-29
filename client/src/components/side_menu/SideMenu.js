import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import axios from 'axios';

import styles from './sidemenu.module.css';

class SideMenu  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources:[]
    };
  }
  
  
  componentDidMount(){
    axios.get('/sources')
    .then((response)=>{
      this.setState({
        sources:response.data
      });
    })
    .catch(function(error){
      console.log(error);
    });
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
