import styles from "./HeaderBlog.module.css";
import img from "../../../../assets/imgs/news-img.png";

export default function HeaderBlog() {
  return (
    <header className={styles.container}>
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
        <img className={styles.headImg} src={img} alt='img' />
      </div>
    </header>
  );
}
