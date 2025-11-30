import Footer from "../../ui-components/ui/Footer/Footer";
import Header from "../../ui-components/ui/Header/Header";
import Navbar from "../../ui-components/ui/Navbar/Navbar";
import OurMission from "./components/OurMission/OurMission";
import OurSkils from "./components/OurSkils/OurSkils";
import styles from "./about.module.css";
import { PrincipleList } from "./principle-list";

export default function About() {
  // ---------------------------------------------------------------------------
  return (
    <div>
      <Navbar />
      <Header
        title="About Us"
        description="Aadl Team has 5 years of experience in web and app development, covering frontend and backend. We deliver high-quality, scalable solutions and focus on personalized, client-centered results. Most of our work is private, but we are ready for new projects."
      />

      {/*---------------------------------------------------------------------------
      /// Our Principles
      --------------------------------------------------------------------------- */}

      <div className={`${styles.OurPrinciples} ${styles.container}`}>
        <span>
          <h1>OurPrinciples</h1>
          <p>
            Our principles are quality, transparency, responsibility, and a
            personalized approach to every project.
          </p>
        </span>

        <div className={styles.cards}>
          {PrincipleList.map((principle, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardIcon}>
                <img src={principle.icon} alt="icon" />
              </div>
              <div className={styles.cardText}>
                <h2>{principle.title}</h2>
                <p>{principle.description}</p>
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
