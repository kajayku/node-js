const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'e-comm';

async function dbconnect(){
  let result =  await client.connect();
    console.log('Connected successfully to server');
    let db = client.db(dbName);
    return db.collection('products');
    
}

module.exports=dbconnect;