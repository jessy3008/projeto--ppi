const login = (req, res) => {
    const { email, senha } = req.body;

    // Lógica de validação de login
    if (email === 'admin@exemple.com' && senha === '12345678') {
        return res.status(200).json({ message: 'Success', token: 'token' });
    }
    return res.status(401).json({ message: 'Credenciais Inválidas' });
};

// Função de cadastro (signup)
const signup = (req, res) => {
    const { nome, email, senha } = req.body;

    // Aqui você pode fazer a lógica para cadastrar no banco de dados
    // Exemplo de resposta simples:
    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
};

module.exports = { login, signup };
