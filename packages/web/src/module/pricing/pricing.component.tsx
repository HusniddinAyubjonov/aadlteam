import { Link } from "react-router-dom"
import styles from "./pricing.module.css"
import { pricingData } from "./price-list"

export function PricingPage() {
  return (
    <section className={styles.container}>
      <div className={styles.pricing}>
        <h1 className={styles.pricingTitle}>Pricing</h1>

        <div className={styles.pricingCardsList}>
          {pricingData.map((price,) => (
            <div className={styles.pricingCard} key={price.id}>
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
  )
}
