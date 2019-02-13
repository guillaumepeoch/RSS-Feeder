import { parseString } from 'xml2js';
import axios from 'axios';

export function savedNewsList(news){

    const newsRequest = axios.get('/articles').then((response)=>{
        return response.data;
    })
    .catch(function(err){
      console.error(err);
    });

    return {
        type:'NEWS',
        payload:newsRequest
    }
}

export const newsList = (url) => dispatch => {
    const newsRequest = axios.get(url).then((response)=>{
        parseString(response.data,(err, result) => {
            dispatch({
                type:'NEWS',
                payload:result.rss.channel[0].item
            })
        });
    })
    .catch(function(err){
      console.error(err);
    });
}