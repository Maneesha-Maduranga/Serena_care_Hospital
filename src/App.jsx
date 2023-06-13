import Navbar from './Component/Navabar';
import Hero from './Section/Hero';
import About from './Section/About';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default App;
