'use client'

import { useState, useEffect, useCallback } from 'react';
import { Bars3Icon } from '@heroicons/react/16/solid';

import Logo from '@/assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Links = [
  { href: '/', label: 'inicial' },
  { href: '/sobre', label: 'sobre' },
  { href: 'https://www.figma.com/proto/12zPF3okZGsCJA2OlZbVev/Portif%C3%B3lio-V2?page-id=29%3A133&node-id=29-141&viewport=808%2C525%2C0.08&t=wmIZDeLrHwIKe12o-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A253', label: 'portfólio' },
];

export default function Header() {
  const [header, setHeader] = useState(false);

  const scrollHeader = useCallback(() => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }, []);

  // Pegar o scroll ao vivo
  // window.addEventListener('scroll', (e) => {
  //   console.log(window.scrollY);
  // });

  useEffect(() => {
    const handleScroll = () => {
      scrollHeader();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeader]);

  // ${header ? 'fixed top-0 z-20 max-w-[1536px] border-b-2 border-mandy-600' : 'div'}

  return (
    <div 
    className={`flex fixed top-0 z-20 max-w-[1536px] w-full py-6 justify-between items-center sm:px-16 2xl:px-0 bg-white-100 transition-all duration-400 text-white-700 ${header ? 'border-b-2 border-mandy-600 bg-opacity-95' : 'div'}`}
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
        
          {Links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href} target="_blank" className="hover:text-mandy-500 capitalize transition-all duration-300">
                  {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}