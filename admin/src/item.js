import './css/item.css';
import Popup from 'reactjs-popup';
import axios from 'axios';

const Item = (props) => {
    const addToPage = () => {
        axios.post(props.url + "/add-product", {"theName": props.name})
        .then((res) => {
            console.log(res.data)
        })
    }

    const removeFromPage = () => {
        axios.post(props.url + "/rm-product", {"theName": props.name})
        .then((res) => {
            console.log(res.data)
        })
    }

    return (
        <div className='self'>
        <Popup trigger=
        {
            <button className='item'>
                <img src={props.img} alt={props.name}/>
                <h3>{props.name}</h3>
            </button>
        }
        modal nested>
        {
            close => (
                <div className='popup'>
                        <h2>{props.name}</h2>
                        <button onClick={() => {close(); addToPage()}} className='toggle-btn'>Add to Products</button>
                        <button onClick={() => {close(); removeFromPage()}} className='toggle-btn'>Remove From Products</button>     
                </div>
            )
        }
</Popup>
        </div>

       
    )
}
export default Item;
