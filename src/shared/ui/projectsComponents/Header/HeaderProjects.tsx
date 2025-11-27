import style from "./HeaderProjects.module.css";
import type { HeaderProjectsProps } from "./types";

export default function HeaderProjects({
  title,
  description,
  avatar,
  fullName,
  date,
}: HeaderProjectsProps) {
  return (
    <div className={style.container}>
      <header>
        <div>
          <img src={avatar} alt='avatar' />
          <span>
            <h2>{fullName}</h2>
            <h3>{date}</h3>
          </span>
        </div>
        <span>
          <h1>{title}</h1>
          <p>{description}</p>
        </span>
      </header>
    </div>
  );
}
