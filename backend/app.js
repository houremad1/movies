const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose")
const movieModel = require("./models/movie");

mongoose
    .connect("mongodb+srv://hour:jpiwM6Q4LYM5MVsw@cluster0.fwlp6lg.mongodb.net/movieDB?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("connected to db");

    })
    .catch((err) => {
        console.log("cannot connect");
    })
server.use(cors())
server.use(express.json())

server.get("/", function (req, res) {
    movieModel.find()
        .then((data) => {
            res.send(data);

        })
        .catch((err) => {

            res.status(500).json({ error: err.message });
        })
})
server.get("/movies", (req, res) => {
    const { query } = req.query;
    if (!query) { return res.status(400).json({ error: "Missing query parameter" }); }
    movieModel.find({ title: { $regex: query, $options: 'i' } })
        .then((movies) => {
            if (movies) {
                res.send(movies)
            } else {
                res.send("not found")
            }
        })
        .catch((err) => {
            res.send("error ")
        })
})
server.get("/movies/:id",(req,res)=>{
    console.log("hhhh")
    let reqId=req.params.id;
    movieModel.findOne({_id:reqId})
    .then((movie)=>{
      if(movie){
        res.send(movie)
      }
      else{
        res.send(`No Product founded with this id :${reqId}`);
      }
    })
    .catch((err)=>{
          res.send("Error getting Data");
    })
})
server.listen(3006, function () {
    console.log("server running")
})
