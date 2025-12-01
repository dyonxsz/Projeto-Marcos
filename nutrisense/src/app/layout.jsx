import './globals.css';

export const metadata = {
  title: 'NutriSense - Saúde Inteligente',
  description: 'Aplicativo de nutrição e acompanhamento alimentar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <nav>
            <h1>NutriSense</h1>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 NutriSense - Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}
