import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const ordered = props.order;
    const price = (ordered.reduce((priceTotal,ind) =>  { return priceTotal + ind.price},0)).toFixed(2);
    const cost = (ordered.reduce((shippingTotal,ind) => {return shippingTotal + ind.shipping},0)).toFixed(2);
    const itemsPrice = parseFloat(price);
    const shippingCost = parseFloat(cost);
    const tax = (itemsPrice*0.05).toFixed(2);
    const taxCost = parseFloat(tax);
    const totalBeforeTax = (itemsPrice + shippingCost).toFixed(2);
    const grandTotal = (itemsPrice + shippingCost + taxCost).toFixed(2);
    return (
        <div className = "order-summary">
            <h2>Order Summary</h2>
            <h3>Items ordered: {ordered.length}</h3>
            
            <pre className="order-details">
                Items price:         ${price}<br/>
                Shipping & Handling: ${cost}<br/>
                Total before tax:    ${totalBeforeTax}<br/>
                Estimated tax:       ${tax}
            </pre>

            <pre>
                Order Total:         ${grandTotal}
            </pre>
            <button>Review your order</button>
        </div>
    );
};

export default Cart;