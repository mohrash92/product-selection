/* these models allow us to define what data types properties in a collection will
 * also its neat that they are kept in a separate file */

const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    locationID : String,
    sportsChannels : [{type : String}],
    newsChannels: [{type : String}]
});

module.exports = mongoose.model('Product', ProductSchema);