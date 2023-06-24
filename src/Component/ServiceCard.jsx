import { IoIosArrowDown } from 'react-icons/io';

import { FaBriefcaseMedical } from 'react-icons/fa';

function ServiceCard({ image, title, description, color }) {
  return (
    <div className='w-auto h-fit mx-4 my-4 md:w-80 flex flex-col justify-center items-center gap-0  border-2 rounded-b-2xl'>
      <div className='relative'>
        <img src={image} alt='cardOne' className='w-auto h-auto  md:w-80 ' />
        <div
          className={`absolute inset-y-0 left-0 w-20 ${color} opacity-50 hover:hidden`}
        >
          <FaBriefcaseMedical size={28} className='absolute top-5 left-5' />
        </div>
      </div>
      <div className='text-center my-8 flex flex-col items-center gap-2 drop-shadow-2xl px-2'>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <p className='text-sm '>{description}</p>
        <IoIosArrowDown size={28} className='hover:-rotate-90' />
      </div>
    </div>
  );
}

export default ServiceCard;
