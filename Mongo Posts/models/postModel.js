const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/posts')

const postSchema = mongoose.Schema({
    title : String,
    description : String,
    imageurl : String,
    date : {
        type : Date, // Data type is: Date
        default : Date.now() // If no date is provided, default value will be taken
    }
})

module.exports = mongoose.model("postdata", postSchema)