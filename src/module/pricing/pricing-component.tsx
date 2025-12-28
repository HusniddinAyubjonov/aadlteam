import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./pricing.module.css";
import { pricingData } from "./price-list";

export default function PricingPage() {
  return (
    <section className={styles.container}>
      <div className={styles.pricing}>
        <h1 className={styles.pricingTitle}>Pricing</h1>

        <div className={styles.pricingCardsWrapper}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={26}
            slidesPerView={3}
            pagination={{
              clickable: true,
              el: `.${styles.pricingDots}`,
              bulletClass: styles.pricingDot,
              bulletActiveClass: styles.pricingDotActive,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1180: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
              1580: {
                slidesPerView: 4.8,
              },
            }}
            className={styles.pricingCards}
          >
            {pricingData.map((price, index) => (
              <SwiperSlide key={index}>
                <div className={styles.pricingCard}>
                  <button className={styles.tariff}>{price.tariff}</button>
                  <h1>{price.price}</h1>
                  <p>{price.title}</p>

                  <ul>
                    <p>{price.feature}</p>
                    {price.features.map((feature) => (
                      <li key={feature} className={styles.listFeature}>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/ContactUs">
                    <button className={styles.btnNextPage}>
                      {price.button}
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.pricingDots}></div>
        </div>
      </div>
    </section>
  );
}
