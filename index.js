//this is main file
const express= require('express');
const app=express();
const port=8000;
const ejsLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');
const cookieParser=require('cookie-parser');
//using passport and session
const passport= require('passport');
const passportLocal=require('./config/passport-local');
const session=require('express-session');

//set up for passport and sessions
app.use(session({
    name:'codieal',
    secret:'blahSomething',//to do change later
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge :(1000*60*60)
    }
}));

app.use(passport.initialize());
app.use(passport.session());


//set up for cookie-parser
app.use(express.urlencoded());
app.use(cookieParser());

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