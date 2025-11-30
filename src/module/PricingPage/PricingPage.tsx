import { Link } from "react-router-dom";
import Footer from "../../ui-components/ui/Footer/Footer";
import Navbar from "../../ui-components/ui/Navbar/Navbar";
import { Pricing } from "./constants";
import style from "./PricingPage.module.css";

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <section className={style.container}>
        <div className={style.pricing}>
          <h1>Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat. Scelerisque
          </p>

          <div className={style.pricingCards}>
            {Pricing.map((price, index) => (
              <div key={index} className={style.pricingCard}>
                <button className={style.tariff}>{price.tariff}</button>
                <h1>{price.price}</h1>
                <p>{price.title}</p>

                <ul>
                  <p>{price.feature}</p>
                  {price.features.map((feature) => (
                    <li key={feature} className={style.listFeature}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/ContactUsPage">
                  <button className={style.btnNextPage}>{price.button}</button>
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
