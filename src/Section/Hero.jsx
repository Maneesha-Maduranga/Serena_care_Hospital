import backgroundImage from '../assets/background.jpg';

function Hero() {
  return (
    <div className='h-screen relative bg-gray-900/40 mt-12' id='home'>
      <img
        className='w-full h-full object-cover mix-blend-overlay'
        src={backgroundImage}
        alt='/'
      />

      <div className='absolute bottom-28  left-8 text-slate-100'>
        <h1 className='text-4xl  font-bold  md:text-6xl md:w-[60%]'>
          Start Up Your Health care
        </h1>

        <div className='text-sm md:text-xl  font-medium md:w-[50rem] my-5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
          repellat optio aliquam quod nobis dolorum ipsam at sequi ullam!
        </div>
        <button className='bg-sky-400 text-sm hover:bg-sky-300'>
          Our Specailities
        </button>
      </div>
    </div>
  );
}

export default Hero;
