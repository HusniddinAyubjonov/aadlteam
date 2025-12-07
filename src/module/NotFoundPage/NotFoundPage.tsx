import style from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <section className={style.container}>
        <div className={style.notFound}>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            The page you're looking for can't be found. Double-check the URL and
            try again. Or click the button below.
          </p>
          <div>
            <Link to="/PricingPage">
              <button>View Pricing</button>
            </Link>
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
