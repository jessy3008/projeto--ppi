const express = require('express');
const { login, signup } = require('../controllers/authController');

const router = express.Router();

// Rota de login
router.post('/login', login);

// Rota de cadastro (signup)
router.post('/signup', signup);

module.exports = router;
