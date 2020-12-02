const mongoose = require('mongoose');

const authorSchema = new mongoose.Mongoose.Schema({
    authorname: {type=String, minlength= 6},
    booktitle: {type=String},
    pages: number,
    bookISBN: number,
    booklikes: number
})
const Author = mongoose.model('author', authorSchema)

mongoose.model.export = Author