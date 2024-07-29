'use client'

import { useState, useEffect, useCallback } from 'react';
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

  return (
    <div 
      className={`flex fixed max-w-[1536px] justify-between items-center w-full py-6 sm:px-16 2xl:px-0 text-white-700 transition-all duration-500 ${isScrollingDown ? 'border-none -top-96' : 'bg-white-50 top-0 z-20 bg-opacity-95 '}`}
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

      <nav>
        <Bars3Icon 
        className='cursor-pointer w-8 sm:block md:hidden '
        />
        <ul 
        className="flex sm:flex-col md:flex-row space-x-12 font-medium"
        >
        
          {Links.map(({ href, label, target }) => (
            <li key={`${href}${label}`}>
              <Link href={href} target={target} className="hover:text-mandy-500 capitalize transition-all duration-300">
                  {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}