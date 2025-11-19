import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>A leading web-studio to take your business to the next level</h1>
        <p>
          We create modern, user-friendly websites optimized for all devices.
          Our solutions suit any purpose — from personal projects to large-scale
          platforms.
        </p>
      </header>
    </div>
  );
}
