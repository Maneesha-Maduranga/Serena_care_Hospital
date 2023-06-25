import backgroundImage from '../assets/background.jpg';

import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='h-auto mt-28 relative bg-gray-900/40 ' id='home'>
      <img
        className='w-full h-screen object-cover mix-blend-overlay'
        src={backgroundImage}
        alt='/'
      />

      <div className='absolute bottom-28  left-8 text-slate-100'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className='text-4xl  font-bold  md:text-6xl md:w-[60%]'>
            Start Up Your Health care
          </h1>

          <div className='text-base md:text-xl  font-medium md:w-[50rem] my-5'>
            Welcome to Serene Care Hospital, where compassionate care meets
            cutting-edge medicine. Our dedicated team of healthcare
            professionals is committed to providing exceptional medical services
            to our community.
          </div>
          <button className='bg-sky-400 text-sm hover:bg-sky-300'>
            Our Specailities
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
