import style from "./section-review.module.css"
import { reviewData } from "../home.data"

interface ReviewItem {
  feedback: string
  avatar: string
  fullName: string
  role: string
}

export function ReviewSection() {
  return (
    <section className={style.review}>
      <h2 className={style.reviewTitle}>What our users say?</h2>

      <div className={style.reviewList}>
        {reviewData.map((item: ReviewItem, i: number) => (
          <div className={style.reviewCard} key={i}>
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
        ))}
      </div>
    </section>
  )
}
