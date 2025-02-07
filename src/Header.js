import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Use solid instead of regular
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="topbar">
                <p><FontAwesomeIcon icon={faPhone} style={{ color: "#ededed" }} /> +001234567890</p>
                <p>Get 50% off on Selected Items &nbsp;|&nbsp; Shop Now</p>
                <p>Eng <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff" }} /> </p>
                <p> Location <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff" }} /></p>
            </div>
        </header>
    );
}

export default Header;
