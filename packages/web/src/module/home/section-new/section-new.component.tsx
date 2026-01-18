import { useEffect, useRef, useState } from "react"
import style from "./section-new.module.css"
import { newData } from "../home.data"

interface NewsItem {
  img: string
  btnText: string
  title: string
  description: string
  avatar: string
  fullName: string
  aboutUser: string
}

export function NewsSection() {
  const [index, setIndex] = useState<number>(0)

  const startX = useRef<number>(0)
  const currentX = useRef<number>(0)
  const isDragging = useRef<boolean>(false)

  const getSlidesPerView = (): number => {
    const w = window.innerWidth
    if (w < 576) return 1
    if (w < 768) return 1.5
    if (w < 1024) return 2
    if (w < 1280) return 2.5
    if (w < 1580) return 3
    return 3.8
  }

  const slidesPerView = getSlidesPerView()

  const dotsCount = Math.max(Math.ceil(newData.length - slidesPerView + 1), 1)

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

  /* ===== RESET ON RESIZE ===== */
  useEffect(() => {
    const onResize = () => setIndex(0)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <section className={style.news}>
      <h1 className={style.newsTitle}>Browse our latest news</h1>

      <div className={style.sliderWrapper}>
        <div
          className={style.slider}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {newData.map((info: NewsItem, i: number) => (
            <div className={style.slide} key={i}>
              <div className={style.newCard}>
                <img className={style.newCardImg} src={info.img} alt="" />
                <button className={style.newCardBtn}>{info.btnText}</button>
                <h3 className={style.newCardTitle}>{info.title}</h3>
                <p className={style.newCardDescription}>{info.description}</p>

                <hr className={style.newCardLine} />

                <div className={style.newCardUser}>
                  <img
                    className={style.newCardAvatar}
                    src={info.avatar}
                    alt=""
                  />
                  <div className={style.userTexts}>
                    <h4 className={style.userFullName}>{info.fullName}</h4>
                    <h5 className={style.aboutUser}>{info.aboutUser}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={style.newDots}>
          {Array.from({ length: dotsCount }).map((_, i) => (
            <span
              key={i}
              onClick={() => goTo(i)}
              className={`${style.newDot} ${
                i === index ? style.newActiveDot : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
