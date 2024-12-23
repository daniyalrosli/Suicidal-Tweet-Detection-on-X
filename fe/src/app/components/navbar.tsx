import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <a className="text-2xl font-bold text-blue-500">CareTweet</a>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="#home" passHref>
              <a className="hover:text-blue-500 transition-colors duration-300">Home</a>
            </Link>
            <Link href="#features" passHref>
              <a className="hover:text-blue-500 transition-colors duration-300">Features</a>
            </Link>
            <Link href="#how-it-works" passHref>
              <a className="hover:text-blue-500 transition-colors duration-300">How It Works</a>
            </Link>
            <Link href="#contact" passHref>
              <a className="hover:text-blue-500 transition-colors duration-300">Contact</a>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="#get-started" passHref>
              <a className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">Get Started</a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              id="mobile-menu-toggle"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#home" passHref>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Home</a>
          </Link>
          <Link href="#features" passHref>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Features</a>
          </Link>
          <Link href="#how-it-works" passHref>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">How It Works</a>
          </Link>
          <Link href="#contact" passHref>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Contact</a>
          </Link>
          <Link href="#get-started" passHref>
            <a className="block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white text-center">Get Started</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;