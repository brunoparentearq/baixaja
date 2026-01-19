import { MessageCircle } from 'lucide-react';

export default function SupportBanner({ softwareName }: { softwareName?: string }) {
  const message = softwareName 
    ? `Olá, preciso de ajuda com a instalação do ${softwareName}`
    : "Olá, preciso de suporte com um download";
    
  const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;

  return (
    <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold text-green-800 flex items-center gap-2">
          <MessageCircle size={20} />
          Precisa de ajuda na instalação?
        </h3>
        <p className="text-green-700">Chame nosso suporte técnico agora mesmo!</p>
      </div>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
      >
        Suporte WhatsApp
      </a>
    </div>
  );
}
