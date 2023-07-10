const Item = require('../models/item.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.findAllItems = (req, res) => {
    Item.find({})
        .then(allItems => res.json(allItems))
        .catch(err => res.json(err))
}