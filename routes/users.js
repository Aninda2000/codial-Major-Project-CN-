const express=require('express');
const router=express.Router();
const usersController=require('../controllers/users_controller');

router.get('/profile',usersController.profile);

//sign -In and sign up pages routes
router.get('/sign-in',usersController.signIn);
router.get('/sign-up',usersController.signUp);
router.post('/create-session' ,usersController.createSession);
router.post('/create',usersController.create);


module.exports=router;