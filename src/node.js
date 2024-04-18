import express from "express"
import selecaocontroller from "./app/controllers/selecaocontroller.js"
const app = express()


// indicar para o express ler body com Json
app.use(express.json())



app.get("/selecoes", selecaocontroller.index)

app.get("/selecoes/:id", selecaocontroller.show)

app.post("/selecoes",selecaocontroller.store)

app.put("/selecoes/:id", selecaocontroller.update)

app.delete("/selecoes/:id", selecaocontroller.delete)

export default app
