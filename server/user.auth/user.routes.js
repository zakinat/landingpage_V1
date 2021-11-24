//importing dependencies
const router=require('express').Router()

//importing functions
const {signUp,signIn,getUser}=require('./user.controller')
const {signUpSchema,signInSchema}=require('./user.middlewares')
const {auth}=require('../_middleware/authJWT')

//declaring routes
// @route  /api/auth
//@access public
router.post('/signup',signUpSchema,signUp)
router.post('/signin',signInSchema,signIn)

//@access private
router.get('/user',auth,getUser)

module.exports=router
//exporting to "server.js"