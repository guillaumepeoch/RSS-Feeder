// EXPRESS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const dbName = 'LocalMDB';
// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//   client.close();
// });

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

app.post('/article', function(req, res){
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);

    db.collection('test').insertOne({
      ...req.body,
      type:'Article'
    },(err, res)=>{
        if(err){
          console.log(`Cannot insert:${err}`)
        }
        console.log(res.ops)
    });
  
    client.close();
  });
  
  res.end();
})

app.get('/articles', function(req, res){
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);

    db.collection('test').find({
      type:'Article'
    }).toArray((err, docs)=>{
        if(err){
          console.log(`Cannot insert:${err}`)
        }
        console.log(docs)
        res.json(docs);
        client.close();
    });
  });
});

const port = process.env.PORT || 3001;

app.listen(port);
