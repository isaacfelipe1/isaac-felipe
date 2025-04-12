'use client';
import { useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { artigos } from './artigos';
import TalksSection from '../timeline/TalksSection';

export default function Artigos() {
  const [descricaoVisivel, setDescricaoVisivel] = useState<number | null>(null);

  const toggleDescricao = (index: number) => {
    setDescricaoVisivel(descricaoVisivel === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-cursive text-[#D9A066] mb-12">
            Artigos
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artigos.map((artigo, index) => (
              <div key={index} className="article-card">
                <h2 className="text-lg font-medium text-gray-800 mb-2">
                  {artigo.titulo}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{artigo.info}</p>
                <button
                  onClick={() => toggleDescricao(index)}
                  className="text-[#E95922] hover:text-[#e96e22] font-medium cursor-pointer"
                >
                  {descricaoVisivel === index ? 'Ver menos' : 'Ver mais'}
                </button>
                {descricaoVisivel === index && (
                  <p className="text-sm text-gray-700 mt-4">
                    {artigo.descricao}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <TalksSection />
      </div>
      <Footer />
    </div>
  );
}
