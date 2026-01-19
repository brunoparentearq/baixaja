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

  // Simulação de dados (Em um sistema real, você buscaria pelo slug)
  const software = {
    name: params.slug.toUpperCase(),
    description: `Download seguro do ${params.slug}. Versão completa e testada.`,
    version: "2024.1",
    downloadUrl: "https://www.mediafire.com/seulink" 
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <SEO 
        name={software.name} 
        description={software.description} 
        category="Software" 
        operatingSystem="Windows" 
        image="/logo.png" 
        slug={params.slug}
      />

      {/* Espaço para Google Ads Topo */}
      <div className="w-full h-24 bg-gray-100 mb-6 flex items-center justify-center border-dashed border-2 border-gray-300">
        <span className="text-gray-400">Publicidade Google Adsense</span>
      </div>

      <h1 className="text-3xl font-bold mb-2">{software.name}</h1>
      <p className="text-gray-600 mb-6">Versão: {software.version} | 100% Livre de Vírus</p>

      <div className="bg-white p-8 rounded-lg shadow-md border text-center mb-8">
        {!canDownload ? (
          <div>
            <p className="text-lg mb-2">Seu link de download ficará pronto em:</p>
            <div className="text-5xl font-bold text-blue-600">{timer}s</div>
          </div>
        ) : (
          <a 
            href={software.downloadUrl}
            className="inline-block bg-blue-600 text-white text-xl font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transition-colors"
          >
            BAIXAR AGORA (MediaFire)
          </a>
        )}
      </div>

      {/* Banner de Suporte Especializado */}
      <SupportBanner softwareName={software.name} />

      {/* Espaço para Google Ads Rodapé */}
      <div className="w-full h-64 bg-gray-100 mt-8 flex items-center justify-center border-dashed border-2 border-gray-300">
        <span className="text-gray-400">Anúncios Relacionados</span>
      </div>
    </div>
  );
}
