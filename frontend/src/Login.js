// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, senha });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Erro ao realizar o login.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Login;
