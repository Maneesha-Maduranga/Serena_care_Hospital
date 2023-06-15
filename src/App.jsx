import Navbar from './Component/Navabar';
import Hero from './Section/Hero';
import About from './Section/About';
import Service from './Section/Service';

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
      </main>
    </>
  );
}

export default App;
