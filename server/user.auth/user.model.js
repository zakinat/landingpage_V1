const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');
const userschema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
    email: {
      type:String,
      required:true,
      unique:true
    },
    tel:{
      type:String,
      required:true,
    },
    password: {
      type:String,
      required:true,
      max:1024,
      min:6
    },
    language:{
      type:String,
      required:true,
    },
    regdate:{
      type:Date,
      default:Date.now
    }
  })



userschema.plugin(uniqueValidator);

userschema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform:  (doc, ret)=> {
    // replaces _id with id, convert id to string from ObjectID 
      ret.id=ret._id.toString()
      // remove these props when object is serialized
      delete ret._id;
      delete ret.__v;
  }
})

module.exports = mongoose.model("User",userschema)