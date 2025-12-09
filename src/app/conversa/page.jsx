import Link from 'next/link';

export default function ChatPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 pt-6"
      style={{ backgroundColor: "#DAD8CB", color: "#2D4539" }}
    >
     {/* HEADER com logo centralizado e botão voltar no canto */}
      <div className="w-full max-w-md relative mb-4">
        {/* LOGO - CENTRALIZADO */}
        <div className="flex justify-center">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-40"
          />
        </div>

        {/* BOTÃO VOLTAR - CANTO DIREITO */}
        <div className="absolute right-0 top-0">
          <Link href="/principal" aria-label="Voltar">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M21 12a9 9 0 11-9-9" stroke="#2D4539" strokeWidth="1.4" />
              <path d="M10 8l-4 4 4 4" stroke="#2D4539" strokeWidth="1.6" />
            </svg>
          </Link>
        </div>
      </div>


      {/* TÍTULO */}
      <h1 className="text-3xl font-bold mb-5 tracking-wide">CHAT</h1>

      {/* CARD DA NUTRICIONISTA */}
      <div className="bg-[#E7E5D9] border border-[#2D4539] rounded-xl px-4 py-3 w-full max-w-md text-center shadow">
        <div className="flex items-center gap-2 justify-center mb-2">
          <div className="w-3 h-3 border border-[#2D4539] rounded-full"></div>
          <p className="text-sm font-semibold">Dra. Amanda Guerra</p>
        </div>

        <p className="text-sm leading-relaxed font-medium">
          Olá! Sua dieta personalizada já está disponível
          na plataforma. Acesse seu painel para visualizar
          todas as orientações e começar hoje mesmo seu plano
          alimentar. Qualquer dúvida, estou à disposição!
        </p>
      </div>

      {/* Botões */}
      <button
        className="w-full max-w-md bg-[#7E8F7B] text-white font-semibold py-2 rounded-md mt-4 shadow hover:bg-[#6a7a67] transition-colors"
      >
        acessar dieta
      </button>

      <button
        className="w-full max-w-md bg-[#7E8F7B] text-white font-semibold py-2 rounded-md mt-2 shadow hover:bg-[#6a7a67] transition-colors"
      >
        avançar
      </button>

      {/* Texto Feedback */}
      <p className="font-semibold mt-4 mb-2">Feedback para ajustes</p>

      {/* Caixa de texto */}
      <textarea
        placeholder="Digite aqui..."
        className="w-full max-w-md bg-[#ECEBE1] border border-[#2D4539] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7E8F7B] focus:border-transparent"
        style={{ color: "#2D4539" }}
        rows={3}
      ></textarea>

      {/* Botão Enviar */}
      <button
        className="w-full max-w-md bg-[#7E8F7B] text-white font-semibold py-2 rounded-md mt-3 shadow hover:bg-[#6a7a67] transition-colors"
      >
        enviar
      </button>
    </div>
  );
}