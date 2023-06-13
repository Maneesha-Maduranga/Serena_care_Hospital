import Navbar from './Component/Navabar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default App;
