import React, { Component } from 'react';

import styles from './article.module.css';

class Article extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      display:false,
      description:props.newsItem.description[0],
      url:props.newsItem.link[0],
      pubdate:props.newsItem.pubDate[0],
      title:props.newsItem.title[0]
    };
  }
  
  loadArticle = () => {
    
  }
  
  render(){
    if (this.state.display){
      return(
        <div className={styles.big} >
          <h5>{this.state.title}</h5>
          <p>{this.state.description}</p>
        </div>
      );
    } else {
      return(
        <div 
          className={styles.small} 
          onClick={()=>this.loadArticle()}
        >
          <h5>{this.state.title}</h5>
          <p>{this.state.description}</p>
        </div>
      );
    }
  }
}

export default Article;
