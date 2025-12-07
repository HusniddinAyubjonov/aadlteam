import styles from "./blog.module.css";

import img from "../../assets/imgs/news-img.png";
import { postData } from "./constants";
import { Link } from "react-router-dom";

export default function BlogPage() {
  // ---------------------------------------------------------------------------

  return (
    <>
      <section>
        <div className={`${styles.blog} ${styles.container}`}>
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

      {/*---------------------------------------------------------------------------
      /// Latest Posts
      ---------------------------------------------------------------------------*/}

      <section>
        <div className={`${styles.posts} ${styles.container}`}>
          <span className={styles.postHead}>
            <h1 className={styles.postHeadTitle}>Latest Posts</h1>
            <div className={styles.postBtns}>
              <button className={styles.postButton}>All</button>
              <button className={styles.postButton}>Apps</button>
              <button className={styles.postButton}>Products</button>
              <button className={styles.postButton}>Tutorial</button>
            </div>
          </span>

          <div className={styles.postCards}>
            {postData.map((info, index) => (
              <Link to={info.link}>
                <div key={index} className={styles.postCard}>
                  <img
                    className={styles.postCardImg}
                    src={info.img}
                    alt="image"
                  />
                  <button className={styles.postCardButton}>
                    {info.btnText}
                  </button>
                  <h3 className={styles.postCardTitle}>{info.title}</h3>
                  <p className={styles.postCardDescription}>
                    {info.description}
                  </p>
                  <hr className={styles.postCardLine} />
                  <div className={styles.user}>
                    <img
                      className={styles.avatarIcon}
                      src={info.avatar}
                      alt="avatar"
                    />
                    <span className={styles.userInfo}>
                      <h4 className={styles.userFullName}>{info.full_name}</h4>
                      <h5 className={styles.aboutUser}>{info.about_user}</h5>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
