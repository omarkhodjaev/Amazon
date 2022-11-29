import  { useState } from "react";
import logo from "../../assets/images/logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

function Header({setIsNavbarSearchActive}) {

  const { t } = useTranslation();

  const [selectedOption,setSelectedOption] = useState("All");

  const { i18n } = useTranslation();

  const [changeLanguage, setChangeLanguage] = useState()

  const [activeLanguage,setActiveLanguage] = useState();

  const langs = [
    "uz", 
    "ru",
    "en"
  ]
  
  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value || "uz");
  }


  console.log(localStorage.getItem("lang"));


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
          <p>{t("delivery_label")}</p>
          <b>{t("country")}</b>
        </div>
      </div>

      <div className="header__search-wrapper">
        <select className="search__select"  style={selectedOption.length <= 7 ? {width:`${selectedOption.length * 15}px`}: {width:`${selectedOption.length * 10}px`}} onChange={(e) => {setSelectedOption(e.target.value)}}>
          <option value="all">{t("all")}</option>
          <option value="baby and toys">{t("baby and Toys")}</option>
          <option value="laptops">{t("laptops")}</option>
          <option value="personal care">{t("personal care")}</option>

        </select>
        <input type="text" className="search__input" onBlur={() => {setIsNavbarSearchActive(false)}} onFocus={() => {setIsNavbarSearchActive(true)}} />
        <button>
          <FiSearch />
        </button>
      </div>

      <select className="header__language-wrapper" onChange={ changeWebsiteLang }>
        {
          langs.map(langItem => 
            <option selected={localStorage.getItem("lang") === langItem ? true : false} key={uuidv4()} value={langItem}>{langItem.toUpperCase()}</option>  
          )
        }
      </select>

      <a className="account__list" href="/">
        <div className="list__wrapper">
          <p>{t("Sign in")}</p>
          <h3>
            {t("Accounts list")}
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
        <p>{t("Returns")}</p>
        <h3>{t("Orders")}</h3>
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
            {t("Cart")}
          </h4>
        </div>
      </a>
    </header>
  );
}

export default Header;
