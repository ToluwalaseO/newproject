// Store.js
import React from 'react';
import StoreItem from './StoreItem';
import './Store.css';

const storeItems = [
    { name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: 'Organic Cotton, fairtrade certified.', rating: 4 },
    { name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'A perfect balance of high-fidelity audio.', rating: 5 },
    { name: 'Base BT Earphones', price: '$289.00', image: "/basebt.png", description: 'Table with air puffer, staired veneer/black.', rating: 3 },
    { name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 },
    { name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5 },
    { name: 'TAGRY Bluetooth', price: '$109.00', image: "/targy.png", description: '250, 8 core GPU, 8GB.', rating: 4 },
    { name: 'Monster MNFLEX', price: '$89.75', image: "/Monster.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 4 },
    { name: 'Mpow CH6', price: '$289.00', image: "/Mpow.png", description: 'Kids Headphones.', rating: 3 },
    { name: 'VIVEFOX Headphones', price: '$39.00', image: "/Vivefox.png", description: 'Wired Stereo Headsets With Mic.', rating: 4 },
    { name: 'JBL TUNE 600BTNC', price: '$59.00', image: "/JBL.png", description: 'Premium Bone Conduction Open Ear Bluetooth.', rating: 5 },
    { name: 'Wireless Earbuds, IPXB', price: '$89.00', image: "/ipx8.png", description: '250, 8 core GPU, 8GB.', rating: 4 },
    { name: 'Airpods Max', price: '$559.00', image: "/airpodmaxs.png", description: 'Flex Active Noise Cancelling Bluetooth.', rating: 5 },
];

const Store = () => {
    return (
        <div className="store">
            <div className='jim'>
                <h1>Headphones For You!</h1>
            </div>
        <div className="store-container">
            {storeItems.map((item, index) => (
                <StoreItem key={index} item={item} />
            ))}
        </div>
        </div>
    );
};

export default Store;
