const express=require('express')
const path=require('path')
const app=express()
const sequelize=require('./database') //Sequelize
app.use(express.static(path.join(__dirname, "public")));
 
const routes=require('./routes/route')
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'PUG');
app.set('views', 'views');

app.use(routes)
sequelize.sync().then(result=>{
    console.log(result)
    app.listen(3000);
}).catch(err=>{
    console.log(err)
})
 