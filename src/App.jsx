import "./App.css";
import "./fonts/Calibre/calibre.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import OtherProject from "./components/OtherProject";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <OtherProject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
