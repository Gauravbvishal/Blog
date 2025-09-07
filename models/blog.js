const Sequelize=require('sequelize');
const sequelize=require('../database');
 

const BlogPost=sequelize.define('blogPost',{
 id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:Sequelize.STRING,
  content:{
    type:Sequelize.TEXT,
    allowNull:false
  }
})

module.exports=BlogPost;