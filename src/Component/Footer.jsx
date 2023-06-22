function Footer() {
  return (
    <div className='bg-slate-950 w-full h-auto text-white' id='contact'>
      <div className='container p-10'>
        <div className='flex flex-col md:flex-row  items-start justify-evenly'>
          <div className='mb-6'>
            <h5 className='mb-2.5 text-xl font-bold uppercase text-neutral-800 dark:text-neutral-200'>
              Connect Us
            </h5>

            <ul className='mb-0 list-none'>
              <li className='my-2'>lorme</li>
              <li className='my-2'>lorme</li>
              <li className='my-2'>lorme</li>
              <li className='my-2'>lorme</li>
              <li className='my-2'>lorme</li>
            </ul>
          </div>
          <div className='mb-6'>
            <h5 className='mb-2.5 font-bold text-xl uppercase text-neutral-800 dark:text-neutral-200'>
              Opening Hours
            </h5>

            <ul className='mb-0 list-none'>
              <li className='my-2'>Monday: 8.30am–6.30pm</li>
              <li className='my-2'>Tuesday: 10.00am–8.00pm</li>
              <li className='my-2'>Wednesday: 8.30am–6.30pm</li>
              <li className='my-2'>Thursday: 8.30am–7.00pm</li>
              <li className='my-2'>Friday: 8.30am–3.00pm</li>
              <li className='my-2'>Saturday: 8.30am–2.00pm</li>
              <li className='my-2'>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-2 ' />
      <div className='text-center'>© 2023 Copyright</div>
    </div>
  );
}

export default Footer;
