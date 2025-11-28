import React from "react"
import "./page.css"

const Login = () => {
    return (
        <div className='container'>
            <form>
                <h1>Tela de Login</h1>
                <input type="email" placeholder="Digite seu E-mail" />
                <input type="password" placeholder="Digite sua senha" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login 