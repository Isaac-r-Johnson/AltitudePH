/* eslint-disable array-callback-return */
import './css/products.css';
import Product from './product';
import ProductS from './product-stretched';
import React from 'react';

const App = (props) => {
    var display = props.display;
    var viewType = props.view;
    var sortType = props.sortType;

    const [products, setProducts] = React.useState([]);
    const cats = ["bottled", "hot", "food", "tea"];
    var url = "https://altitude-api.vercel.app";

    const sort = (db) => {
        var sortedProducts = [];
        for (var i = 0; i < cats.length; i++){
            for (var j = 0; j < db.length; j++){
                if (db[j].cat === cats[i]){
                    sortedProducts.push(db[j]);
                }
            }
        }
        return sortedProducts;
    }
    
    React.useEffect(() => {
        fetch(url + "/all")
              .then(json => json.json())
              .then(data => {
                setProducts(data);
              })
      }, []);

    if (viewType === "insta"){
        if (sortType === "cat"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (sortType === "lp"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (sortType === "hp"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (sortType === "az"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (sortType === "za"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
    else if (viewType === "list"){
        if (sortType === "cat"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                sort(products).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (sortType === "lp"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (sortType === "hp"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (Number(a.price) > Number(b.price)) ? -1 : 1).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (sortType === "az"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? 1 : -1).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (sortType === "za"){
            if (display === "all"){
                return (
                    <div>
                        <div className='container'>
                            <h2>All Items</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "food"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Food</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    if (product.cat === "food"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "bottled"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Bottled Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    if (product.cat === "bottled"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "hot"){
                return (
                    <div>
                        <div className='container'>
                            <h2>Hot Drinks</h2>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    if (product.cat === "hot"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
            else if (display === "tea"){
                return (
                    <div>
                        <div className='container'>
                            <h1>Tea</h1>
                            <div className='row holder'>
                            {
                                products.sort((a, b) => (a.name > b.name) ? -1 : 1).map((product) => {
                                    if (product.cat === "tea"){
                                        return <div className='col-md'><ProductS pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }

}

export default App;