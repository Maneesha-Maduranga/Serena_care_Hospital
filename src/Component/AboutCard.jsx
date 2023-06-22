import drug from '../assets/drug.png';

function AboutCard({ bgColor }) {
  return (
    <div
      className={`w-auto h-40 lg:h-48 ${bgColor} flex flex-col  items-center text-white `}
    >
      <div>
        <img
          src={drug}
          alt='drug'
          className='top-0 relative md:-top-6 w-20 border-2 border-current rounded-full transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'
        />
      </div>
      <div className='text-center'>
        <div className='title font-bold'>E-Consultation</div>

        <div className='text-sm md:text-base'>
          To take trivial example, which undertakes laborious.
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
