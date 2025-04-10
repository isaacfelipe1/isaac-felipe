'use client';

import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaDocker,
} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiDotnet,
  SiSharp,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      name: '.NET',
      icon: (
        <SiDotnet className="text-[#007ACC] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'SQL',
      icon: (
        <SiMysql className="text-[#005C99] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'C#',
      icon: (
        <SiDotnet className="text-[#239120] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'Docker',
      icon: (
        <FaDocker className="text-[#2496ED] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <SiJavascript className="text-[#F7DF1E] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <SiTypescript className="text-[#007ACC] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'Vue.js',
      icon: (
        <FaVuejs className="text-[#61DAFB] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <SiNextdotjs className="text-[#000000] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'GitHub',
      icon: (
        <FaGithub className="text-[#181717] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <SiTailwindcss className="text-[#38B2AC] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'Git',
      icon: (
        <FaGitAlt className="text-[#F05032] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
    {
      name: 'REST APIs',
      icon: (
        <FaDatabase className="text-[#6C757D] text-6xl transition-transform duration-200 hover:scale-110" />
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center p-6 mt-16 md:mt-20">
        <h1 className="text-4xl md:text-5xl font-bold font-cursive text-[#D9A066] mb-4">
          Minhas Skills
        </h1>
        <p className="text-lg md:text-xl text-[#D9A066] mb-8 text-center max-w-screen-md">
          Aqui estão algumas das minhas principais competências.
        </p>
        <ul className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 w-full max-w-screen-lg text-center">
          {skills.map((skill, index) => (
            <li key={index} className="flex flex-col items-center space-y-1">
              {skill.icon}
              <span className="text-sm md:text-base font-semibold text-[#1A202C]">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
