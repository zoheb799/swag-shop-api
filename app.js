var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/dev');

var product = require('./models/product');
var WishList = require('./models/wishlist');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('./product', function(request, response) {
    var product = new product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedproduct) {
        if(err) {
            response.status(500).send({error:"could not save the product"});
        } else {
            response.send(savedproduct);
        }
    });
   
});
// connect to DB
mongoose.connect('mongodb+srv://zohaib:<zohaib>@dev.rqpe6.mongodb.net/?retryWrites=true&w=majority', () =>
 console.log('connected to DB!')
 );


app.listen(3000, function() {
    console.log("swag-shop API is running on port 3000!");

}); 