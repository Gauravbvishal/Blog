const express = require('express');
const router = express.Router();

exports.getlogin=(req,res)=>{
  res.render('../views/login')
}

exports.postlogin=(req,res)=>{
   const{email,password}=req.body;
   if(email==="vishalgaurav785@gmail.com" && password==="vishal123"){
     res.redirect('/')
   }
   else{
    res.render('../views/login')
   }
}