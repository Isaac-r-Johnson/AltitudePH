import './css/product.css';
import Popup from 'reactjs-popup';

const ProductS = (props) => {
    var pic = props.pic;
    var title = props.title;
    var cat = props.cat;
    var price = props.price;
    var des = props.des;

    return (
        <div>
            <Popup trigger=
                    {
                    <div className='sizing'>
                        <div className="product-card-stretched product-card">
                            <img className='coffee-pic' src={pic} alt={title}/>
                            <div className='product-info'>
                                <h5>{title}</h5>
                                <h6>{cat}</h6>
                                <h4>₱{price}.00</h4>
                                <p>{des}</p>
                            </div>
                        </div>
                    </div>
                    }
                    modal nested>
                    {
                        close => (
                            <div className='popup'>
                                <nav className="navbar">
                                    <div className="container-fluid">
                                        <button onClick={() => { close()}} className="back-btn">&lt;&lt; Go Back</button>
                                        <img src="logo.jpg" alt="AltitudePH" width="70" height="70" className="d-block align-text-top logo"/>
                                    </div>
                                </nav>
                                <div className='meat'>
                                    <img className='display-img' src={pic} alt={title}></img>
                                    <div className='separator'></div>
                                    <div className='product-info-card'>
                                        <div className='content'>
                                            <h6>{cat}</h6>
                                            <h3>{title}</h3>
                                            <h5>₱{price}.00</h5>
                                        </div>   
                                        <hr/>
                                        <div className='content'>
                                            <p>{des}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
            </Popup>
        </div>
    );
}

export default ProductS;