const { name } = require('ejs');
const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('', (req, res)=>{
    res.send('hello this is Home page');
});

app.get('/profile', (req, res)=>{

    const users = {
        name : 'Ajay Kushwaha',
        email: 'ajay@gmail.com',
        city : 'Lko',
        skills: ['PHP','myslq','Laravel','Node','React Js']
    }

    res.render('profile',{'user':users});
});

app.get('/about', (req, res)=>{
    res.send('hello this is About page');
});

app.listen(8080);