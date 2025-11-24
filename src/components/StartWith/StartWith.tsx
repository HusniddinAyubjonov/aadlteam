import style from "./StartWith.module.css";
import img1 from "../../assets/imgs/video.png";
import { StartWith } from "./constants";

export default function StartWithMe() {
  return (
    <section className={style.container}>
      <div className={style.starts}>
        <div className={style.startText}>
          <h1>Get started today</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div>
            {StartWith.map((start, index) => (
              <div key={index} className={style.startInfo}>
                <div className={style.icon}>
                  <img src={start.icon} alt='icon' />
                </div>
                <h3>{start.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <img src={img1} alt='phone' className={style.video} />
      </div>
    </section>
  );
}
