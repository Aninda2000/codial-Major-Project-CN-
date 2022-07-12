//this is main file
const express= require('express');
const app=express();
const port=8000;

//use the router middleware
app.use(require('./routes/index'));//by default it always goes to index

app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log("listening to the port no ",port);
})