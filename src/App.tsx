import "./styles/globals.scss";
import "./styles/layout.scss";
import "@fontsource-variable/roboto-condensed/wght.css";
import "@fontsource-variable/inter/wght.css";
import Header from "./components/Header/Header";
import Certifications from "./components/Certification/Certification";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";

function App() {
  return (
    <main className="site">
      <Header />
      <Hero />
      <TechnicalSkills />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}

export default App;
