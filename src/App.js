import Header from "./components/Header";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="s2">
        <Info />
        <div className="main">
          <About />
          <Interests />
        </div>
      </div>
      <Footer />
    </div>

  )
}