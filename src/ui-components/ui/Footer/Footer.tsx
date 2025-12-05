import style from "./Footer.module.css";
import logo from "../../../../public/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.footerP1}>
          <img src={logo} alt="logo" />
          <div className={style.socials}>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className={style.footerCards}>
          <div className={style.footerP2}>
            <h3>Menu</h3>
            <hr />

            <div className={style.linksSec}>
              <ul className={style.links}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Pricing">Pricing</Link>
                </li>
              </ul>

              <ul className={style.links}>
                <li>
                  <Link to="/Projects">projects</Link>
                </li>
                <li>
                  <Link to="/Blog">Blog</Link>
                </li>
                <li>
                  <Link to="/ContactUs">contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.card}>
            <h2>DOWNLOAD OUR COMPANY PROFILE</h2>
            <p>
              Explore our innovative projects, tech expertise, and digital
              solutions.
            </p>
            <button>Download</button>
          </div>
        </div>

        <div className={style.footerP3}>
          <hr />
          <h1>All rights reserved</h1>
        </div>
      </div>
    </footer>
  );
}
