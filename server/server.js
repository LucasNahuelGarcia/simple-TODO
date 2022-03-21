if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/.env' })
}

//dependencias
const path = require("path");
const uri = process.env.MONGODB_URI;
const PORT_APP = process.env.PORT || 5000;

const morgan = require("morgan");
const express = require("express");
const product = require('./api/product')

var app = express();
app.use(morgan('tiny'));

app.use("/api/product", product)

app.listen(PORT_APP, () => {
  console.log("Servidor iniciado en " + PORT_APP);
});

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '../client', 'build')));
app.get('/*', (req, res) => {
  const defaultPageRoute = path.join(__dirname, '../client', 'build', 'index.html');
  res.send(defaultPageRoute);
})
// }