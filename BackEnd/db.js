const mongoose = require('mongoose')
const uri = "mongodb://0.0.0.0:27017/learnreact"
const  connectToDb = ()=>{
    mongoose.connect(uri)
    console.log("Connected to the databse Sucessfully!!!!")
}
   
    
module.exports = connectToDb;