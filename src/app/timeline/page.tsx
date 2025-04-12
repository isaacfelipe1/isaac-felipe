'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/nav';
import Footer from '../components/footer';

export default function Timeline() {
  return (
    <div className="relative w-full h-full  flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-6 md:p-12 text-[]#F3EFE0">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-16 text-center text-[#D9A066]">
          Experiências Profissionais
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D9A066]"></div>

          <div className="relative flex items-center mb-16">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-bold text-[#1A202C]">Localiza&Co</h3>
              <p className="text-sm text-argila">2025 - Atual</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-[#1A202C]">
                  Software Developer
                </h4>
                <p className="text-sm text-[#1A202C]">2025 - Presente</p>
                <p className="text-sm">
                  Azure Devops, RabbitMq, Docker, Kubernetes, Scrum, Datadog,
                  C#, Sonar, Teste de Unidade, SQL.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                src="/localizaco_logo.jpg"
                alt="Logo da Empresa X"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="relative flex items-center mb-16">
            <div className="w-1/2 flex justify-center">
              <Image
                src="/rein_logo.jpg"
                alt="Logo da Empresa Y"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-2xl font-bold text-[#1A202C]">
                Rein Sistemas
              </h3>
              <p className="text-sm text-argila">out de 2024 - jan de 2025</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-argila">
                  Software Developer Full Stack
                </h4>
                <p className="text-sm">
                  Json, Git, Vue.js, Bulma, PHP, Azure DevOps.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mb-16">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-bold text-[#1A202C]">Central de Materiais-SYX</h3>
              <p className="text-sm text-argila">fev de 2024 - set de 2024</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-argila">
                  Software Developer Full Stack
                </h4>
                <p className="text-sm">
                  Next.js, Git, Tailwind CSS, SQL, Github, C#, .NET .
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                src="/central_de_materiais_logo.jpg"
                alt="Logo da Central de Materiais"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="relative flex items-center mb-16">
            <div className="w-1/2 flex justify-center">
              <Image
                src="/rederecode_logo.jpg"
                alt="Logo da Ong Recode"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-2xl font-bold text-[#1A202C]">
                RECODE
              </h3>
              <p className="text-sm text-argila">jun de 2023 - jan de 2024</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-[#1A202C]">
                  Software Developer Full Stack
                </h4>
                <p className="text-sm">React, Next.js, .NET, C#, Git, Tailwind CSS, SQL.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
