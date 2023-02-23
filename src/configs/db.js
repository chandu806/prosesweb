const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://Chandu:chandu806@cluster0.u7hqmbv.mongodb.net")
}

module.exports = connect;