const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginControler');

router.get('/ping', ping);

//Creo una ruta para el login
router.post('/login', login);

//Tenemos que exportar nuestro modulo para que pueda ser utilizado en otro archivo
module.exports = router;