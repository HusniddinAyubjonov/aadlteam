import clsx from "clsx"
import style from "./card-info.module.css"

export function CardInfo(args: {
  icon: string
  title: string
  description: string
  iconStyle?: string
  contentStyle?: string
}) {
  // ---------------------------------------------------------------------------
  return (
    <div className={clsx(style.card, args.contentStyle)}>
      <div className={clsx(style.icons, args.iconStyle)}>
        <img alt="icon" src={args.icon} className={clsx(style.icon)} />
      </div>
      <div className={style.textContent}>
        <h3 className={style.cardTitle}>{args.title}</h3>
        <p className={style.cardDescription}>{args.description}</p>
      </div>
    </div>
  )
}
