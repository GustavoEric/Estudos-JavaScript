const lista_funcionarios = document.getElementById('funcionarios')
const botaoNovoFucionario = document.getElementById('btnNovoFuncionario')
const botaoCloseCad = document.getElementById('btnCloseCad')
const botaoCloseEdit = document.getElementById('btnCloseEdit')
const modalCad = document.getElementById('modal-cadastro')
const modalEdit = document.getElementById('modal-editar')
const formCad = document.getElementById('form-cad')
const formEdit = document.getElementById('form-edit')

formCad.addEventListener('submit',event=>{
    event.preventDefault()

    const formData = new FormData(formCad)
    const data = Object.fromEntries(formData)

    console.log(data)
    fetch('http://localhost:3000/funcionarios',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=> res.json()).then(data=>console.log)
    location.reload()
    modalCad.close()
})
botaoNovoFucionario.onclick = function(){
    modalCad.showModal()
}
botaoCloseCad.onclick = function(){
    modalCad.close()
}

console.log(modalCad)
function ConsultaLista(){
lista_funcionarios.innerHTML=""
fetch('http://localhost:3000/funcionarios')
.then (response=>response.json())
.then(data => data.forEach(funcionario=>{
    console.log(funcionario)
    lista_funcionarios.innerHTML += `
                     <div class="col">
                     <div class="card shadow-sm">
                       <img src="img/user.png" width="25%">
                       <div class="card-body">
                         <p class="card-text">Nome: ${funcionario.nome}</p>
                         <p class="card-text">Cargo: ${funcionario.cargo}</p>
                         <p class="card-text">Telefone: ${funcionario.numero}</p>
                         <div class="d-flex justify-content-between align-items-center">
                           <div class="btn-group">
                             <button type="submit" onClick=EditaFuncionario(this.value) class="btn btn-sm btn-outline-secondary" value=${funcionario.id}>Editar</button>
                     <button type="submit" onClick=DeletaFuncionario(this.value) class="btn btn-sm btn-outline-danger" value=${funcionario.id}>Excluir</button>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>`
})
)
}
function DeletaFuncionario(id){
    fetch('http://localhost:3000/funcionarios/'+id,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res=> res.json()).then(location.reload())
}
function EditaFuncionario(id){
    modalEdit.showModal()
    fetch("http://localhost:3000/funcionarios/"+id)
    .then (response=>response.json())
    .then(data => data.forEach(funcionario=>{
        console.log(funcionario)
        let linha = document.createElement('tr')
        lista_funcionarios.appendChild(linha)
        formEdit.innerHTML = `
        <label>Editar Funcionário</label>
        <input type="text" name="nome" value=${funcionario.nome} placeholder="Nome">
        <input type="text" name="numero" value="${funcionario.numero}"  placeholder="Número">
        <input type="text" name="cargo" value=${funcionario.cargo} placeholder="Cargo">
        <button type="submit" name="id" id="btEdita" value=${funcionario.id}>Editar</button>`
    })
    )
}
    botaoCloseEdit.onclick = function(){
        modalEdit.close()
    }

    formEdit.addEventListener('submit',event=>{
        event.preventDefault()
        
        const id = document.getElementById('btEdita').value
        const formData = new FormData(formEdit)
        const data = Object.fromEntries(formData)
        
        console.log("dados")
        console.log(data)
        fetch('http://localhost:3000/funcionarios/'+id,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=> res.json()).then(data=>console.log)
        modalEdit.close()
        location.reload()
    })
ConsultaLista()
