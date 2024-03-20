import { PesquisaView } from "../views/pesquisa-view.js";

export class PesquisaController {
    private _view = new PesquisaView();
    constructor() {
        this._view.update();
    }
}