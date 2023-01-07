//Importando Express
import express from 'express'

import SelecaoController from './app/controllers/SelecaoController.js'
//Instancia do Express
const app = express()

//Indicar par o Expres ler body com JSON
app.use(express.json())

//ROTAS
//Consulta Grupos
app.get('/grupos',SelecaoController.index)

//Consulta Grupos Por ID
app.get('/grupos/:id',SelecaoController.show)

//Cadastrar Grupos
app.post('/grupos',SelecaoController.store)

//Atualizar Grupos
app.put('/grupos/:id',SelecaoController.update)

//Apagar Grupos
app.delete('/grupos/:id',SelecaoController.delete)

export default app