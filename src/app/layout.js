// src/app/layout.js
export const metadata = {
  title: 'NutriSense',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}