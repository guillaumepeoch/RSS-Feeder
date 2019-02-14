import React, { Component } from 'react';

import SavedArticle from '../article/SavedArticle';

import { connect } from 'react-redux';
import { savedNewsList } from '../../actions';

import styles from '../news/news.module.css';

class SavedArticles extends Component {
  
  componentDidMount(){
    this.props.getSavedNews();
  }
  
  render(){
    if(this.props.data.news){
      return (
        <div className={styles.container}>
          { this.props.data.news.map((newsItem, index)=>{
            return <SavedArticle key={index} newsItem={newsItem}/>
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
    getSavedNews:()=>{
      dispatch(savedNewsList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
