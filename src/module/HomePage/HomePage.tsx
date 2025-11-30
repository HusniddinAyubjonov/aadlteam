import Footer from "../../ui-components/ui/Footer/Footer";
import Header from "../../ui-components/ui/Header/Header";
import Navbar from "../../ui-components/ui/Navbar/Navbar";
import Advantages from "./components/Advantages/Advantages";
import BuildFeature from "./components/BuildFeature/BuildFeature";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import News from "./components/News/News";
import Review from "./components/Reviews/Review";
import Services from "./components/Services/Service";
import StartWithMe from "./components/StartWith/StartWith";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header
        title="A leading web-studio to take your business to the next level"
        description="We create modern, user-friendly websites optimized for all devices. Our solutions suit any purpose — from personal projects to large-scale platforms."
      />
      <Services />
      <Advantages />
      <ChooseUs />
      <BuildFeature />
      <Review />
      <StartWithMe />
      <News />
      <Footer />
    </div>
  );
}
