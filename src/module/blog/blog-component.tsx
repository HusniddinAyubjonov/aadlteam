import { Footer } from "../../ui-components/Footer/Footer";
import { Navbar } from "../../ui-components/Navbar/Navbar";
import styles from "./blog.module.css";
import Posts from "./components/Posts/Posts";

import img from "../../assets/imgs/news-img.png";

export default function BlogPage() {
  // ---------------------------------------------------------------------------

  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.blog}>
          <span className={styles.blogTexts}>
            <h1 className={styles.blogTitle}>Blog</h1>
            <p className={styles.blogDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aenean dis placerat.
            </p>
          </span>
        </div>
      </section>
      {/*---------------------------------------------------------------------------
      /// HeaderBlog
      ---------------------------------------------------------------------------*/}

      <section className={styles.container}>
        <div className={styles.head}>
          <div className={styles.headCard}>
            <button className={styles.headCardBtn}>Featured</button>
            <h2 className={styles.headCardTitle}>
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
            </h2>
            <p className={styles.headCardDescription}>
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
              Scelerisque viverra donec diammeo.
            </p>
          </div>
          <img className={styles.headImg} src={img} alt="img" />
        </div>
      </section>
      
      <Posts />
      <Footer />
    </>
  );
}
