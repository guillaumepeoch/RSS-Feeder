import { parseString } from 'xml2js';
import axios from 'axios';

export function newsList(){
    // axios.get('http://www.20minutes.fr/rss/actu-france.xml')
    //   .then((response)=>{
    //     parseString(response.data,(err, result) => {
    //     return {
    //         type:'NEWS',
    //         payload:result.rss.channel[0].item
    //     }
    //     });
    //   })
    //   .catch(function(err){
    //     console.error(err);
    //   });
    return {
        type:'NEWS',
        payload:[{
            titre:'title',
            content:'content'
        }]
    }
}