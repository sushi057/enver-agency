import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div className="mx-10 my-10 max-w-lg lg:mx-32 lg:max-w-full">
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
