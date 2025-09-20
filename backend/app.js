const express=require("express");
const server=express();
const cors=require("cors");
const mongoose=require("mongoose")
const movieModel=require("./models/movie");

mongoose
.connect("mongodb+srv://hour:jpiwM6Q4LYM5MVsw@cluster0.fwlp6lg.mongodb.net/movieDB?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db");

})
.catch((err)=>{
     console.log("cannot connect");
})
server.use(cors())
server.use(express.json())

server.get("/",function(req,res){
    movieModel.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send("Error getting Data");
    })
})
server.listen(3006,function(){
    console.log("server running")
})
