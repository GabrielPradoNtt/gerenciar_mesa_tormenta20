import { NavBarView } from "../views/nav-bar-view.js";

export class NavBarController {
    private _view = new NavBarView();
    constructor() {
        this._view.update();
    }
}