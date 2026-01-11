// BlogPage.jsx
import { useState } from "react";
import styles from "./blog.module.css";
import { postData } from "./constants";
import { Link } from "react-router-dom";

import img from "../../assets/imgs/news-img.png";

export function BlogPage() {
  const [filter, setFilter] = useState("All");

  const filteredPosts = postData.filter((post) => {
    if (filter === "All") {
      return true;
    }
    return post.category === filter;
  });

  return (
    <>
      <section>
        <div className={`${styles.blog} ${styles.container}`}>
          <span className={styles.blogTexts}>
            <h1 className={styles.blogTitle}>Blog</h1>
          </span>
        </div>
      </section>

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

      <section>
        <div className={`${styles.posts} ${styles.container}`}>
          <span className={styles.postHead}>
            <h1 className={styles.postHeadTitle}>Latest Posts</h1>
            <div className={styles.postBtns}>
              {["All", "Apps", "Products", "Tutorial"].map((card) => (
                <button
                  key={card}
                  className={styles.postButton}
                  onClick={() => setFilter(card)}
                  style={{
                    backgroundColor: filter === card ? "#6fa001" : "#1E1F1E",
                  }}
                >
                  {card}
                </button>
              ))}
            </div>
          </span>

          <div className={styles.postCards}>
            {filteredPosts.map((info, index) => (
              <Link key={index} to={info.link}>
                <div className={styles.postCard}>
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
