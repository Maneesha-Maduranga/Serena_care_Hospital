import BlockQuote from '../Component/BlockQuote';

function Testimonial() {
  return (
    <div className='mx-auto bg-slate-100 h-auto py-5 mt-5 ' id='testimonial'>
      <div className='container mx-auto  text-center'>
        <h4 className='font-semibold text-sky-400 text-xl'>Feedback</h4>
        <h2 className='text-3xl font-extrabold mt-2'>
          What Our Customers Say?
        </h2>
        <p className='my-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Alias, porro?
        </p>
      </div>
      <div className='grid grid-cols-1 gap-2 px-4 my-10 md:grid-cols-3'>
        <BlockQuote />
        <BlockQuote />
        <BlockQuote />
      </div>
    </div>
  );
}

export default Testimonial;
