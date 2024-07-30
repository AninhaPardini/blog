'use client';

import Image from 'next/image';
import ItsMe from '../assets/ItsMe.png';
import PostPreview from './posts/page';

import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { useRef } from "react";

import { EyeIcon, LightBulbIcon, CommandLineIcon } from '@heroicons/react/16/solid';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Quando clicar no botão eu quero que ele vá até o targetRef

  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
      
    }
  };

  return (
    <div className='relative w-full px-4'>
      <button 
        onClick={handleClick} 
        className="fixed bottom-6 md:bottom-16 transition-all duration-400 right-6 md:right-16 z-30 p-4 border border-white-800 text-white-800 rounded-lg hover:bg-mandy-500 hover:text-mandy-500 hover:border-mandy-500 hover:bg-opacity-10"
      >
        <ArrowDownIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <header
        className="flex flex-col justify-center items-center pb-20">
        <div
          className="grid grid-rows-[196px_1fr] md:grid-rows-none md:grid-cols-2 justify-center items-center"
        >
          <section 
            className="flex flex-col order-last md:order-first justify-center items-start gap-6"
          >
            <h1 
              className="text-3xl text-center md:text-left md:text-6xl text-white-950 font-extrabold"
            >
              Oie! Seja bem-vindo ao meu blog.
            </h1>
            <p 
              className='text-md md:text-lg text-center md:text-left'
            >
              Aqui é onde eu trago meus pensamentos, projetos, estudos e tudo que gostaria de expressar públicamente ^^
            </p>
            <div 
              className='flex justify-start items-center gap-4'
            >
              <div 
                className='flex justify-center items-center py-4 px-4 md:px-6 rounded-3xl bg-gradient-to-l from-mandy-100 hover:shadow-md hover:shadow-mandy-100 text-mandy-700 border border-mandy-200 transition-all duration-300'
              >
                <EyeIcon className='hidden lg:block w-6 h-6 mr-2' />
                <p 
                  className='text-sm text-center lg:text-left md:text-md font-medium'
                >
                  UX UI Designer
                  </p>
              </div>
              <div 
                className='flex justify-center items-center py-4 px-4 md:px-6 rounded-3xl bg-gradient-to-l from-purple-100 hover:shadow-md hover:shadow-purple-100 text-purple-700 border border-purple-200'
              >
                <CommandLineIcon className='hidden lg:block w-6 h-6 mr-2' />
                <p 
                  className='text-sm text-center lg:text-left md:text-md font-medium'
                >
                  Dev Full Stack
                  </p>
              </div>
              <div
                className='flex justify-center items-center py-4 px-4 md:px-6 rounded-3xl bg-gradient-to-l from-saffron-200 hover:shadow-md hover:shadow-saffron-100 text-saffron-700 border border-saffron-300 '
              >
                <LightBulbIcon className='hidden lg:block w-6 h-6 mr-2' />
                <p 
                  className='text-sm text-center lg:text-left md:text-md font-medium'
                >
                  Product Manager
                  </p>
              </div>
            </div>
          </section>
          <section 
            className="flex flex-col justify-center items-center"
          >
            <Image 
              className='rounded-full shadow-md md:shadow-none w-[124px] h-[124px] object-cover md:w-[564px] md:h-[724px]' src={ItsMe} alt="Foto da Ana Luiza Simoni" />
          </section>
        </div>
      </header>
      <hr 
        className='text-white-200' 
      />
      <div
        ref={targetRef} 
      >
        <PostPreview />
      </div>
    </div>
    
  )
}