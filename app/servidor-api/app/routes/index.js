/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
        
    app.route('/dados')
        .get(api.dados); 
    app.route('/jogadores')
        .get(api.jogadores);  
    app.route('/jogadores/:id')
        .get(api.jogador);   
    app.route('/jogadores')
        .post(api.setJogador);
        
};