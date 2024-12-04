// src/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signup', { nome, email, senha });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Erro ao criar usuário.');
        }
    };

    return (
        <div>
            <h1>Criar Conta</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
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
                <button type="submit">Criar Conta</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Signup;
