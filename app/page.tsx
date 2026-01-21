import Link from 'next/link';
import Navbar from '@/components/Navbar';

const softwares = [
  { name: 'AutoCAD 2024', slug: 'autocad-2024', icon: '📐', cat: 'Engenharia' },
  { name: 'Photoshop 2024', slug: 'photoshop-2024', icon: '🎨', cat: 'Design' },
  { name: 'CorelDraw v24', slug: 'coreldraw', icon: '✒️', cat: 'Vetores' },
  { name: 'Office 365', slug: 'office-365', icon: '📊', cat: 'Produtividade' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section Profissional */}
      <header className="py-16 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Downloads Seguros
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Especialistas em softwares originais e suporte técnico. <br/>
          <span className="font-bold text-blue-600">20 Anos de Experiência em TI.</span>
        </p>
      </header>

      {/* Grid de Produtos */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {softwares.map((sw) => (
            <Link key={sw.slug} href={`/software/${sw.slug}`} className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-blue-600 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{sw.icon}</div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 group-hover:text-blue-200">{sw.cat}</span>
              <h2 className="text-xl font-bold mt-1 group-hover:text-white">{sw.name}</h2>
              <div className="mt-4 flex items-center text-sm font-bold text-blue-600 group-hover:text-white">
                Ver Download →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
