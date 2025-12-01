import './globals.css'

export const metadata = {
  title: 'Login - Nutrisense',
  description: 'Nutrisense, o seu guia inteligente para uma alimentação equilibrada!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}

