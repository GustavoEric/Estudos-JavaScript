import {consulta} from "../database/conexao.js"
class SelecaoRepository {
    //CRUD
    create(grupos){
        const sql = "INSERT INTO tb_grupos SET ?"
        return consulta(sql,grupos,'Não foi possivel Cadastrar!')
    }

    findAll(){
        const sql = "SELECT * FROM tb_grupos"
        return consulta(sql,'Não foi possivel Localizar!')
    }

    findById(id){
        const sql = "SELECT * FROM tb_grupos WHERE id = ?"
        return consulta(sql,id,'Não foi possivel Localizar!')
    }

    update(grupos,id){
        const sql = "UPDATE tb_grupos SET ? WHERE id =?"
        return consulta(sql,[grupos,id],'Não foi possivel Atualizar!')
    }

    delete(id){
        const sql = "DELETE FROM tb_grupos WHERE id = ?"
        return consulta(sql,id,'Não foi possivel Apagar!')
    }

}
export default new SelecaoRepository()