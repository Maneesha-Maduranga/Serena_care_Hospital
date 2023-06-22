import Button from '../Component/Button';
import PortfolioCard from '../Component/PortfolioCard';

function Portfolio() {
  return (
    <div className='w-full h-auto py-4 my-10' id='portfolio'>
      <div className='head  container mx-auto  text-center'>
        <h4 className='font-semibold text-sky-400 text-xl'>Medical</h4>
        <h2 className='text-3xl font-extrabold mt-2'>Dental Care Services</h2>
        <p className='my-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='btn flex flex-row gap-2 items-center justify-center py-4 mx-auto'>
        <Button title='Show All' />
        <Button title='Home' />
        <Button title='Office' />
        <Button title='Outdoor' />
      </div>
      <div className='card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4'>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  );
}

export default Portfolio;
