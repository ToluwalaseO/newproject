// Store.js
import React from 'react';
import StoreItem from './StoreItem';
import './Store.css';


const storeItems = [   
    { name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 },
    { name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5 },
    { name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: '250, 8 core GPU, 8GB.', rating: 4 },
    { name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 5 },
];

const Store2 = () => {
    return (
        <div className="store2">
            <div className='rim'>
                <h1>Recently Viewed</h1>
            </div>
        <div className="store-container">
            {storeItems.map((item, index) => (
                <StoreItem key={index} item={item} />
            ))}
        </div>
        </div>
    );
};

export default Store2;
