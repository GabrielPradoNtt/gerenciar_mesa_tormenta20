import { TiposFichasView } from "../views/tipos-fichas-view.js";

export class FichasController {
    private _view = new TiposFichasView('#tiposFichasView');
    constructor() {
        this._view.update();
    }
}