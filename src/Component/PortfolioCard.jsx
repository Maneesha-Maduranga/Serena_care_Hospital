function PortfolioCard({ image, title }) {
  return (
    <div className='flex flex-col  w-auto h-auto items-center rounded-md'>
      <div className='w-fit '>
        <img
          src={image}
          alt='cardOne'
          className='rounded-t-lg  hover:blur-sm hover:'
        />
      </div>

      <div className='bg-slate-100 py-2 px-4 w-full'>
        <h5 className='font-semibold text-sm text-center'>{title}</h5>
      </div>
    </div>
  );
}

export default PortfolioCard;
