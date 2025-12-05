import OurMission from "./components/OurMission/OurMission";
import OurSkils from "./components/OurSkils/OurSkils";
import styles from "./about.module.css";
import { PrincipleList } from "./principle-list";
import { Navbar } from "../../ui-components/ui/Navbar/Navbar";
import { Footer } from "../../ui-components/ui/Footer/Footer";

export default function About() {
  // ---------------------------------------------------------------------------
  return (
    <div>
      <Navbar />

      <section className={styles.container}>
        <h1 className={styles.headTitle}>About Us</h1>
        <p className={styles.headDescription}>
          Aadl Team has 5 years of experience in web and app development,
          covering frontend and backend. We deliver high-quality, scalable
          solutions and focus on personalized, client-centered results. Most of
          our work is private, but we are ready for new projects.
        </p>``
      </section>

      {/*---------------------------------------------------------------------------
      /// Our Principles
      --------------------------------------------------------------------------- */}

      <div className={styles.ourPrinciples}>
        <span className={styles.ourPrincipleTexts}>
          <h1 className={styles.ourPrincipleTitle}>Our Principles</h1>
          <p className={styles.ourPrincipleDescription}>
            Our principles are quality, transparency, responsibility, and a
            personalized approach to every project.
          </p>
        </span>

        <div className={styles.principleCards}>
          {PrincipleList.map((principle, index) => (
            <div className={styles.principleCard} key={index}>
              <div className={styles.principleCardIcons}>
                <img className={styles.principleCardIcon} src={principle.icon} alt="icon" />
              </div>
              <div className={styles.principleCardText}>
                <h2 className={styles.principleCardTitle}>{principle.title}</h2>
                <p className={styles.principleCardDescription}>{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <OurMission />
      <OurSkils />
      <Footer />
    </div>
  );
}
