import clsx from "clsx";
// import Footer from "../../ui-components/ui/Footer/Footer";
import Navbar from "../../ui-components/ui/Navbar/Navbar";
import Advantages from "./components/Advantages/Advantages";
// import BuildFeature from "./components/BuildFeature/BuildFeature";
// import ChooseUs from "./components/ChooseUs/ChooseUs";
// import News from "./components/News/News";
// import Review from "./components/Reviews/Review";
// import Services from "./components/Services/Service";
// import StartWithMe from "./components/StartWith/StartWith";
import style from "./home.module.css";
import { servicesData } from "./constants";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className={style.container}>
        <h1 className={style.headTitle}>
          A leading web-studio to take your business to the next level
        </h1>
        <p className={style.headDescription}>
          We create modern, user-friendly websites optimized for all devices.
          Our solutions suit any purpose — from personal projects to large-scale
          platforms.
        </p>
      </section>
      {/* <Services /> */}

      <section className={style.yourProject}>
        <div>
          <h2 className={style.projectTitle}>Build your project</h2>
          <p className={style.projectDescription}>
            We help bring your project to life — from concept and design to a
            complete web solution or app.
          </p>

          <div className={style.content}>
            {servicesData.map((service) => (
              <div
                key={service.title}
                className={clsx(style.card, {
                  [style.bigCard]: service.title === "IOS & ANDROID APP",
                })}
              >
                <div className={style.icons}>
                  <img className={style.icon} src={service.icon} alt="icon" />
                </div>
                <h3 className={style.cardTitle}>{service.title}</h3>
                <p className={style.cardDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Advantages />
      {/* <ChooseUs /> */}
      {/* <BuildFeature /> */}
      {/* <Review /> */}
      {/* <StartWithMe /> */}
      {/* <News /> */}
      {/* <Footer /> */}
    </div>
  );
}
