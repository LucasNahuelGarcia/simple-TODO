//dependencias
const uri = process.env.MONGODB_URI;
const PORT_APP = process.env.SERVER_PORT || 5000;

const morgan = require("morgan");
const express = require("express");
const product = require('./api/product')

var app = express();
app.use(morgan('tiny'));

app.use("/api/product", product)

app.listen(PORT_APP, () => {
    console.log("Servidor iniciado en " + PORT_APP);
});

