const express=require('express')
const path=require('path')
const app=express()
app.use(express.static(path.join(__dirname, "public")));
 
const routes=require('./routes/route')
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'PUG');
app.set('views', 'views');

app.use(routes)

app.listen(3000)