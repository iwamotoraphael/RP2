const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

exports.validarSenha = async function (senha, usuarioSenha){
    const senhaValida = await bcrypt.compare(senha, usuarioSenha);
    return !senhaValida;
}

exports.gerarSenhaComHash = async function (senha){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(senha, salt);
}

exports.verificaToken = function (req, res, next){
    const token = req.headers['x-access-token']
    console.log(token)

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).json('Invalid token')
        }
        else{
            req.id = decoded.userId
            next()
        }
    })
}


