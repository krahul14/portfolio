import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-200'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-200'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Kumar Rahul</span>
          </h1>
          <h1 className='py-2 text-gray-200'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-200 sm:max-w-[70%] m-auto'>
            I&#39;m focused on building responsive front-end web applications with seamless back-end integration
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/kumar-rahul-6a5a17197/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg text-white shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/krahul14'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg text-white shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg text-white shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href='/assets/Resume_KumarRahul.pdf'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg text-white shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
