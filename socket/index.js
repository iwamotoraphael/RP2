const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let usuarios = new Set();

const adicionarUsuario = (idUsuario, idSocket) => {
    usuarios.push({idUsuario, idSocket});
}

const removerUsuario = (idSocket) => {
    usuarios = usuarios.filter(usuario => usuario.socketId !== idSocket)
}

const getUsuario = (idUsuario) => {
    return usuarios.find(usuario => usuario.id === idUsuario);
}

io.on("connection", (socket) => {
    console.log("um usuário conectou.");
    socket.on("adicionarUsuario", (idUsuario) => {
        adicionarUsuario(idUsuario, socket.id);
        io.emit("getUsuarios", usuarios);
    });

    socket.on("enviarMensagem", ({idEmissor, idRecceptor, textoMensagem}) => {
        const usuario = getUsuario(idEmissor);
        io.to(usuario.idSocket).emit("enviarMensagem", {
            idEmissor,
            textoMensagem
        });
    })

    socket.on("desconectar", () => {
        console.log("um usuário desconectou.")
        removerUsuario(socket.id)
        io.emit("getUsuarios", usuarios);
    })
})