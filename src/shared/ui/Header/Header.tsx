import style from "./Header.module.css";
import type { HeaderProps } from "./types";

export default function Header({ title, description }: HeaderProps) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
    </div>
  );
}
