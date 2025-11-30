import { PostProject } from "./Constants";
import style from "./PostProjects.module.css";

export default function PostProjects() {
  return (
    <section className={style.container}>
      <div className={style.posts}>
        <span>
          <h1>Latest Posts</h1>
          <div>
            <button>View all</button>
          </div>
        </span>

        <div className={style.cards}>
          {PostProject.map((info, index) => (
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
      </div>
    </section>
  );
}
