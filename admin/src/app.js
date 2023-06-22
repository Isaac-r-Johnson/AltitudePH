/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from 'react';
import './css/app.css';
import Item from './item';
import Popup from 'reactjs-popup';
import axios from 'axios';


const App = () => {
    const [tempImg, setTempImg] = React.useState('');
    const [tempCat, setTempCat] = React.useState('');
    const [tempName, setTempName] = React.useState('')
    const [tempPrice, setTempPrice] = React.useState('');
    const [tempDes, setTempDes] = React.useState('');

    const [products, setProducts] = React.useState([]);
    var url = "https://altitude-api.vercel.app";

    const addToDB = (url, cat, name, price, des) => {
        if (url !== "" && cat !== "" && name !== "" && price !== ""){
            var productToSend = {
                img: url,
                cat: cat,
                name: name,
                price: Number(price),
                des: des
            }
            axios.post("/add-to-db", productToSend)
            .then((res) => {
                console.log(res.data);
            });
        }
        else{
            alert("Please Fill out all fields!");
        }
    }

    const ImgF = (event) => {
        setTempImg(event.target.value);
    }
    const CatF = (event) => {
        setTempCat(event.target.value);
    }
    const NameF = (event) => {
        setTempName(event.target.value);
    }
    const PriceF = (event) => {
        setTempPrice(event.target.value);
    }
    const DesF = (event) => {
        setTempDes(event.target.value);
    }
    
    React.useEffect(() => {
        fetch(url + "/preview")
              .then(json => json.json())
              .then(data => {
                setProducts(data);
              })
      }, []);

    return (
        <div className='index-self'>
            <h1>Products:</h1>
            <div className='item-display-area'>
                {products.map((product) => {
                    return <Item img={product.img} name={product.name} url={url}/>
                })}
            </div>
            <Popup trigger=
            {
                <button className='add-btn'>+</button>
            }
            modal nested>
            {
                close => (
                    <div className='add-popup'>
                            <h2>Add Product</h2>
                            <input type='text' placeholder='Image URL' className='input-field' onChange={ImgF} value={tempImg}/>
                            <input type='text' placeholder='Category' className='input-field' onChange={CatF} value={tempCat}/>
                            <input type='text' placeholder='Name' className='input-field' onChange={NameF} value={tempName}/>
                            <input type='text' placeholder='Price' className='input-field' onChange={PriceF} value={tempPrice}/>
                            <textarea placeholder='Description (Optional)' className='input-field' onChange={DesF} value={tempDes}/>
                            <button onClick={() => {close(); addToDB(tempImg, tempCat, tempName, tempPrice, tempDes)}} className='add-btn special-add'>ADD</button>    
                    </div>
                )
            }
            </Popup>

        </div>
    );
}

export default App;