const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)


// ROTAS / RECURSO

/*
    METODOS HTTP

    GET / ACESSO
    POST / CRIA
    PUT / MODIFICA
    DELETE / APAGA
*/
/*
    TIPOS DE PARAMETROS

    QUERY: DEPOIS DA INTERROGAÇÃO
    ROUTE PARTAMS: INDETIFICAR RECURSOS
    REQUEST BODY: PEGA O CONTEÚDO DO CORPO
*/
