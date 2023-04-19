const express=require('express')
const mongoose=require('mongoose')
const app=express();
const bodyparser=require('body-parser')

app.listen(5000,()=>
{
    console.log("server connected");
})

mongoose.connect("mongodb+srv://1:1@cluster0.awtvh5m.mongodb.net/?retryWrites=true&w=majority",()=>
{
    console.log("database connected")
})

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}))
app.use("/",require("./server/routes/router"));