import './css/products.css';
import Product from './product';
import React from 'react';

const App = (props) => {
    var display = props.display;
    var viewType = props.view;
    var sortType = props.sortType;

    const [products, setProducts] = React.useState([]);
    const LoadProducts = () => {
        fetch('/products')
          .then(json => json.json())
          .then(data => {
            setProducts(data);
          })
    }
    
    React.useEffect(() => {
        LoadProducts();
      }, []);

    console.log("rendering");
    if (display === "all" && viewType === "insta" && sortType === "cat"){
        // Also use vercel to host backend, then change address in the package.json for react app
        return (
            <div>
                <div className='container'>
                    <h2>All Items</h2>
                    <div className='row holder'>
                    {
                        products.map((product) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint8Array((product.img.data.data)))
                            );
                            return <div className='col-md'><Product pic={`data:image/png;base64,${base64String}`} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
    else if (display === "food" && viewType === "insta" && sortType === "cat"){
        // Also use vercel to host backend, then change address in the package.json for react app
        return (
            <div>
                <div className='container'>
                    <h2>Food</h2>
                    <div className='row holder'>
                    {
                        products.map((product) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint8Array((product.img.data.data)))
                            );
                            if (product.cat === "food"){
                                return <div className='col-md'><Product pic={`data:image/png;base64,${base64String}`} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
    else if (display === "bottled" && viewType === "insta" && sortType === "cat"){
        // Also use vercel to host backend, then change address in the package.json for react app
        return (
            <div>
                <div className='container'>
                    <h2>Bottled Drinks</h2>
                    <div className='row holder'>
                    {
                        products.map((product) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint8Array((product.img.data.data)))
                            );
                            if (product.cat === "bottled"){
                                return <div className='col-md'><Product pic={`data:image/png;base64,${base64String}`} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
    else if (display === "hot" && viewType === "insta" && sortType === "cat"){
        // Also use vercel to host backend, then change address in the package.json for react app
        return (
            <div>
                <div className='container'>
                    <h2>Hot Drinks</h2>
                    <div className='row holder'>
                    {
                        products.map((product) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint8Array((product.img.data.data)))
                            );
                            if (product.cat === "hot"){
                                return <div className='col-md'><Product pic={`data:image/png;base64,${base64String}`} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
    else if (display === "tea" && viewType === "insta" && sortType === "cat"){
        // Also use vercel to host backend, then change address in the package.json for react app
        return (
            <div>
                <div className='container'>
                    <h1>Tea</h1>
                    <div className='row holder'>
                    {
                        products.map((product) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint8Array((product.img.data.data)))
                            );
                            if (product.cat === "tea"){
                                return <div className='col-md'><Product pic={`data:image/png;base64,${base64String}`} title={product.name} cat={product.cat} price={product.price} des={product.des}/></div>
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }

}

export default App;