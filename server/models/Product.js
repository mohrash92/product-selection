const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    locationID : String,
    sportsChannels : [{type : String}],
    newsChannels: [{type : String}]
});

module.exports = mongoose.model('Product', ProductSchema);