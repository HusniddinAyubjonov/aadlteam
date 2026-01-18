import { Route, Routes } from "react-router-dom"
import { Home } from "../../module/home/home.component"
import { About } from "../../module/about/about.component"
import { PricingPage } from "../../module/pricing/pricing.component"
import { BlogPage } from "../../module/blog/blog.component"
import { ProjectsPage } from "../../module/project-list/project-list.component"
import { ContactUsPage } from "../../module/contact-us/contact-us.component"
import { NotFoundPage } from "../../module/not-found/not-found.component"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Pricing" element={<PricingPage />} />
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/ProjectList" element={<ProjectsPage />} />
      <Route path="/ContactUs" element={<ContactUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
