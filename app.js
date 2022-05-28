var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var DB = mongoose.connect('mongodb+srv://zero:<zero>@cluster0.nu0uy.mongodb.net/zero?retryWrites=true&w=majority').then(() => {
console.log('connection to DB successful');
}).catch((err) => console.log('no connection to DB'));


// // }).catch((err) => console.log('no connection to DB'));
// // ;
// // connect to DB
// // const DB = 'mongodb+srv://zero:<zero>@cluster0.nu0uy.mongodb.net/zero?retryWrites=true&w=majority';
// // mongoose.connect(DB).then(() => {
// console.log('connection to DB successful');

// }).catch((err) => console.log('no connection to DB'));


var product = require('./models/product');
var WishList = require('./models/wishlist');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var ingredients = [
    {
      "id":"983j",
      "text":"chicken biryani",
    },
  
    {
      "id":"983j", 
      "text":"veg biryani",
    },
  
    {
      "id":"983j",
      "text":"mutton biryani",
    },
    {
      "id":"983j",
      "text":"prawns biryani",
    },
    {
      "id":"983j",
      "text":"water bottle or cool drinks",
    },
  ];
  app.get('/Menu', function(request, response) {
    response.send(ingredients);
  }); 

app.post('/product', function(request, response) {
    var Product = new product();
    product.title = request.body.title;
    product.price = request.body.price;
    Product.save(function(err, SavedProduct) {
        if (err) {
            response.status(500).send({error:"could not save the product"});
        } else {
            response.send(SavedProduct);
        }
    });
   
});

// app.post('/product', function(request, response) {
//   var product = new Product();
//     if (!product || product.text === "") {
//       response.status(500).send({error: "enter your details"})
//     } else {
//       product.push(product);
//       response.status(200).send(product);
//     }
//    });













app.listen(3000, function() {
    console.log("swag-shop API is running on port 3000!");

}); 
