const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const dateConverter= require('./dateConverter')

require('dotenv').config()
const uri = process.env.ATLAS_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
  let day = dateConverter(new Date())

  client.connect(err => {
    const collection = client.db('lexicon').collection('wordlist');
    collection.find().toArray((error, documents) => {
      if(error){
        throw error
      }
      res.send(documents[day].word);
    });
  })
})

const port = 3001;

app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})