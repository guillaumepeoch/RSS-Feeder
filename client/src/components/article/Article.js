import React from 'react';

import axios from 'axios';

import styles from './article.module.css';

const Article = function(props){
  return(
    <div 
      className={styles.small} 
    >
      {/* <div onClick={()=>this.loadArticle()}> */}
      <div>
        <h5>{props.newsItem.title}</h5>
        <p>{props.newsItem.description}</p>
      </div>
      { true ? (
        <div 
          className={styles.savebutton}
          onClick={()=>save(props)}  
        >Love</div>
      ) : null }
    </div>
  );
}

const save = function(props){
    let objectToSave = {...props.newsItem};
    delete objectToSave.html;
    delete objectToSave.display;
    objectToSave.url = objectToSave.link;
    delete objectToSave.link;

    console.log(objectToSave);
    axios.post('/article', objectToSave)
    .then((res)=>{
      alert('Saved!!')
    })
    .catch(function(err){
      console.log('Article Not Saved!');
      console.error(err);
    });
  }

export default Article;


// import React, { Component } from 'react';

// import axios from 'axios';

// import styles from './article.module.css';

// class Article extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       display:false,
//       description:props.newsItem.description[0] || props.newsItem.description,
//       url:props.newsItem.link[0] || props.newsItem.url,
//       pubdate:props.newsItem.pubDate[0] || props.newsItem.pubdate,
//       title:props.newsItem.title[0] || props.newsItem.title,
//       html:'',
//       lovable: true
//     };
//     console.log(this.state);
//   }

//   shouldComponentUpdate(nextProps) {
//     if (this.props.newsItem.link !== nextProps.newsItem.link) {
//       console.log('Yes')
//       return true;
//     }
//     console.log('No')
//     return true;
//   }

//   save(){
//     let objectToSave = {...this.state};
//     delete objectToSave.html;
//     delete objectToSave.display;
//     axios.post('/article', objectToSave).
//     then((res)=>{
//       this.setState({lovable:false})
//     }).
//     catch(function(err){
//       console.log('Article Not Saved!');
//       console.error(err);
//     });
//   }
  
//   loadArticle = () => {
//     this.setState({
//       display:true
//     });
//   }
  
//   render(){
//     if (this.state.display){
//       return(
//         <div>
//           <iframe src={this.state.url} name="targetframe" scrolling="yes" frameborder="1" className={styles.browser}>
//           </iframe>
//           <div 
//             className={styles.savebutton}
//             onClick={()=>this.save()}  
//           >Love</div>
//         </div>
//       );
//     } else {
//       return(
//         <div 
//           className={styles.small} 
//         >
//           <div onClick={()=>this.loadArticle()}>
//             <h5>{this.state.title}</h5>
//             <p>{this.state.description}</p>
//           </div>
//           { this.state.lovable ? (
//             <div 
//               className={styles.savebutton}
//               onClick={()=>this.save()}  
//             >Love</div>
//           ) : null }
//         </div>
//       );
//     }
//   }
// }

// export default Article;
