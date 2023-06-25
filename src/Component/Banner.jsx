import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsTelephoneFill,
  BsInstagram,
} from 'react-icons/bs';

import { FaAmbulance } from 'react-icons/fa';

function Banner() {
  return (
    <div className='relative isolate   overflow-hidden bg-slate-950 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 text-white'>
      {/* Background Overflow */}
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
      {/* content */}

      <div className='flex items-center  justify-evenly flex-col md:flex-row gap-2'>
        <div className='flex  flex-row gap-8 items-center cursor-pointer p-2'>
          <BsFacebook color='white' style={{ margin: '0 1px' }} />
          <BsTwitter color='white' style={{ margin: '0 1px' }} />
          <BsYoutube color='white' style={{ margin: '0 1px' }} />
          <BsLinkedin color='white' style={{ margin: '0 1px' }} />
          <BsInstagram color='white' style={{ margin: '0 1px' }} />
        </div>
        <div className='flex flex-row gap-6'>
          <div className='inline-flex mx-1 items-center gap-0 md:gap-1 text-sm flex-col md:flex-row'>
            <span className='inline-block '>
              <BsTelephoneFill />
            </span>
            +222 555 777
          </div>
          <div className='inline-flex mx-1 items-center gap-0 md:gap-1 text-sm  flex-col md:flex-row'>
            <span className='inline-block '>
              <BsTelephoneFill />
            </span>
            +222 555 888
          </div>

          <div className='inline-flex mx-1 items-center gap-0 md:gap-1 text-sm  flex-col md:flex-row'>
            <span className='inline-block '>
              <FaAmbulance />
            </span>
            +111 999
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
