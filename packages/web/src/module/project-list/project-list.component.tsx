import { Link } from "react-router-dom"
import { Projects } from "./project-list"
import style from "./project-list.module.css"
import { ArticleCard } from "../../ui-components/article-card/article-card.component"

export function ProjectsPage() {
  return (
    <section className={style.container}>
      <div className={style.project}>
        <h1 className={style.projectTitle}>Projects</h1>

        <div className={style.cardsList}>
          {Projects.map((info) => (
            <Link key={info.id} to={info.link} className={style.cardLink}>
              <ArticleCard
                img={info.img}
                btnText={info.btnText}
                title={info.title}
                description={info.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
