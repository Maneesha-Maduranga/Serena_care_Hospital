import medicalOne from '../assets/medicalOne.png';
import medicalTwo from '../assets/medicalTwo.png';
import medicalThree from '../assets/medicalThree.png';
import BlockQuote from '../Component/BlockQuote';
import AboutCard from '../Component/AboutCard';

function About() {
  return (
    <div className='about container mx-auto px-10 my-10' id='about'>
      <h1 className='font-semibold text-sky-400 text-xl'>About Us</h1>
      <div className='flex flex-col gap-8'>
        {/* Section One */}
        <div className='flex flex-col  justify-items-center mb-0'>
          <h1 className='text-3xl font-extrabold mt-2'>
            Mission and Story About Our Medical
          </h1>
          <p className='mt-4 md:mt-2'>
            At [Hospital Name], we are committed to providing exceptional
            healthcare services to our patients. With state-of-the-art
            facilities, advanced medical technology, and a dedicated team of
            healthcare professionals, we strive to deliver the highest quality
            care and ensure the well-being of our patients.
          </p>
          <p className='mt-4 md:mt-3'>
            Medical was started in the year 1995 as a small private dental
            clinic in Binghamton, NY, USA. Looking for affordable dental care?
          </p>
          <p className='mt-4 md:mt-3'>
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a
            pleasure that has no annoying consequences, pain resultant pleasure
            praising teachings of the great explorer
          </p>
        </div>
        {/* Section Two */}
        <div className='flex flex-col   md:flex-row items-center md:justify-between mt-0'>
          <img
            src={medicalOne}
            alt='iconOne'
            className='w-40  transition ease-in-out delay-150  hover:-translate-y-4 duration-300'
          />
          <img
            src={medicalTwo}
            alt='iconTwo'
            className='w-40  transition ease-in-out delay-150  hover:-transalte-y-4 duration-300'
          />
          <img
            src={medicalThree}
            alt='iconTwo'
            className='w-40  transition ease-in-out delay-150    hover:-translate-y-4 duration-300'
          />
        </div>

        {/* Section Four */}
        <div className='testimonial'>
          <BlockQuote />
        </div>

        {/* Section Four */}
        <div className='mt-2  flex flex-col lg:flex-row'>
          <div className='flex-none w-auto lg:w-60'>
            <AboutCard bgColor='bg-lime-300' />
          </div>
          <div className='flex-none lg:grow'>
            <AboutCard bgColor='bg-sky-400' />
          </div>
          <div className='flex-none w-auto lg:w-60'>
            <AboutCard bgColor=' bg-green-500' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
