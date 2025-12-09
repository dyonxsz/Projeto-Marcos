import Head from "next/head";
import Link from "next/link";

export default function NotificacoesPage() {
  return (
    <>
      <Head>
        {/* Importa a fonte Jersey 20 (via Google Fonts). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+20:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          backgroundColor: "#DAD8CB",
          color: "#2D4539",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px",
          }}
        >
          {/* LOGO + NOME */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: 363,
              /* removi o fontSize global daqui para aplicar diretamente no span */
              lineHeight: "64px",
            }}
          >
            <img
              src="/logo.jpg"
              alt="NutriSense Logo"
              style={{
                width: 48,
                height: 48,
                objectFit: "contain",
              }}
            />

            {/* Nome com Jersey 20 em negrito */}
            <span
              style={{
                fontFamily: '"Jersey 20", sans-serif',
                fontWeight: 700, // negrito
                fontSize: 50,
                color: "#2D4539",
                display: "inline-block",
              }}
            >
              NutriSense
            </span>
          </div>

          {/* BOTÃO VOLTAR */}
          <Link href="/principal" aria-label="Voltar">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M21 12a9 9 0 11-9-9" stroke="#2D4539" strokeWidth="1.4" />
              <path d="M10 8l-4 4 4 4" stroke="#2D4539" strokeWidth="1.6" />
            </svg>
          </Link>
        </div>

        {/* CENTRO */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* SINO */}
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
            <path d="M15 17a3 3 0 01-6 0" stroke="#2D4539" strokeWidth="1.6" />
            <path
              d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7z"
              stroke="#2D4539"
              strokeWidth="1.6"
            />
          </svg>

          <div style={{ marginTop: 16, marginBottom: 32 }}>Suas notificações</div>

          {/* LISTA */}
          <div
            style={{
              width: 363,
              display: "flex",
              gap: 16,
              flexDirection: "column",
            }}
          >
            {[
              "Enviou uma mensagem há 14 horas.",
              "Enviou uma mensagem há 2 dias.",
              "Enviou uma mensagem há 1 semana.",
              "Enviou uma mensagem há 3 semanas.",
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #2D4539",
                  borderRadius: 8,
                  padding: 12,
                  fontSize: 14,
                }}
              >
                <strong>Dra. Amanda Guerra</strong>
                <div>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
