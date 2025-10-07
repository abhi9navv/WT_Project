import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SMART DHOPA</div>
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#prices">PRICES</a></li>
        <li><a href="#contact">CONTACT US</a></li>
        <li><a href="#order">ORDER NOW</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
