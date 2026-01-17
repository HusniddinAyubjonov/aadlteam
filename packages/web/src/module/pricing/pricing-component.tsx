import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./pricing.module.css"
import { pricingData } from "./price-list"

interface PricingItem {
  tariff: string
  price: string
  title: string
  feature: string
  features: string[]
  button: string
}

export function PricingPage() {
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

  const dotsCount = Math.max(
    Math.ceil(pricingData.length - slidesPerView + 1),
    1,
  )

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
    <section className={styles.container}>
      <div className={styles.pricing}>
        <h1 className={styles.pricingTitle}>Pricing</h1>

        <div className={styles.pricingCardsWrapper}>
          <div
            className={styles.slider}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {pricingData.map((price: PricingItem, i: number) => (
              <div className={styles.slide} key={i}>
                <div className={styles.pricingCard}>
                  <button className={styles.tariff}>{price.tariff}</button>
                  <h1>{price.price}</h1>
                  <p>{price.title}</p>

                  <ul>
                    <p>{price.feature}</p>
                    {price.features.map((feature) => (
                      <li key={feature} className={styles.listFeature}>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/ContactUs">
                    <button className={styles.btnNextPage}>
                      {price.button}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pricingDots}>
            {Array.from({ length: dotsCount }).map((_, i) => (
              <span
                key={i}
                onClick={() => goTo(i)}
                className={`${styles.pricingDot} ${
                  i === index ? styles.pricingDotActive : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
