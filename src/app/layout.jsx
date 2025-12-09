

export const metadata = {
  title: 'NutriSense - Sua Saúde Inteligente',
  description: 'Aplicativo completo de nutrição e acompanhamento',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#e5e4d8]">
        {children}
      </body>
    </html>
  )
}
