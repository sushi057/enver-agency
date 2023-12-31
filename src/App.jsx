import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="mx-6 my-10">
      <Hero />
      <Services />
      <Portfolio />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
