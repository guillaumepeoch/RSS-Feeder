import React, { Component } from 'react';

import Article from '../article/Article';

import { connect } from 'react-redux';
import { newsList } from '../../actions';

import styles from './news.module.css';

class News extends Component {
  
  componentDidUpdate(oldProps) {
    if(this.props.match){
      const id = this.props.match.params.id
      if(oldProps.match.params.id !== id) {
        const url = this.getUrls(id)
        this.props.getNews(url);
      }
    }
  }
  
  componentDidMount(){
    const id = this.props.match.params.id
    const url = this.getUrls(id)
    this.props.getNews(url);
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
      return source.id === parseInt(id,10)
    });
    return o[0].url;
  }
  
  render(){
    if(this.props.data.news){
      return (
        <div className={styles.container}>
          { this.props.data.news.map((newsItem, index)=>{
            return <Article key={index} newsItem={newsItem}/>
          }) }
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          Loading Bitches!!!!
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNews:(url)=>{
      dispatch(newsList(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);