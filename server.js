// serve para chamar o express para dentro desta variável
//1
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

//! confg do nunjucks
server.set('view engine', 'njk')

//Para o form - funcionamento do req.body
server.use(express.urlencoded({
    extended: true
}))
//Middleware .use
server.use(express.static('public')) // CSS
server.use(methodOverride('_method')) // no arquivo Edit.njk = linha: action="/instructor?_method=PUT"
server.use(routes)


nunjucks.configure('views', {
    express : server,
    autoescape: false,
    noCache : true
})

//4
//! req: requisição
//res: resposta
// Servidor, pegue a "/" e execute a função
//se o usuário enviar alguma coisa: req
//e o res é a resposta para o usuário

//3 - 
// o server está "escutando" na porta 5000
server.listen(5000, function(){
    console.log('server is running')
});