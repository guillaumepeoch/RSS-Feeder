import React, { Component } from 'react';

import axios from 'axios';

//import NewsItem from './NewsItem';

import styles from './news.module.css';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[
        {
            "id": "2",
            "content_text": "This is a second item.",
            "url": "https://example.org/second-item"
        },
        {
            "id": "1",
            "content_html": "<p>Hello, world!</p>",
            "url": "https://example.org/initial-post"
        }
    ]
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
  
  jsonify(xml){
    
  }
  
  render(){
    return (
      <div className={styles.container}>
        { this.state.news.map(function(newsItem, index){
          return (
            <div key={index} className={styles.card}>
              {newsItem.title}
            </div>
          );
        }) }
      </div>
    );
  }
}

export default News;
