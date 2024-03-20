const fs = require('fs');
const util = require('util');

/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { montante: 200.5, vezes: 2 },
        { montante: 100.2, vezes: 5 },
        { montante: 50.5, vezes: 1 },
        { montante: 70.5, vezes: 2 }
    ]);
    
};

jogadores = null;

const readFile = util.promisify(fs.readFile);
async function leituraJogadoresStatico(callback)  {
    try {
        await readFile('app/statics-files/jogadores.json', 'utf8', function (err, data) {
                if (err) {
                    console.error(err);
                    callback({
                        status: 500,
                        error: 'Failed to read file'
                    });
                }
        
                try {
                    const jsonData = JSON.parse(data);
                    jogadores = jsonData;
                    callback({
                        status: 200,
                        data: jsonData
                    });
                } catch (error) {
                    console.error(error);
                    callback({
                        status: 500,
                        error: 'Failed to parse JSON'
                    });
                }
            });;
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
        callback({
            status: 500,
            error: error.message
        });
    }
}

async function escreveJogadoresStatiscos(callback, valor) {
    try {
        console.log(valor)
        const fileContent = await readFile('app/statics-files/jogadores.json', 'utf8');
        const jsonData = JSON.parse(fileContent);
        jsonData.push(valor);
        const updatedData = JSON.stringify(jsonData);
        fs.writeFile('app/statics-files/jogadores.json', updatedData, 'utf8', function (err) {
            if (err) {
                console.error(err);
                callback({
                    status: 500,
                    error: 'Failed to write file'
                });
            } else {
                jogadores = jsonData;
                callback({
                    status: 200,
                    data: jsonData
                });
            }
        });
    } catch (error) {
        console.error(`Got an error trying to write the file: ${error.message}`);
        callback({
            status: 500,
            error: error.message
        });
    }
}
api.jogadores = function(req, res) {
    const tratamento = function (valor) {
        if(valor && valor.status){
            res.status(valor.status).json(
                valor.error ? { error: valor.error } : valor.data || {}
            );
        }
    }
    leituraJogadoresStatico(tratamento);
}

api.jogador = function(req, res) { 
    const id = req.params.id;
    if (!id) {
        res.status(400).json({ error: 'Player ID is required' });
        return;
    }

    if (!jogadores) {
        const procuraJogadores = function (valor) {
            if(valor && valor.status){
                if(valor.error){
                    res.status(valor.status).json({ error: valor.error });
                }else{
                    const jogador = valor.data.find(j => j.idJogador == parseInt(id));
                    if (!jogador) {
                        res.status(404).json({ error: 'Player not found' });
                    }else{
                        res.json(jogador);
                    }
                }
            }
        }

        leituraJogadoresStatico(procuraJogadores);
        return;
    }

    const jogador = jogadores.find(j => j.id === id);
    if (!jogador) {
        res.status(404).json({ error: 'Player not found' });
        return;
    }

    res.json(jogador);
}

api.setJogador = function(req, res) {
    const novoJogador = req.body;
    if (!novoJogador || Object.keys(novoJogador).length === 0) {
        res.status(400).json({ error: 'Player data is required' });
        return;
    }
    const tratamento = function(resultado) {
        if (resultado && resultado.status) {
            if (resultado.error) {
                res.status(resultado.status).json({ error: resultado.error });
            } else {
                res.json(resultado.data);
            }
        }
    }

    escreveJogadoresStatiscos(tratamento, novoJogador);
    return;
}

module.exports = api;
