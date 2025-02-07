// StoreItem.js
import React from 'react';

const StoreItem2 = ({ item }) => {
    return (
        <div className="store-item">
            <button className="add-to-favorites">❤️</button> {/* Moved the heart icon to the top */}
            <img src={item.image} alt={item.name} className="store-item-image" />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <div className="star-rating">
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
            </div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default StoreItem2;
