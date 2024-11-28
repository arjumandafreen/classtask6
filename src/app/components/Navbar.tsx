'use client';
import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks'; // Assuming NavbarLinks is a component that renders <a> tags.
import Image from 'next/image';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      {/* Navbar with maroon dark background and slim padding */}
      <div className='pl-4 p-1 flex justify-between items-center bg-[#800000]'>
        {/* Logo - Hidden when the menu is open */}
        {!isMenuOpen && (
          <div className='text-2xl font-bold text-white'>
            <Image
              src="/images/company-logo.png"
              alt="logo"
              height={40} // smaller logo size
              width={120} // smaller logo size
                className='w-[120px] h-[40px]'
              // Adjusted size for a slimmer navbar
            />
          </div>
        )}

        {/* Desktop Navbar */}
        <div>
          <ul className='md:flex justify-center hidden items-center md:gap-5 md:flex-row bg-white text-black md:bg-transparent text-lg md:text-white md:h-10 p-2'>
            <li><NavbarLinks href='/home' title='Home' /></li>
            <li><NavbarLinks href='/about' title='About' /></li>
            <li><NavbarLinks href='/products' title='Products' /></li>
            <li><NavbarLinks href='/contact' title='Contact' /></li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden float-right">
          {isMenuOpen ? (
            <Image
              src="/images/done.png"
              alt="close"
              height={60} // smaller size for the "done" image
              width={60} // smaller size for the "done" image
              className='absolute top-[0.5rem] right-[1rem]'
              onClick={toggleMenu}
              aria-label="Close menu"
            />
          ) : (
            <Image
              src="/images/white.png"
              alt="open"
              height={50} // smaller size for the burger icon
              width={50} // smaller size for the burger icon
              className="mr-4"
              onClick={toggleMenu}
              aria-label="Open menu"
            />
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className='flex flex-col mx-auto items-center md:hidden rounded-lg text-white text-xl h-auto max-w-full p-4 gap-4'>
            <li><NavbarLinks href='/home' title='Home' /></li>
            <li><NavbarLinks href='/about' title='About' /></li>
            <li><NavbarLinks href='/products' title='Products' /></li>
            <li><NavbarLinks href='/contact' title='Contact' /></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;