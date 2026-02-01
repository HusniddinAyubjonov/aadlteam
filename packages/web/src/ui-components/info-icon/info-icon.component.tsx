import clsx from "clsx"
import style from "./info-icon.module.css"

export function InfoIcon(args: {
  icon: string
  title: string
  className?: string
}) {
  // ---------------------------------------------------------------------------
  return (
    <div className={style.advantagesInfo}>
      <div className={clsx(style.advantagesIcons, args.className)}>
        <img alt="icon" src={args.icon} className={style.icon} />
      </div>
      <div>
        <h3 className={style.advantagesInfoText}>{args.title}</h3>
      </div>
    </div>
  )
}
