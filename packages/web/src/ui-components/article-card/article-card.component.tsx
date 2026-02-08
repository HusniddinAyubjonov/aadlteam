import styles from "./article-card.module.css"

export function ArticleCard(args: {
  img: string
  btnText: string
  title: string
  description: string
  avatar?: string
  fullName?: string
  aboutUser?: string
}) {
  return (
    <div className={styles.newCard}>
      <div className={styles.media}>
        <img className={styles.newCardImg} src={args.img} alt="" />
        <button className={styles.newCardBtn}>{args.btnText}</button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.newCardTitle}>{args.title}</h3>

        <p className={styles.newCardDescription}>{args.description}</p>

        {args.avatar && (
          <>
            <hr className={styles.newCardLine} />
            <div className={styles.newCardUser}>
              <img className={styles.newCardAvatar} src={args.avatar} alt="" />
              <div className={styles.userTexts}>
                <h4 className={styles.userFullName}>{args.fullName}</h4>
                <h5 className={styles.aboutUser}>{args.aboutUser}</h5>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
