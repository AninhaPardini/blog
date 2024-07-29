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
    <div className='relative'>
      <button 
        onClick={handleClick} 
        className="fixed bottom-16 right-16 z-30 p-4 border border-white-800 text-white-800 rounded-lg hover:bg-mandy-500 hover:text-mandy-500 hover:border-mandy-500 hover:bg-opacity-10"
      >
        <ArrowDownIcon className="w-8 h-8" />
      </button>
      <header
        className="flex flex-col justify-center items-center pb-20">
        <div
          className="grid grid-cols-2 justify-center items-center"
        >
          <section 
            className="flex flex-col justify-center items-start gap-6"
          >
            <h1 
              className="text-6xl text-white-950 font-extrabold"
            >
              Oie! Seja bem-vindo ao meu blog.
            </h1>
            <p 
              className='text-lg'
            >
              Aqui é onde eu trago meus pensamentos, projetos, estudos e tudo que gostaria de expressar públicamente ^^
            </p>
            <div 
              className='flex justify-start items-center gap-4'
            >
              <div 
                className='flex justify-center items-center py-4 px-6 rounded-3xl bg-gradient-to-l from-mandy-100 hover:shadow-sm text-mandy-700 border border-mandy-200'
              >
                <EyeIcon className='w-6 h-6 mr-2' />
                <p 
                  className='text-md font-medium'
                >
                  UX UI Designer
                  </p>
              </div>
              <div 
                className='flex justify-center items-center py-4 px-6 rounded-3xl bg-gradient-to-l from-purple-100 hover:shadow-sm text-purple-700 border border-purple-200'
              >
                <CommandLineIcon className='w-6 h-6 mr-2' />
                <p 
                  className='text-md font-medium'
                >
                  Dev Full Stack
                  </p>
              </div>
              <div 
                className='flex justify-center items-center py-4 px-6 rounded-3xl bg-gradient-to-l from-saffron-200 hover:shadow-sm text-saffron-700 border border-saffron-300'
              >
                <LightBulbIcon className='w-6 h-6 mr-2' />
                <p 
                  className='text-md font-medium'
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
              className='rounded-full w-[564px]' src={ItsMe} alt="Foto da Ana Luiza Simoni" />
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