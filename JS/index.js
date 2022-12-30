let tbGrupos = document.querySelector('.tabelaGrupos')
let select1 = document.querySelector('.select1')
console.log(tbGrupos)
fetch('grupos.json')
.then(response => response.json())
.then(data => data.forEach(grupo => {

    //Select de Grupos 
    let option = document.createElement('option')
    option.value=grupo.grupo
    select1.appendChild(option)
    option.innerHTML=grupo.grupo

    let linha = document.createElement('tr')
    tbGrupos.appendChild(linha)
    linha.innerHTML =`
        <td>${grupo.grupo}</td>
        <td>${grupo.selecao1}</td>
        <td>${grupo.selecao2}</td>
        <td>${grupo.selecao3}</td>
        <td>${grupo.selecao4}</td>`
    
})
)
function selecionaGrupos(){
    let tbGrupos = document.querySelector('.tabelaGrupos')
    var grupoEscolhido = select1.value
    tbGrupos.innerHTML=""
    tbGrupos.innerHTML='<tr><th>Grupo</th><th>Seleção 1 </th><th>Seleção 2 </th><th>Seleção 3 </th><th>Seleção 4 </th></tr>'
    fetch('grupos.json')
    .then(response => response.json())
    .then(data => data.forEach(grupo => {
        if (grupoEscolhido=="grupos"){
            let linha = document.createElement('tr')
            tbGrupos.appendChild(linha)
            linha.innerHTML =`
                <td>${grupo.grupo}</td>
                <td>${grupo.selecao1}</td>
                <td>${grupo.selecao2}</td>
                <td>${grupo.selecao3}</td>
                <td>${grupo.selecao4}</td>`
                console.log(grupo.grupo)
        }
        else if (grupo.grupo===grupoEscolhido){
            let linha = document.createElement('tr')
            tbGrupos.appendChild(linha)
            linha.innerHTML =`
                <td>${grupo.grupo}</td>
                <td>${grupo.selecao1}</td>
                <td>${grupo.selecao2}</td>
                <td>${grupo.selecao3}</td>
                <td>${grupo.selecao4}</td>`
        }
        
    })
)
}