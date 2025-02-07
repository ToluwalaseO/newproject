import React from "react";
import "./Header2.css";


const Header2 = () => {
    return (
        <header className="header2">
            <div className="topbar2">
                <div className="Chim">
                <img src="/onlinestore.png" alt="iconlogo" height={40} width={40} />
                <p>ShopCart</p> 
                </div>
            
                <p>Categories ▼</p>
                <p>Deals</p>
                <p>What's New</p>
                <p>Delivery</p>
                <div className="search-container">
                    <input type="text" placeholder="Search Product &nbsp;&nbsp;&nbsp;&nbsp;🔍" />
                </div>
                <button className="nav-button1">👤 Account</button>
                <button className="nav-button2">🛒 Cart</button>
            </div>
        </header>
    );
}

export default Header2;
