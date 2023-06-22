import doctor from '../assets/doctor.png';

function BlockQuote() {
  return (
    <div className='flex items-center justify-center px-2 py-2'>
      <div className='w-full mx-auto rounded-lg bg-white shadow-lg p-2 text-gray-800'>
        <div className='w-full mb-3 p-2'>
          <div className='text-3xl text-indigo-500 text-left leading-tight h-3'>
            “
          </div>
          <p className='text-sm text-gray-600 text-center px-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
            voluptatibus temporibus odio provident.
          </p>
          <div className='text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3'>
            ”
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='mx-2'>
            <div className='rounded-full shadow-lg'>
              <img src={doctor} alt='doctor' className='w-16' />
            </div>
          </div>
          <div>
            <p className='text-md text-indigo-500 font-bold text-center'>
              Scott Windon
            </p>
            <p className='text-xs text-gray-500 text-center'>@scott.windon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockQuote;
