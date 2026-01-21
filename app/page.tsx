"use client";
import { useState, useEffect } from 'react';
import SEO from '@/components/SEO';
import SupportBanner from '@/components/SupportBanner';

export default function SoftwarePage({ params }: { params: { slug: string } }) {
  const [timer, setTimer] = useState(15);
  const [canDownload, setCanDownload] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanDownload(true);
    }
  }, [timer]);

  const softwareName = params.slug.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <SEO name={softwareName} description={`Download seguro de ${softwareName}`} />
      
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Topo da Página de Download */}
        <div className="bg-blue-600 p-8 text-white text-center">
          <h1 className="text-3xl font-bold">Preparando Download:</h1>
          <p className="text-4xl mt-2 font-black">{softwareName}</p>
        </div>

        <div className="p-8 text-center">
          {!canDownload ? (
            <div className="py-12">
              <div className="text-6xl font-bold text-blue-600 animate-bounce">{timer}s</div>
              <p className="text-gray-600 mt-4 text-lg">Seu link seguro está sendo gerado...</p>
            </div>
          ) : (
            <div className="py-12">
              <button className="bg-green-600 hover:bg-green-700 text-white text-2xl font-bold py-6 px-12 rounded-2xl shadow-lg transition-transform hover:scale-105">
                BAIXAR AGORA
              </button>
              <p className="text-gray-500 mt-4 text-sm font-medium italic">✓ Arquivo verificado contra vírus</p>
            </div>
          )}

          <hr className="my-8 border-gray-100" />

          {/* O Banner de Urgência no Rodapé da Publicação */}
          <div className="bg-red-50 border-2 border-dashed border-red-200 rounded-2xl p-6 relative overflow-hidden">
             {/* Efeito visual de Urgência */}
            <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">
              Oferta Limitada
            </div>
            
            <h3 className="text-red-600 text-xl font-black mb-2 uppercase italic">
              ⚡ Dificuldade na Instalação?
            </h3>
            <p className="text-gray-700 mb-6 font-medium">
              Não corra riscos! Nossa equipe técnica faz a instalação remota completa para você com <span className="text-red-600 font-bold underline text-lg">50% de DESCONTO</span> apenas hoje.
            </p>
            
            <SupportBanner softwareName={softwareName} />
          </div>
        </div>
      </div>
      
      <p className="text-center text-gray-400 mt-8 text-sm">
        © Baixa Já - 20 Anos de Segurança em Downloads
      </p>
    </div>
  );
}
