import app from "./app.js"

//Escolhendo a Porta que será usada no Projeto 
const PORT = 3000

    //Escutar a porta 3000
    app.listen(PORT, () => {
      console.log(`Servidor usando porta: ${PORT}`)
    })

