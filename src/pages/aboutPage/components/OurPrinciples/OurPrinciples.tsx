import { Principles } from "./contants";
import style from "./OurPrinciples.module.css";

export default function OurPrinciples() {
  return (
    <section className={style.container}>
      <div className={style.OurPrinciples}>
        <span>
          <h1>OurPrinciples</h1>
          <p>
            Our principles are quality, transparency, responsibility, and a
            personalized approach to every project.
          </p>
        </span>

        <div className={style.cards}>
          {Principles.map((principle, index) => (
            <div className={style.card} key={index}>
              <div className={style.cardIcon}>
                <img src={principle.icon} alt='icon' />
              </div>
              <div className={style.cardText}>
                <h2>{principle.title}</h2>
                <p>{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
