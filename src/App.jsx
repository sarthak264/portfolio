import "./App.css";
import "./fonts/Calibre/calibre.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="page">
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
