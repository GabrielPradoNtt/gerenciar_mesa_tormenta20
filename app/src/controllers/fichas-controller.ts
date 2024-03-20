import { TiposFichasView } from "../views/tipos-fichas-view.js";

export class FichasController {
    private _view = new TiposFichasView();
    constructor() {
        this._view.update();
    }
}