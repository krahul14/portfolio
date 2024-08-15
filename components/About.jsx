import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 order-2 md:order-1">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi, I&#39;m Kumar Rahul, a passionate and dedicated Frontend Developer
            specializing in building modern, responsive, and user-friendly web
            applications. With expertise in React.js and Next.js, I create
            efficient and scalable solutions that provide seamless user
            experiences.
          </p>
          <p className="py-2 text-gray-600">
            My journey into the world of web development began with a
            fascination for how websites work and a desire to bring creative
            ideas to life on the internet. Over the years, I&#39;ve honed my skills
            and gained extensive experience in various frontend technologies,
            enabling me to tackle complex challenges and deliver high-quality
            projects.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 order-1 md:order-2">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
