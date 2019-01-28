// EXPRESS
const express = require('express');
const app = express();

app.get('/',function(req,res){
  res.send('Yoyo!');
});

const port = process.env.PORT || 3001;

app.listen(port);
