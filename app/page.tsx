import Link from 'next/link';

const softwares = [
  { name: 'AutoCAD 2024', slug: 'autocad-2024', icon: '📐' },
  { name: 'Photoshop 2024', slug: 'photoshop-2024', icon: '🎨' },
  { name: 'CorelDraw v24', slug: 'coreldraw', icon: '✒️' },
  { name: 'Office 365', slug: 'office-365', icon: '📊' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Profissional */}
      <header className="bg-blue-600 text-white py-12 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-2">Baixa Já</h1>
        <p className="text-xl opacity-90">Downloads Seguros & Suporte Especializado</p>
        <div className="mt-4 inline-block bg-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
          20 Anos de Experiência em TI
        </div>
      </header>

      {/* Grade de Softwares */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Softwares Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softwares.map((sw) => (
            <Link key={sw.slug} href={`/software/${sw.slug}`} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                <span className="text-5xl mb-4 block">{sw.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">{sw.name}</h3>
                <p className="text-gray-500 text-sm mt-2">Download Direto & Seguro</p>
                <button className="mt-4 w-full bg-blue-50 text-blue-600 font-bold py-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Baixar Agora
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banner de Suporte */}
      <footer className="max-w-4xl mx-auto mb-12 px-4">
        <div className="bg-green-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Precisa de ajuda para instalar?</h2>
            <p className="opacity-90">Nossa equipe de TI está online para você.</p>
          </div>
          <a href="https://wa.me/5500000000000" className="bg-white text-green-700 font-black px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </footer>
    </main>
  );
}
