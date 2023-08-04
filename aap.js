const express = require("express")
require("dotenv").config()
const connectTodb = require(`./config/db.js`)
const cors  =require("cors")
const userroutes1 = require("./routes/router.js")
const userroutes2 = require("./routes/router.js")

const app = express();

//Express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//init db
connectTodb()

app.get("/",userroutes1)
app.get("/about",userroutes2)

module.exports = app;

