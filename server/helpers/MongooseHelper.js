class MongooseHelper {

    findOneCustomer(req, res, userModel, productModel) {
        userModel.findOne({customerID: req.params.id}, (err, docs) => {
            if (err)  {
                throw err;
            }
            if (docs) {
                this.findOneProduct(req, res, docs.locationID, productModel);
            } else {
                res.status(404).send("There was a problem retrieving the customer information")
            }
        })
    };

    findOneProduct(req, res, locationID, Model) {
        Model.findOne({locationID: locationID}, (err, docs)  => {
            if (err)  {
                throw err;
            }
            if (docs) {
                res.send(docs);
            } else {
                res.status(404).send("There was a problem retrieving the location information")
            }
        });
    };
}

module.exports = MongooseHelper;