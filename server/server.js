const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const config = require("./config");
const MongooseHelper = require("./helpers/MongooseHelper");
const Product = require("./models/Product");
const User = require("./models/User");
const mongooseHelper = new MongooseHelper();

mongoose.connect(`mongodb://${config.host}/${config.database}`);

app.use(express.static(path.join(__dirname, '/')));
app.use([express.json(), express.urlencoded({ extended: true })]);

/* lets not expose the X-Powered by in response header */
app.use((req, res, next) => {
    res.removeHeader("X-Powered-By");
    next();
});

/* lets enable cross origin resource sharing when receiving a ajax request */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users/:id', (req, res) => {
    mongooseHelper.findOneCustomer(req, res, User, Product);
});

app.listen(3000, () => console.log("listening on port 3000"));