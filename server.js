// EXPRESS
const express = require('express');
const app = express();

app.get('/test',function(req,res){
  res.json({
    id:1,
    name:'Yoyo'
  });
});

const port = process.env.PORT || 3001;

app.listen(port);
