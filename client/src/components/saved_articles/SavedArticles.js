import React, { Component } from 'react';

import Article from '../article/Article';

import axios from 'axios';
import { parseString } from 'xml2js';

import { connect } from 'react-redux';
import { newsList, savedNewsList } from '../../actions';

import styles from './news.module.css';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[]
    }
  }

  componentWillMount(){
    // console.log('componentWillMount');
    // if(this.state.savedArticles){
    //   this.props.getNews();
    // } else {
    //   this.getArticlesFrom('http://feeds.nytimes.com/nyt/rss/HomePage');
    // }
  }
  
  componentDidUpdate(oldProps) {
    if(this.props.match){
      const id = this.props.match.params.id
      if(oldProps.match.params.id !== id) {
        if (this.props.match.path === '/Saved/Articles'){
          this.props.getNews();
        } else {
          const url = this.getUrls(id);
          this.props.getSavedNews(url);
        }
      }
    }
  }
  
  componentDidMount(){
    console.log('componentDidMount')
    if(this.state.savedArticles){
      this.props.getSavedNews('http://feeds.nytimes.com/nyt/rss/HomePage');
    } else {
      this.props.getNews();
    }
  }

  getArticlesFrom(url){
    console.log('getArticlesFrom')
    axios.get(url)
    .then((response)=>{
      parseString(response.data,(err, result) => {
        this.setState({news:[]});
        this.setState({
          savedArticles:false,
          news:result.rss.channel[0].item
        })
        // this.setState({savedArticles:false});
        // this.props.data.new = result.rss.channel[0].item
        // console.log(this.props.data.new);
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
    if(this.props.data.news){
      return (
        <div className={styles.container}>
          { this.props.data.news.map((newsItem, index)=>{
            <Article key={index} newsItem={newsItem}/>
            // if (this.state.savedArticles){
            //   return (
            //     <SavedArticle key={index} newsItem={newsItem}/>
            //   );
            // } else {
            //   return (
            //     <Article key={index} newsItem={newsItem}/>
            //   );
            // }
          }) }
        </div>
      );
    } else {
      return (
        <div>Yoyo</div>
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
    getNews:()=>{
      dispatch(newsList())
    },
    getSavedNews:()=>{
      dispatch(savedNewsList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
