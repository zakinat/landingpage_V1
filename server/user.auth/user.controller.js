//importing dependencies
const bcrypt=require('bcryptjs')
const dotenv=require('dotenv')
//importing the model of data that would send to the server 
const User=require('./user.model')

//import functions
const {generateJwtToken,hash} =require('../_helpers/crypto')
const {basicDetails}=require('./user.service')
//Load config
dotenv.config({path:'../config/config.env'})

// @desc  Register a user  
// @route Post /api/auth/signup
//@access public
const signUp=async(req,res, next)=>{
    const { name, email,tel,language,password } = req.body
    try {
      const user = await User.findOne({ email })
      if (user) throw Error('User already exists')
  
      const hashedPass=await hash(password)
      if (!hashedPass) throw Error('Something went wrong hashing the password')

      const newUser = new User({
        name,
        email,
        tel,
        language,
        password: hashedPass
      })

      const savedUser = await newUser.save()
      if (!savedUser) throw Error('Something went wrong saving the user')

      // authentication successful  
    const token = generateJwtToken(savedUser)
    if (!token) throw Error('Couldnt sign the token')

      res.status(200).json({
        token,
        user:{...basicDetails(savedUser)},
        msg:'Registration successful, '
      })
    } catch (e) {
      next(e)
    }
}


// @desc  log in a user  
// @route Post /api/auth/signin
//@access public
const signIn=async(req,res, next)=>{
    const { email, password } = req.body
  try {
    // Check for existing user
    const user = await User.findOne({ email })
    if (!user) throw Error('User does not exist')

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw Error('password wrong')
// authentication successful  
    const token = generateJwtToken(user)
    if (!token) throw Error('Couldnt sign the token')
    res.status(200).json({
      token,
      user: {...basicDetails(user)}
    })
  } catch (e) {
    next(e)
  }
}

// @desc  get a user data  
// @route Get /api/auth/user
//@access private
const getUser=async(req,res, next)=>{
  
  try {
    const user = await User.findById(req.user.id).select('-password')
    if (!user) throw Error('User does not exist')
    // authentication successful  
    const token = generateJwtToken(user)
    if (!token) throw Error('Couldnt sign the token')
    res.json({
      token,
      user})
  } catch (e) {
    next(e)
  }
}



module.exports={signUp,signIn,getUser}


