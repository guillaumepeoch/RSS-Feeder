// EXPRESS
const express = require('express');
const app = express();

app.get('/sources',function(req,res){
  res.json([{
    id:1,
    name:'NY Times'
  },
  {
    id:2,
    name:'NPR'
  },
  {
    id:3,
    name:'20 Minutes'
  }]);
});

const port = process.env.PORT || 3001;

app.listen(port);
