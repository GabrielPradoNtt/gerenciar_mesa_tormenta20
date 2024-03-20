import { FichasController } from "./controllers/fichas-controller.js";
import { NavBarController } from "./controllers/nav-bar-controller.js";
import { NegociacaoController } from './controllers/negociacao-controller.js';
import { PesquisaController } from "./controllers/pesquisa-controller.js";

new NavBarController();

const url = window.location.href;

if (url.includes("/search")) {
    new PesquisaController();
}
if(url.includes("/post")){

}
if(url.includes("/player")){
    new FichasController();
}