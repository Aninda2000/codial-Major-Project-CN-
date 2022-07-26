const User= require('../models/user');
module.exports.profile=function(req,res){
    res.render('user_profile');
}
 module.exports.signUp=function(req,res){
    res.render('user_signUp');
 }
 module.exports.signIn=function(req,res){
    res.render('user_signIn');
 }
 module.exports.createSession=function(req,res){

 }
 module.exports.create=function(req,res){
   User.findOne({email:req.body.email},function(err,user){
      if(err){console.log("error while finding user: ", err); return}
      if(!user){
         if(req.body.password!=req.body.confimPasswrod){
            return res.redirect('back');
         }
         User.create(req.body);
         return res.redirect('/users/sign-in');
      }
      return res.redirect('back');
   })
 }