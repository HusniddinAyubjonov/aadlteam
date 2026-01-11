import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Projects } from "./project-list";
import style from "./project-list.module.css";

export function ProjectsPage() {
  return (
    <section className={style.container}>
      <div className={style.project}>
        <span>
          <h1>Projects</h1>
        </span>

        <Swiper
          modules={[Pagination]}
          spaceBetween={26}
          slidesPerView={3}
          pagination={{
            clickable: true,
            el: `.${style.projectDots}`,
            bulletClass: style.projectDot,
            bulletActiveClass: style.projectDotActive,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3,
            },
            1580: {
              slidesPerView: 4.8,
            },
          }}
          className={style.cards}
        >
          {Projects.map((info, index) => (
            <SwiperSlide key={index}>
              <Link to={info.link}>
                <div className={style.card}>
                  <img src={info.img} alt="image" />
                  <button>{info.btnText}</button>
                  <h3>{info.title}</h3>
                  <p>{info.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={style.projectDots}></div>
      </div>
    </section>
  );
}
