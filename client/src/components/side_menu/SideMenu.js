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
      <div className={styles.menu}>
        { this.state.sources.map(function(link, index){ 
          return (
            <div key={index} className={styles.source}>
              <Link style={{ textDecoration: 'none', color: 'white' }}
                to={`/News/${link.id}`} 
              >
                {link.name}
              </Link>
            </div>
          );
         }) }
      </div>
    );
  }
}

export default withRouter(SideMenu);
