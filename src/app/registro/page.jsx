'use client';
import React, { useState } from 'react';

export default function CadastroUsuario() {
  const UF_OPTIONS = [
    'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA',
    'MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN',
    'RS','RO','RR','SC','SP','SE','TO'
  ];

  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    nascimento: '',
    peso: '',
    altura: '',
    telefone: '',
    uf: '',
    cidade: '',
    bairro: '',
    cep: '',
    endereco: '',
    numero: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: '',
    termos: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.sobrenome.trim()) newErrors.sobrenome = 'Sobrenome é obrigatório';
    
    // Validação de Peso (apenas números e ponto decimal)
    if (formData.peso && !/^\d*\.?\d*$/.test(formData.peso)) {
      newErrors.peso = 'Peso deve conter apenas números (ex: 70.5)';
    }
    
    // Validação de Altura (apenas números)
    if (formData.altura && !/^\d+$/.test(formData.altura)) {
      newErrors.altura = 'Altura deve conter apenas números (ex: 175)';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Email inválido';
    else if (formData.email !== formData.confirmarEmail) {
      newErrors.confirmarEmail = 'Emails não conferem';
    }
    
    if (formData.senha.length < 6) newErrors.senha = 'Senha deve ter no mínimo 6 caracteres';
    else if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'Senhas não conferem';
    }
    
    if (!formData.termos) newErrors.termos = 'Você deve aceitar os termos';
    
    if (formData.nascimento) {
      const birthDate = new Date(formData.nascimento);
      const today = new Date();
      if (birthDate > today) newErrors.nascimento = 'Data de nascimento inválida';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Formatação de CEP
    if (name === 'cep') {
      const formattedCep = value.replace(/\D/g, '').slice(0, 8);
      if (formattedCep.length > 5) {
        const formatted = formattedCep.replace(/^(\d{5})(\d)/, '$1-$2');
        setFormData(prev => ({ ...prev, [name]: formatted }));
      } else {
        setFormData(prev => ({ ...prev, [name]: formattedCep }));
      }
      return;
    }
    
    // Formatação de telefone
    if (name === 'telefone') {
      const phone = value.replace(/\D/g, '').slice(0, 11);
      let formattedPhone = phone;
      if (phone.length > 2) {
        formattedPhone = `(${phone.slice(0,2)}) ${phone.slice(2)}`;
      }
      if (phone.length > 7) {
        formattedPhone = formattedPhone.slice(0, 10) + '-' + formattedPhone.slice(10);
      }
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
      return;
    }
    
    // Validação de Peso (aceita números e apenas um ponto decimal)
    if (name === 'peso') {
      // Permite apenas números e um ponto decimal
      const cleanedValue = value.replace(/[^\d.]/g, '');
      // Garante que tenha no máximo um ponto decimal
      const parts = cleanedValue.split('.');
      if (parts.length > 2) {
        // Se tiver mais de um ponto, mantém apenas o primeiro
        const formattedValue = parts[0] + '.' + parts.slice(1).join('');
        setFormData(prev => ({ ...prev, [name]: formattedValue }));
      } else {
        setFormData(prev => ({ ...prev, [name]: cleanedValue }));
      }
      return;
    }
    
    // Validação de Altura (aceita apenas números)
    if (name === 'altura') {
      // Permite apenas números
      const cleanedValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanedValue }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpa erro do campo quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert('Por favor, corrija os erros no formulário.');
      return;
    }
    
    try {
      alert('Cadastro realizado com sucesso!');
      
      setFormData({
        nome: '',
        sobrenome: '',
        nascimento: '',
        peso: '',
        altura: '',
        telefone: '',
        uf: '',
        cidade: '',
        bairro: '',
        cep: '',
        endereco: '',
        numero: '',
        email: '',
        confirmarEmail: '',
        senha: '',
        confirmarSenha: '',
        termos: false
      });
      setErrors({});
      
      // 🔴 REDIRECIONAMENTO PARA LOGIN APÓS CADASTRO BEM-SUCEDIDO
      // Se estiver usando Next.js com App Router:
      window.location.href = '/login';
      
      // Se estiver usando páginas HTML simples, troque por:
      // window.location.href = 'login.html';
      
      // Se estiver usando React Router:
      // import { useNavigate } from 'react-router-dom';
      // const navigate = useNavigate();
      // navigate('/login');
      
    } catch (error) {
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <>
      <style>{`
        body {
          background: #DAD8CB !important;
          font-family: 'Segoe UI', Arial, sans-serif;
          color: #2D4539;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        /* Container principal que contém TUDO */
        .main-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
        }

        /* NUTRISENSE e Logo FIXOS mas parte do fluxo - REDUZIDO */
        .fixed-brand-section {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 10px 40px;
          display: flex;
          align-items: center;
          gap: 15px;
          background: #DAD8CB;
          z-index: 100;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(45, 69, 57, 0.1);
          height: 80px;
        }

        .brand-name {
          font-size: 30px;
          font-weight: 800;
          color: #2D4539;
          letter-spacing: -0.5px;
          margin: 0;
          white-space: nowrap;
        }

        .logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          border-radius: 6px;
        }

        /* Conteúdo principal - começa logo após a seção fixa - REDUZIDO */
        .content-wrapper {
          width: 100%;
          padding-top: 90px;
          box-sizing: border-box;
        }

        /* Título centralizado - AJUSTADO */
        .page-title-container {
          width: 100%;
          text-align: center;
          margin-bottom: 25px;
          margin-top: 10px;
        }

        .page-title {
          font-size: 32px;
          font-weight: 600;
          color: #2D4539;
          margin: 0;
          letter-spacing: -0.5px;
        }

        /* Container do formulário - AJUSTADO */
        .form-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 20px 40px;
          box-sizing: border-box;
        }

        .form-box {
          width: 100%;
          max-width: 900px;
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .grid-form {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .grid-form input,
        .grid-form select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          outline: none;
          font-size: 15px;
          transition: border-color 0.3s;
          box-sizing: border-box;
        }

        /* REMOVE AS SETINHAS DOS CAMPOS NUMBER */
        .grid-form input[type="number"]::-webkit-inner-spin-button,
        .grid-form input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        .grid-form input[type="number"] {
          -moz-appearance: textfield;
        }

        .grid-form input:focus,
        .grid-form select:focus {
          border-color: #2D4539;
          box-shadow: 0 0 0 2px rgba(45, 69, 57, 0.1);
        }

        .grid-form input.error {
          border-color: #e74c3c;
        }

        .error-message {
          color: #e74c3c;
          font-size: 12px;
          margin-top: 4px;
          height: 16px;
        }

        .checkbox {
          grid-column: 1 / 4;
          margin-top: 8px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          line-height: 1.4;
        }

        .checkbox input[type="checkbox"] {
          margin-top: 2px;
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .checkbox.error {
          color: #e74c3c;
        }

        .btn {
          grid-column: 1 / 4;
          margin-top: 20px;
          padding: 14px;
          background: #2D4539;
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn:hover {
          background: #253a2f;
          transform: translateY(-2px);
          box-shadow: 0 3px 10px rgba(45, 69, 57, 0.15);
        }

        .btn:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .fixed-brand-section {
            padding: 8px 20px;
            gap: 12px;
            height: 65px;
          }

          .brand-name {
            font-size: 24px;
          }

          .logo {
            width: 45px;
            height: 45px;
          }

          .content-wrapper {
            padding-top: 75px;
          }

          .page-title-container {
            margin-bottom: 20px;
            margin-top: 5px;
          }

          .page-title {
            font-size: 26px;
          }

          .form-container {
            padding: 0 15px 30px;
          }

          .form-box {
            padding: 20px;
            border-radius: 10px;
          }
          
          .grid-form {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .checkbox,
          .btn {
            grid-column: 1;
          }

          .grid-form input,
          .grid-form select {
            padding: 10px;
            font-size: 14px;
          }

          .btn {
            padding: 12px;
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .fixed-brand-section {
            padding: 6px 15px;
            gap: 10px;
            height: 55px;
          }

          .brand-name {
            font-size: 20px;
          }

          .logo {
            width: 35px;
            height: 35px;
          }

          .content-wrapper {
            padding-top: 65px;
          }

          .page-title-container {
            margin-bottom: 15px;
          }

          .page-title {
            font-size: 22px;
          }

          .form-box {
            padding: 15px;
            border-radius: 8px;
          }
          
          .grid-form input,
          .grid-form select {
            padding: 9px;
            font-size: 13px;
          }

          .checkbox {
            font-size: 13px;
          }
        }

        /* Animações suaves para scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Container principal */}
      <div className="main-container">
        
        {/* Seção fixa com NUTRISENSE e Logo */}
        <div className="fixed-brand-section">
          <h1 className="brand-name">NUTRISENSE</h1>
          <img 
            src="/logo.png" 
            alt="Logo NutriSense" 
            className="logo"
            onError={(e) => {
              e.target.style.display = 'none';
              console.log('Logo não encontrada em /logo.png');
            }}
          />
        </div>

        {/* Conteúdo principal */}
        <div className="content-wrapper">
          
          {/* Título da página centralizado */}
          <div className="page-title-container">
            <h2 className="page-title">CADASTRO DE USUÁRIO</h2>
          </div>

          {/* Formulário de cadastro */}
          <div className="form-container">
            <div className="form-box">
              <form onSubmit={handleSubmit} className="grid-form">
                {/* Nome */}
                <div className="form-group">
                  <input 
                    name="nome" 
                    placeholder="Nome *" 
                    value={formData.nome}
                    onChange={handleChange}
                    className={errors.nome ? 'error' : ''}
                  />
                  {errors.nome && <span className="error-message">{errors.nome}</span>}
                </div>

                {/* Sobrenome */}
                <div className="form-group">
                  <input 
                    name="sobrenome" 
                    placeholder="Sobrenome *" 
                    value={formData.sobrenome}
                    onChange={handleChange}
                    className={errors.sobrenome ? 'error' : ''}
                  />
                  {errors.sobrenome && <span className="error-message">{errors.sobrenome}</span>}
                </div>

                {/* Data de Nascimento */}
                <div className="form-group">
                  <input 
                    name="nascimento" 
                    type="date" 
                    value={formData.nascimento}
                    onChange={handleChange}
                    className={errors.nascimento ? 'error' : ''}
                  />
                  {errors.nascimento && <span className="error-message">{errors.nascimento}</span>}
                </div>

                {/* Peso - ALTERADO: agora é campo de texto digitável */}
                <div className="form-group">
                  <input 
                    name="peso" 
                    placeholder="Peso (kg)" 
                    type="text" /* ALTERADO: de "number" para "text" */
                    inputMode="decimal" /* Mantém teclado numérico no mobile */
                    value={formData.peso}
                    onChange={handleChange}
                    className={errors.peso ? 'error' : ''}
                  />
                  {errors.peso && <span className="error-message">{errors.peso}</span>}
                </div>

                {/* Altura - ALTERADO: agora é campo de texto digitável */}
                <div className="form-group">
                  <input 
                    name="altura" 
                    placeholder="Altura (cm)" 
                    type="text" /* ALTERADO: de "number" para "text" */
                    inputMode="numeric" /* Mantém teclado numérico no mobile */
                    value={formData.altura}
                    onChange={handleChange}
                    className={errors.altura ? 'error' : ''}
                  />
                  {errors.altura && <span className="error-message">{errors.altura}</span>}
                </div>

                {/* Telefone */}
                <div className="form-group">
                  <input 
                    name="telefone" 
                    placeholder="Telefone (DDD) 9XXXX-XXXX" 
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>

                {/* UF */}
                <div className="form-group">
                  <select 
                    name="uf" 
                    value={formData.uf}
                    onChange={handleChange}
                  >
                    <option value="">UF *</option>
                    {UF_OPTIONS.map(uf => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                </div>

                {/* Cidade */}
                <div className="form-group">
                  <input 
                    name="cidade" 
                    placeholder="Cidade *" 
                    value={formData.cidade}
                    onChange={handleChange}
                  />
                </div>

                {/* Bairro */}
                <div className="form-group">
                  <input 
                    name="bairro" 
                    placeholder="Bairro *" 
                    value={formData.bairro}
                    onChange={handleChange}
                  />
                </div>

                {/* CEP */}
                <div className="form-group">
                  <input 
                    name="cep" 
                    placeholder="CEP" 
                    value={formData.cep}
                    onChange={handleChange}
                    maxLength={9}
                  />
                </div>

                {/* Endereço */}
                <div className="form-group">
                  <input 
                    name="endereco" 
                    placeholder="Endereço" 
                    value={formData.endereco}
                    onChange={handleChange}
                  />
                </div>

                {/* Número */}
                <div className="form-group">
                  <input 
                    name="numero" 
                    placeholder="Nº" 
                    value={formData.numero}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <input 
                    name="email" 
                    placeholder="Email *" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                {/* Confirmar Email */}
                <div className="form-group">
                  <input 
                    name="confirmarEmail" 
                    placeholder="Confirmar email *" 
                    type="email"
                    value={formData.confirmarEmail}
                    onChange={handleChange}
                    className={errors.confirmarEmail ? 'error' : ''}
                  />
                  {errors.confirmarEmail && <span className="error-message">{errors.confirmarEmail}</span>}
                </div>

                {/* Senha */}
                <div className="form-group">
                  <input 
                    name="senha" 
                    type="password" 
                    placeholder="Senha *" 
                    value={formData.senha}
                    onChange={handleChange}
                    className={errors.senha ? 'error' : ''}
                  />
                  {errors.senha && <span className="error-message">{errors.senha}</span>}
                </div>

                {/* Confirmar Senha */}
                <div className="form-group">
                  <input 
                    name="confirmarSenha" 
                    type="password" 
                    placeholder="Confirmar senha *" 
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    className={errors.confirmarSenha ? 'error' : ''}
                  />
                  {errors.confirmarSenha && <span className="error-message">{errors.confirmarSenha}</span>}
                </div>

                {/* Termos */}
                <label className={`checkbox ${errors.termos ? 'error' : ''}`}>
                  <input 
                    type="checkbox" 
                    name="termos" 
                    checked={formData.termos}
                    onChange={handleChange}
                  />
                  Li e estou de acordo com o <b>Termo de uso</b> do sistema da NutriSense. *
                  {errors.termos && <span className="error-message"> {errors.termos}</span>}
                </label>

                {/* 🔴 BOTÃO COM REDIRECIONAMENTO PARA LOGIN */}
                <button 
                  type="submit" 
                  className="btn"
                >
                  Fazer cadastro agora
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}