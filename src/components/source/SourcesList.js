import React, { Component } from 'react';

import SourcesListTemplates from './SourcesListTemplates';

class SourcesList extends Component {
  constructor(props){
    super(props)
    this.state = {
      sources:['http://feeds.washingtonpost.com/rss/rss_blogpost', 'http://feeds1.nytimes.com/nyt/rss/Sports', 'https://www.npr.org/rss/rss.php?id=1008']
    };
  }
  
  render(){
    return(
      <div>
       {this.state.sources.map(function(source){
        return (<SourcesListTemplates
          source={source}
        />)
      })} 
    </div>)
    ;
  }
}

export default SourcesList;
