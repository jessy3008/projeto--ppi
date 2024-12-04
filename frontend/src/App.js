// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            <h1>{isLogin ? 'Tela de Login' : 'Tela de Cadastro'}</h1>
            {isLogin ? <Login /> : <Signup />}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Criar Conta' : 'Já tem uma conta? Entrar'}
            </button>
        </div>
    );
};

export default App;