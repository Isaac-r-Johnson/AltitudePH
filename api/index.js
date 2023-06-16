// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

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
const Product = mongoose.model("Product", productSchema);

app.get('/', (req, res) => {
    res.send("It is working!");
});

// Temp URL to write products to the db
const products = [
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901054/AltitudePHImages/coco-brew_owutee.jpg",
        cat: "bottled",
        name: "Coco Brew",
        price: 150,
        des: "Espresso + coconut milk + desiccated coconut. We know this is kind of a weird combination for most people. But you gotta trust us on this."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901054/AltitudePHImages/cold-brew_sexcs2.jpg",
        cat: "bottled",
        name: "Cold Brew",
        price: 120,
        des: "Coffee steeped in cold water for 24 hours. If you want a more relaxed black coffee, Cold Brew is the way to go. "
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901054/AltitudePHImages/dirty-matcha-latte_ngqolx.jpg",
        cat: "bottled",
        name: "Dirty Matcha Latte",
        price: 150,
        des: "Espresso + matcha + milk, but served cold. "
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/iced-choco_andqwt.jpg",
        cat: "bottled",
        name: "Iced Choco",
        price: 140,
        des: "A hot chocolate but make it cold."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901056/AltitudePHImages/matcha-latte_oedixo.jpg",
        cat: "bottled",
        name: "Matcha Latte",
        price: 140,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901056/AltitudePHImages/mocha-brew_vidw4v.jpg",
        cat: "bottled",
        name: "Mocha Brew",
        price: 150,
        des: "Espresso + chocolate + milk, served cold. "
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901057/AltitudePHImages/white-brew_lqgwo0.jpg",
        cat: "bottled",
        name: "White Brew",
        price: 140,
        des: "Espresso + milk. Served cold. Basically a cold Latte."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901056/AltitudePHImages/mango-matcha-latte_t67cvj.jpg",
        cat: "bottled",
        name: "Mango Matcha Latte",
        price: 150,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901056/AltitudePHImages/mini-pizza-focaccia_c6dvgf.jpg",
        cat: "food",
        name: "Mini Pizza Focaccia",
        price: 80,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901054/AltitudePHImages/americano_rgasql.jpg",
        cat: "hot",
        name: "Americano",
        price: 100,
        des: "Just espresso and water."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901054/AltitudePHImages/cortado_pou8fk.jpg",
        cat: "hot",
        name: "Cortado",
        price: 100,
        des: "Espresso + milk, but smaller than a flat white."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/dirty-matcha-latte-hot_uinlvj.jpg",
        cat: "hot",
        name: "Dirty Matcha Latte",
        price: 130,
        des: "Espresso + matcha + milk. When you love coffee and matcha at the same time, but can't decide which one to drink. Drink them both."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/duet_l6ug9i.jpg",
        cat: "hot",
        name: "Duet",
        price: 160,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/espresso_skz9qc.jpg",
        cat: "hot",
        name: "Espresso",
        price: 100,
        des: "Just espresso, for the cold-hearted."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/flat-white_ejdvxk.jpg",
        cat: "hot",
        name: "Flat White",
        price: 110,
        des: "Espresso + milk, but smaller than a latte."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/hot-chocolate_n6frdh.jpg",
        cat: "hot",
        name: "Hot Chocolate",
        price: 120,
        des: "Chocolate + steamed milk. For the kids, but if you're a kid at heart, you can get this too."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/latte_f8seft.jpg",
        cat: "hot",
        name: "Latte",
        price: 120,
        des: "Espresso + steamed milk. The basic drink of all but it's the best."
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901056/AltitudePHImages/lungo_cioarx.jpg",
        cat: "hot",
        name: "Lungo",
        price: 100,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/matcha-latte-hot_rlgbzz.jpg",
        cat: "hot",
        name: "Matcha Latte",
        price: 120,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901056/AltitudePHImages/mocha-latte-hot_bqgyxy.jpg",
        cat: "hot",
        name: "Mocha Latte",
        price: 130,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901057/AltitudePHImages/oatmilk-flat-white_n2qcca.jpg",
        cat: "hot",
        name: "Oatmilk Flat White",
        price: 130,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901056/AltitudePHImages/oatmilk-latte_alqzhu.jpg",
        cat: "hot",
        name: "Oatmilk Latte",
        price: 140,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901057/AltitudePHImages/piccolo_rhbqbw.jpg",
        cat: "hot",
        name: "Piccolo",
        price: 100,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901057/AltitudePHImages/pour-over-coffee_ygvy7v.jpg",
        cat: "hot",
        name: "Pour Over Coffee",
        price: 100,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901057/AltitudePHImages/spanish-latte_dss8vo.jpg",
        cat: "hot",
        name: "Spanish Latte",
        price: 120,
        des: ""
    },
    {
        img: "https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901055/AltitudePHImages/iced-lemon-black_ragkv7.jpg",
        cat: "tea",
        name: "Iced Lemon Black Tea",
        price: 85,
        des: ""
    }
]
app.get('/write', (req, res) => {
    Product.insertMany(products)
    .then(res.send("Success!!"));
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


// listen for connections
const addr = 'mongodb+srv://isaacrjmk:TwnF0P26xdASZnfw@altitudeph-db.xjyvcid.mongodb.net/AltitudePH-DB?retryWrites=true&w=majority';
mongoose.connect(addr)
.then(() => {
    app.listen(PORT, () => {
    console.log("Connected to DB & Listening on port " + PORT + "...");
});
})
.catch((error) => {
    console.log(error)
})


module.exports = app;
