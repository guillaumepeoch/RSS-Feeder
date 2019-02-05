import React, { Component } from 'react';

import axios from 'axios';

import styles from './article.module.css';

class Article extends Component {
  constructor(props){
    super(props);
    console.log(props.newsItem)
    this.state = {
      display:false,
      description:props.newsItem.description || props.newsItem.description[0],
      url:props.newsItem.url || props.newsItem.link[0],
      pubdate:props.newsItem.pubdate || props.newsItem.pubDate[0],
      title:props.newsItem.title || props.newsItem.title[0],
      html:''
    };
  }

  save(){
    let objectToSave = {...this.state};
    delete objectToSave.html;
    delete objectToSave.display;
    axios.post('/article', objectToSave).
    then(function(res){
      console.log(res)
    }).
    catch(function(err){
      console.error(err);
    });
  }
  
  loadArticle = () => {
    this.setState({
      display:true
    });
  }
  
  render(){
    if (this.state.display){
      return(
        <div>
          <iframe src={this.state.url} name="targetframe" scrolling="yes" frameborder="1" className={styles.browser}>
          </iframe>
          <div 
            className={styles.savebutton}
            onClick={()=>this.save()}  
          >Love</div>
        </div>
      );
    } else {
      return(
        <div 
          className={styles.small} 
          onClick={()=>this.loadArticle()}
        >
          <div onClick={()=>this.loadArticle()}>
            <h5>{this.state.title}</h5>
            <p>{this.state.description}</p>
          </div>
          <div 
            className={styles.savebutton}
            onClick={()=>this.save()}  
          >Love</div>
        </div>
      );
    }
  }
}

export default Article;
