import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '39x59gs+',
    database: 'db_funcionarios'
})

conexao.connect()
/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada 
 * @param {string=id  [funcionarios,id]} valores a serem passados para o sql 
 * @param {string} messageReject mensagem a ser exibida 
 */
export const consulta = (sql,valores='',messageReject)=>{
    return new Promise((resolve,reject)=>{
        conexao.query(sql,valores,(error,result)=>{
            if(error) return reject(messageReject)
            //Fazer Parse dos Resultados
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao