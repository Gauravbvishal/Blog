const express = require('express');
const router = express.Router();

const blogs = [];
//LoginPage of Blog Website
exports.blogPage = (req, res, next) => {
    res.render('../views/createblog')
}

//Passing the blog data 
exports.getData = (req, res, next) => {
    const id=Math.floor(Math.random()*10);
    const blog = req.body;
    const data = {
        id:id,
        title: blog.title,
        content: blog.content
    }
    blogs.push(data);
    console.log(blogs)
    res.redirect('/showblog')
}
exports.sendData = (req, res) => {
    res.render('../views/showblog', { blogs })
}
exports.shows=(req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return res.status(404).send("Blog not found");
  }

  res.render('show', { blog });
} 

exports.delete=(req,res)=>{
  const blogId=parseInt(req.params.id);
  const blog=blogs.find(b=>b.id===blogId);
  blogs.splice(blog, 1); 
  res.redirect('/showblog')
}
     
 