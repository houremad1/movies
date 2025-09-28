const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose")
const movieModel = require("./models/movie");
const WatchlistModel=require("./models/watchList")

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
// search API
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
//Api to get movieByid 
server.get("/movies/:id", (req, res) => {
    console.log("hhhh")
    let reqId = req.params.id;
    movieModel.findOne({ _id: reqId })
        .then((movie) => {
            if (movie) {
                res.send(movie)
            }
            else {
                res.send(`No Product founded with this id :${reqId}`);
            }
        })
        .catch((err) => {
            res.send("Error getting Data");
        })
})
/**
 *  WishList end pionts
 */
server.post("/watchlist", async (req, res) => {
    try {
        const { movieId } = req.body;
        if (!movieId) { return res.status(400).json({ error: "Missing movieId parameter" }); }
        const entry = new WatchlistModel({ movie:movieId });
        await entry.save();
        res.status(201).json({ _id: entry._id })
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
})
server.get("/watchlist",(req,res)=>{
    WatchlistModel.find().populate("movie")
    .then((wishList)=>{
        res.send(wishList);
    })
    .catch((err)=>{
        res.send(err);

    })

})
server.delete("/watchlist/:id",(req,res)=>{
    const movieId=req.params.id;
    if(!movieId){return res.status(400).json({ error: "Missing movieId parameter" })}
    WatchlistModel.findByIdAndDelete(movieId)
    .then((deleted)=>{
        if(!deleted){
            return res.status(404).json({error:'not found'})
        }
        return res.status(204).end();

    })
    .catch((err)=>{
        return res.status(500).json({error:err.message})
    })
})
server.listen(3006, function () {
    console.log("server running")
})
