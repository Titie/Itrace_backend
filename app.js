const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const ejs = require('ejs');
const db = require('db');
const user = require('./models/user');
const { decodeBase64 } = require('bcryptjs');
const app = new express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
  res.render('home');
});
app.get('/register', (req,res)=>{
  res.render('register');
});
app.get('/login', (req,res)=>{
  res.render('login');
});
app.get("/logout",  (req, res)=> { 
  req.logout(); 
  res.redirect("/"); 
}); 
app.post('/register', (req, res)=>{
 var username = req.body.username
 var password = req.body.password
});


app.listen(4242);