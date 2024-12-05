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

    // Verifica se todos os campos foram enviados
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    // Apenas simulando a criação de um usuário
    // No futuro, você pode conectar a um banco de dados
    return res.status(201).json({ message: "Usuário criado com sucesso!" });
};

module.exports = { login, signup };