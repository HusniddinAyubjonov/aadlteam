import { useEffect, useRef, useState } from "react"
import style from "./section-review.module.css"
import { reviewData } from "../home.data"

interface ReviewItem {
  feedback: string
  avatar: string
  fullName: string
  role: string
}

export function ReviewSection() {
  const [index, setIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(2)

  const startX = useRef(0)
  const currentX = useRef(0)
  const isDragging = useRef(false)

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 2)
      setIndex(0)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.ceil(reviewData.length / slidesPerView) - 1

  const goTo = (i: number) => {
    if (i < 0) return setIndex(0)
    if (i > maxIndex) return setIndex(maxIndex)
    setIndex(i)
  }

  // 👉 touch events
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

  return (
    <section className={style.review}>
      <h2 className={style.reviewTitle}>What our users say?</h2>

      <div className={style.sliderWrapper}>
        <div
          className={style.slider}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            transform: `translateX(-${index * (100 / slidesPerView)}%)`,
          }}
        >
          {reviewData.map((item: ReviewItem, i: number) => (
            <div className={style.slide} key={i}>
              <div className={style.reviewCard}>
                <p className={style.cardFeeback}>{item.feedback}</p>

                <div className={style.user}>
                  <img
                    className={style.userAvatar}
                    src={item.avatar}
                    alt={item.fullName}
                  />

                  <div className={style.userInfo}>
                    <h3 className={style.userFullName}>{item.fullName}</h3>
                    <p className={style.userRole}>{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 👉 dots */}
        <div className={style.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span
              key={i}
              onClick={() => goTo(i)}
              className={`${style.dot} ${i === index ? style.activeDot : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
