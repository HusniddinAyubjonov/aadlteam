import Footer from "../../shared/ui/Footer/Footer";
import Header from "../../shared/ui/Header/Header";
import Navbar from "../../shared/ui/Navbar/Navbar";
import OurMission from "./components/OurMission/OurMission";
import OurPrinciples from "./components/OurPrinciples/OurPrinciples";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <Header
        title='About Us'
        description='Aadl Team has 5 years of experience in web and app development, covering frontend and backend. We deliver high-quality, scalable solutions and focus on personalized, client-centered results. Most of our work is private, but we are ready for new projects.'
      />
      <OurPrinciples />
      <OurMission />
      <Footer />
    </div>
  );
}
