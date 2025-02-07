// Store.js
import React from 'react';
import StoreItem3 from './Storeitem3';
import './Store.css';

const storeItems3 = [
    { name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Organic Cotton, fairtrade certified.', rating: 4 },
    { name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'A perfect balance of high-fidelity audio.', rating: 5 },
    { name: 'Base BT Earphones', price: '$289.00', image: "/basebt.png", description: 'Table with air puffer, staired veneer/black.', rating: 3 },
    { name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 },
];

const Store3 = () => {
    return (
        <div className="store3">
            <div className='rewf'>
                <h1>Similar Items You Might Like</h1>
            </div>
            <div className="store-container">
                {storeItems3.map((item, index) => (
                    <StoreItem3 key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Store3;
