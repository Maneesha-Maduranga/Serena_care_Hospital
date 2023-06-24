import Navbar from './Component/Navabar';
import Hero from './Section/Hero';
import About from './Section/About';
import Service from './Section/Service';
import Facilities from './Section/Facilities';
import Testimonial from './Section/Testimonial';
import Footer from './Component/Footer';
import Modal from './Component/Modal';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Modal />
        <About />
        <Service />
        <Facilities />
        <Testimonial />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
