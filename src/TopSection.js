import React from "react";
import "./topsection.css";
import { useNavigate } from 'react-router-dom';


const TopSection = () => {
    const navigate = useNavigate()
    return (
        <header className="topsection">
            <div className="topbar3">
            <div className="image21">
            <img src="/newimage.png" alt="iconlogo" height={220} width={600} />
            </div>
            <div className="topbar4">
            <h1>Grab Upto 50% Off On</h1>
            <h1>Selected Headphone</h1>
            <button  onClick={() => navigate("/Buy") }>Buy now</button>
            </div>
            
            </div>
        </header>
    );
}

export default TopSection;
