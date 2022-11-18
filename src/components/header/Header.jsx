import React from "react";
import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/flag-america.webp";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header__logo-wrapper">
        <a href="/" className="logo__link">
          <img className="header__logo" src={logo} alt="" />
        </a>
      </div>

      <div className="header__delivery-address">
        <HiOutlineLocationMarker className="address-icon" />
        <div className="delivery__location">
          <p>Delivery to</p>
          <b>Uzbekistan</b>
        </div>
      </div>

      <div className="header__search-wrapper">
        <select className="search__select">
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
        </select>
        <input type="text" className="search__input" />
        <button>
          <FiSearch />
        </button>
      </div>

      <div className="header__language-wrapper">
        <img src={flag} alt="" />
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      <a className="account__list" href="/">
        <div className="list__wrapper">
          <p>Hello, Sign in</p>
          <h3>
            Accounts & Lists
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </h3>
        </div>
      </a>

      <div className="headers__orders">
        <p>Returns</p>
        <h3>& Orders</h3>
      </div>

      <a href="/" className="cart__link">
        <div className="header__cart">
          <h4>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Cart
          </h4>
        </div>
      </a>
    </header>
  );
}

export default Header;
