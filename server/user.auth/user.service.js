
const basicDetails=(user)=>{
    const { id, name, email,tel,language} = user
    return { id, name, email,tel,language }
}
module.exports={basicDetails}