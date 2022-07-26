const passport= require('passport');
const LocalStregedy= require('passport-local').Strategy;
const User=require('../models/user');


passport.use(new LocalStregedy({
    usernameField:'email'
    },
    function(email,password,done){
        console.log("function calling");
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('error while using passport local');
                return done(err);
            }
            if(!user || user.password!=password){
                console.log('Invalid Username/password');
                return done(null,false);
            }else{
                return done(null,user);
            }
        });
    }
));

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("error ehile using passport local");
            return done(err);
        }
        return done(null,user);
    });
});

module.exports=passport;