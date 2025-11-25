import style from "./ChooseUs.module.css";
import img1 from "../../../../assets/imgs/choose-us-img.png";
import { Choose } from "./constants";

export default function ChooseUs() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.chooseUs}>
          <div className={style.chooseUsText}>
            <h1>Why Choose Us</h1>
            <p>
              We empower businesses with cutting-edge IT solutions that drive
              success and innovation.
            </p>
            <div>
              {Choose.map((сhoose, index) => (
                <div key={index} className={style.chooseUsInfo}>
                  <div className={style.icon}>
                    <img src={сhoose.icon} alt='icon' />
                  </div>
                  <h3>{сhoose.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img className={style.imgLaptop} src={img1} alt='phone' />
    </section>
  );
}
