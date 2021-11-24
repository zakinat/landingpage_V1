const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
//Load config
dotenv.config({path:'../config/config.env'})

const hash=async(needtohash)=>{
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(needtohash, salt)
    return hash
}
const generateJwtToken=(user)=> {
    // create a jwt token containing the account id 
    return jwt.sign({ id: user.id}, process.env.JWT_SECRET)
}



module.exports={hash,generateJwtToken}
