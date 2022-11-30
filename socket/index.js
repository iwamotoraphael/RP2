const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let usuarios = [];

const adicionarUsuario = (idUsuario, idSocket) => {
    usuarios.push({idUsuario, idSocket});
}

const removerUsuario = (idSocket) => {
    usuarios = usuarios.filter(usuario => usuario.idSocket !== idSocket)
}

const getUsuario = (idUsuario) => {
    return usuarios.find(usuario => usuario.idUsuario === idUsuario);
}

io.on("connection", (socket) => {
    console.log("um usuário conectou."); 
    socket.on("adicionarUsuario", (idUsuario) => {
        adicionarUsuario(idUsuario, socket.id);
        io.emit("getUsuarios", usuarios);
    });

    socket.on("enviarMensagem", ({idEmissor, idReceptor, textoMensagem}) => {
        const usuario = getUsuario(idReceptor);
        io.to(usuario.idSocket).emit("getMensagem", {
            idEmissor,
            textoMensagem
        });
    })

    socket.on("disconnect", () => {
        console.log("um usuário desconectou.")
        removerUsuario(socket.id)
        io.emit("getUsuarios", usuarios);
    })
})