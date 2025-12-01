import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#4a6cf7', marginBottom: '1rem' }}>
        NutriSense
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '3rem' }}>
        Sua saúde em equilíbrio
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/login" style={{ 
          padding: '1rem 2rem', 
          background: '#4a6cf7', 
          color: 'white', 
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Login
        </Link>
        
        <Link href="/registro" style={{ 
          padding: '1rem 2rem', 
          background: 'white', 
          color: '#4a6cf7', 
          border: '2px solid #4a6cf7',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Cadastre-se
        </Link>
        
        <Link href="/principal" style={{ 
          padding: '1rem 2rem', 
          background: '#10b981', 
          color: 'white', 
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Dashboard
        </Link>
      </div>
    </div>
  );
}
