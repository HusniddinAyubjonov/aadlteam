import { useState } from "react";
import style from "./header.module.css";
import logo from "/public/logo.svg";
import menuIcon from "../../assets/icon/menu-icon.svg";
import { Link } from "react-router-dom";

export function Header() {
  // ---------------------------------------------------------------------------

  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <img className={style.logo} src={logo} alt="logo" />

        <ul className={style.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <a href="/Pricing">Pricing</a>
          </li>
          <li>
            <a href="/ProjectList">Projects</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/ContactUs">Contact us</a>
          </li>
        </ul>

        <button className={style.downloadCV}>download our cv</button>

        <button className={style.menuBtn} onClick={toggleIsOpen}>
          <img src={menuIcon} alt="icon" />
        </button>
      </nav>

      {isOpen && (
        <div className={`${style.mobileMenu} ${style.open}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Pricing">Pricing</a>
            </li>
            <li>
              <a href="/ProjectList">Projects</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
            <li>
              <a href="/ContactUs">Contact us</a>
            </li>
          </ul>

          <button className={style.mobileCV}>download our cv</button>
        </div>
      )}
    </div>
  );
}
