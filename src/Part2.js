import React from 'react';
import Part2ItemComponent from './Part2Item'; // Renamed the component import for clarity
// import './Part2.css';

// Renamed the data array to avoid a naming conflict
const part2Items = [
    { image: "/ipx8.png", name: 'Wireless Earbuds, IPXB', rating: 5, price: '$89.00' },
    { image: "/jbl.png", name: 'Airpods Max', rating: 5, price: '$559.00' },
    { image: "/monster.png", name: 'Base BT Earphones', rating: 5, price: '$289.00' },
    { image: "/basebt.png", name: 'VIVEFOX Headphones', rating: 5, price: '$39.00' },
    { image: "/airpodmaxs.png", name: 'JBL TUNE 600BTNC', rating: 5, price: '$59.00' },
];

const Part2 = () => {
    return (
        <div className="part2">
            <div className="part2-container">
                {part2Items.map((item, index) => (
                    <Part2ItemComponent key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Part2;
