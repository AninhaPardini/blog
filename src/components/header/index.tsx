'use client'

import { useState, useEffect, useCallback, MouseEventHandler } from 'react';
import { Bars3Icon } from '@heroicons/react/16/solid';

import Logo from '@/assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Links = [
  { href: '/', label: 'inicial', target: '_self' },
  { href: '/sobre', label: 'sobre', target: '_self' },
  { href: 'https://www.figma.com/proto/12zPF3okZGsCJA2OlZbVev/Portif%C3%B3lio-V2?page-id=29%3A133&node-id=29-141&viewport=808%2C525%2C0.08&t=wmIZDeLrHwIKe12o-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A253', label: 'portfólio', target: '_blank'},
];

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
      setScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onToggleMenu = (e: MouseEventHandler<HTMLButtonElement>) => {
    setIsMenuOpen(!isMenuOpen);
    console.log(e);
    // e.name = e.name === 'menu' ? 'close' : 'menu';
  };

  return (
    // <nav 
    //   className={`flex fixed max-w-[376] md:max-w-[1536px] justify-between items-center w-full py-6 sm:px-16 2xl:px-0 text-white-700 transition-all duration-500 ${isScrollingDown ? 'border-none -top-96' : 'bg-white-50 top-0 z-20 bg-opacity-95 '}`}
    // >
    //   <div className=''>
    //     <Link 
    //       href='/inicial'
    //     >
    //       <Image 
    //         className='cursor-pointer w-16'
    //         src={Logo} 
    //         alt='Logo com as siglas AP'
    //       />
    //     </Link>
    //   </div>

    //   <div className='absolute md:relative min-h-[60vh] md:min-h-fit left-0 top-[9%s] md:w-fit bg-white-50 md:bg-none  shadow-lg md:shadow-none'>
    //     <ul 
    //       className="flex flex-col justify-items-start items-start md:flex-row space-x-12 font-medium"
    //     >
    //       {Links.map(({ href, label, target }) => (
    //         <li key={`${href}${label}`}>
    //           <Link 
    //             href={href} 
    //             target={target} 
    //             className="text-white-800 hover:text-mandy-500 capitalize transition-all duration-300">
    //               {label}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <button>
    //     <Bars3Icon 
    //       className='block md:hidden w-12 h-12 cursor-pointer' 
    //     />
    //   </button>
    // </nav>

    <nav 
      className={`flex fixed max-w-[414px] md:max-w-[1536px] justify-between items-center w-full px-4 py-6 md:px-16 2xl:px-0 text-white-700 transition-all duration-500 ${isScrollingDown ? 'border-none -top-96' : 'bg-white-50 top-0 z-20 bg-opacity-95 '}`}
    >
      <Link 
        href='/inicial'
      >
        <Image 
          className='cursor-pointer w-16'
          src={Logo} 
          alt='Logo com as siglas AP'
        />
      </Link>
      <div
          className={`duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              {Links.map(({ href, label, target }) => (
                  <li key={`${href}${label}`}>
                    <Link 
                      href={href}
                      target={target}
                      className="text-white-800 hover:text-mandy-500 capitalize transition-all duration-300"
                    >
                      {label}
                    </Link>
                  </li>
              ))}
          </ul>
      </div>
      <div className="flex items-center gap-6">
        <button className='block md:hidden' onClick={onToggleMenu}>
          <Bars3Icon className="w-12 h-12 cursor-pointer" />
        </button>
      </div>
    </nav>
  );
}