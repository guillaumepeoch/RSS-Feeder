// EXPRESS
const express = require('express');
const app = express();

app.get('/sources',function(req,res){
  res.json([{
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
  }]);
});

const port = process.env.PORT || 3001;

app.listen(port);
