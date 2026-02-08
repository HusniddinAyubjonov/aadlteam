import clsx from "clsx"
import styles from "./card-info.module.css"

export function CardInfo(args: {
  icon: string
  title: string
  description?: string
  iconStyle?: string
  contentStyle?: string
  type: "colum" | "row"
}) {
  // ---------------------------------------------------------------------------
  return (
    <div
      className={clsx(styles.card, args.contentStyle, {
        [styles.cardRow]: args.type === "row",
        [styles.cardColum]: args.type === "colum",
      })}
    >
      <div
        className={clsx(styles.icons, args.iconStyle, {
          [styles.rowIcon]: args.type === "row",
          [styles.columIcon]: args.type === "colum",
        })}
      >
        <img alt="icon" src={args.icon} className={clsx(styles.icon)} />
      </div>
      <div className={styles.textContent}>
        <h3
          className={clsx(styles.cardTitle, {
            [styles.cardTitleRow]: args.type === "row",
            [styles.cardTitleColum]: args.type === "colum",
          })}
        >
          {args.title}
        </h3>
        {args.description && (
          <p className={styles.cardDescription}>{args.description}</p>
        )}
      </div>
    </div>
  )
}
