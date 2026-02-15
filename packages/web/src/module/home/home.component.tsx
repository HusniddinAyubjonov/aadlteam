import styles from "./home.module.css"
import {
  advantagesData,
  chooseUsData,
  newData,
  servicesData,
  startWithData,
} from "./home.data"

import img1 from "../../assets/imgs/our-advanture-img.png"
import img2 from "../../assets/imgs/choose-us-img.png"
import img3 from "../../assets/imgs/build-feauture.png"
import img4 from "../../assets/imgs/video.png"
import { ReviewSection } from "./section-review/section-review.component"
import { CardInfo } from "../../ui-components/card-info/card-info.component"
import { ContentCard } from "../../ui-components/content-card/content-card.component"

export function Home() {
  // ---------------------------------------------------------------------------

  return (
    <div>
      <section className={styles.container}>
        <div className={styles.head}>
          <h1 className={styles.headTitle}>
            A leading web-studio to take your business to the next level
          </h1>
          <p className={styles.headDescription}>
            We create modern, user-friendly websites optimized for all devices.
            Our solutions suit any purpose — from personal projects to
            large-scale platforms.
          </p>
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Build your project
      --------------------------------------------------------------------------- */}

      <section className={styles.yourProject}>
        <div>
          <h2 className={styles.projectTitle}>Build your project</h2>
          <p className={styles.projectDescription}>
            We help bring your project to life — from concept and design to a
            complete web solution or app.
          </p>

          <div className={styles.content}>
            {servicesData.map((service) => (
              <>
                {service.title === "IOS & ANDROID APP" ? (
                  <div key={service.id} className={styles.bigCard}>
                    <div className={styles.textContent}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDescription}>
                        {service.description}
                      </p>
                    </div>

                    <img
                      className={styles.bigIcon}
                      src={service.icon}
                      alt="icon"
                    />
                  </div>
                ) : (
                  <CardInfo
                    type="colum"
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Our Advantages
      --------------------------------------------------------------------------- */}

      <section className={styles.section1}>
        <div className={styles.advantages}>
          <img className={styles.advantagesImg} src={img1} alt="phone" />
          <div className={styles.advantagesText}>
            <h1 className={styles.advantagesTitle}>Our Advantages</h1>
            <p className={styles.advantagesDescription}>
              We turn technology into growth. <br /> Our solutions deliver
              speed, reliability, and security — built for modern digital
              businesses.
            </p>
            <div>
              {advantagesData.map((advantages) => (
                <CardInfo
                  type="row"
                  key={advantages.id}
                  icon={advantages.icon}
                  title={advantages.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Why Choose Us
      --------------------------------------------------------------------------- */}

      <section className={styles.section}>
        <div className={styles.chooseUsTexts}>
          <div className={styles.chooseUs}>
            <div className={styles.chooseUsText}>
              <h1 className={styles.chooseUsTitle}>Why Choose Us</h1>
              <p className={styles.chooseUsDescription}>
                We empower businesses with cutting-edge IT solutions that drive
                success and innovation.
              </p>
              <div>
                {chooseUsData.map((choose) => (
                  <CardInfo
                    type="row"
                    key={choose.id}
                    icon={choose.icon}
                    title={choose.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <img className={styles.imgLaptop} src={img2} alt="phone" />
      </section>

      {/*---------------------------------------------------------------------------
      /// Build the Future of Technology with Us
      --------------------------------------------------------------------------- */}

      <section className={styles.buildFeatureSection}>
        <div className={styles.buildFeature}>
          <span className={styles.buildFeatureTexts}>
            <h1 className={styles.buildFeatureTitle}>
              Build the Future of Technology with Us
            </h1>
            <p className={styles.buildFeatureDescription}>
              Partner with our team to create innovative, secure, and scalable
              IT solutions that drive real business results.
            </p>
            <button className={styles.buildFeatureBtn}>start now</button>
          </span>
          <img className={styles.buildFeatureImg} src={img3} alt="img phone" />
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Reviews
      --------------------------------------------------------------------------- */}

      <ReviewSection />
      {/*---------------------------------------------------------------------------
      /// StartWithMe
      --------------------------------------------------------------------------- */}

      <div className={styles.starts}>
        <div className={styles.startText}>
          <h1 className={styles.startTitle}>Get started today</h1>
          <p className={styles.startDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className={styles.startsInfo}>
            {startWithData.map((start) => (
              <CardInfo
                type="row"
                key={start.id}
                icon={start.icon}
                title={start.title}
              />
            ))}
          </div>
        </div>
        <img src={img4} alt="video" className={styles.video} />
      </div>

      <section className={styles.news}>
        <h1 className={styles.newsTitle}>Browse our latest news</h1>
        <div className={styles.newsList}>
          {newData.map((news) => (
            <ContentCard
              key={news.id}
              img={news.img}
              btnText={news.btnText}
              title={news.title}
              description={news.description}
              avatar={news.avatar}
              fullName={news.fullName}
              aboutUser={news.aboutUser}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
