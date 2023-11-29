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
                //Si encuentro el user y el pass, devuelvo el token
                return res.send({token});
            } else {
                console.log('Usuario o contraseña incorrectos');
                //Si no encuentro el user y el pass, devuelvo undefined
                return res.send(undefined);
            }
        });
    } catch (e) {  
        // manejar el errorrrr
    }
}

