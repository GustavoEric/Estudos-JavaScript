import express, { response } from "express"
import cors from "cors"
import FuncionariosController from "./app/controllers/FuncionariosController.js"

const app = express()


app.use(express.json())
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

//Create 
app.post('/funcionarios',FuncionariosController.store)

//Read
app.get('/funcionarios',FuncionariosController.index)

app.get('/funcionarios/:id',FuncionariosController.show)

//Update
app.put('/funcionarios/:id',FuncionariosController.update)

//Delete
app.delete('/funcionarios/:id',FuncionariosController.delete)


export default app