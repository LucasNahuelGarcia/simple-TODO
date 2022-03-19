//dependencias
const morgan = require("morgan");
const express = require("express");
const path = require("path");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

const uri= process.env.MONGODB_URI;

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

var app = express();

//Config
const PORT_APP = process.env.port || 5000;
app.use(morgan("dev"));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public/view')));
// app.use(session({
//     store: MongoStore.create({
//         mongoUrl: uri 
//     }), //una nueva conexión a mongodb, asignada a la conexión db
//     resave: false,
//     saveUninitialized: false,
//     secret: uuid.v4(),
// }));

// Rutas -----------------------------------------------------------------------
// Rutas API
// app.use('/API/', require("./routes/api/index"));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});
app.get('/login', (req, res) => {
    res.sendFile('public/view/login/', {
        root: __dirname
    });
});

app.listen(PORT_APP, () => {
    console.log("Servidor iniciado en " + PORT_APP);
});

