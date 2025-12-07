import style from "./global.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./scroll-to-top.component";

const Home = lazy(() => import("./module/home/home-component"));
const About = lazy(() => import("./module/about/about-component"));
const Pricing = lazy(() => import("./module/pricing/pricing-component"));
const Blog = lazy(() => import("./module/blog/blog-component"));
const ProjectList = lazy(() => import("./module/project-list/project-list-component"));
const ContactUs = lazy(() => import("./module/ContactUsPage/ContactUsPage"));
const NotFound = lazy(() => import("./module/NotFoundPage/NotFoundPage"));

function App() {
  // ---------------------------------------------------------------------------

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <h1
            style={{
              textAlign: "center",
              color: "#88B702",
              marginTop: "300px",
            }}
          >
            Loading...
          </h1>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ProjectList" element={<ProjectList />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
