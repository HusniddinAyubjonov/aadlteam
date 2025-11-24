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
      </div>
    </section>
  );
}
