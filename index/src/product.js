import './css/product.css';

const Product = (props) => {
    var pic = props.pic;
    var title = props.title;
    var cat = props.cat;
    var price = props.price;
    var des = props.des;
    return (
        <div className='sizing'>
            <div className="product-card">
                <img className='coffee-pic' src={pic} alt={title}/>
                <div className='product-info'>
                    <h5>{title}</h5>
                    <h6>{cat}</h6>
                    <h4>₱{price}.00</h4>
                    <p>{des}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;