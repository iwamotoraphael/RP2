const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Banco de dados conectado.")
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8800, () => {
    console.log("Servidor backend está rodando!")
})