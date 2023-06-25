import BlockQuote from '../Component/BlockQuote';

import imageOne from '../assets/T01.jpg';
import imageTwo from '../assets/T02.jpg';
import imageThree from '../assets/T03.jpg';
import AnimationSection from '../Component/AnimationSection';

function Testimonial() {
  return (
    <div className='mx-auto bg-slate-100 h-auto py-5 mt-5 ' id='testimonial'>
      <div className='container mx-auto  text-center'>
        <h4 className='font-semibold text-sky-400 text-xl'>Feedback</h4>
        <h2 className='text-3xl font-extrabold mt-2'>
          Hear from our Satisfied Patients
        </h2>
        <p className='my-4'>
          our successful treatment stories and the positive impact we've made on
          the lives of our patients. Through these inspiring testimonials, you
          can gain insight into the exceptional care and results we provide.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-2 px-4 my-10 md:grid-cols-3'>
        <AnimationSection side='-150'>
          <BlockQuote
            image={imageOne}
            name='Lucas john'
            description='The doctors and staff at Serene Care Hospital truly care about their patients " well-being. They made me feel comfortable throughout my entire treatment journey.'
          />
        </AnimationSection>

        <BlockQuote
          image={imageTwo}
          name='Michael S.'
          description='I am grateful for the personalized attention and excellent care I received at Serene Care Hospital. They exceeded my expectations in every way'
        />
        <AnimationSection side='150'>
          <BlockQuote
            image={imageThree}
            name='Sara D.'
            description='Dr Scott Windon is a brilliant physician who has consistently exceeded my expectations. His dedication, attentiveness, and willingness to explore innovative solutions have been instrumental in my recovery.'
          />
        </AnimationSection>
      </div>
    </div>
  );
}

export default Testimonial;
