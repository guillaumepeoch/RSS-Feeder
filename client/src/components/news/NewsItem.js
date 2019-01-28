import React from 'react';

const NewsItem = function(props){
  return (
    <div key={props.news.id}>
      {props.news}
    </div>
  );
}

export default NewsItem;
