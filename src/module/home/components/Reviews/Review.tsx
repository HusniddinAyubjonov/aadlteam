import { Reviews } from "./constants";
import style from "./Review.module.css";

export default function Review() {
  return (
      <div className={style.review}>
        <h1>What our users say?</h1>
        <button>view all comments</button>

        <div className={style.cards}>
          {Reviews.map((item, index) => (
            <div className={style.card} key={index}>
              <p>{item.feedback}</p>
              <div className={style.user}>
                <img src={item.avatar} alt='avatar' />
                <div className={style.user_info}>
                  <h3>{item.full_name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
