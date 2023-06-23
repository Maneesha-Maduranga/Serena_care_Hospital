import { useState } from 'react';
import NavbarLogo from './NavLogo';

import { BsListNested } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import { Link, animateScroll as scroll } from 'react-scroll';
import Banner from './Banner';

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <div className='relative'>
      <div className='fixed top-0 left-0 right-0 z-10'>
        <Banner />
      </div>

      <section className='fixed top-12 flex justify-between items-center h-20 bg-white w-full drop-shadow-sm z-10 px-14'>
        {/* Logo */}

        <NavbarLogo />

        {/* Large View */}
        <ul className='hidden lg:flex'>
          <Link
            className='mr-3  font-semibold text-base  hover:text-sky-400 cursor-pointer'
            to='home'
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
          <Link
            to='about'
            className='mr-3  font-semibold text-base border-b-4 hover:text-sky-400 cursor-pointer hover:border-sky-500'
            smooth={true}
            offset={-100}
            duration={500}
          >
            ABOUT
          </Link>
          <Link
            to='service'
            className='mr-3  font-semibold text-base border-b-4   hover:border-sky-500 hover:text-sky-400 cursor-pointer'
            smooth={true}
            offset={-100}
            duration={500}
          >
            SERVICE
          </Link>

          <Link
            to='portfolio'
            className='mr-3  font-semibold text-base border-b-4   hover:border-sky-500 hover:text-sky-400 cursor-pointer'
            smooth={true}
            offset={-100}
            duration={500}
          >
            PORTFOLIO
          </Link>
          <Link
            to='testimonial'
            className='mr-3  font-semibold text-base border-b-4   hover:border-sky-500 hover:text-sky-400 cursor-pointer'
            smooth={true}
            offset={-100}
            duration={500}
          >
            TESTIMONIAL
          </Link>
          <Link
            to='contact'
            className='mr-3  font-semibold text-base border-b-4   hover:border-sky-500 hover:text-sky-400 cursor-pointer'
            smooth={true}
            offset={-110}
            duration={500}
          >
            CONTACT
          </Link>
        </ul>

        {/* Hamberger ICon */}
        <div
          className='absolute top-7 right-5 lg:hidden'
          onClick={toggleNavbar}
        >
          {!show ? <BsListNested size={28} /> : <IoClose size={28} />}
        </div>

        {/* Small View */}

        <div
          className={
            show
              ? 'absolute left-0 top-0  bg-slate-50 w-3/4 h-screen ease-in-out duration-500 '
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <ul className='mx-4 my-4  '>
            <NavbarLogo />
            <li className=' ml-4 mt-5  text-base font-semibold  hover:text-sky-400  '>
              <Link to='home' smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className=' ml-4 mt-5  text-base font-semibold border-b-2   hover:border-sky-500  hover:text-sky-400'>
              <Link to='about' smooth={true} offset={-100} duration={500}>
                ABOUT
              </Link>
            </li>
            <li className=' ml-4 mt-5  text-base font-semibold border-b-2  hover:border-sky-500  hover:text-sky-400'>
              <Link to='service' smooth={true} offset={-100} duration={500}>
                SERVICE
              </Link>
            </li>
            <li className=' ml-4 mt-5  text-base font-semibold border-b-2   hover:border-sky-500  hover:text-sky-400'>
              <Link to='portfolio' smooth={true} offset={-100} duration={500}>
                PORTFOLIO
              </Link>
            </li>
            <li className=' ml-4 mt-5  text-base font-semibold border-b-2  hover:border-sky-500  hover:text-sky-400'>
              <Link to='testimonial' smooth={true} offset={-100} duration={500}>
                TESTIMONIAL
              </Link>
            </li>
            <li className=' ml-4 mt-5  text-base font-semibold border-b-2   hover:border-sky-500 hover:text-sky-400'>
              <Link to='contact' smooth={true} offset={-100} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
