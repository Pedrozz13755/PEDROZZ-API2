console.log('Iniciando....')
var express = require('express')
var morgan = require('morgan');
var secure = require('ssl-express-www')

const PORT = process.env.PORT || 8080

var mainrouter = require('./apis')

var app = express()
app.enable('trust proxy');
app.use(morgan('dev'));
app.set("json spaces",2)
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter)

app.listen(PORT, () => {
    console.log('Conectando...')
    console.log("Servidor rodando em http://localhost:" + PORT)
})

module.exports = app
