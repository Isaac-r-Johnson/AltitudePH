// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('node:fs');
const multer = require('multer');
const path = require('path');

// Init
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));
PORT = 5000;

const clear = (dir) => {
    fs.readdir(dir, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(dir, file), (err) => {
            if (err) throw err;
          });
        }
      });
}


// DB Prep
const productSchema = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String
    },
    cat: String,
    name: String,
    price: Number,
    des: String
});
const Product = mongoose.model("Product", productSchema);

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
});

const upload = multer({storage:storage});

// listen for connections
fs.readFile(__dirname + "/key.txt", 'utf8', (err, addr) => {
    mongoose.connect(addr)
    .then(() => {
        app.listen(PORT, () => {
        console.log("Connected to DB & Listening on port " + PORT + "...");
    });
    })
    .catch((error) => {
        console.log(error)
    })
});

// Temp URL to write products to the db
const products = [
    {
        img: "",
        cat: "bottled",
        name: "Coco Brew",
        price: 150,
        des: "Espresso + coconut milk + desiccated coconut. We know this is kind of a weird combination for most people. But you gotta trust us on this."
    },
    {
        img: "../images/cold-brew.JPG",
        cat: "bottled",
        name: "Cold Brew",
        price: 120,
        des: "Coffee steeped in cold water for 24 hours. If you want a more relaxed black coffee, Cold Brew is the way to go. "
    },
    {
        img: "../images/dirty-matcha-latte.JPG",
        cat: "bottled",
        name: "Dirty Matcha Latte",
        price: 150,
        des: "Espresso + matcha + milk, but served cold. "
    },
    {
        img: "../images/iced-choco.JPG",
        cat: "bottled",
        name: "Iced Choco",
        price: 140,
        des: "A hot chocolate but make it cold."
    },
    {
        img: "../images/matcha-latte.JPG",
        cat: "bottled",
        name: "Matcha Latte",
        price: 140,
        des: ""
    },
    {
        img: "../images/mocha-brew.JPG",
        cat: "bottled",
        name: "Mocha Brew",
        price: 150,
        des: "Espresso + chocolate + milk, served cold. "
    },
    {
        img: "../images/white-brew.JPG",
        cat: "bottled",
        name: "White Brew",
        price: 140,
        des: "Espresso + milk. Served cold. Basically a cold Latte."
    },
    {
        img: "../images/mini-pizza-focaccia.JPG",
        cat: "food",
        name: "Mini Pizza Focaccia",
        price: 80,
        des: ""
    },
    {
        img: "../images/americano.JPG",
        cat: "hot",
        name: "Americano",
        price: 100,
        des: "Just espresso and water."
    },
    {
        img: "../images/cortado.JPG",
        cat: "hot",
        name: "Cortado",
        price: 100,
        des: "Espresso + milk, but smaller than a flat white."
    },
    {
        img: "../images/dirty-matcha-latte-hot.JPG",
        cat: "hot",
        name: "Dirty Matcha Latte",
        price: 130,
        des: "Espresso + matcha + milk. When you love coffee and matcha at the same time, but can't decide which one to drink. Drink them both."
    },
    {
        img: "../images/duet.JPG",
        cat: "hot",
        name: "Duet",
        price: 160,
        des: ""
    },
    {
        img: "../images/espresso.JPG",
        cat: "hot",
        name: "Espresso",
        price: 100,
        des: "Just espresso, for the cold-hearted."
    },
    {
        img: "../images/flat-white.JPG",
        cat: "hot",
        name: "Flat White",
        price: 110,
        des: "Espresso + milk, but smaller than a latte."
    },
    {
        img: "../images/hot-chocolate.JPG",
        cat: "hot",
        name: "Hot Chocolate",
        price: 120,
        des: "Chocolate + steamed milk. For the kids, but if you're a kid at heart, you can get this too."
    },
    {
        img: "../images/latte.jpg",
        cat: "hot",
        name: "Latte",
        price: 120,
        des: "Espresso + steamed milk. The basic drink of all but it's the best."
    },
    {
        img: "../images/lungo.JPG",
        cat: "hot",
        name: "Lungo",
        price: 100,
        des: ""
    },
    {
        img: "../images/matcha-latte-hot.JPG",
        cat: "hot",
        name: "Matcha Latte",
        price: 120,
        des: ""
    },
    {
        img: "../images/mocha-latte-hot.JPG",
        cat: "hot",
        name: "Mocha Latte",
        price: 130,
        des: ""
    },
    {
        img: "../images/oatmilk-flat-white.JPG",
        cat: "hot",
        name: "Oatmilk Flat White",
        price: 130,
        des: ""
    },
    {
        img: "../images/oatmilk-latte.JPG",
        cat: "hot",
        name: "Oatmilk Latte",
        price: 140,
        des: ""
    },
    {
        img: "../images/piccolo.JPG",
        cat: "hot",
        name: "Piccolo",
        price: 100,
        des: ""
    },
    {
        img: "../images/pour-over-coffee.JPG",
        cat: "hot",
        name: "Pour Over Coffee",
        price: 100,
        des: ""
    },
    {
        img: "../images/spanish-latte.JPG",
        cat: "hot",
        name: "Spanish Latte",
        price: 120,
        des: ""
    }
]

app.post('/upload', upload.single('productImg'), (req, res) => {
    const productToUpload = {
        img:{
            data: fs.readFileSync('./uploads/' + req.file.filename),
            contentType: 'image/png'
        },
        cat: req.body.cat,
        name: req.body.name,
        price: Number(req.body.price),
        des: req.body.des
    }
    Product.insertMany(productToUpload)
    .then(() => {
        res.send("Good!");
        clear('./uploads');
    })
    .catch(() => {
        res.send("Bad!");
        clear('./uploads');
    })
});

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
app.get('/products', (req, res) => {
    Product.find().then((data) => {
        res.send(prepareProducts(data));
        console.log("Sent Products");
    });
});



