import React from 'react';
import { Bars3Icon } from '@heroicons/react/16/solid';

import Logo from '../../assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Links = [
  { href: '/', label: 'inicial' },
  { href: '/sobre', label: 'sobre' },
  { href: '/contato', label: 'contato' },
];

export default function Header() {

  return (
    <header 
    className="flex w-full py-4 justify-between items-center bg-white-100"
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
        className='text-white-950 cursor-pointer w-8 sm:block md:hidden '
        />
        <ul 
        className="flex sm:flex-col md:flex-row space-x-12 font-medium"
        >
        
          {Links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href} className="text-white-700 hover:text-mandy-500 capitalize">
                  {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}