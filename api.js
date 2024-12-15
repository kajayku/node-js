const dbConnect = require('./mongodb');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', async (req,res)=>{

    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data);
    res.send({data});
});

app.post('/',async (req,res)=>{
    let db = await dbConnect();
    const result = await db.insertOne(req.body);
    console.log(result);
    res.send(result);

});

app.listen(8080);