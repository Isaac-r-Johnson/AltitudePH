import './css/item.css';

const Item = (props) => {
    return (
        <div>
            <button className='item'>
                <img src={props.img} alt={props.name}/>
                <h3>{props.name}</h3>
            </button>
        </div>
    )
}
export default Item;
