import React from 'react';
import logo from '../assets/1.png';

const Header = () => {
  return (
    <header className='py-8 bg-transparent'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={logo} alt='logo' className='w-24 h-auto' />
          </a>
          <button className='btn btn-sm bg-accent text-white py-2 px-4 rounded-full hover:bg-accent-dark transition'>
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
