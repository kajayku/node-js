
const express = require('express');
require('./dbConnection');
const Product = require('./Product'); 

const app = express();
app.use(express.json());

app.post('/create', async (req,res)=>{
    let data = new Product(req.body);
    let result = await data.save();
    res.send(result);
});

app.listen(8080);