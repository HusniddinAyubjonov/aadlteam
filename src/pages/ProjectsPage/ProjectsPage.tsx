import Footer from "../../shared/ui/Footer/Footer";
import Navbar from "../../shared/ui/Navbar/Navbar";
import { Projects } from "./Constants";
import style from "./ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <section className={style.container}>
        <div className={style.project}>
          <span>
            <h1>Projects </h1>
            <p>
              Most of our projects are closed due to their confidential nature
              and are covered by NDAs or other non-disclosure agreements.
            </p>
          </span>

          <div className={style.cards}>
            {Projects.map((info, index) => (
              <div key={index} className={style.card}>
                <img src={info.img} alt='image' />
                <button>{info.btnText}</button>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
