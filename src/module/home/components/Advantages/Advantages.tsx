import style from "./Advantages.module.css";
import img1 from "../../../../assets/imgs/our-advanture-img.png";
import { OurAdvantages } from "./constants";

export default function Advantages() {
  return (
    <div className={style.advantages}>
      <img className={style.advantagesImg} src={img1} alt="phone" />
      <div className={style.advantagesText}>
        <h1 className={style.advantagesTitle}>Our Advantages</h1>
        <p className={style.advantagesDescription}>
          We turn technology into growth. <br /> Our solutions deliver speed,
          reliability, and security — built for modern digital businesses.
        </p>
        <div>
          {OurAdvantages.map((advantages, index) => (
            <div key={index} className={style.advantagesInfo}>
              <div className={style.advantagesIcons}>
                <img
                  className={style.advantagesIcon}
                  src={advantages.icon}
                  alt="icon"
                />
              </div>
              <h3 className={style.advantagesInfoText}>{advantages.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
