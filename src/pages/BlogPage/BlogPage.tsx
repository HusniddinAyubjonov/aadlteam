import Footer from "../../shared/ui/Footer/Footer";
import Navbar from "../../shared/ui/Navbar/Navbar";
import style from "./BlogPage.module.css";
import HeaderBlog from "./components/HeaderBlog/HeaderBlog";
import Posts from "./components/Posts/Posts";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <section className={style.container}>
        <div className={style.blog}>
          <span>
            <h1>Blog</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aenean dis placerat.
            </p>
          </span>
        </div>
      </section>
      <HeaderBlog />
      <Posts />
      <Footer />
    </>
  );
}
