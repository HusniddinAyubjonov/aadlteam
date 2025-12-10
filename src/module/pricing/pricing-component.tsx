import { Link } from "react-router-dom";
import styles from "./pricing.module.css";
import { pricingData } from "./price-list";
import { useEffect } from "react";

export default function PricingPage() {
  useEffect(() => {
    const slider = document.querySelector(`.${styles.pricingCards}`);
    const dotsContainer = document.querySelector(`.${styles.pricingDots}`);

    if (!slider || !dotsContainer) return;
    if (window.innerWidth >= 1280) return;

    const cards = Array.from(slider.children);
    dotsContainer.innerHTML = "";

    // создаём точки
    cards.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");

    // 👉 CLICK по точке
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        const cardWidth = cards[0].clientWidth + 26; // gap = 26px
        slider.scrollTo({
          left: i * cardWidth,
          behavior: "smooth",
        });

        dots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
      });
    });

    // 👉 SCROLL обновляет active
    slider.addEventListener("scroll", () => {
      const cardWidth = cards[0].clientWidth + 26;
      const index = Math.round(slider.scrollLeft / cardWidth);

      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.pricing}>
        <h1 className={styles.pricingTitle}>Pricing</h1>
        <p className={styles.pricingDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className={styles.pricingCardsWrapper}>
          <div className={styles.pricingCards}>
            {pricingData.map((price, index) => (
              <div key={index} className={styles.pricingCard}>
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
                  <button className={styles.btnNextPage}>{price.button}</button>
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.pricingDots}></div>
        </div>
      </div>
    </section>
  );
}
