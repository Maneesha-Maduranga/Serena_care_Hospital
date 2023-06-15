import { useState } from 'react';
import NavbarLogo from './NavLogo';

import { BsListNested } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <section className='fixed flex justify-between items-center h-20 bg-slate-50 w-full drop-shadow-lg z-10'>
      {/* Logo */}
      <NavbarLogo />

      {/* Large View */}
      <ul className='hidden lg:flex'>
        <li className='mr-3  text-base  hover:text-sky-400'>HOME</li>
        <li className='mr-3  text-base  hover:text-sky-400'>ABOUT</li>
        <li className='mr-3  text-base  hover:text-sky-400'>SERVICE</li>
        <li className='mr-3  text-base  hover:text-sky-400'>TEAM</li>
        <li className='mr-3  text-base  hover:text-sky-400'>PORTFOLIO</li>
        <li className='mr-3  text-base  hover:text-sky-400'>TESTIMONIAL</li>
        <li className='mr-3  text-base  hover:text-sky-400'>CONTACT</li>
      </ul>

      {/* Hamberger ICon */}
      <div className='absolute top-7 right-5 lg:hidden' onClick={toggleNavbar}>
        {!show ? <BsListNested size={28} /> : <IoClose size={28} />}
      </div>

      {/* Small View */}

      <div
        className={
          show
            ? 'absolute left-0 top-0  bg-slate-50 w-2/5 h-screen ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <ul className='mx-4 my-4  '>
          <NavbarLogo />
          <li className=' ml-4 mt-5  text-base   hover:text-sky-400'>HOME</li>
          <li className=' ml-4 mt-4  text-base   hover:text-sky-400'>ABOUT</li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>SERVICE</li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>TEAM</li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>
            PORTFOLIO
          </li>
          <li className=' ml-4 mt-4  text-base  hover:text-sky-400'>
            TESTIMONIAL
          </li>
          <li className=' ml-4 mt-4  text-base   hover:text-sky-400'>
            CONTACT
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
