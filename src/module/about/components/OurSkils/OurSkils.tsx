import style from "./OurSkils.module.css";
import { Skills } from "./constants";

export default function OurSkils() {
  return (
    <section className={style.container}>
      <div className={style.skills}>
        <h2 className={style.title}>Our skills</h2>

        <div className={style.skillBoxs}>
          {Skills.map((block) => (
            <div key={block.title} className={style.skillBox}>
              <h3>{block.title}</h3>

              <ul className={style.list}>
                {block.items.map((item) => (
                  <li key={item} className={style.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
