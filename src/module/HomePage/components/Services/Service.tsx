import clsx from "clsx";
import { servicesData } from "./constants";
import style from "./Service.module.css";

export default function Services() {
  return (
    <section className={style.container}>
      <div className={style.yourProject}>
        <h2>Build your project</h2>
        <p>
          We help bring your project to life — from concept and design to a
          complete web solution or app.
        </p>

        <div className={style.content}>
          {servicesData.map((service) => (
            <div
              key={service.title}
              className={clsx(style.card, {
                [style.bigCard]: service.title === "IOS & ANDROID APP",
              })}>
              <div className={style.icon}>
                <img src={service.icon} alt='icon' />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
