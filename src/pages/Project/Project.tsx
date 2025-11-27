import Navbar from "../../shared/ui/Navbar/Navbar";
import HeaderProjects from "../../shared/ui/projectsComponents/Header/HeaderProjects";
import avatar from "../../assets/icon/avatar.svg";

export default function Project() {
  return (
    <>
      <Navbar />
      <HeaderProjects
        avatar={avatar}
        fullName='Alex Turner'
        date='August 2, 2021'
        title='The Basics about IT'
        description='Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.'
      />
    </>
  );
}
