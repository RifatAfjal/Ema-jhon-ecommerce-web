import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import Feature from './Feature';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    console.log(props.data);
    const { img, category, name, seller, star, features, price,stock } = props.data;
    return (
        <div className="product">
            <div>
                <img src={img} alt={category} />
            </div>
            <div className="product-details-container">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>

                <div className="product-details">
                    <div>
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button className="cart-btn" onClick={()=>props.handle(props.data)}>
                            {element} add to card
                        </button>
                    </div>

                    <div>
                        <Feature
                          star = {star}
                          feature = {features}
                        >  
                        </Feature>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;