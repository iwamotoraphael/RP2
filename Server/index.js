const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const usuarioRoute = require('./routes/usuarios');
const authRoute = require('./routes/auth');
const mensagemRoute = require('./routes/mensagens');
const conversaRoute = require('./routes/conversas');
const redeSocialRoute = require('./routes/redesocial');
const postsRoute = require('./routes/posts');
const comentarioRoute = require('./routes/comentarios')
const cors = require('cors')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Banco de dados conectado.")
});

app.use(cors())

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/usuarios", usuarioRoute);
app.use("/api/conversas", conversaRoute);
app.use("/api/mensagens", mensagemRoute);
app.use("/api/redesocial", redeSocialRoute);
app.use("/api/posts", postsRoute);
app.use("/api/comentarios", comentarioRoute);

app.listen(8800, () => {
    console.log("Servidor backend está rodando!")
})