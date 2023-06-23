import backgroundImage from '../assets/background.jpg';

function Hero() {
  return (
    <div className='h-auto mt-28 relative bg-gray-900/40 ' id='home'>
      <img
        className='w-full h-screen object-cover mix-blend-overlay'
        src={backgroundImage}
        alt='/'
      />

      <div className='absolute bottom-28  left-8 text-slate-100'>
        <h1 className='text-4xl  font-bold  md:text-6xl md:w-[60%]'>
          Start Up Your Health care
        </h1>

        <div className='text-sm md:text-xl  font-medium md:w-[50rem] my-5'>
          Welcome to Serene Care Hospital, where compassionate care meets
          cutting-edge medicine. Our dedicated team of healthcare professionals
          is committed to providing exceptional medical services to our
          community.
        </div>
        <button className='bg-sky-400 text-sm hover:bg-sky-300'>
          Our Specailities
        </button>
      </div>
    </div>
  );
}

export default Hero;
