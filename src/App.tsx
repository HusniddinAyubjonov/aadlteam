import "./App.css";
import Header from "./shared/ui/Header/Header";
import Navbar from "./shared/ui/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header
        title='A leading web-studio to take your business to the next level'
        description='We create modern, user-friendly websites optimized for all devices. Our solutions suit any purpose — from personal projects to large-scale platforms.'
      />
    </>
  );
}

export default App;
