// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

// Init
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));
app.use(cors({
    origin: '*'
}));
PORT = 5000;

// DB Prep
const productSchema = new mongoose.Schema({
    img: String,
    cat: String,
    name: String,
    price: Number,
    des: String
});
const allProductSchema = new mongoose.Schema({
    img: String,
    cat: String,
    name: String,
    price: Number,
    des: String
},
{
    collection: "all-products"
});

const Product = mongoose.model("Product", productSchema);
const AllProduct = mongoose.model("all-products", allProductSchema);

app.get('/', (req, res) => {
    res.send("It is working!");
});

const prepareProducts = (data) => {
    var productsList = [];
    for (var i = 0; i < data.length; i++){
        productsList.push({
            img: data[i].img,
            cat: data[i].cat,
            name: data[i].name,
            price: data[i].price,
            des: data[i].des
        });
    }
    return productsList;
}

const productPreview = (data) => {
    var productsToAdd = []
    for (var i = 0; i < data.length; i++){
        productsToAdd.push({
            img: data[i].img,
            name: data[i].name
        })
    }
    return productsToAdd;
}


// return products
app.get('/products', (req, res) => {
    Product.find().then((data) => {
        res.send(prepareProducts(data));
        console.log("Sent Products");
    });
});

app.get('/preview', (req, res) => {
    AllProduct.find().then((data) => {
        res.send(productPreview(data));
    })
})

// listen for connections
fs.readFile(__dirname + "/key.txt", 'utf8', function(err, addr) {
    if (err){
        console.log("Error!");
        throw err;
    }
    mongoose.connect(addr)
    .then(() => {
        app.listen(PORT, () => {
        console.log("Connected to DB & Listening on port " + PORT + "...");
    });
    })
    .catch((error) => {
        console.log("Error!");
        console.log(error)
    })
  });


module.exports = app;
