import React, { Component } from 'react';

import axios from 'axios';
//import { parseString } from 'xml2js';

import styles from './article.module.css';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      display:false,
      description:props.newsItem.description[0],
      url:props.newsItem.link[0],
      pubdate:props.newsItem.pubDate[0],
      title:props.newsItem.title[0],
      html:''
    };
  }

  save(){
    axios.post('/article', {
      url_to_save:this.state.url
    }).
    then(function(res){
      console.llog(res)
    }).
    catch(function(err){
      console.log(err);
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
