const mongoose = require('mongoose')    



async function connectDB() {
    
    await mongoose.connect(process.env.MONGOSE_URL)
       
    console.log("connected to database successfully");
}


module.exports = connectDB;