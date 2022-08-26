import React from "react";
import style from "./Navbar.module.scss";
import { useState } from "react";
import FirstSvg from "./IconSvg/FirstSvg";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={style.navigation}>
      <div className={style.brandName}>Blue Diving</div>
      <button
        className={style.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? style.navigationMenuHidden : style.navigationMenu
        }
      >
        <ul>
          <li>
            <a href="/home">
              <FirstSvg />
            </a>
          </li>
          <li>
            <a href="/training">Formations PADI</a>
          </li>
          <li>
            <a href="/activities">Activité et cours</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
