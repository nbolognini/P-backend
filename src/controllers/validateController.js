const connection = require('../models/conecction')
const jwt = require('jsonwebtoken');

module.exports.validate = (req, res) => {
    const { username, password } = req.body;
    const consult = 'SELECT * FROM login WHERE username = ? AND password = ?';

    try {
        connection.query(consult, [username, password], (err, result) => {
            if (err) {
                return res.send({message: 'Error de user/pass', error: err});
            }

            if (result.length > 0) {
                const token = jwt.sign({ username }, 'Stack', { expiresIn: '2m' });
                console.log(result);
                return res.send({token});
            } else {
                console.log('Usuario o contraseña incorrectos');
                return res.send({message: 'Usuario o contraseña incorrectos'});
            }
        });
    } catch (e) {  
        // manejar el errorrrr
    }
}

