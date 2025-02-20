import React from 'react';
import PopularItem from './PopularItem';
import './Popular.css';

const popularItems = [ 
    { image: "/Furniture.png", name: 'Furniture', description: '240 items Available' },
    { image: "/ipx8.png", name: 'Headphones', description: '240 items Available' },
    { image: "/Shoe.png", name: 'Shoe', description: '240 items Available' },
    { image: "/Bag.png", name: 'Bag', description: '240 items Available' },
    { image: "/Laptop.png", name: 'Laptop', description: '240 items Available' },
    { image: "/Book.png", name: 'Book', description: '240 items Available' },
];

const Popular = () => {
    return (
        <div className="store-popular">
            <div className="store-tread">
                <h1>Popular Categories</h1>
            </div>
            <div className="store-popular-container">
                {popularItems.map((item, index) => (
                    <PopularItem key={index} item={item} /> 
                ))}
            </div>
        </div>
    );
};

export default Popular;
