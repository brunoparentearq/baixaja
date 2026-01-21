import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo à Esquerda */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-blue-600 tracking-tighter">BAIXA JÁ</span>
        </Link>

        {/* Barra de Busca à Direita */}
        <div className="relative max-w-xs w-full hidden md:block">
          <input 
            type="text" 
            placeholder="Buscar software..." 
            className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        </div>
      </div>
    </nav>
  );
}
