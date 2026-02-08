import styles from "./about.module.css"
import { missionData, PrincipleList, skillsData } from "./about-us.data"

import img from "../../assets/imgs/planet.png"
import { CardInfo } from "../../ui-components/card-info/card-info.component"

export function About() {
  // ---------------------------------------------------------------------------
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.aboutHeader}>
          <h1 className={styles.headTitle}>About Us</h1>
          <p className={styles.headDescription}>
            Aadl Team has 5 years of experience in web and app development,
            covering frontend and backend. We deliver high-quality, scalable
            solutions and focus on personalized, client-centered results. Most
            of our work is private, but we are ready for new projects.
          </p>
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Our Principles
      --------------------------------------------------------------------------- */}

      <section>
        <div className={styles.ourPrinciples}>
          <span className={styles.ourPrincipleTexts}>
            <h1 className={styles.ourPrincipleTitle}>Our Principles</h1>
          </span>

          <div className={styles.principleCards}>
            {PrincipleList.map((principle) => (
              <CardInfo
                type="colum"
                key={principle.id}
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
                contentStyle={styles.contentStyle}
              />
            ))}
          </div>
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Our Mission
      --------------------------------------------------------------------------- */}

      <section>
        <section className={styles.section}>
          <div className={styles.ourMission}>
            <div className={styles.infoBox}>
              {missionData.map((texts, index) => (
                <div key={index} className={styles.infoTexts}>
                  <h2 className={styles.infoTitle}>{texts.title}</h2>
                  <span className={styles.descriptions}>
                    <p className={styles.description}>{texts.description}</p>
                    <p className={styles.secondDescription}>
                      {texts.descriptionSecond}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.worldImgBox}>
            <img className={styles.worldImg} src={img} alt="world img" />
          </div>
        </section>
      </section>

      {/*---------------------------------------------------------------------------
      /// Our Skils
      --------------------------------------------------------------------------- */}

      <section>
        <div className={styles.skills}>
          <h2 className={styles.title}>Our skills</h2>

          <div className={styles.skillBoxs}>
            {skillsData.map((block) => (
              <div key={block.title} className={styles.skillBox}>
                <h3 className={styles.skillBoxTitle}>{block.title}</h3>

                <ul className={styles.list}>
                  {block.items.map((item) => (
                    <li key={item} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
