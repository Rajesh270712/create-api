const express = require("express");
const cors = require("cors");
const databaseConnect = require("./Database");
const { getmeip } = require("./Router/address");
const addressRouter = require("./Router/address");
const productRouter = require("./Router/products");
let app = express();



app.use(cors())

app.use(logger)
function logger(req,res,next){
    console.log(req.path,req.method);
    next()
}
app.use(express.json())
app.use(addressRouter)
app.use(productRouter)


databaseConnect().then(()=>{
    app.listen("3000")
    console.log("connected");
})



