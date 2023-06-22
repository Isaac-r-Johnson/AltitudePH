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

const findProduct = (db, name) => {
    for (var i = 0; i < db.length; i++){
        if (db[i].name === name){
            return db[i];
        }
    }
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
    console.log("Sent!");
})

app.post('/add-product', (req, res) => {
    AllProduct.find()
    .then((data) => {
        var productToAdd = findProduct(data, req.body.theName);
        Product.insertMany([productToAdd])
        .then(() => {
            res.send("Success");
            console.log("Add");
        })
        .catch(() => {
            console.log("This product already exists!");
        })
    })
});

app.post('/rm-product', (req ,res) => {
    Product.deleteOne( {name: req.body.theName} )
    .then(() => {
        res.send("Success");
        console.log("Remove");
    })
    .catch(() => {
        console.log("There is no product to delete!");
    })
});

app.post('/add-to-db', (req, res) => {
    AllProduct.insertMany([req.body])
    .then(() => {
        res.send("Success!");
        console.log("Success!");
    })
    .catch(() => {
        res.send("Error!");
        console.log("Error!");
    });
});

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
