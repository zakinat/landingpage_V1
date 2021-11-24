import axios from 'axios'


const urlauth='/api/auth'
 const registerUser=(body,config)=>axios.post((urlauth+'/signup'),body,config)
 const signIn=(body,config)=>axios.post((urlauth+'/signin'),body,config)
 const checkUserToken=(config)=>axios.get((urlauth+'/user'),config)

 export {registerUser ,signIn,checkUserToken}

