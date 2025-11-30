import { useState } from "react";
import style from "./Navbar.module.css";
import logo from "/public/logo.svg";
import menuIcon from "../../icon/menu-icon.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <img src={logo} alt="logo" />

        <ul className={style.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutPage">About</Link>
          </li>
          <li>
            <a href="/PricingPage">Pricing</a>
          </li>
          <li>
            <a href="/ProjectsPage">Projects</a>
          </li>
          <li>
            <a href="/BlogPage">Blog</a>
          </li>
          <li>
            <a href="/ContactUsPage">Contact us</a>
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
              <a href="/AboutPage">About</a>
            </li>
            <li>
              <a href="/PricingPage">Pricing</a>
            </li>
            <li>
              <a href="/ProjectsPage">Projects</a>
            </li>
            <li>
              <a href="/BlogPage">Blog</a>
            </li>
            <li>
              <a href="/ContactUsPage">Contact us</a>
            </li>
          </ul>

          <button className={style.mobileCV}>download our cv</button>
        </div>
      )}
    </div>
  );
}
