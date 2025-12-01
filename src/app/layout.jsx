import './globals.css'

export const metadata = {
  title: 'NutriSense - Sua Saúde Inteligente',
  description: 'Aplicativo completo de nutrição e acompanhamento',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <nav className="bg-white shadow-lg border-b">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-800">NutriSense</span>
            </div>
            <div className="flex gap-4">
              <a href="/login" className="text-gray-600 hover:text-blue-600">Login</a>
              <a href="/registro" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Começar Grátis
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 NutriSense. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
