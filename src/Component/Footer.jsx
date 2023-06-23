function Footer() {
  return (
    <div
      className='relative isolate bg-slate-950 w-full h-auto text-white   overflow-hidden'
      id='contact'
    >
      <div
        className='absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className='absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
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
