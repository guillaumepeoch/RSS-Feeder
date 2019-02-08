import React, { Component } from 'react';

import Article from '../article/Article';
import SavedArticle from '../article/SavedArticle';

import axios from 'axios';
import { parseString } from 'xml2js';

import styles from './news.module.css';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[],
      savedArticles: props.match.path === '/Saved/Articles' ? true : false
    }
  }
  
  componentDidUpdate(oldProps) {
    if(this.props.match){
      const id = this.props.match.params.id
      if(oldProps.match.params.id !== id) {
        if (this.props.match.path === '/Saved/Articles'){
          this.getSavedArticles();
        } else {
          const url = this.getUrls(id);
          this.getArticlesFrom(url);
        }
      }
    }
  }
  
  componentDidMount(){
    if(this.state.savedArticles){
      this.getSavedArticles();
    } else {
      this.getArticlesFrom('http://feeds.nytimes.com/nyt/rss/HomePage');
    }
  }

  getArticlesFrom(url){
    axios.get(url)
      .then((response)=>{
        parseString(response.data,(err, result) => {
          this.setState({news:[]});
          this.setState({
            savedArticles:false,
            news:result.rss.channel[0].item
          })
        });
      })
      .catch(function(err){
        console.error(err);
      });
  }

  getSavedArticles(){
    axios.get('/articles')
    .then((response)=>{
      this.setState({news:[]});
      this.setState({
        savedArticles:true,
        news:response.data
      });
    })
    .catch(function(err){
      console.error(err);
    });
  }
  
  getUrls(id){
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
    return (
      <div className={styles.container}>
        { this.state.news.map((newsItem, index)=>{
          if (this.state.savedArticles){
            return (
              <SavedArticle key={index} newsItem={newsItem}/>
            );
          } else {
            return (
              <Article key={index} newsItem={newsItem}/>
            );
          }
        }) }
      </div>
    );
  }
}

export default News;
