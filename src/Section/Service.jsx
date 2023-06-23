import ServiceCard from '../Component/ServiceCard';

function Service() {
  return (
    <div className='mx-auto bg-slate-100 h-auto py-5 my-10 ' id='service'>
      <div className='container mx-auto  text-center'>
        <h4 className='font-semibold text-sky-400 text-xl'>Medical</h4>
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
      <div className='cards mx-6 flex flex-col items-center md:flex-row justify-evenly'>
        <ServiceCard
          title='General Medicine'
          description='Our experienced physicians provide comprehensive primary care services, including preventive care, routine check-ups, and management of chronic conditions. We focus on promoting overall well-being and disease prevention'
        />
        <ServiceCard
          title='Specialized Medical Care'
          description='Our hospital houses a team of specialists in various fields, including cardiology, neurology, gastroenterology, orthopedics, pulmonology, and more. They provide expert diagnosis, treatment, and management of specific medical conditions'
        />
        <ServiceCard
          title='Surgical Services'
          description='Our state-of-the-art surgical facilities enable us to perform a wide range of surgical procedures. From minimally invasive surgeries to complex interventions, our skilled surgeons utilize advanced techniques to ensure optimal outcomes.'
        />
      </div>
    </div>
  );
}

export default Service;
