var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;


var WishList = new Schema({
    title: {type: String, default: "cool Wish List"},
    products:[{type: ObjectId, ref:'product'}]
});

module.exports = mongoose.model('WishList', WishList);