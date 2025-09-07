const Sequelize=require('sequelize')

const sequelize=new Sequelize('blog','root','vishal123',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;