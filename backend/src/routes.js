const express = require('express')

const ongsControler = require('./controllers/OngController')
const incidentsControler = require('./controllers/IncidentsController')
const profileControler = require('./controllers/ProfileController')
const sessionControler = require('./controllers/SectionController')


const routes = express.Router()

routes.post('/sessions', sessionControler.create)

routes.get('/profile', profileControler.index)

routes.get('/ongs', ongsControler.list)
routes.post('/ongs', ongsControler.create)

routes.get('/incidents', incidentsControler.list)
routes.post('/incidents', incidentsControler.create)
routes.delete('/incidents/:id', incidentsControler.delete)
module.exports = routes