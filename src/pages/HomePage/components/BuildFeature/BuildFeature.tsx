import style from "./BuildFeature.module.css";
import img1 from "../../assets/imgs/build-feauture.png";

export default function BuildFeature() {
  return (
    <section className={style.buildFeatureSection}>
      <div className={style.container}>
        <div className={style.buildFeature}>
          <span>
            <h1>Build the Future of Technology with Us</h1>
            <p>
              Partner with our team to create innovative, secure, and scalable
              IT solutions that drive real business results.
            </p>
            <button>start now</button>
          </span>
          <img src={img1} alt="img phone" />
        </div>
      </div>
    </section>
  );
}
