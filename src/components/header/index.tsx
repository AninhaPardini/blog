'use client';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/16/solid';

import Logo from '../../assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Links = [
  { href: '/', label: 'inicial' },
  { href: '/sobre', label: 'sobre' },
  { href: '/portfolio', label: 'portfólio' },
];

export default function Header() {
  const [header, setHeader] = React.useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }
  }, []);

  return (
    <header 
    className={`flex w-full py-6 justify-between items-center bg-white-100 transition-all duration-400 text-white-700  ${header ? 'fixed max-w-[1536px] border-b-2 border-mandy-600' : 'header'}`}
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
              <Link href={href} className="hover:text-mandy-500 capitalize">
                  {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}