import FuncionariosRepository from "../repositories/FuncionariosRepository.js"

class FuncionariosController{
    async store (req,res){
        const funcionarios = req.body
        const row = await FuncionariosRepository.create(funcionarios)
        res.json(row)
    }
    async index (req,res){
        const funcionarios = req.body
        const row = await FuncionariosRepository.findAll()
        res.json(row)
    }
    async show(req,res){
        const id = req.params.id
        const row = await FuncionariosRepository.findById(id)
        res.json(row)  
    }
    async update (req,res){
        const id = req.params.id
        const funcionarios = req.body
        const row = await FuncionariosRepository.update(funcionarios,id)
        res.json(row)  
    }
    async delete (req,res){
        const id = req.params.id
        const row = await FuncionariosRepository.delete(id)
        res.json(row)  
    }
}

export default new FuncionariosController()