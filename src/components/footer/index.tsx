
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

const socials = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/ana-luiza-pardini-a55746214/',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/AninhaPardini',
  },
  {
    name: 'behance',
    link: 'https://www.behance.net/anapardinii',
  },
];

export default function Footer() {
  return (
    <footer className="bg-pink-500 py-4">
      <hr
        className='text-white-200 w-full mb-16' 
      />
      <div className="flex justify-center space-x-4">
        {socials.map((social) => (
          <Link key={social.name
          } className='capitalize text-mandy-500 hover:text-mandy-800' href={social.link} target="_blank" rel="noopener noreferrer">
            {/* <FontAwesomeIcon icon={social.name} className="h-6 w-6 text-white" /> */}
            {social.name}
          </Link>
        ))}
      </div>
      <p className="text-center text-white mt-4">© 2022 Your Website. All rights reserved.</p>
    </footer>
  );
}