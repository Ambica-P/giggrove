import React, { useState } from 'react';

interface TopBarProps {
  faqRef: React.RefObject<HTMLElement>;
}

const TopBar: React.FC<TopBarProps> = ({ faqRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToFAQs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="border-gray-200" style={{ background: 'linear-gradient(90deg, #1A0A2B, #45017F, #1A0A2B)' }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">GigGrove</span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div
          className={`${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 bg-black text-white rounded-lg shadow-lg p-4 md:relative md:top-0 md:right-0 md:bg-transparent md:shadow-none md:p-0 md:flex md:w-auto`}
          id="navbar-solid-bg"
          style={{ zIndex: 50 }}
        >
          <ul className="flex flex-col font-normal md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 hover:bg-violet-700 rounded-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-400 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-violet-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 hover:bg-violet-700 rounded-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-400 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-violet-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
            </li>
            <li>
              <a onClick={scrollToFAQs} className="block py-2 px-3 md:p-0 hover:bg-violet-700 rounded-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-400 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-violet-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ cursor: 'pointer' }}>FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
