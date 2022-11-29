import { t } from 'i18next';
import React from 'react';
import c from './MiniHeader.module.css';

const MiniHeader = ({setIsSidebarActive}) => {
  return (
    <div className={c.miniHeader}>
      <ul className={c.miniHeader__menu}>
        <li
          className={c.menu__item}
          onClick={() => {
            setIsSidebarActive(true);
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          {t("all")}
        </li>
        <li className={c.menu__item}>{t("Today's Deals")}</li>
        <li className={c.menu__item}>{t("Customer Service")}</li>
        <li className={c.menu__item}>{t("Registry")}</li>
        <li className={c.menu__item}>{t("Gift Cards")}</li>
        <li className={c.menu__item}>{t("Sell")}</li>
      </ul>
    </div>
  );
}

export default MiniHeader