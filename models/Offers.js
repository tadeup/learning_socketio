var mongoose = require('mongoose');

const OfferSchema = mongoose.Schema({
    asset: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    originalQuantity: {
        type: Number
    },
    dateCreated: {
        type: Date
    },
    dateCompleted: {
        type: Date
    },
    isBuy: {
        type: Boolean
    },
    wasDeleted: {
        type: Boolean
    },
});

OfferSchema.statics.findByOwnerID = function(ownerId, callback){
    return this.find({ownerId}, callback);
};

const Offer = mongoose.model('Offer', OfferSchema);

module.exports = {Offer};