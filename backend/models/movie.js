
const mongoose=require("mongoose");
const movieSchema=new mongoose.Schema({
     id: Number,
   title: String,
      overview: String,
      release_date: String,
      vote_average: Number,
      poster_path:String ,
      genre_ids: [Number]
},
 { collection: "movie" }
)
module.exports=mongoose.model("Movie",movieSchema)