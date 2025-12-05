import style from "./global.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./scroll-to-top.component";

const Home = lazy(() => import("./module/home/home-component"));
const About = lazy(() => import("./module/about/about-component"));
const Pricing = lazy(() => import("./module/PricingPage/PricingPage"));
const Blog = lazy(() => import("./module/BlogPage/BlogPage"));
const Projects = lazy(() => import("./module/ProjectsPage/ProjectsPage"));
const ContactUs = lazy(() => import("./module/ContactUsPage/ContactUsPage"));
const NotFound = lazy(() => import("./module/NotFoundPage/NotFoundPage"));
const Project = lazy(() => import("./module/Project/Project"));

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
          <Route path="/AboutPage" element={<About />} />
          <Route path="/PricingPage" element={<Pricing />} />
          <Route path="/BlogPage" element={<Blog />} />
          <Route path="/ProjectsPage" element={<Projects />} />
          <Route path="/ContactUsPage" element={<ContactUs />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
