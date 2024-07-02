const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const productModel = require("./models/productModel")


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL || "http://localhost:3000",
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router);

app.post('/deleteproduct/:id', async (req, res) => {
    const {id} = req.params;
    console.log(id)
    await productModel.findOneAndDelete({ _id: id });
    res.json("done")

})

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
