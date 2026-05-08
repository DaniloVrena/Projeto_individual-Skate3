var database = require("../database/config");

function cadastrar(idUsuario, pontuacao) {
    var instrucaoSql = `
        INSERT INTO quiz (fk_usuario, pontuacao) VALUES (${idUsuario}, ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};
