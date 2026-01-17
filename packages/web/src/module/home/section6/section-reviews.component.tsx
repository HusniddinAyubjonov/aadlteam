import { useState, useRef } from "react"
import style from "./section-reviews.module.css"
import { reviewData } from "../constants"

interface ReviewItem {
  feedback: string
  avatar: string
  fullName: string
  role: string
}

export function ReviewSection() {
  const [index, setIndex] = useState<number>(0)

  const startX = useRef<number>(0)
  const currentX = useRef<number>(0)
  const isDragging = useRef<boolean>(false)

  const slidesPerView: number =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2

  const maxIndex: number =
    Math.ceil((reviewData as ReviewItem[]).length / slidesPerView) - 1

  const goTo = (i: number): void => {
    if (i < 0) {
      setIndex(0)
      return
    }
    if (i > maxIndex) {
      setIndex(maxIndex)
      return
    }
    setIndex(i)
  }

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (!isDragging.current) return
    currentX.current = e.touches[0].clientX
  }

  const onTouchEnd = (): void => {
    if (!isDragging.current) return

    const diff = startX.current - currentX.current

    if (diff > 50) goTo(index + 1)
    if (diff < -50) goTo(index - 1)

    isDragging.current = false
  }

  return (
    <section className={style.review}>
      <h1 className={style.reviewTitle}>What our users say?</h1>

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
          {(reviewData).map((item, i) => (
            <div className={style.slide} key={i}>
              <div className={style.reviewCard}>
                <p className={style.cardFeeback}>{item.feedback}</p>

                <div className={style.user}>
                  <img
                    className={style.userAvatar}
                    src={item.avatar}
                    alt="avatar"
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
