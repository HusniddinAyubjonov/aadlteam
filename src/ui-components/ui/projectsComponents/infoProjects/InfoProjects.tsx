import style from "./InfoProjects.module.css";
import type { InfoProjectsProps } from "./types";

export default function InfoProjects({
  image,
  text1,
  text2,
  text3,
  text4,
  image2,
  text5,
  text6,
  text7,
  text8,
  text9,
  cardText,
}: InfoProjectsProps) {
  return (
    <section className={style.container}>
      <img src={image} alt='img' className={style.image1} />
      <div className={style.container2}>
        <h1>{text1}</h1>
        <span>
          <p>{text2}</p>
          <p>{text3}</p>
        </span>
        <h2>{text4}</h2>
        <span>
          <p>{text5}</p>
          <p>{text6}</p>
        </span>
      </div>
      <img src={image2} alt='img' className={style.image2} />
      <div className={style.container2}>
        <h2>{text7}</h2>
        <span>
          <p>{text8}</p>
          <p>{text9}</p>
        </span>
      </div>
      <div className={style.card}>
        <h3>{cardText}</h3>
      </div>
    </section>
  );
}
