import medicalOne from '../assets/medicalOne.png';
import medicalTwo from '../assets/medicalTwo.png';
import medicalThree from '../assets/medicalThree.png';
import BlockQuote from '../Component/BlockQuote';

function About() {
  return (
    <div className='about container mx-auto px-10 my-10'>
      <h1 className='font-semibold text-sky-400 text-xl'>About Us</h1>
      <div className='flex flex-col gap-8'>
        {/* Section One */}
        <div className='flex flex-col  justify-items-center mb-0'>
          <h1 className='text-3xl font-extrabold mt-2'>
            Mission and Story About Our Medical
          </h1>
          <p className='mt-4 md:mt-2'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
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
        <div className='flex flex-col items-center justify-start mt-0'>
          <img src={medicalOne} alt='iconOne' className='w-40' />
          <img src={medicalTwo} alt='iconTwo' className='w-40' />
          <img src={medicalThree} alt='iconTwo' className='w-40' />
        </div>

        {/* Section Four */}
        <div className='testimonial'>
          <BlockQuote />
        </div>

        {/* Section Four */}
        <div className='card'>04</div>
      </div>
    </div>
  );
}

export default About;
