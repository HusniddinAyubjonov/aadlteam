import style from "./Advantages.module.css";
import img1 from "../../assets/imgs/our-advanture-img.png";
import { OurAdvantages } from "./constants";

export default function Advantages() {
  return (
    <section className={style.container}>
      <div className={style.advantages}>
        <img src={img1} alt='phone' />
        <div className={style.advantagesText}>
          <h1>Our Advantages</h1>
          <p>
            We turn technology into growth. <br /> Our solutions deliver speed,
            reliability, and security — built for modern digital businesses.
          </p>
          <div>
            {OurAdvantages.map((advantages, index) => (
              <div key={index} className={style.advantagesInfo}>
                <div className={style.icon}>
                  <img src={advantages.icon} alt='icon' />
                </div>
                <h3>{advantages.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
