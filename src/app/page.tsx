import Image from 'next/image';
import ItsMe from '../assets/ItsMe.png';
import PostPreview from './posts/page';

import { EyeIcon, LightBulbIcon, CommandLineIcon } from '@heroicons/react/16/solid';

export default function Home() {
  return (
    <div>
      <div 
        className="flex flex-col justify-center items-center pt-8 pb-20">
        <div
          className="grid grid-cols-2 justify-center items-center"
        >
          <div 
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
          </div>
          <div 
            className="flex flex-col justify-center items-center"
          >
            <Image 
              className='rounded-full w-[564px]' src={ItsMe} alt="Foto da Ana Luiza Simoni" />
          </div>
        </div>
      </div>
      <hr 
        className='text-white-200' 
      />
      <PostPreview />
    </div>
    
  )
}