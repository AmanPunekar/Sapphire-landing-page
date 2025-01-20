import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Sapphire" className="logo-img" />
          <h2>Sapphire</h2>
        </div>

        <div className="nav-links">
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#product" className="nav-link">
            PRODUCT
          </a>
          <a href="#pricing" className="nav-link">
            PRICING
          </a>
          <a href="#support" className="nav-link">
            SUPPORT
          </a>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <div className="search-wrapper">
            <img src="search.png" alt="search-icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search Stock, Mf.."
              className="search-box"
            />
          </div>
        </div>

        {/* Login/Signup Button */}
        <a href="#login" className="login-signup-button">
          LOGIN/SIGNUP
        </a>
      </div>
    </>
  );
};

export default Navbar;