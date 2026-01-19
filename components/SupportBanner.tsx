import { WhatsappIcon } from 'lucide-react'; // Certifique-se de ter instalado lucide-react

export default function SupportBanner({ softwareName }: { softwareName?: string }) {
  const message = softwareName 
    ? `Olá! Gostaria de suporte para a instalação do ${softwareName}. Vi que você tem 20 anos de experiência.`
    : "Olá! Gostaria de informações sobre o suporte técnico remoto.";
  
  const whatsappUrl = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(message)}`;

  return (
    <div className="my-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">Precisa de Ajuda com a Instalação?</h3>
          <p className="text-blue-100">
            Tenho **20 anos de experiência** em TI. Realizo sua instalação remota com total segurança via AnyDesk ou TeamViewer.
          </p>
        </div>
        <a 
          href={whatsappUrl}
          target="_blank"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
        >
          Agendar Instalação Agora
        </a>
      </div>
    </div>
  );
}
