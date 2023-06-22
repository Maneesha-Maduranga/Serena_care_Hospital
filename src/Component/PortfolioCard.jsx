import sCardOne from '../assets/sCard.jpg';

function PortfolioCard() {
  return (
    <div className='flex flex-col  w-auto h-auto items-center'>
      <div className='w-fit '>
        <img
          src={sCardOne}
          alt='cardOne'
          className='rounded-t-lg  hover:blur-sm hover:'
        />
      </div>

      <div className='bg-slate-100 py-2 px-4 '>
        <h4 className='font-medium'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, fuga?
        </h4>
        <h5 className='font-light text-sm'>Home</h5>
      </div>
    </div>
  );
}

export default PortfolioCard;
