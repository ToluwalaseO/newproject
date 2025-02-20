import React from 'react';

const Part2Item = ({ item }) => {
    return (
        <div className="store-part2-item">
            <img src={item.image} alt={item.name} className="store-item-image" />
            <h2 className="store-item-name">{item.name}</h2>
            <div className="store-item-price">{item.price}</div>
            <div className="store-star-rating">
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
            </div>
        </div>
    );
};

export default Part2Item;
