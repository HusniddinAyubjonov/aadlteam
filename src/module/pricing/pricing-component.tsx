import { Link } from "react-router-dom";
import styles from "./pricing.module.css";
import { Navbar } from "../../ui-components/Navbar/Navbar";
import { Footer } from "../../ui-components/Footer/Footer";
import { pricingData } from "./price-list";

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.pricing}>
          <h1 className={styles.pricingTitle}>Pricing</h1>
          <p className={styles.pricingDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat. Scelerisque
          </p>

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
        </div>
      </section>
      <Footer />
    </div>
  );
}
