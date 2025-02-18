import React from 'react';

const PopularItem = ({ item }) => { // Renamed to PascalCase
    return (
        <div className="popular-item">
            <img src={item.image} alt={item.name} className="popular-item-image" />
            <h2 className="item-name">{item.name}</h2>
            <div className="item-description">{item.description}</div> 
        </div>
    );
};

export default PopularItem;
