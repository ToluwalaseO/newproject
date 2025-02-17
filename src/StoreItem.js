import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoreItem = ({ item }) => {
    const navigate = useNavigate()
    return (
        
        <div className="store-item">
            <button className="add-to-favorites">❤️</button>
            <img src={item.image} alt={item.name} className="store-item-image" />
            <h2 className="item-name">{item.name}</h2>
            <div className="item-price">{item.price}</div> 
            <div className="item-description">{item.description}</div> 
            <div className="star-rating">
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
            </div>
            <button onClick={() => navigate("/product") } className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default StoreItem;
