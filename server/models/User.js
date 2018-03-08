const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    customerID : Number,
    locationID : String
});

module.exports = mongoose.model('User', UserSchema);