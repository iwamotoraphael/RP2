const UsuarioGeral = require("../models/UsuarioGeral");
const UsuarioNgo = require("../models/UsuarioNgo");

exports.findUser = async function (id){
    var usuarioBuscado = await UsuarioGeral.findById(id);

    if(!usuarioBuscado)
        usuarioBuscado = await UsuarioNgo.findById(id);

    return usuarioBuscado;
}

