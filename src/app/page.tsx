import Link from 'next/link';
import Image from 'next/image';
import ItsMe from '../assets/ItsMe.png';
import PostPreview from './posts/page';

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
          </div>
          <div 
            className="flex flex-col justify-center items-center"
          >
            <Image 
              className='rounded-full w-[564px]' src={ItsMe} alt="Foto da Ana Luiza Simoni" />
          </div>
        </div>
      </div>
      <hr className='text-white-200' />
      <PostPreview />
    </div>
    
  )
}