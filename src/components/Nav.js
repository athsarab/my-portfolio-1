import React from 'react';
// Import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsChatSquare, BsBriefcase } from 'react-icons/bs';
// Import Link from react-scroll
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/h-[96px] backdrop-blur-2xl rounded-full max-w-[450px] mx-auto px-5 flex justify-between items-center text-white/50'>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            to='home'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300'
          >
            <BiHomeAlt size={24} />
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='about'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300'
          >
            <BiUser size={24} />
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='service'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300'
          >
            <BsClipboardData size={24} />
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='work'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300'
          >
            <BsBriefcase size={24} />
          </Link>
          
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='contact'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300'
          >
            <BsChatSquare size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
