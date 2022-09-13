const passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt; //it will help to extract jwt from header
const User = require("../models/user");

let opts = {
  jwtFromRequests: ExtractJWT.fromAuthHeaderAsBearerToken,
  secretOrKey: "codeial",
};

passport.use(
  new JwtStrategy(opts, function (jwtPayLoad, done) {
    User.findById(jwtPayLoad._id, function (err, user) {
      if (err) {
        console.log("Error in finding user from JWT");
        return;
      }

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = passport;
