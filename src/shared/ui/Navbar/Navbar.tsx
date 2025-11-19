import { useState } from "react";
import style from "./Navbar.module.css";
import logo from "/public/logo.svg";
import menuIcon from "../../icon/menu-icon.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <img src={logo} alt='logo' />

        <ul className={style.navLinks}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Pricing</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact us</a>
          </li>
        </ul>

        <button className={style.downloadCV}>download our cv</button>

        <button className={style.menuBtn} onClick={toggleIsOpen}>
          <img src={menuIcon} alt='icon' />
        </button>
      </nav>

      <div className={`${style.mobileMenu} ${isOpen ? style.open : ""}`}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Pricing</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact us</a>
          </li>
        </ul>

        <button className={style.mobileCV}>download our cv</button>
      </div>
    </div>
  );
}
