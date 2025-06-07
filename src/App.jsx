import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Companies from "./components/Companies/companies.jsx";
import Residencies from "./components/Residencies/Residencies.jsx";
import Value from "./components/Value/Value.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GetStart from './components/GetStarted/GetStarted.jsx';
import Footer from './components/Footer/Footer.jsx';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 白渐变颜色是在Hero组件和Header组件之间 */}
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStart />
      <Footer />
    </div>
  );
}

export default App;
