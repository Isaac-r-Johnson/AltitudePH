/* eslint-disable array-callback-return */
import './css/products.css';
import Product from './product';
import React from 'react';

const App = (props) => {
    var display = props.display;
    var viewType = props.view;
    var sortType = props.sortType;

    const [products, setProducts] = React.useState([]);
    const LoadProducts = () => {
        fetch('https://altitude-api.vercel.app/products')
          .then(json => json.json())
          .then(data => {
            setProducts(data);
          })
    }
    
    React.useEffect(() => {
        LoadProducts();
      }, []);
    
    if (viewType === "insta"){
        if (display === "all" && sortType === "cat"){
            // Also use vercel to host backend, then change address in the package.json for react app
            return (
                <div>
                    <div className='container'>
                        <h2>All Items</h2>
                        <div className='row holder'>
                        {
                            products.map((product) => {
                                return <div className='col-md'><Product pic={product.img} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                            })
                        }
                        </div>
                    </div>
                </div>
            );
        }
        else if (display === "food" && sortType === "cat"){
            // Also use vercel to host backend, then change address in the package.json for react app
            return (
                <div>
                    <div className='container'>
                        <h2>Food</h2>
                        <div className='row holder'>
                        {
                            products.map((product) => {
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
        else if (display === "bottled" && sortType === "cat"){
            // Also use vercel to host backend, then change address in the package.json for react app
            return (
                <div>
                    <div className='container'>
                        <h2>Bottled Drinks</h2>
                        <div className='row holder'>
                        {
                            products.map((product) => {
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
        else if (display === "hot" && sortType === "cat"){
            // Also use vercel to host backend, then change address in the package.json for react app
            return (
                <div>
                    <div className='container'>
                        <h2>Hot Drinks</h2>
                        <div className='row holder'>
                        {
                            products.map((product) => {
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
        else if (display === "tea" && sortType === "cat"){
            // Also use vercel to host backend, then change address in the package.json for react app
            return (
                <div>
                    <div className='container'>
                        <h1>Tea</h1>
                        <div className='row holder'>
                        {
                            products.map((product) => {
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
    else if (viewType === "list"){
        console.log("A Work In Progress!");
    }

}

export default App;