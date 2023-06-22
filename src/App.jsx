import Navbar from './Component/Navabar';
import Hero from './Section/Hero';
import About from './Section/About';
import Service from './Section/Service';
import Portfolio from './Section/Portofolio';
import Testimonial from './Section/Testimonial';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Testimonial />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
