'use client'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import styles from './Login.module.css'

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário submetido')
  }
  // No topo do return, antes do <main>
<Link href="/notifications" style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: '#DDDBCE',
  border: '1px solid #000',
  borderRadius: '8px',
  padding: '10px',
  textDecoration: 'none',
  color: '#666',
  fontWeight: '600'
}}>
  🔔 Notificações
 //teste

</Link>

  return (
    
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <img 
          src="/assets/loginlogo.png"
          alt="logo da Nutrisense" 
          width="360" 
          height="360"
          className={styles.logo}
        />
        
        <div className={styles.inputBox}>
          <input 
            placeholder="Digite seu E-mail" 
            type="email" 
            required 
            className={styles.input}
          />
        </div>
        
        <div className={styles.inputBox}>
          <input 
            placeholder="Digite sua Senha" 
            type="password" 
            required 
            className={styles.input}
          />
        </div>
        
        <button type="submit" className={styles.button}>Entrar</button>
        
        <div className={styles.linksSection}>
          <Link href="/forgot-password" className={styles.forgotPassword}>
            Esqueceu sua senha?
          </Link>
          
          <div className={styles.accountLinks}>
            <Link href="/register" className={styles.createAccount}>
              Cadastre-se
            </Link>
            <Link href="/professional-register" className={styles.createProfissionalAccount}>
              Cadastro Profissional
            </Link>
          </div>
        </div>
        
        <div className={styles.infoSection}>
          <p className={styles.description}>
            Nutrisense, o seu guia inteligente para uma alimentação equilibrada!
          </p>
          
          <h2 className={styles.socialTitle}>Conheça nossas redes sociais:</h2>
          
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <FaWhatsapp style={{color: 'black'}} />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaInstagram style={{color: 'black'}} />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaFacebook style={{color: 'black'}} />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaTwitter style={{color: 'black'}} />
            </a>
          </div>
        </div>
      </form>
    </main>
  )
}