import ServiceCard from '../Component/ServiceCard';
import special from '../assets/Specialized.jpg';
import surgen from '../assets/Surgen.jpg';
import menatl from '../assets/mental.jpg';
import lab from '../assets/labortary.jpg';
import emergency from '../assets/Emergenycy.jpg';
import general from '../assets/sCard.jpg';

function Service() {
  return (
    <div className='mx-auto bg-slate-100 h-auto py-5 my-10 ' id='service'>
      <div className='container mx-auto  text-center'>
        <h4 className='font-semibold text-sky-400 text-xl'>Services</h4>
        <h2 className='text-3xl font-extrabold mt-2'>Our Offered Services</h2>
        <p className='my-4'>
          At Serene Care Hospital, we are committed to providing a comprehensive
          range of high-quality healthcare services to meet the diverse needs of
          our patients. Our dedicated team of healthcare professionals is
          experienced, skilled, and compassionate, ensuring that you receive
          exceptional care in a serene and supportive environment. Here are some
          of the services we offer
        </p>
      </div>
      <div className='cards mx-10 grid grid-cols-1  md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5'>
        <ServiceCard
          color=' bg-emerald-400'
          image={general}
          title='General Medicine'
          description='Our experienced physicians provide comprehensive primary care services, including preventive care, routine check-ups, and management of chronic conditions. We focus on promoting overall well-being and disease prevention'
        />
        <ServiceCard
          color='bg-lime-200'
          image={special}
          title='Specialized Medical Care'
          description='Our hospital houses a team of specialists in various fields, including cardiology, neurology, gastroenterology, orthopedics, pulmonology, and more. They provide expert diagnosis, treatment, and management of specific medical conditions'
        />
        <ServiceCard
          color='bg-green-400'
          image={surgen}
          title='Surgical Services'
          description='Our state-of-the-art surgical facilities enable us to perform a wide range of surgical procedures. From minimally invasive surgeries to complex interventions, our skilled surgeons utilize advanced techniques to ensure optimal outcomes.'
        />
        <ServiceCard
          color='bg-teal-300'
          image={emergency}
          title='Emergency Care'
          description='Our emergency department is equipped to handle medical emergencies 24/7. Our dedicated team of emergency physicians and nurses is trained to provide immediate and life-saving care when time is of the essence'
        />
        <ServiceCard
          color='bg-emerald-300'
          image={menatl}
          title='Mental Health Services'
          description='We recognize the importance of mental well-being and offer a range of mental health services, including counseling, therapy, and psychiatric consultations. Our compassionate mental health professionals provide support for a wide range of conditions'
        />
        <ServiceCard
          color='bg-orange-300'
          image={lab}
          title='Laboratory Services'
          description='Our fully equipped laboratory performs a comprehensive range of diagnostic tests, including blood tests, urine analysis, microbiology, and pathology. This enables prompt and accurate diagnosis for effective treatment'
        />
      </div>
    </div>
  );
}

export default Service;
