import { motion } from 'framer-motion';

function PortfolioCard({ image, title }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className='flex flex-col  w-auto h-auto items-center rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 '
    >
      <div className='w-fit '>
        <img src={image} alt='cardOne' className='rounded-t-lg ' />
      </div>

      <div className='bg-slate-100 py-2 px-4 w-full'>
        <h5 className='font-semibold text-sm text-center'>{title}</h5>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;
