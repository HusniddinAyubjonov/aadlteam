import style from "./home.module.css"
import {
  advantagesData,
  chooseUsData,
  servicesData,
  startWithData,
} from "./home.data"

import img1 from "../../assets/imgs/our-advanture-img.png"
import img2 from "../../assets/imgs/choose-us-img.png"
import img3 from "../../assets/imgs/build-feauture.png"
import img4 from "../../assets/imgs/video.png"
import { ReviewSection } from "./section-review/section-review.component"
import { NewsSection } from "./section-new/section-new.component"
import { CardInfo } from "../../ui-components/card-info/card-info.component"
import { InfoIcon } from "../../ui-components/info-icon/info-icon.component"

export function Home() {
  // ---------------------------------------------------------------------------

  return (
    <div>
      <section className={style.container}>
        <div className={style.head}>
          <h1 className={style.headTitle}>
            A leading web-studio to take your business to the next level
          </h1>
          <p className={style.headDescription}>
            We create modern, user-friendly websites optimized for all devices.
            Our solutions suit any purpose — from personal projects to
            large-scale platforms.
          </p>
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Build your project
      --------------------------------------------------------------------------- */}

      <section className={style.yourProject}>
        <div>
          <h2 className={style.projectTitle}>Build your project</h2>
          <p className={style.projectDescription}>
            We help bring your project to life — from concept and design to a
            complete web solution or app.
          </p>

          <div className={style.content}>
            {servicesData.map((service) => (
              <>
                {service.title === "IOS & ANDROID APP" ? (
                  <div key={service.id} className={style.bigCard}>
                    <div className={style.textContent}>
                      <h3 className={style.cardTitle}>{service.title}</h3>
                      <p className={style.cardDescription}>
                        {service.description}
                      </p>
                    </div>

                    <img
                      className={style.bigIcon}
                      src={service.icon}
                      alt="icon"
                    />
                  </div>
                ) : (
                  <CardInfo
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

      <section className={style.section1}>
        <div className={style.advantages}>
          <img className={style.advantagesImg} src={img1} alt="phone" />
          <div className={style.advantagesText}>
            <h1 className={style.advantagesTitle}>Our Advantages</h1>
            <p className={style.advantagesDescription}>
              We turn technology into growth. <br /> Our solutions deliver
              speed, reliability, and security — built for modern digital
              businesses.
            </p>
            <div>
              {advantagesData.map((advantages) => (
                <InfoIcon
                  key={advantages.id}
                  title={advantages.title}
                  icon={advantages.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Why Choose Us
      --------------------------------------------------------------------------- */}

      <section className={style.section}>
        <div className={style.chooseUsTexts}>
          <div className={style.chooseUs}>
            <div className={style.chooseUsText}>
              <h1 className={style.chooseUsTitle}>Why Choose Us</h1>
              <p className={style.chooseUsDescription}>
                We empower businesses with cutting-edge IT solutions that drive
                success and innovation.
              </p>
              <div>
                {chooseUsData.map((choose) => (
                  <InfoIcon
                    key={choose.id}
                    title={choose.title}
                    icon={choose.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <img className={style.imgLaptop} src={img2} alt="phone" />
      </section>

      {/*---------------------------------------------------------------------------
      /// Build the Future of Technology with Us
      --------------------------------------------------------------------------- */}

      <section className={style.buildFeatureSection}>
        <div className={style.buildFeature}>
          <span className={style.buildFeatureTexts}>
            <h1 className={style.buildFeatureTitle}>
              Build the Future of Technology with Us
            </h1>
            <p className={style.buildFeatureDescription}>
              Partner with our team to create innovative, secure, and scalable
              IT solutions that drive real business results.
            </p>
            <button className={style.buildFeatureBtn}>start now</button>
          </span>
          <img className={style.buildFeatureImg} src={img3} alt="img phone" />
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Reviews
      --------------------------------------------------------------------------- */}

      <ReviewSection />
      {/*---------------------------------------------------------------------------
      /// StartWithMe
      --------------------------------------------------------------------------- */}

      <div className={style.starts}>
        <div className={style.startText}>
          <h1 className={style.startTitle}>Get started today</h1>
          <p className={style.startDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className={style.startsInfo}>
            {startWithData.map((start) => (
              <InfoIcon key={start.id} title={start.title} icon={start.icon} />
            ))}
          </div>
        </div>
        <img src={img4} alt="video" className={style.video} />
      </div>

      <NewsSection />
    </div>
  )
}
