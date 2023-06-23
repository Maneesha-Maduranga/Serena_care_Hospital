import imageOne from '../assets/A01.png';
import imageTwo from '../assets/A02.png';
import imageThree from '../assets/A03.png';
import imageFour from '../assets/A04.png';

import BlockQuote from '../Component/BlockQuote';

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
          <div className='flex items-center'>
            <h2 className='text-2xl font-semibold mt-2'>
              Your Health, Our Priority
            </h2>
          </div>

          <p className='mt-4 md:mt-2 text-base'>
            At Serene Care Hospital, we are committed to providing exceptional
            healthcare services with a focus on patient-centered care and
            holistic well-being. Our hospital is built on the foundation of
            compassion, expertise, and a deep understanding of the diverse
            healthcare needs of our community.
          </p>
          <p className='mt-4 md:mt-3'>
            We believe that every patient is unique, and their healthcare
            journey should be treated with individualized attention and care.
            Our patient-centered approach ensures that you are at the heart of
            every decision we make. From the moment you step through our doors,
            you will experience a warm and supportive environment where your
            comfort and well-being are our top priorities.
          </p>
          <p className='mt-4 md:mt-3'>
            Our team consists of highly skilled and experienced medical
            professionals who are dedicated to delivering the highest standard
            of care. From our compassionate doctors and nurses to our
            specialized healthcare practitioners, we work collaboratively to
            provide comprehensive and personalized treatment plans. We stay
            up-to-date with the latest medical advancements and employ
            evidence-based practices to ensure the best possible outcomes for
            our patients.
          </p>

          <p className='mt-4 md:mt-3'>
            Experience the serenity of exceptional healthcare at Serene Care
            Hospital. Contact us today to schedule an appointment or learn more
            about our services. Together, we can embark on a journey towards
            better health and a brighter future.
          </p>
        </div>
        {/* Section Two */}
        <div className='flex flex-col   md:flex-row items-center md:justify-between mt-0'>
          <img
            src={imageOne}
            alt='iconOne'
            className='w-40  transition ease-in-out delay-150  hover:-translate-y-4 duration-300'
          />
          <img
            src={imageTwo}
            alt='iconTwo'
            className='w-40  transition ease-in-out delay-150  hover:-transalte-y-4 duration-300'
          />
          <img
            src={imageThree}
            alt='iconTwo'
            className='w-40  transition ease-in-out delay-150    hover:-translate-y-4 duration-300'
          />
        </div>

        {/* Section Four */}
        <div className='testimonial'>
          <BlockQuote
            image={imageFour}
            name='Dr Scott Windon'
            description='Serene Care Hospital boasts state-of-the-art facilities and advanced medical technologies to support accurate diagnoses and effective treatments. Our modern equipment, cutting-edge surgical suites, and advanced imaging capabilities enable us to provide precise and efficient healthcare services. We continuously invest in upgrading our infrastructure to ensure that our patients receive the highest quality care in a comfortable and safe environment.'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
