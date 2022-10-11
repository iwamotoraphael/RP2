const bcrypt = require('bcrypt')

exports.validarSenha = async function (senha, usuarioSenha){
    const senhaValida = await bcrypt.compare(senha, usuarioSenha);
    return !senhaValida;
}

exports.gerarSenhaComHash = async function (senha){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(req.body.senha, salt);
}

