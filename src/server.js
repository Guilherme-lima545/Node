import app from "./node.js"

const PORT = 3000

//fazer a conexao 
app.listen(PORT, () => {
    console.log(`servidor roddando no endereço http://localhost:${PORT}`)
})