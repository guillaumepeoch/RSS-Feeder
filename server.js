// EXPRESS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const url = 'mongodb://localhost:27017/LocalMDB';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });

const articleSchema = mongoose.Schema({
  description:String,
  url:{
    type: String,
    unique: true
  },
  pubDate:String,
  title:String,
  type:String
});
const Article = mongoose.model('Article',articleSchema);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/sources',function(req,res){
  // TODO: Save sources
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

app.post('/article', function(req, res){
  const addArticle = new Article({
    ...req.body,
    type:'Article'
  });

  addArticle.save((err, doc)=>{
    if(err) return console.log(err);
    console.log('--------------------');
    console.log(doc.title + ' saved!');
    res.end();
  });
});

app.get('/articles', function(req, res){
  // Use connect method to connect to the server
  Article.find({type:'Article'},(err, doc)=>{
    if(err) return console.log(err);
    console.log('--------------------');
    console.log('Getting all saved articles');
    res.json(doc);
  })
});

app.delete('/article', function(req, res){
  Article.findByIdAndDelete(req.body.id, (err, doc)=>{
    if(err){
      res.end(err.errmsg);
      return console.log(err);
    }
    console.log('--------------------');
    console.log(doc.title + 'Deleted!');
    res.end();
  });

}) 

const port = process.env.PORT || 3001;

app.listen(port);
