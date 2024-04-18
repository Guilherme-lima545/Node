import  { consulta } from "../database/conexao.js"


class SelecaoRepository {
    // CRUD
    create(selecao) { 
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql, selecao, "não foi possivel cadrastrar!")
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, "não foi possivel localizar!")
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql, id, "não foi possivel localizar!")
    }

    update(selecao, id) { 
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], "não foi possivel editar!")
}

    delete(id) {
        const sql = "DELETE  FROM selecoes WHERE id=?;"
        return consulta(sql,  id, "não foi possivel apagar!")
    }
}

export default new SelecaoRepository()