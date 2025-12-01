import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Transforme sua saúde com 
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> NutriSense</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Conecte-se com nutricionistas, monitore seu progresso e alcance seus objetivos de saúde.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/registro" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-shadow"
          >
            Começar Agora
          </Link>
          <Link 
            href="/login" 
            className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500"
          >
            Fazer Login
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          { title: 'Diário Inteligente', desc: 'Registro alimentar com análises' },
          { title: 'Chat com Especialistas', desc: 'Converse diretamente com nutricionistas' },
          { title: 'Progresso em Tempo Real', desc: 'Acompanhe suas metas e resultados' },
        ].map((feature, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
