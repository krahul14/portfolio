import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const ProjectItem = ({ title, backgroundImg, description, warning, tech, projectUrl, sourceCodeUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#a29ff1] to-[#9a9af0]'>
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt={title} />
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-2xl font-bold text-black tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-black text-center'>{description}</p>
        <p className='pb-4 pt-2 text-red-900 text-center'>{warning}</p>
        <p className='pb-4 pt-2 text-black text-center'>{tech}</p>
        <div className='flex space-x-4'>
          <Link href={projectUrl}>
            <a className='flex items-center space-x-2 py-3 px-4 min-w-[120px] rounded-lg bg-[#ecf0f3] text-gray-700 font-bold text-sm cursor-pointer transition-transform duration-300 transform hover:scale-105' target='_blank' rel='noopener noreferrer'>
              <FaGlobe />
              <span>Live Demo</span>
            </a>
          </Link>
          <Link href={sourceCodeUrl}>
            <a className='flex items-center space-x-2 py-3 px-4 min-w-[120px] rounded-lg bg-[#ecf0f3] text-gray-700 font-bold text-sm cursor-pointer transition-transform duration-300 transform hover:scale-105' target='_blank' rel='noopener noreferrer'>
              <FaGithub />
              <span>Source Code</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
