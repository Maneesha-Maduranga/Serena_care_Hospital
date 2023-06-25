import logo from '../assets/medical.png';

function NavbarLogo() {
  return (
    <div className='navbar-logo flex items-center cursor-pointer'>
      <img src={logo} alt='logo' className='w-10' />
      <div>
        <div className='text-2xl font-bold'>
          <span className='text-sky-400'>Serene </span>Care
        </div>
      </div>
    </div>
  );
}

export default NavbarLogo;
