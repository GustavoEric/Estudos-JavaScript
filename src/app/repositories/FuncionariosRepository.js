import {consulta} from "../database/conexao.js"

class FuncionariosRepository{
    create(funcionarios){
        const sql = "INSERT INTO tb_funcionarios SET ?"
        return consulta(sql,funcionarios,'Não foi possivel Cadastrar!')
    }
    findAll(){
        const sql = "SELECT * FROM tb_funcionarios"
        return consulta(sql,'Não foi possivel Localizar!')
    }
    findById(id){
        const sql = "SELECT * FROM tb_funcionarios WHERE id = ?"
        return consulta(sql,id,'Não foi possivel Localizar!')
    }
    update(funcionarios,id){
        const sql = "UPDATE tb_funcionarios SET ? WHERE id = ? "
        return consulta(sql,[funcionarios,id],'Não foi possivel Localizar!')
    }
    delete(id){
        const sql = "DELETE FROM tb_funcionarios WHERE id = ?"
        return consulta(sql,id,'Não foi possivel Localizar!')
    }
}
export default new FuncionariosRepository()


