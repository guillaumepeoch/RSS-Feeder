import { parseString } from 'xml2js';
import axios from 'axios';

export function savedNewsList(){
    const newsRequest = axios.get('/articles').then((response)=>{
        return response.data;
    })
    .catch(function(err){
      console.error(err);
    });

    return {
        type:'SAVED_NEWS',
        payload:newsRequest
    }
}

export const newsList = (url) => dispatch => {
    axios.get(url).then((response)=>{
        parseString(response.data,(err, result) => {
            const niceNews = unArrayNews(result.rss.channel[0].item);
            dispatch({
                type:'NEWS',
                payload:niceNews
            })
        });
    })
    .catch(function(err){
      console.error(err);
    });
}

// Not sure we really need this...
const unArrayNews = function(newsArr){
    newsArr.forEach(function(newsObj){
        for (let property in newsObj) {
            if (newsObj.hasOwnProperty(property)) {
                if (Array.isArray(newsObj[property])){
                    const tmp = newsObj[property][0]
                    newsObj[property] = tmp
                }
            }
        }
    });
    return newsArr;
}