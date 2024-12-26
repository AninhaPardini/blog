'use client'

import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/16/solid';

import Logo from '@/assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Links = [
  { href: '/', label: 'inicial', target: '_self' },
  { href: '/sobre', label: 'sobre', target: '_self' },
  { href: 'https://www.figma.com/proto/12zPF3okZGsCJA2OlZbVev/Portif%C3%B3lio-V2?page-id=29%3A133&node-id=29-141&viewport=808%2C525%2C0.08&t=wmIZDeLrHwIKe12o-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A253', label: 'portfólio', target: '_blank' },
];

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  //  const menu = document.getElementById('menu');
  //  if (menu) {
  //    isMenuOpen ? menu.className = 'hidden absolute top-[-20px]' : menu.className = 'flex absolute top-[20px]';
  //  }

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
    <nav
      className={`bg-white-50 md:bg-opacity-0 w-[90vw] flex fixed max-w-[600px] md:max-w-[1536px] justify-between items-center md:w-full px-4 py-6 md:px-16 2xl:px-0 text-white-700 transition-all duration-500 ${isScrollingDown ? 'border-none -top-96' : 'md:bg-white-50 top-0 z-20 bg-opacity-95 '}`}
    >

      <Link
        href='/'
      >
        <Image
          className='cursor-pointer w-16'
          src={Logo}
          alt='Logo com as siglas AP'
        />
      </Link>
      <div
        className={`-z-10 md:flex transition-all duration-500 md:static md:top-0 absolute bg-white min-w-[400px] left-0 md:w-auto w-full flex items-center px-5 ${isScrollingDown ? 'hidden' : ''} ${isMenuOpen ? 'flex shadow-lg bg-white-50 rounded-xl py-8 opacity-100 top-24' : 'opacity-0 -top-2'}`} id='menu'>
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
      <div className="flex md:hidden items-center gap-6">
        <button className='z-10 block md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Bars3Icon className="w-12 h-12 cursor-pointer" />
        </button>
      </div>
    </nav>
  );
}
