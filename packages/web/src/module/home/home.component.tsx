import clsx from "clsx"
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
import { ReviewSection } from "./section6/section-reviews.component"
import { NewsSection } from "./section8/section-news.component"

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
              {advantagesData.map((advantages, index) => (
                <div key={index} className={style.advantagesInfo}>
                  <div className={style.advantagesIcons}>
                    <img
                      className={style.advantagesIcon}
                      src={advantages.icon}
                      alt="icon"
                    />
                  </div>
                  <h3 className={style.advantagesInfoText}>
                    {advantages.title}
                  </h3>
                </div>
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
                {chooseUsData.map((choose, index) => (
                  <div key={index} className={style.chooseUsInfo}>
                    <div className={style.icons}>
                      <img
                        className={style.icon}
                        src={choose.icon}
                        alt="icon"
                      />
                    </div>
                    <h3 className={style.chooseUsInfoTitle}>{choose.title}</h3>
                  </div>
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
            {startWithData.map((start, index) => (
              <div key={index} className={style.startInfo}>
                <div className={style.icons}>
                  <img className={style.icon} src={start.icon} alt="icon" />
                </div>
                <h3 className={style.startInfoTitle}>{start.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <img src={img4} alt="video" className={style.video} />
      </div>

      <NewsSection />
    </div>
  )
}
