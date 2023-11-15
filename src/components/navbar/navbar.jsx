import React from "react";
import "../../css/navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="https://i.ibb.co/YZxPY6W/logo.png" />
                </div>
                <ul className="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Sell</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">SignUp</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;