import ServiceCard from '../Component/ServiceCard';

function Service() {
  return (
    <div className='mx-auto bg-slate-50 h-screen '>
      <div className='container mx-auto  text-center'>
        <h4 className='font-semibold text-sky-400 text-xl'>Medical</h4>
        <h2 className='text-3xl font-extrabold mt-2'>Our Offered Services</h2>
        <p className='my-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='cards mx-6 flex flex-col items-center md:flex-row justify-evenly'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default Service;
