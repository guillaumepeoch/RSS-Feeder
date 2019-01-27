import React, { Component } from 'react';

import axios from 'axios';

//import NewsItem from './NewsItem';

import styles from './news.module.css';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[]
    }
  }
  
  componentDidMount(){
    axios.get('https://www.npr.org/rss/rss.php?id=1008')
    .then((response)=>{
      const parseString = require('xml2js').parseString;
      parseString(response.data,(err, result) => {
        console.log(result.rss.channel[0].item);
        this.setState({
          news:result.rss.channel[0].item
        })
      });
    })
    .catch(function(error){
      console.log(error);
    });
  }
  
  render(){
    return (
      <div className={styles.container}>
        { this.state.news.map(function(newsItem, index){
          return (
            <div key={index} className={styles.card}>
              <h5>{newsItem.title}</h5>
              <p>{newsItem.description}</p>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default News;
