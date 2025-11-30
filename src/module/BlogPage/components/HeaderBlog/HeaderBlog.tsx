import style from "./HeaderBlog.module.css";
import img from "../../../../assets/imgs/news-img.png";

export default function HeaderBlog() {
  return (
    <header className={style.container}>
      <div className={style.card}>
        <div>
          <button>Featured</button>
          <h2>
            Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
            Scelerisque viverra donec diammeo.
          </p>
        </div>
        <img src={img} alt='img' />
      </div>
    </header>
  );
}
