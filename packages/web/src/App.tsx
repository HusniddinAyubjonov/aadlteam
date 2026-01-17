import "./style/global.module.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { Home } from "./module/home/home-component"
import { About } from "./module/about/about-component"
import { PricingPage } from "./module/pricing/pricing-component"
import { BlogPage } from "./module/blog/blog-component"
import { ProjectsPage } from "./module/project-list/project-list-component"
import { ContactUsPage } from "./module/contact-us/contact-us-component"
import { NotFoundPage } from "./module/not-found/not-found"
import { ScrollToTop } from "./scroll-to-top.component"
import { Header } from "./ui-components/header/header"
import { Footer } from "./ui-components/footer/footer"

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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/ProjectList" element={<ProjectsPage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
