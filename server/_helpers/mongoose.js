
const mongoose = require('mongoose')


const  isValidId=(id)=> {
    return mongoose.Types.ObjectId.isValid(id)
}

module.exports = {
    isValidId}