import custService from '../assets/customerService.jpg';
import { BsChatLeftText } from 'react-icons/bs';

function ModalCard() {
  return (
    <div className='h-56  w-60 rounded-2xl bg-slate-50 shadow-2xl'>
      <div className='h-1/4 w-60 bg-sky-400 absolute rounded-t-xl'>
        <img
          src={custService}
          alt='customerService'
          className='relative top-8 left-12 w-1/2 mx-2 rounded-full  border-sky-600 border-2'
        />
      </div>
      <div className='h-fit mt-32 absolute px-1  flex flex-col gap-4 '>
        <h1 className='font-light text-base border-b-2 border-sky-300 '>
          Get Help from Support Team
        </h1>
      </div>

      <div className='w-60 h-12 bg-slate-400 absolute  bottom-0 flex justify-center items-center cursor-pointer rounded-b-2xl'>
        <h1 className='text-lg font-semibold'>
          Chat
          <span className='inline-block mx-2 '>
            <BsChatLeftText size={14} />
          </span>
        </h1>
      </div>
    </div>
  );
}

export default ModalCard;
