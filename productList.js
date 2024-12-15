const dbconnect = require('./mongodb');

const main =async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray(); 
    console.log(data);
}

main();

// app.get('/product',(req , res)=>{
//   const findResult =  collection.find({}).toArray();
//   res.send(findResult);
// });

// app.listen(8080);