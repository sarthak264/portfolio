import "./App.css";
import "./fonts/Calibre/calibre.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import OtherProject from "./components/OtherProject";

function App() {
  return (
    <div className="page">
      <Header />
      <About />
      <OtherProject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
