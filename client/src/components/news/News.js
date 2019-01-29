import React, { Component } from 'react';

import Article from '../article/Article';

import axios from 'axios';
import { parseString } from 'xml2js';

import styles from './news.module.css';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[]
    }
  }
  
  componentDidUpdate(oldProps) {
    if(this.props.match){
      const id = this.props.match.params.id
      if(oldProps.match.params.id !== id) {
        const url = this.getUrl(id);
        axios.get(url)
        .then((response)=>{
          parseString(response.data,(err, result) => {
            this.setState({
              news:result.rss.channel[0].item
            })
          });
        })
        .catch(function(error){
          console.log(error);
        });
      }
    }
  }
  
  componentDidMount(){
    axios.get('http://feeds.nytimes.com/nyt/rss/HomePage')
    .then((response)=>{
      parseString(response.data,(err, result) => {
        this.setState({
          news:result.rss.channel[0].item
        })
      });
    })
    .catch(function(error){
      console.log(error);
    });
  }
  
  getUrl(id){
    const sources = [{
      id:1,
      name:'NY Times',
      url:'http://feeds.nytimes.com/nyt/rss/HomePage'
    },
    {
      id:2,
      name:'NPR',
      url:'http://www.npr.org/rss/rss.php?id=1001'
    },
    {
      id:3,
      name:'20 Minutes',
      url:'http://www.20minutes.fr/rss/actu-france.xml'
    }]
    const o = sources.filter(function(source){
      return source.id == id
    });
    return o[0].url;
  }
  
  render(){
    console.log(this.state.news.length);
    return (
      <div className={styles.container}>
        { this.state.news.map(function(newsItem, index){
          return (
            <Article key={index} newsItem={newsItem}/>
          );
        }) }
      </div>
    );
  }
}

export default News;
