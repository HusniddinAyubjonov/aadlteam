import { FAQ } from "./components/Faq/Faq";
import { Contact } from "./constants";
import styles from "./contact-us.module.css";

export default function ContactUsPage() {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.formTitle}>Get in touch</h1>
        <div className={styles.formBox}>
          <form className={styles.form}>
            <div className={styles.field}>
              <label>NAME</label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div className={styles.field}>
              <label>EMAIL</label>
              <input type="email" placeholder="email@example.com" />
            </div>

            <div className={styles.field}>
              <label>COMPANY</label>
              <input type="text" placeholder="Company Name" />
            </div>

            <div className={styles.field}>
              <label>SUBJECT</label>
              <input type="text" placeholder="How can we help?" />
            </div>

            <div className={styles.fieldFull}>
              <label>MESSAGE</label>
              <textarea placeholder="Your Message"></textarea>
            </div>

            <button className={styles.sendBtn}>SEND MESSAGE</button>
          </form>

          <div className={styles.formTexts}>
            <h3 className={styles.formTextTitle}>Want to reach us directly?</h3>
            <p className={styles.formTextDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              pharetra elementum sit id sagittis non donec egestas.
            </p>
            <div className={styles.emails}>
              {Contact.map((item, index) => (
                <div key={index} className={styles.email}>
                  <div className={styles.icons}>
                    <img className={styles.icon} src={item.img} alt="icon" />
                  </div>
                  <a className={styles.links}
                    href={`mailto:${item.email}?subject=Hello&body=Write your message here`}
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
