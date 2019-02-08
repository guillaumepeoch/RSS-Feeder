import React, { Component } from 'react';

import axios from 'axios'

import styles from './article.module.css';

class SavedArticle extends Component {
    constructor(props){
    super(props);
    this.state = {
        id:props.newsItem._id,
        display:false,
        description:props.newsItem.description,
        url:props.newsItem.url,
        pubdate:props.newsItem.pubdate,
        title:props.newsItem.title,
        html:'',
        delete:false
        }
    }

    loadArticle(){
        this.setState({
            display:true
        });
    }

    delete(){
        axios.delete('/article', { data: { id: this.state.id } }).
        then((res)=>{
            this.setState({
                delete:true
            });
        });
    }
    
    render(){
        if(this.state.delete){
            return(
                <div>
                  DELETED!
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
                    className={styles.deletebutton}
                    onClick={()=>this.delete()}  
                  >X</div>
                </div>
            );
        }
    }
}

export default SavedArticle;