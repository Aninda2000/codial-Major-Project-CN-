//this is main file
const express= require('express');
const app=express();
const port=8000;
const ejsLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');

//make a common layout for all the pages
app.use(ejsLayout);

//setting for static files
app.use(express.static('./assets'));

//setting for extract all the stylesheet and script
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//use the router middleware
app.use(require('./routes/index'));//by default it always goes to index

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log("listening to the port no ",port);
})