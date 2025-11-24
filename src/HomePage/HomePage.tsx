import Advantages from "../components/Advantages/Advantages";
import BuildFeature from "../components/BuildFeature/BuildFeature";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import News from "../components/News/News";
import Review from "../components/Reviews/Review";
import Services from "../components/Services/Service";
import StartWithMe from "../components/StartWith/StartWith";
import Header from "../shared/ui/Header/Header";
import Navbar from "../shared/ui/Navbar/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header
        title='A leading web-studio to take your business to the next level'
        description='We create modern, user-friendly websites optimized for all devices. Our solutions suit any purpose — from personal projects to large-scale platforms.'
      />
      <Services />
      <Advantages />
      <ChooseUs />
      <BuildFeature />
      <Review />
      <StartWithMe />
      <News />
    </div>
  );
}
