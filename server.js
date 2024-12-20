const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Habilita o CORS
app.use(cors());

// Middleware para ler as requisições HTTP que vierem do front
app.use(bodyParser.json());

// Definindo as rotas
app.use('/api/auth', authRoutes);  // Corrigido para '/api/auth'

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});