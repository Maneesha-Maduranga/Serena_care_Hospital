import backgroundImage from '../assets/background.jpg';

function Hero() {
  return (
    <div
      className='h-[35rem] bg-cover bg-center relative'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute bottom-28  left-8'>
        <h1 className='text-4xl font-bold  md:text-6xl md:w-[60%]'>
          Start Up Your Health care
        </h1>

        <div className=' text-xl  font-medium md:w-[50rem] my-5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
          repellat optio aliquam quod nobis dolorum ipsam at sequi ullam!
        </div>
        <button className='bg-sky-400 text-sm hover:bg-sky-600'>
          Our Specailities
        </button>
      </div>
    </div>
  );
}

export default Hero;
