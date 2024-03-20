import { DOMInjector } from "../decorator/DOMInjector.js";

export class TiposFichasView {
    @DOMInjector('app-principal')
    private elemento: HTMLElement;
    constructor(){
        this.update();
    }

    template(): string {
        return `
            <h1>Tipos de Fichas</h1>
            <p>Lista de tipos de fichas</p>
            <ul>Ficha Jogadores</ul>
            <ul>Ficha personagens</ul>
            <ul>Ficha Ameaças</ul>
        `
    }

    update(): void {
        if(this.elemento){
            this.elemento.innerHTML = this.template();
        }
    }       
}