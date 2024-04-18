import selecaorepository from "../repositorys/selecaorepository.js"


class selecaocontroller {


    async index(req, res) {
      const linha = await selecaorepository.findAll()
      res.json(linha)
    }



    async show(req, res)  {
    const id = req.params.id
    const linha = await selecaorepository.findById(id)
    res.json(linha)
}

     async store (req, res) {
        const selecao = req.body
        const linha = await selecaorepository.create(selecao)
        res.json(linha)
    }


    
    async update(req,res)  {
        const id = req.params.id
        const selecao = req.body
        const linha = await selecaorepository.update(selecao, id)
        res.json(linha)
       
    }

    
    async delete(req,res) {
        const id = req.params.id
        const linha = await selecaorepository.delete(id)
        res.json(linha)
    }
}


// padrão Singleton
export default new selecaocontroller()