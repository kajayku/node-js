const express = require('express');
const reqFilter = require('./middlewareExp');
const app = express();
const route = express.Router();



// app.use(reqFilter)

route.use(reqFilter);

app.get('/',(req , res)=>{
  res.send('Welcome to home page');
});


app.get('/profile',reqFilter,(req,res)=>{
    res.send('This is profile page');
 });

 route.get('/about',(req,res)=>{
    res.send('This is about page');
 });

 route.get('/contact',(req,res)=>{
    res.send('This is contact page');
 });

 app.use('/',route)

 app.listen(8080);