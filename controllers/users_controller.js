const User = require('../models/user');
module.exports.profile = function (req, res) {
   res.render('user_profile');
}
module.exports.signUp = function (req, res) {
   res.render('user_signUp');
}
module.exports.signIn = function (req, res) {
   res.render('user_signIn');
}
module.exports.create = function (req, res) {
   User.findOne({ email: req.body.email }, function (err, user) {
      if (err) { console.log("error while finding user: ", err); return }
      if (!user) {
         if (req.body.password != req.body.confirmPassword) {
            return res.redirect('back');
         } else {
            User.create(req.body);
            return res.redirect('/users/sign-in');
         }
      }
      return res.redirect('/users/sign-in');
   });
}
module.exports.createSession = function (req, res) {
   return res.redirect('/');
}