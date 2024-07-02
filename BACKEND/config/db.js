const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://chandru73772227103:Chandru1908@cluster0.dpvstic.mongodb.net/stationary?retryWrites=true&w=majority&appName=Cluster0")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB