const mongoose = require("mongoose");


const connectDb = async () => {
   await  mongoose.connect("mongodb+srv://surajss3696:Suraj3696@suraj-node-js-learning.hoshxwy.mongodb.net/devTinder");
}

module.exports = connectDb;
