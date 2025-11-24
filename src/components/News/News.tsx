import { New } from "./Constants";
import style from "./News.module.css";

export default function News() {
  return (
    <section className={style.container}>
      <div className={style.news}>
        <span>
          <h1>Browse our latest news</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
            neque orci amet, amet .
          </p>
        </span>

        <div className={style.cards}>
          {New.map((info, index) => (
            <div key={index} className={style.card}>
              <img src={info.img} alt='image' />
              <button>{info.btnText}</button>
              <h3>{info.title}</h3>
              <p>{info.description}</p>
              <hr />
              <div className={style.user}>
                <img src={info.avatar} alt='avatar' />
                <span>
                  <h4>{info.full_name}</h4>
                  <h5>{info.about_user}</h5>
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className={style.moreBtn}>View All Articles</button>
      </div>
    </section>
  );
}
