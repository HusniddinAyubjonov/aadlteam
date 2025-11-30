import style from "./OurMission.module.css";
import img from "../../../../assets/imgs/planet.png";
import { Mission } from "./constants";

export default function OurMission() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.infoBox}>
          {Mission.map((texts, index) => (
            <div key={index} className={style.infoTexts}>
              <h2>{texts.title}</h2>
              <span>
                <p>{texts.description}</p>
                <p>{texts.descriptionSecond}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <img src={img} alt="world img" />
    </section>
  );
}
