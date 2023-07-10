const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long!"]
    },
    owner: {
        type: String,
    },
    category: {
        type: String,
    },
    weatherType: {
        type: Array,
        options: [String],
    },
},
    {timestamps: true});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;