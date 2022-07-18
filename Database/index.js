const mongoose = require("mongoose");


databaseConnect();


async function databaseConnect(){
   try {
      await mongoose.connect("mongodb://0.0.0.0:27017/products")

       console.log("Database connected");
    
   } catch (error) {
        console.log("Database not Connected");
        throw error
   }

}


module.exports = databaseConnect