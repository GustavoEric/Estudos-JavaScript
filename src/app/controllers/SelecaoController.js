import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController{

    //Metodo async pois tem que esperar resultado da função findAll()
    async index(req,res){
       const row = await SelecaoRepository.findAll()
       res.json(row)
    }

    async show(req,res){
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }

    async store (req,res){
        const grupos = req.body
        const row = await SelecaoRepository.create(grupos)
        res.json(row)
    }

    async update(req,res){
        const id = req.params.id
        const grupos = req.body
        const row = await SelecaoRepository.update(grupos,id)
        res.json(row)  
    }
    async delete(req,res){
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }

}
//padrão Singleton
export default new SelecaoController()