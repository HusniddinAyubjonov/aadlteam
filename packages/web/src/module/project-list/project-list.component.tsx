import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Projects } from "./project-list"
import style from "./project-list.module.css"

interface ProjectItem {
  img: string
  title: string
  description: string
  btnText: string
  link: string
}

export function ProjectsPage() {
  const [index, setIndex] = useState<number>(0)

  const startX = useRef<number>(0)
  const currentX = useRef<number>(0)
  const isDragging = useRef<boolean>(false)

  const getSlidesPerView = (): number => {
    const w = window.innerWidth
    if (w < 576) return 1
    if (w < 768) return 2
    if (w < 1180) return 2.6
    if (w < 1580) return 3
    return 4.8
  }

  const slidesPerView = getSlidesPerView()

  const dotsCount = Math.max(Math.ceil(Projects.length - slidesPerView + 1), 1)

  const maxIndex = dotsCount - 1

  const goTo = (i: number) => {
    if (i < 0) return setIndex(0)
    if (i > maxIndex) return setIndex(maxIndex)
    setIndex(i)
  }

  /* ===== TOUCH ===== */
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    currentX.current = e.touches[0].clientX
  }

  const onTouchEnd = () => {
    if (!isDragging.current) return

    const diff = startX.current - currentX.current
    if (diff > 50) goTo(index + 1)
    if (diff < -50) goTo(index - 1)

    isDragging.current = false
  }

  useEffect(() => {
    const onResize = () => setIndex(0)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <section className={style.container}>
      <div className={style.project}>
        <h1 className={style.projectTitle}>Projects</h1>

        <div className={style.cardsWrapper}>
          <div
            className={style.slider}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Projects.map((info: ProjectItem, i: number) => (
              <div className={style.slide} key={i}>
                <Link to={info.link} className={style.cardLink}>
                  <div className={style.card}>
                    <img src={info.img} alt="" />
                    <button>{info.btnText}</button>
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className={style.projectDots}>
            {Array.from({ length: dotsCount }).map((_, i) => (
              <span
                key={i}
                onClick={() => goTo(i)}
                className={`${style.projectDot} ${
                  i === index ? style.projectDotActive : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
