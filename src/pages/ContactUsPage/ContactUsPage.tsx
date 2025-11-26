import Footer from "../../shared/ui/Footer/Footer";
import Navbar from "../../shared/ui/Navbar/Navbar";
import { Contact } from "./constants";
import style from "./ContactUsPage.module.css";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <section className={style.container}>
        <h1>Get in touch</h1>
        <div className={style.formBox}>
          <form className={style.form}>
            <div className={style.field}>
              <label>NAME</label>
              <input type='text' placeholder='Full Name' />
            </div>

            <div className={style.field}>
              <label>EMAIL</label>
              <input type='email' placeholder='email@example.com' />
            </div>

            <div className={style.field}>
              <label>COMPANY</label>
              <input type='text' placeholder='Company Name' />
            </div>

            <div className={style.field}>
              <label>SUBJECT</label>
              <input type='text' placeholder='How can we help?' />
            </div>

            <div className={style.fieldFull}>
              <label>MESSAGE</label>
              <textarea placeholder='Your Message'></textarea>
            </div>

            <button className={style.sendBtn}>SEND MESSAGE</button>
          </form>

          <div className={style.formText}>
            <h3>Want to reach us directly?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              pharetra elementum sit id sagittis non donec egestas.
            </p>
            <div className={style.emails}>
              {Contact.map((item, index) => (
                <div key={index} className={style.email}>
                  <div>
                    <img src={item.img} alt='icon' />
                  </div>
                  <a
                    href={`mailto:${item.email}?subject=Hello&body=Write your message here`}>
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
