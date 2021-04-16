const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title: { type: String, required: true },
    id: { type: String, required: true },
    author: { type: String },
    description: { type: String },
    image: { type: String }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;