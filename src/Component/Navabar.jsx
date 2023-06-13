import logo from '../assets/medical.png';
import hamberger from '../assets/hamberger.svg';
import closeHamberger from '../assets/closeHamberger.svg';
import { useState } from 'react';

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <section className='navbar  mx-3 md:mx-auto container  flex justify-between h-20 '>
      {/* Logo */}
      <div className='navbar-logo flex items-center cursor-pointer'>
        <img src={logo} alt='logo' className='w-10' />
        <div>
          <div className='text-2xl '>MM Medical</div>
        </div>
      </div>
      {/* Link */}

      {/* Large View */}
      <ul className='hidden lg:grid grid-flow-col divide-x divide-sky-200  gap-4 content-center'>
        <li className='mr-3  text-base  hover:text-sky-400'>HOME</li>
        <li className='mr-3  text-base  hover:text-sky-400'>ABOUT</li>
        <li className='mr-3  text-base  hover:text-sky-400'>SERVICE</li>
        <li className='mr-3  text-base  hover:text-sky-400'>TEAM</li>
        <li className='mr-3  text-base  hover:text-sky-400'>PORTFOLIO</li>
        <li className='mr-3  text-base  hover:text-sky-400'>TESTIMONIAL</li>
        <li className='mr-3  text-base  hover:text-sky-400'>CONTACT</li>
      </ul>

      {/* Hamberger ICon */}
      <button
        className='absolute top-5 right-0 lg:hidden'
        onClick={toggleNavbar}
      >
        <img src={hamberger} alt='icon' className='w-10' />
      </button>
      {/* Small View */}

      <div
        className={
          show
            ? 'flex-col absolute top-0 right-0 space-y-6  bg-white h-screen w-64  drop-shadow-md'
            : 'hidden '
        }
      >
        {/* LOGO and CLOSE */}
        <div className='flex items-center justify-evenly my-5'>
          <div className='navbar-logo flex items-center'>
            <img src={logo} alt='logo' className='w-10' />
            <div>
              <div className='text-2xl '>MM Medical</div>
            </div>
          </div>
          <div>
            <button onClick={toggleNavbar}>
              <img src={closeHamberger} className='w-8' alt='close' />
            </button>
          </div>
        </div>
        {/* Links */}
        <ul className='divide-y divide-sky-200'>
          <li className=' ml-4 mt-5  text-base  hover:text-sky-400'>HOME</li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>ABOUT</li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>SERVICE</li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>TEAM</li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>
            PORTFOLIO
          </li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>
            TESTIMONIAL
          </li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>CONTACT</li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
