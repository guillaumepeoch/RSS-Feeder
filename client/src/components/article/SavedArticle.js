import React from 'react';

// import axios from 'axios'

import styles from './article.module.css';

const SavedArticle = function(props){
    return(
        <div 
          className={styles.small}
        //   onClick={()=>this.loadArticle()}
        >
          {/* <div onClick={()=>this.loadArticle()}> */}
          <div>
            <h5>{props.newsItem.title}</h5>
            <p>{props.newsItem.description}</p>
          </div>
          <div
            className={styles.deletebutton}
            // onClick={()=>this.delete()}  
          >X</div>
        </div>
    );
}

export default SavedArticle;