var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var pontuacao = req.body.pontuacao;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("A pontuação está undefined!");
    } else {
        quizModel.cadastrar(idUsuario, pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da pontuação do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}
